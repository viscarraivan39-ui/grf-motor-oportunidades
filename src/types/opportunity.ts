export interface OpportunityProfile {
  id: string;
  title: string;
  buyer?: string;
  type?: string;
  status?: string;
  publicationDate?: string;
  closingDate?: string;
  budget?: number;
  region?: string;
  commune?: string;
  category?: string;
  description?: string;
  requirements?: string[];
  technicalRequirements?: string[];
  administrativeRequirements?: string[];
  sourceUrl?: string;
}
