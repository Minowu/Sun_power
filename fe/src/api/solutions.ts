import type { SolutionCategory, UiSolutionDTO, ApiSolutionRow, ApiFeatureRow, ApiMediaRow, MediaKind } from '../types/solution';

const SB_URL = import.meta.env.VITE_SUPABASE_URL;
const SB_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SB_HEADERS: HeadersInit = {
  apikey: SB_ANON_KEY,
  Authorization: `Bearer ${SB_ANON_KEY}`,
};

function pickMediaUrl(media: ApiMediaRow[] | undefined, kind: MediaKind): string {
  if (!media) throw new Error('Solution media is required');
  const m = media.find(x => x.kind === kind);
  if (!m || !m.public_url) throw new Error(`Solution media missing for kind=${kind}`);
  return m.public_url;
}

function composeSolutionDTO(row: ApiSolutionRow, features: ApiFeatureRow[], media: ApiMediaRow[]): UiSolutionDTO {
  const byPos = (pos: number) => {
    const f = features.find(ff => ff.position === pos);
    if (!f) throw new Error(`Solution feature position=${pos} is required`);
    if (!f.title || !f.detail1 || !f.detail2) throw new Error(`Solution feature fields missing at position=${pos}`);
    return f;
  };
  const f1 = byPos(1);
  const f2 = byPos(2);
  const f3 = byPos(3);
  if (!row.slug) throw new Error('Solution.slug is required');
  if (!row.overview_title || !row.overview_description) throw new Error('Solution overview fields are required');
  if (!row.schema_title) throw new Error('Solution.schema_title is required');
  return {
    id: row.id,
    slug: row.slug,
    category: row.category,
    overview: {
      title: row.overview_title,
      description: row.overview_description,
      image: pickMediaUrl(media, 'cover'),
    },
    schema: {
      title: row.schema_title,
      gifImage: pickMediaUrl(media, 'schema_gif'),
    },
    feature1: {
      title: f1.title,
      detail1: f1.detail1,
      detail2: f1.detail2,
      image: pickMediaUrl(media, 'feature1'),
    },
    feature2: {
      title: f2.title,
      detail1: f2.detail1,
      detail2: f2.detail2,
      image: pickMediaUrl(media, 'feature2'),
    },
    feature3: {
      title: f3.title,
      detail1: f3.detail1,
      detail2: f3.detail2,
      image: pickMediaUrl(media, 'feature3'),
    },
  };
}

export async function fetchSolutions(category?: SolutionCategory): Promise<UiSolutionDTO[]> {
  const params = new URLSearchParams();
  params.set('select', 'id,slug,category,overview_title,overview_description,schema_title,solution_features(*),solution_media(*)');
  if (category) params.set('category', `eq.${category}`);
  const url = `${SB_URL}/rest/v1/solutions?${params.toString()}`;
  const res = await fetch(url, { headers: SB_HEADERS });
  if (!res.ok) throw new Error('Failed to fetch solutions');
  const rows = await res.json() as any[];
  return rows.map(r => composeSolutionDTO(
    r as ApiSolutionRow,
    (r.solution_features || []) as ApiFeatureRow[],
    (r.solution_media || []) as ApiMediaRow[],
  ));
}

export async function fetchSolutionBySlug(slug: string): Promise<UiSolutionDTO> {
  const params = new URLSearchParams();
  params.set('select', 'id,slug,category,overview_title,overview_description,schema_title,solution_features(*),solution_media(*)');
  params.set('slug', `eq.${slug}`);
  params.set('limit', '1');
  const url = `${SB_URL}/rest/v1/solutions?${params.toString()}`;
  const res = await fetch(url, { headers: SB_HEADERS });
  if (!res.ok) throw new Error('Failed to fetch solution');
  const arr = await res.json() as any[];
  if (!arr || arr.length === 0) throw new Error('NOT_FOUND');
  const r = arr[0];
  return composeSolutionDTO(
    r as ApiSolutionRow,
    (r.solution_features || []) as ApiFeatureRow[],
    (r.solution_media || []) as ApiMediaRow[],
  );
}


