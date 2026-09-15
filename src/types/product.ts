export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number; // unidades de producto hay en el carrito
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}