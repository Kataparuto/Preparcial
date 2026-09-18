"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
      <Link href="/form" className="rounded-full bg-gray-100 px-4 py-1 text-sm">
      Formulario
      </Link>
      <Link href="/" className="text-xl font-bold">ShopHub</Link>
      <Link href="/cart" className="rounded-full bg-gray-100 px-4 py-1 text-sm">
        Carrito: {totalItems}
      </Link>
    </header>
  );
}
