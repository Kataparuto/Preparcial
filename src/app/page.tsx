import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function Home() {

  const products = await getProducts();


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-5xl px-6 py-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (<ProductCard key={product.id} product={product} />
          ))}
      </main>
    </div>
  );
}
