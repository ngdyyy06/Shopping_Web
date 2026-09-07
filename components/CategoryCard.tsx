interface CategoryCardProps {
    name: string;
    description: string;
    image: string;
}

export default function CategoryCard({
    name,
    description,
    image,
}: CategoryCardProps) {
    return (
        <a
            href={`/products?category=${name.toLowerCase()}`}
            className="group relative block h-64 overflow-hidden"
        >
            {/* Category Image */}
            <img
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/50" />

            {/* Content */}
            <div className="relative flex h-full flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white">
                    {name}
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                    {description}
                </p>
            </div>
        </a>
    );
}