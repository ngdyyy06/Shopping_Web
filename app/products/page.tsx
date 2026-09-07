"use client"; // xử lý trực tiếp trên trình duyệt

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

const categories = [
    "All",
    "MEN",
    "WOMEN",
    "KIDS",
    "GEAR",
];

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const [loading, setLoading] = useState(true);
    const [subcategory, setSubcategory] = useState("All")

    // Lấy sản phẩm từ database thông qua API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products");

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data: Product[] = await response.json();

                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Lấy category từ URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const categoryFromUrl = params.get("category");
        const subcategoryFromURL = params.get("subcategory");

        if (!categoryFromUrl) {
            setCategory("All");
            return;
        }

        const matchesCategory = categories.find(
            (item) =>
                item.toLowerCase() === categoryFromUrl.toLowerCase()
        );

        setCategory(matchesCategory ?? "All");
        setSubcategory(subcategoryFromURL ?? "All");
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category.toLowerCase() === category.toLowerCase();

        const matchesSubcategory = 
            subcategory === "All" ||
            product.subcategory.toLowerCase() === subcategory.toLowerCase();

        return matchesCategory && matchesSearch && matchesSubcategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === "price-low") {
            return a.price - b.price;
        }

        if (sort === "price-high") {
            return b.price - a.price;
        }

        if (sort === "rating-high") {
            return b.rating - a.rating;
        }

        return 0;
    });

    return (
        <main className="flex-1 bg-white">
            <section className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Our Store
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
                        All Products
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                        Explore our collection of products and find something
                        that matches your style
                    </p>
                </div>
            </section>

            <div className="mx-auto mt-6 mb-10 flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 sm:max-w-md"
                />
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            setSearch("");
                            setCategory(item);

                            const url =
                                item === "All"
                                    ? "/products"
                                    : `/products?category=${item.toLowerCase()}`;

                            window.history.pushState({}, "", url);
                        }}
                        className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                            category === item
                                ? "border-gray-900 bg-gray-900 text-white"
                                : "border-gray-300 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="mx-auto mb-10 flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <label
                        htmlFor="sort"
                        className="text-sm font-medium text-gray-700"
                    >
                        Sort by:
                    </label>

                    <select
                        id="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                    >
                        <option value="default">Default</option>
                        <option value="price-low">
                            Price: Low → High
                        </option>
                        <option value="price-high">
                            Price: High → Low
                        </option>
                        <option value="rating-high">
                            Rating: High → Low
                        </option>
                    </select>
                </div>
            </div>

            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-6 text-center text-sm text-gray-500">
                    {loading
                        ? "Loading products..."
                        : `${sortedProducts.length} products`}
                </div>

                {loading ? (
                    <div className="py-20 text-center">
                        <p className="text-sm text-gray-500">
                            Loading products...
                        </p>
                    </div>
                ) : sortedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {sortedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                                rating={product.rating}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            No products found
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Try another search or category.
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}