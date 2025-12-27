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
  discounted_price?: number;
  year?: number;
  label?: string;
  format: Format;
  slug: string;
  category: Category;
  genre: Genre;
  tracklist?: string[];
}

export interface ProductsResponse {
  products: Product[];
}

export interface ProductResponse {
  product: Product;
}
