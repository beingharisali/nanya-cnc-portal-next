"use client";
import { signup } from "@/services/auth.api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
	const router = useRouter();
	const [formData, setData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...formData, [name]: value });
	}

	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			await signup(formData.name, formData.email, formData.password);
			router.push("/home");
		} catch (err) {
			alert("Signup failed. Please try again.");
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<form
				onSubmit={submitHandler}
				className="p-8 rounded-lg flex flex-col gap-4 min-w-80 bg-gray-100">
				<h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
				<input
					onChange={changeHandler}
					type="text"
					placeholder="Full Name"
					value={formData.name}
					name="name"
					required
					className="p-3 rounded text-base border"
				/>
				<input
					onChange={changeHandler}
					type="email"
					placeholder="Email"
					value={formData.email}
					name="email"
					required
					className="p-3 rounded text-base border"
				/>
				<input
					onChange={changeHandler}
					type="password"
					placeholder="Password"
					value={formData.password}
					name="password"
					required
					className="p-3 rounded text-base border"
				/>
				<input
					onChange={changeHandler}
					type="password"
					placeholder="Confirm Password"
					value={formData.confirmPassword}
					name="confirmPassword"
					required
					className="p-3 rounded text-base border"
				/>
				<button
					type="submit"
					className="p-3 rounded text-base font-bold cursor-pointer text-white bg-orange-500">
					Sign Up
				</button>
				<p className="text-center m-0">
					Already have an account?{" "}
					<Link href="/" className="font-bold text-orange-500">
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}