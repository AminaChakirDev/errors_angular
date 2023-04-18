import { Category } from './category.interface';

export interface Article {
  id: number;
  title: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
  imageUrl: string;
}
