"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }

        login(email, password);

        router.push("/");
    };

    return (
        <main className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-12">
            <section className="w-full max-w-5xl">
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none md:shadow-lg">
                    <div className="grid md:grid-cols-2">

                        <div className="p-6 sm:p-8 lg:p-10">
                            <div className="text-center">
                                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                                    Welcome Back
                                </p>

                                <h1 className="mt-3 text-4xl font-bold text-gray-900">
                                    Login
                                </h1>

                                <p className="mt-4 text-sm text-gray-600">
                                    Sign in to continue shopping.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-10 space-y-5"
                            >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>

                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm font-medium text-red-600">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                                >
                                    Login
                                </button>
                            </form>

                            <p className="mt-8 text-center text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link
                                    href="/register"
                                    className="font-semibold text-gray-900 underline underline-offset-4 transition hover:text-gray-500"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>

                        <div className="hidden min-h-[560px] md:block">
                            <img
                                src="/images/auth/register.jpg"
                                alt="The North Face"
                                className="h-full w-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}