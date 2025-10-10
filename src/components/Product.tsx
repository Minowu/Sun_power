import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'EcoFlow Pro 450W',
      image: 'https://images.pexels.com/photos/9875385/pexels-photo-9875385.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      power: '450W',
      efficiency: '22.1%',
      warranty: '25 Years',
      rating: 4.9,
      price: 'Contact for pricing'
    },
    {
      id: 2,
      name: 'EcoFlow Max 550W',
      image: 'https://images.pexels.com/photos/9875427/pexels-photo-9875427.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      power: '550W',
      efficiency: '22.8%',
      warranty: '25 Years',
      rating: 5.0,
      price: 'Contact for pricing'
    },
    {
      id: 3,
      name: 'EcoFlow Commercial 600W',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      power: '600W',
      efficiency: '23.2%',
      warranty: '25 Years',
      rating: 4.8,
      price: 'Contact for pricing'
    },
    {
      id: 4,
      name: 'EcoFlow Ultra 700W',
      image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      power: '700W',
      efficiency: '23.5%',
      warranty: '30 Years',
      rating: 5.0,
      price: 'Contact for pricing'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 2)) % Math.max(1, products.length - 2));
  };

  return (
    <section id="products" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-yellow font-semibold text-lg mb-2">Our Products</h3>
          <h2 className="text-4xl font-bold text-navy mb-6">
            Industry-Leading Solar Panels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of high-performance solar panels designed for 
            maximum efficiency and long-lasting reliability.
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="h-6 w-6 text-navy" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="h-6 w-6 text-navy" />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="w-1/2 md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-yellow text-navy px-3 py-1 rounded-full text-sm font-semibold">
                        {product.power}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy mb-3">
                        {product.name}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Efficiency:</span>
                          <span className="font-semibold text-success">{product.efficiency}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Warranty:</span>
                          <span className="font-semibold text-navy">{product.warranty}</span>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-bold text-navy">{product.price}</span>
                        </div>
                        <button className="w-full bg-teal hover:bg-teal/90 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;