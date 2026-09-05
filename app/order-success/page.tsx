import Link from "next/link";

export default function OrderSuccessPage() {
    return (
        <main className="flex flex-1 items-center justify-center bg-white px-4 py-12">
            <section className="w-full max-w-xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Order Confirmation
                </p>

                <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
                    Order Placed Successfully
                </h1>

                <p className="mt-6 text-gray-600">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/products"
                        className="bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
                    >
                        Continue Shopping
                    </Link>

                    <Link
                        href="/"
                        className="border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}