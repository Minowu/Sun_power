import { useState, useEffect } from 'react';
import { fetchProductById } from '../api/products';
import { mapApiToUiProductDetail } from '../services/productMapper';
import type { UiProductDetail } from '../types/product';

export function useProduct(idOrSlug: string | undefined) {
  const [product, setProduct] = useState<UiProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    if (!idOrSlug) return;
    (async () => {
      try {
        setLoading(true);
        const apiProduct = await fetchProductById(idOrSlug);
        if (!mounted) return;
        setProduct(mapApiToUiProductDetail(apiProduct));
      } catch (e: any) {
        if (!mounted) return;
        if (e?.message === 'NOT_FOUND') {
          setNotFound(true);
        } else {
          setError('Không tải được sản phẩm');
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [idOrSlug]);

  return { product, loading, error, notFound };
}


