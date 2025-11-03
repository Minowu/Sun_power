import { useState, useEffect } from 'react';
import { fetchSolutions } from '../api/solutions';
import type { UiSolutionDTO, SolutionCategory } from '../types/solution';

export function useSolutions(category?: SolutionCategory) {
  const [solutions, setSolutions] = useState<UiSolutionDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchSolutions(category);
        if (!mounted) return;
        setSolutions(data);
      } catch (e) {
        if (!mounted) return;
        setError('Không tải được danh sách giải pháp');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [category]);

  return { solutions, loading, error };
}


