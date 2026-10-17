export type ConditionGradeKey = 'likenew' | 'verygood' | 'good' | 'acceptable';

export interface AuditItem {
  text: string;
  score: string;
  detail?: string;
}

export interface GradeOption {
  key: ConditionGradeKey;
  name: string;
  badge: string;
  price: number;
  listPrice: number;
  savings: string;
  stock: number;
  co2Saved: string;
  waterSaved: string;
  cover: AuditItem;
  spine: AuditItem;
  pages: AuditItem;
  remainder: AuditItem;
  sanitation: AuditItem;
}

export interface InspectionPhoto {
  id: string;
  label: string;
  url: string;
  alt: string;
  description: string;
  inspectorNote: string;
  macroZoomUrl?: string;
  defectScore: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  rating: number;
  reviewsCount: number;
  binding: string;
  pages: number;
  isbn: string;
  category: string;
  subcategory: string;
  archivalBatch: string;
  coverImage: string;
  coverAlt: string;
  defaultGrade: ConditionGradeKey;
  grades: Record<ConditionGradeKey, GradeOption>;
  inspectionPhotos: InspectionPhoto[];
  tradeInValue: number;
  cashValue: number;
  summary: string;
}

export interface CartItem {
  book: Book;
  gradeKey: ConditionGradeKey;
  quantity: number;
}
