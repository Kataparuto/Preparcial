"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button onClick={() => addItem(product)}>
        Añadir al carrito
    </button>
  );
}