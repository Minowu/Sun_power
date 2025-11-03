import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';
import { mapApiToUiProduct } from '../services/productMapper';
import type { UiProduct } from '../types/product';

export function useProducts() {
  const [data, setData] = useState<UiProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const apiProducts = await fetchProducts();
        if (!mounted) return;
        setData(apiProducts.map(mapApiToUiProduct));
      } catch (e) {
        if (!mounted) return;
        setError('Không tải được danh sách sản phẩm');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}


