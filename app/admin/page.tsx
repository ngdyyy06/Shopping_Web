"use client";

import { useAuth } from "@/context/AuthContext";
import AdminGuard from "@/components/AdminGuard";

export default function AdminPage() {
    const { user } = useAuth();

    return (
        <AdminGuard>
            <main className="flex flex-1 items-center justify-center bg-white px-4 py-12">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Admin Dashboard
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900">
                        Welcome, {user?.name}
                    </h1>

                    <p className="mt-4 text-sm text-gray-600">
                        Role: {user?.role}
                    </p>
                </div>
            </main>
        </AdminGuard>
    );
}