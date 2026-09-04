"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
    const { cartCount } = useCart();
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <nav className="w-full border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900"
                >
                    Shopping Web
                </Link>

                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-900 hover:text-gray-500"
                    >
                        Home
                    </Link>

                    <Link
                        href="/products"
                        className="text-sm font-medium text-gray-900 hover:text-gray-500"
                    >
                        Products
                    </Link>

                    <Link
                        href="/categories"
                        className="text-sm font-medium text-gray-900 hover:text-gray-500"
                    >
                        Categories
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    {isAuthenticated ? (
                        <>
                            <span className="text-sm font-medium text-gray-900">
                                Hi, {user?.name}
                            </span>

                            <button
                                onClick={logout}
                                className="text-sm font-medium text-gray-900 hover:text-gray-500"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="text-sm font-medium text-gray-900 hover:text-gray-500"
                        >
                            Login
                        </Link>
                    )}

                    <Link
                        href="/cart"
                        className="relative inline-flex items-center text-sm text-gray-900 transition hover:text-gray-500"
                    >
                        <ShoppingCart className="h-5 w-5" />

                        {cartCount > 0 && (
                            <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

            </div>
        </nav>
    );
}