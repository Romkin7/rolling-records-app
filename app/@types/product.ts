import type { Category } from "./category";
import type { Genre } from "./genre";

export type Format =
  | "lp"
  | "7'"
  | "cd"
  | "12'"
  | "kasetti"
  | "lahjakortti"
  | "palvelu";

export interface Product {
  _id: string;
  title: string;
  name: string;
  edition?: string;
  fullname: string;
  description?: string;
  cover: string;
  unit_price: number;
  year?: number;
  label?: string;
  format: Format;
  category: Category;
  genre: Genre;
  tracklist?: string[];
}

export interface ProductResponse {
  products: Product[];
}
