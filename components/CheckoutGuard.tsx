"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface CheckoutGuardProps {
    children: ReactNode;
}

export default function CheckoutGuard({
    children,
}: CheckoutGuardProps) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <main className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-12">
                <div className="w-full max-w-md border border-gray-200 bg-white p-8 text-center shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Checkout
                    </p>

                    <h1 className="mt-3 text-2xl font-bold text-gray-900">
                        Login Required
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                        Please login to your account before continuing with your purchase.
                    </p>

                    <button
                        onClick={() => router.push("/login")}
                        className="mt-6 w-full bg-gray-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
                    >
                        Login to Continue
                    </button>

                    <button
                        onClick={() => router.push("/cart")}
                        className="mt-4 text-sm font-medium text-gray-600 underline underline-offset-4 transition hover:text-gray-900"
                    >
                        Back to Cart
                    </button>
                </div>
            </main>
        );
    }

    return <>{children}</>;
}