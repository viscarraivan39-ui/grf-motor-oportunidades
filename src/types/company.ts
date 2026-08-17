export interface CompanyProfile {
  id: string;
  legalName: string;
  rut?: string;
  tradeName?: string;
  incorporationDate?: string;
  region?: string;
  commune?: string;
  website?: string;
  primaryActivities: string[];
  secondaryActivities: string[];
  capabilities: Capability[];
  preferences: Record<string, unknown>;
  restrictions: Record<string, unknown>;
}

export interface Capability {
  name: string;
  level?: number;
  verified?: boolean;
  evidence?: string[];
}
