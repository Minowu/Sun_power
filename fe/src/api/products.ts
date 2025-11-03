import type { ApiProduct } from '../types/product';

const SB_URL = import.meta.env.VITE_SUPABASE_URL;
const SB_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SB_HEADERS: HeadersInit = {
  apikey: SB_ANON_KEY,
  Authorization: `Bearer ${SB_ANON_KEY}`,
};

// Helpers to normalize API shape (snake_case -> camelCase)
function normalizeApiProduct(p: any): ApiProduct {
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    image: p.image,
    category: p.category,
    subCategory: p.subCategory ?? p.sub_category,
    slug: p.slug ?? p.id,
    features: p.features,
    datasheet: p.datasheet,
    detail_key_features: p.detail_key_features,
    detail_images: p.detail_images,
  };
}

export async function fetchProducts(): Promise<ApiProduct[]> {
  const res = await fetch(`${SB_URL}/rest/v1/products?select=*`, { headers: SB_HEADERS });
  if (!res.ok) throw new Error('Failed to fetch products');
  const raw = await res.json();
  return (raw as any[]).map(normalizeApiProduct);
}

export async function fetchProductById(idOrSlug: string): Promise<ApiProduct> {
  const url = `${SB_URL}/rest/v1/products?select=*&or=(id.eq.${idOrSlug},slug.eq.${idOrSlug})&limit=1`;
  const res = await fetch(url, { headers: SB_HEADERS });
  if (!res.ok) throw new Error('Failed to fetch product');
  const arr = (await res.json()) as any[];
  if (!arr || arr.length === 0) throw new Error('NOT_FOUND');
  return normalizeApiProduct(arr[0]);
}


