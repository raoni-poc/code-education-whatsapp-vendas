export interface Category {
  id?: number;
  name: string;
  readonly slug?: string
  active: boolean;
  readonly created_at?: { date: string }
  readonly updated_at?: { date: string }
}

export interface ProductCategory {
  product: Product;
  categories: Category[];
}

export interface ProductPhoto {
  id?: number;
  photo_url: string;
  product?:Product;
  readonly created_at?: {data: string}
  readonly updated_at?: {data: string}
}

export interface ProductInput {
  id?: number;
  amount: number;
  readonly created_at ?: {date: string};
  readonly updated_at ?: {date: string};
  product: Product
}

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  readonly slug?: string;
  active: boolean;
  readonly created_at?:{date: string};
  readonly updated_at?:{date: string};
}

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  readonly created_at?: {date: string}
  readonly updated_at?: {date: string}
}


