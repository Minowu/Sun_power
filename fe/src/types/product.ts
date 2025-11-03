export interface ApiProductFeature {
  title: string;
  subFeatures: string[];
}

export interface ApiProduct {
  id: string;
  name: string;
  description?: string;
  image?: string;
  category: string;
  subCategory: string;
  slug?: string;
  features?: ApiProductFeature[];
  datasheet?: string;
  detail_key_features?: string[];
  detail_images?: string[];
}

export interface UiProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subCategory: string;
  slug?: string;
  features?: ApiProductFeature[];
  datasheet?: string;
}

export interface UiProductDetail {
  id: string;
  slug: string;
  name: string;
  images: string[];
  overview: {
    summary: string;
    keyFeatures: string[];
    datasheetLink: string;
  };
  features?: ApiProductFeature[];
  datasheet?: string;
}


