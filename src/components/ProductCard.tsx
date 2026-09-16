import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

    return (
        
        <div className="flex flex-col rounded-lg border border-gray-200 p-4 shadow-sm">
            <Link href={`/products/${product.id}`}>
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
                className="mx-auto rounded object-contain"
            />
            <p className="mt-2 font-semibold">{product.title}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="font-bold text-green-700">${product.price}</p>
            <p className="text-xs text-gray-400">{product.stock} en stock</p>
            </Link>
            <div className="mt-2">
            <AddToCartButton product={product} />
            </div>
        </div>
    );
}