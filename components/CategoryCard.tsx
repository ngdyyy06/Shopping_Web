interface CategoryCardProps {
    name: string;
    description: string;
  }
  
  export default function CategoryCard({
    name,
    description,
  }: CategoryCardProps) {
    return (
      <a
        href={`/products?category=${name.toLowerCase()}`}
        className="group block bg-gray-100 p-8 transition hover:bg-gray-900"
      >
        <div className="flex h-48 flex-col justify-end">
          <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-white">
            {name}
          </h3>
  
          <p className="mt-2 text-sm text-gray-600 transition group-hover:text-gray-300">
            {description}
          </p>
        </div>
      </a>
    );
  }