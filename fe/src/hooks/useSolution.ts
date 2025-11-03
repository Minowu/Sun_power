import { useState, useEffect } from 'react';
import { fetchSolutionBySlug } from '../api/solutions';
import type { UiSolutionDTO } from '../types/solution';

export function useSolution(slug: string | undefined) {
  const [solution, setSolution] = useState<UiSolutionDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    if (!slug) return;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchSolutionBySlug(slug);
        if (!mounted) return;
        setSolution(data);
      } catch (e: any) {
        if (!mounted) return;
        if (e?.message === 'NOT_FOUND') {
          setNotFound(true);
        } else {
          setError('Không tải được giải pháp');
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [slug]);

  return { solution, loading, error, notFound };
}


