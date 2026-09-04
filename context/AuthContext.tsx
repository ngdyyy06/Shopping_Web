"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

interface User {
    id: number;
    name: string;
    email: string;
    role: "CUSTOMER" | "ADMIN";
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
    children
} : {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {
        // tam thoi chua ket noi backend/database
        // sau nay goi function nay se goi API login

        console.log("Login: ", email, password);

        setUser({
            id: 1,
            name: "Demo User",
            email,
            role: "CUSTOMER",
        });
    };

    const logout = () => {
        setUser(null);
    }

    const isAuthenticated = user !== null;

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}