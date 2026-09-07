import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
    take: 8,
  });

  return (
    <main>
      <section className="bg-gray-100">
        <div className="mx-auto grid min-h-[700px] md:min-h-[600px] max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
              New Collection
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Discover Your
              <br />
              Perfect Style
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Explore our latest collection of products designed
              to match your lifestyle.
            </p>

            <a
              href="/products"
              className="mt-8 inline-block bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Shop Now
            </a>
          </div>

          <div className="h-[350px] overflow-hidden bg-gray-300 md:h-[450px]">
            <img
              src="/images/products/cover.jpg"
              alt="The North Face Men's GORE-TEX Mountain Jacket"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Explore
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Shop by Category
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Explore our collection and find products that match your style.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <CategoryCard
                name="MEN"
                description="Men's outdoor clothing and footwear"
                image="/images/categories/men.jpg"
            />

            <CategoryCard
                name="WOMEN"
                description="Women's outdoor clothing and footwear"
                image="/images/categories/women.jpg"
            />

            <CategoryCard
                name="KIDS"
                description="Outdoor clothing for kids"
                image="/images/categories/kids.jpg"
            />

            <CategoryCard
                name="GEAR"
                description="Backpacks and outdoor gear"
                image="/images/categories/gear.jpg"
            />

          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Our Products
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                Featured Products
              </h2>
            </div>

            <a
              href="/products"
              className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-500"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={Number(product.price)}
                image={product.image}
                category={product.category}
                rating={Number(product.rating)}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}