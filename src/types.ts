export interface DiseaseStats {
  name: string;
  cases: number;
  recovered: number;
  critical: number;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export interface Prediction {
  disease: string;
  probability: number;
  riskLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
}