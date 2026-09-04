"use client";

import Link from "next/link";
import { FormEvent, useState } from "react"

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.")
            return;
        }

        if (name.length > 50) {
            setError("Name must be under 50 characters.")
            return;
        }

        if (password !== confirmPassword) {
            setError("Password do not match.")
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.")
            return;
        }

        console.log({
            name,
            email,
            password
        });

        alert("Registration successful!");
    };

    return (
        <main className="flex flex-1 items-center justify-center bg-white px-4 py-12">
            <section className="mx-auto flex w-full max-w-5xl items-center px-2 py-8 sm:px-6">
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none md:shadow-lg">
                    <div className="grid md:grid-cols-2">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <div className="text-center">
                                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                                    Create Account
                                </p>

                                <h1 className="mt-3 text-4xl font-bold text-gray-900">
                                    Register
                                </h1>

                                <p className="mt-4 text-sm text-gray-600">
                                    Create an account to start shopping.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-10 space-y-5"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>

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

                                <div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Confirm Password
                                    </label>

                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        placeholder="Confirm your password"
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
                                    Create Account
                                </button>
                            </form>

                            <p className="mt-8 text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="font-semibold text-gray-900 underline underline-offset-4 transition hover:text-gray-500"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>

                        <div className="hidden min-h-[650px] md:block">
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