import Link from "next/link";

const categories = [
    {
        name: "MEN",
        description: "Men's outdoor clothing and footwear",
        subcategories: [
            "JACKETS",
            "FLEECE",
            "TOPS",
            "BOTTOMS",
            "FOOTWEAR",
        ],
    },
    {
        name: "WOMEN",
        description: "Women's outdoor clothing and footwear",
        subcategories: [
            "JACKETS",
            "FLEECE",
            "TOPS",
            "BOTTOMS",
            "FOOTWEAR",
        ],
    },
    {
        name: "KIDS",
        description: "Outdoor clothing for kids",
        subcategories: [
            "JACKETS",
            "FLEECE",
            "TOPS",
        ],
    },
    {
        name: "GEAR",
        description: "Backpacks and outdoor gear",
        subcategories: [
            "BACKPACKS",
            "OUTDOOR GEAR",
        ],
    },
];

export default function CategoriesPage() {
    return (
        <main className="flex-1 bg-white">
            {/* Page Header */}
            <section className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                        The North Face
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
                        Categories
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                        Explore our collections by category and find the right
                        gear for your next adventure.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="border border-gray-200 bg-gray-50 p-8 transition hover:border-gray-900"
                        >
                            {/* Category name */}
                            <h2 className="text-2xl font-bold text-gray-900">
                                {category.name}
                            </h2>

                            <p className="mt-2 text-sm text-gray-600">
                                {category.description}
                            </p>

                            {/* Subcategories */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {category.subcategories.map((subcategory) => (
                                    <Link
                                        key={subcategory}
                                        href={`/products?category=${category.name.toLowerCase()}&subcategory=${subcategory.toLowerCase()}`}
                                        className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                                    >
                                        {subcategory}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}