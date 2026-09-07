"use client";

import { useState, ReactNode } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
    product: Product;
    children?: ReactNode;
    className?: string;
}

export default function AddToCartButton({
    product,
    children = "Add to Cart",
    className = "",
}: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [showMessage, setShowMessage] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2500);
    };

    return (
        <>
            <button
                onClick={handleAddToCart}
                className={`mt-8 w-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-700 sm:w-fit ${className}`}
            >
                {children}
            </button>

            {showMessage && (
                <div className="fixed right-6 top-6 z-50 rounded-lg bg-gray-900 px-6 py-4 text-sm font-medium text-white shadow-lg">
                    {product.name} added to cart
                </div>
            )}
        </>
    );
}