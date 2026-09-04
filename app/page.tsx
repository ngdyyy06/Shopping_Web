import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


export default function Home() {
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

          <div className="flex h-[350px] items-center justify-center bg-gray-300 md:h-[450px]">
            <span className="text-lg font-medium text-gray-600">
              Product Image
            </span>
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
              name="Fashion"
              description="Clothing and accessories"
            />

            <CategoryCard
              name="Shoes"
              description="Find your perfect pair"
            />

            <CategoryCard
              name="Beauty"
              description="Beauty and personal care"
            />

            <CategoryCard
              name="Technology"
              description="Latest tech products"
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
                key={product.name}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
               rating={product.rating}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}