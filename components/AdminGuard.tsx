"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface AdminGuardProps {
    children: ReactNode;
}

export default function AdminGuard({
    children,
} : AdminGuardProps) {
    const router = useRouter();
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
            return;
        }

        if (user?.role !== "ADMIN") {
            router.push("/");
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== "ADMIN") {
        return null;
    }

    return <>{children}</>
}