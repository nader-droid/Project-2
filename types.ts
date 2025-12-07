export interface NavItem {
  label: string;
  id: string;
}

export interface RoiMetrics {
  avgCommission: number;
  monthlyLeads: number;
  currentConversionRate: number; // Percentage
  infraConversionRate: number; // Percentage
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
