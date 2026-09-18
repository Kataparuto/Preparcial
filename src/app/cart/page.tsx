import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/api";
import { CartProvider, useCart } from "@/context/CartContext";


export default function CartDetail() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>Prueba</h1>
        <main className="mx-auto max-w-5xl px-6 py-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      </main>
    </div>
  );
}