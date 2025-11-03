export type SolutionCategory = 'residential' | 'ci' | 'utility';

interface ApiSolutionRow {
  id: string;
  slug: string;
  category: SolutionCategory;
  overview_title: string;
  overview_description: string;
  schema_title: string;
}

interface ApiFeatureRow {
  id: string;
  solution_id: string;
  title: string;
  detail1: string;
  detail2: string;
  position: number;
}

type MediaKind = 'cover' | 'schema_gif' | 'feature1' | 'feature2' | 'feature3';
interface ApiMediaRow {
  id: string;
  solution_id: string;
  kind: MediaKind;
  storage_path?: string | null;
  public_url?: string | null;
}

export interface UiSolutionFeature {
  title: string;
  detail1: string;
  detail2: string;
  image: string;
}

export interface UiSolutionDTO {
  id: number | string;
  slug: string;
  category: SolutionCategory;
  overview: { title: string; description: string; image: string };
  schema: { title: string; gifImage: string };
  feature1: UiSolutionFeature;
  feature2: UiSolutionFeature;
  feature3: UiSolutionFeature;
}

// Internal types for API layer
export type { ApiSolutionRow, ApiFeatureRow, ApiMediaRow, MediaKind };


