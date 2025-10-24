import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import productHero from '../assets/product_hero.jpg';
import { products, categories } from '../data/products';

const Products = () => {
  const { t } = useTranslation('products');
  const [selectedCategory, setSelectedCategory] = useState<string>('inverter');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  // Helper function to get first subcategory
  const getFirstSubCategory = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.subCategories.find(sub => sub !== 'all') || '';
  };

  // Set default subcategory when component mounts
  useEffect(() => {
    const firstSubCategory = getFirstSubCategory(selectedCategory);
    setSelectedSubCategory(firstSubCategory);
  }, []);

  // Update subcategory when category changes
  useEffect(() => {
    const firstSubCategory = getFirstSubCategory(selectedCategory);
    setSelectedSubCategory(firstSubCategory);
  }, [selectedCategory]);

  // Filter products based on selected category and subcategory
  const filteredProducts = products.filter(product => {
    return product.category === selectedCategory && product.subCategory === selectedSubCategory;
  });

  // Get current category
  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage={productHero}
      />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">   
      <div className="px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-4 gap-2 mt-2" style={{gridTemplateRows: 'auto 1000px'}}>
        {/* Primary Filters - Top Row (Red) */}
        <div className="relative col-span-1 col-start-1 align-bottom">
          <h3 className="absolute bottom-0 left-5 text-black text-2xl font-semibold mb-4 ">{t(`categories.${currentCategory?.id}`)}</h3>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
        </div>
        <div className="mb-6 col-span-3 col-start-2">
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  // Set first subcategory as default
                  const firstSubCategory = categories.find(cat => cat.id === category.id)?.subCategories.find(sub => sub !== 'all');
                  if (firstSubCategory) {
                    setSelectedSubCategory(firstSubCategory);
                  }
                }}
                className={`btn-nav p-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'text-teal shadow-lg'
                    : 'text-black '
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  {t(`categories.${category.id}`)}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      
        <div className="row-start-2 grid ">
          {/* Secondary Filters - Left Column */}
            <div className="rounded-lg p-4">
              <div className="space-y-2">
                {currentCategory?.subCategories
                  .filter(sub => sub !== 'all')
                  .map((subCategory) => (
                    <button
                      key={subCategory}
                      onClick={() => setSelectedSubCategory(subCategory)}
                      className={`btn-nav w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        selectedSubCategory === subCategory
                          ? 'text-teal'
                          : 'text-black'
                      }`}
                    >
                      {t(`subcategories.${subCategory}`)}
                    </button>
                  ))}
              </div>
            </div>
          </div>
          {/* Product Grid - Main Area (Gray) */}
          <div className="col-span-3 row-start-2 grid grid-cols-3 gap-4">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {product.id ? (
                    <Link
                      to={`/products/${product.id}`}
                      className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-6 h-[400px]">
                        <div className="text-center">
                          <div className="h-48 flex items-center justify-center mb-4">
                            <img 
                              src={product.image} 
                              alt={t(`products.${product.id}.name`, product.name)} 
                              className="h-40 w-auto object-contain img-hover"
                            />
                          </div>
                          <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                            {t(`categories.${currentCategory?.id}`)}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{t(`products.${product.id}.name`, product.name)}</h3>
                          <p className="text-gray-600 text-sm">{t(`products.${product.id}.description`, product.description)}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="block bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="p-6">
                        <div className="text-center">
                          <div className="h-48 flex items-center justify-center mb-4">
                            <img 
                              src={product.image} 
                              alt={t(`products.${product.id}.name`, product.name)} 
                              className="h-40 w-auto object-contain img-hover"
                            />
                          </div>
                          <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                            {t(`categories.${currentCategory?.id}`)}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`products.${product.id}.name`, product.name)}</h3>
                          <p className="text-gray-600 text-sm">{t(`products.${product.id}.description`, product.description)}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">{t('messages.no_products')}</div>
                <p className="text-gray-400 mt-2">{t('messages.try_other_category')}</p>
              </div>
            )}
          </div>
        </div>
      </div>

  );
};

export default Products;