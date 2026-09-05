"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Your Cart
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-4 text-gray-600">
            You haven't added any products to your cart yet.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-white">
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Your Cart
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Shopping Cart
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border-b border-gray-200 pb-6"
                >
                  {/* Product Image */}
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden bg-gray-100 sm:h-40 sm:w-40">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        {item.category}
                      </p>

                      <h2 className="mt-1 text-lg font-semibold text-gray-900">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-sm text-gray-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      
                      {/* Quantity */}
                      <div className="flex w-fit items-center overflow-hidden rounded-md border border-gray-400 bg-white">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-10 w-10 items-center justify-center text-lg font-semibold text-gray-900 transition hover:bg-gray-100 active:bg-gray-200"
                        >
                          -
                        </button>

                        <span className="flex h-10 min-w-12 items-center justify-center border-x border-gray-300 px-3 text-sm font-semibold text-gray-900">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-10 w-10 items-center justify-center text-lg font-semibold text-gray-900 transition hover:bg-gray-100 active:bg-gray-200"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => {
                          const confirmed = window.confirm(`Are your sure you want to remove "${item.name}" from your cart?`);

                          if (confirmed) {
                            removeFromCart(item.id);
                          }
                        }}
                        className="text-sm font-medium text-gray-500 underline underline-offset-4 transition hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="h-fit border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-sm text-gray-600">
                Subtotal
              </span>

              <span className="font-semibold text-gray-900">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-base font-semibold text-gray-900">
                Total
              </span>

              <span className="text-xl font-bold text-gray-900">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <Link href="/checkout"
                  className="mt-6 block w-full bg-gray-900 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Checkout
            </Link>

            <Link
              href="/products"
              className="mt-4 block text-center text-sm font-medium text-gray-600 underline underline-offset-4 transition hover:text-gray-900"
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}