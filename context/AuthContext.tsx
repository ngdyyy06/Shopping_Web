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
    login: (email: string, password: string) => User;
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

        const loggedInUser: User = {
            id: 1,
            name: "Duy",
            email,
            role: "ADMIN"
        };

        setUser(loggedInUser)

        return loggedInUser;
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