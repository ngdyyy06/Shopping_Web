import Link from "next/link";

interface productCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
}

export default function ProductCard({
    id,
    name,
    price,
    image,
    category,
    rating,
}: productCardProps) {
    return (
      <Link href={`/products/${id}`} className="group block">
        <div className="group overflow-hidden bg-white">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <span className="absolute left-4 top-4 bg-white px-3 py-1 text-xs font-medium text-gray-900">
              {category}
            </span>
          </div>

          <div className="pt-4">
            <h3 className="text-base font-semibold text-gray-900">
              {name}
            </h3>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </p>

              <p className="text-sm text-gray-500">
                ★ {rating.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
}