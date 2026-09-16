import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

 
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
        <Link href="/" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
        ← Volver al catálogo
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
        <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg border border-gray-200 object-contain"
        />

        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-sm text-gray-500">{product.brand} · {product.category}</p>
            <p className="text-xl font-semibold text-green-700">${product.price}</p>
            <p className="text-sm text-gray-500">{product.stock} en stock</p>
            <p className="mt-2 text-gray-700">{product.description}</p>

            <div className="mt-4 max-w-xs">
            <AddToCartButton product={product} />
            </div>
        </div>
        </div>
    </div>
  );
}