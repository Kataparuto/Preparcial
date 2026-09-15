import { Product, ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products?limit=100`);

  if (!res.ok) {
    throw new Error(`No fue posible cargar el catálogo (status ${res.status})`);
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}


export async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (res.status === 404) {
    return null;
    }

  if (!res.ok) {
  throw new Error(`No fue posible cargar el producto ${id} (status ${res.status})`);
    }

  const product: Product = await res.json();
  return product;
}