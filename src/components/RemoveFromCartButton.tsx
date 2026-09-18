"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface RemoveFromCartButtonProps {
  product: Product;
}

export default function RemoveFromCartButton({ product }: RemoveFromCartButtonProps) {
  const { removeItem } = useCart();

  return (
    <button onClick={() => removeItem(product)}>
        Eliminar al carrito
    </button>
  );
}