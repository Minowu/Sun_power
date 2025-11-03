import type { ApiProduct, UiProduct, UiProductDetail } from '../types/product';

export function mapApiToUiProduct(p: ApiProduct): UiProduct {
  if (!p.description) throw new Error('Product.description is required');
  if (!p.image) throw new Error('Product.image is required');
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    image: p.image,
    category: p.category,
    subCategory: p.subCategory,
    slug: p.slug,
    features: p.features,
    datasheet: p.datasheet,
  };
}

export function mapApiToUiProductDetail(p: ApiProduct): UiProductDetail {
  if (!p.slug) throw new Error('Product.slug is required');
  if (!p.name) throw new Error('Product.name is required');
  if (!p.description) throw new Error('Product.description is required');
  if (!p.detail_images || p.detail_images.length === 0) throw new Error('Product.detail_images is required');
  if (!p.detail_key_features || p.detail_key_features.length === 0) throw new Error('Product.detail_key_features is required');
  const images = p.detail_images;
  const keyFeatures = p.detail_key_features;
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    images,
    overview: {
      summary: p.description,
      keyFeatures,
      datasheetLink: p.datasheet ?? '',
    },
    features: p.features,
    datasheet: p.datasheet,
  };
}


