import Link from "next/link";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,  // Next.js cung cấp thông tin URL động
}: ProductDetailPageProps) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Product not found
          </h1>

          <Link
            href="/products"
            className="mt-4 inline-block text-sm font-medium text-gray-900 underline underline-offset-4"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/products"
          className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← Back to Products
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </span>

              <span className="text-sm text-gray-500">
                ★ {product.rating}
              </span>
            </div>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-600">
              Discover the details of this product and find out why it
              could be the perfect choice for your lifestyle.
            </p>

            <AddToCartButton
              product={product}
              className="mt-8 w-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-700 sm:w-fit"
            >
              Add to Cart
            </AddToCartButton>
          </div>
        </div>
      </section>
    </main>
  );
}