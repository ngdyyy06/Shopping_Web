"use client";

import CheckoutGuard from "@/components/CheckoutGuard";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
    const { cartItems, cartTotal } = useCart();
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<"card" | "momo" | "bank">("card");

    return (
        <CheckoutGuard>
            <main className="flex-1 bg-white">
                <section className="border-b border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                            Checkout
                        </p>

                        <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
                            Checkout
                        </h1>

                        <p className="mt-4 text-gray-600">
                            Complete your order.
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-16">
                        
                        {/* Order Items */}
                        <div className="lg:col-span-2 space-y-12">
                            <h2 className="text-xl font-bold text-gray-900">
                                Order Items
                            </h2>
                                <div className="mt-6 space-y-6">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-4 border-b border-gray-200 pb-6"
                                    >
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-gray-100 sm:h-28 sm:w-28">
                                            <img
                                                src={item.image}                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                />
                                        </div>

                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                                                    {item.category}
                                                </p>
                                                <h3 className="mt-1 text-base font-semibold text-gray-900">
                                                    {item.name}
                                                </h3>

                                                <p className="mt-2 text-sm text-gray-600">
                                                    ${item.price.toFixed(2)} × {item.quantity}
                                                </p>
                                            </div>

                                            <p className="mt-3 text-base font-bold text-gray-900">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 lg:col-span-1">
                            {/* Payment Method */}
                            <div className="border border-gray-200 p-6">
                                <h2 className="text-xl font-bold text-gray-900">
                                    Payment Method
                                </h2>

                                <div className="mt-6 space-y-4">

                                    {/* Card */}
                                    <label
                                        className={`block cursor-pointer border p-5 transition ${
                                            paymentMethod === "card"
                                                ? "border-gray-900"
                                                : "border-gray-200 hover:border-gray-400"
                                        }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="card"
                                                checked={paymentMethod === "card"}
                                                onChange={() => setPaymentMethod("card")}
                                                className="mt-1 h-4 w-4"
                                            />

                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    Credit / Debit Card
                                                </p>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    Pay securely with your card.
                                                </p>
                                            </div>
                                        </div>

                                        {paymentMethod === "card" && (
                                            <div className="mt-5 border-t border-gray-200 pt-5">
                                                <p className="text-sm leading-6 text-gray-600">
                                                    Your card payment will be processed securely
                                                    through our payment provider.
                                                </p>
                                            </div>
                                        )}
                                    </label>


                                    {/* MoMo */}
                                    <label
                                        className={`block cursor-pointer border p-5 transition ${
                                            paymentMethod === "momo"
                                                ? "border-gray-900"
                                                : "border-gray-200 hover:border-gray-400"
                                        }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="momo"
                                                checked={paymentMethod === "momo"}
                                                onChange={() => setPaymentMethod("momo")}
                                                className="mt-1 h-4 w-4"
                                            />

                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    MoMo
                                                </p>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    Pay using your MoMo account.
                                                </p>
                                            </div>
                                        </div>

                                        {paymentMethod === "momo" && (
                                            <div className="mt-5 border-t border-gray-200 pt-5">
                                                <p className="text-sm leading-6 text-gray-600">
                                                    You will be redirected to MoMo to complete
                                                    your payment securely.
                                                </p>
                                            </div>
                                        )}
                                    </label>


                                    {/* Bank Transfer */}
                                    <label
                                        className={`block cursor-pointer border p-5 transition ${
                                            paymentMethod === "bank"
                                                ? "border-gray-900"
                                                : "border-gray-200 hover:border-gray-400"
                                        }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="bank"
                                                checked={paymentMethod === "bank"}
                                                onChange={() => setPaymentMethod("bank")}
                                                className="mt-1 h-4 w-4"
                                            />

                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    Bank Transfer
                                                </p>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    Pay through your bank account.
                                                </p>
                                            </div>
                                        </div>

                                        {paymentMethod === "bank" && (
                                            <div className="mt-5 border-t border-gray-200 pt-5">
                                                <p className="text-sm leading-6 text-gray-600">
                                                    You will receive bank transfer instructions
                                                    after placing the order.
                                                </p>
                                            </div>
                                        )}
                                    </label>

                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="h-fit border border-gray-200 p-6 lg:col-span-1">
                                <h2 className="text-xl font-bold text-gray-900">
                                    Order Summary

                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">
                                                Subtotal
                                            </span>

                                            <span className="font-semibold text-gray-900">
                                                ${cartTotal.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">
                                                Shipping
                                            </span>

                                            <span className="font-semibold text-gray-900">
                                                $5.00
                                            </span>
                                        </div>

                                        <div className="border-t border-gray-200 pt-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-base font-semibold text-gray-900">
                                                    Total
                                                </span>

                                                <span className="text-xl font-bold text-gray-900">
                                                    ${(cartTotal + 5).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>

                                        <button type="button"
                                                className="mt-4 w-full bg-gray-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-700">
                                            Place Order
                                        </button>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </CheckoutGuard>
    );
}