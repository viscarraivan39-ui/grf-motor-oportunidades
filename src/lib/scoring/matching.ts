export interface MatchInput {
  activity: number;
  capability: number;
  experience: number;
  resources: number;
  geography: number;
  finance: number;
  documentation: number;
  requirements: number;
}

export function calculateMatchScore(input: MatchInput): number {
  const values = Object.values(input);
  if (!values.length) return 0;
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}
