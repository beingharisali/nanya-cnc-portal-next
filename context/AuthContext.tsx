"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
	signup,
	login as loginApi,
} from "../services/auth.api";
interface User {
	id: number;
	name: string;
	email: string;
	role?: string;
}

type UserRole = string;

interface AuthContextType {
	user: User | null;
	loading: boolean;
	registerUser: (
		name: string,
		email: string,
		password: string
	) => Promise<void>;
	loginUser: (email: string, password: string) => Promise<void>;
	logoutUser: () => Promise<void>;
	refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuthContext must be used inside AuthProvider");
	return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	const getRedirectPath = (role?: string) => {
		switch (role) {
			case "admin":
				return "/welcome";
			case "agent":
				return "/properties/property";
			case "user":
				return "/properties/property";
			default:
				return "/";
		}
	};

	const refreshProfile = async (): Promise<void> => {
		try {
			const token = localStorage.getItem("token");
			if (token) {
				// Token exists, user is logged in
				setUser({ id: 1, name: "User", email: "user@example.com" });
			} else {
				setUser(null);
			}
		} catch {
			setUser(null);
		}
	};

	useEffect(() => {
	  (async () => {
	    setLoading(true);
	    const token = localStorage.getItem("token");

	    if (token) {
	      try {
	        await refreshProfile();
	      } catch (error) {
	        console.error("Error refreshing profile:", error);
	      }
	    }
	    setLoading(false);
	  })();
	}, []);

	const registerUser = async (
		name: string,
		email: string,
		password: string
	) => {
		const res = await signup(name, email, password);
		router.replace("/home");
	};
	const loginUser = async (email: string, password: string) => {
		const res = await loginApi(email, password);

		if (res.token) {
			localStorage.setItem("token", res.token);
			setUser(res.user);
			router.replace("/home");
		}
	};

	const logoutUser = async () => {
		setUser(null);
		localStorage.removeItem("token");
		router.replace("/");
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				registerUser,
				loginUser,
				logoutUser,
				refreshProfile,
			}}>
			{children}
		</AuthContext.Provider>
	);
}