"use client";
import { login } from "@/services/auth.api";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [formData, setData] = useState({
		email: "",
		password: "",
	});
	function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const name = e.target.name;
		const value = e.target.value;
		setData({ ...formData, [name]: value });
	}
	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			const res = await login(formData.email, formData.password);
			if (res.token) {
				window.location.href = "/home";
			}
		} catch (err) {
			alert("Login failed. Please check your credentials.");
		}
	}
	return (
		<div className="min-h-screen flex items-center justify-center">
			<form
				onSubmit={submitHandler}
				className="p-8 rounded-lg flex flex-col gap-4 min-w-80 bg-gray-100">
				<h1 className="text-2xl font-bold text-center mb-4">Login</h1>
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
				<button
					type="submit"
					className="p-3 rounded text-base font-bold cursor-pointer text-white bg-orange-500">
					Login
				</button>
				<p className="text-center m-0">
					Don't have an account?{" "}
					<Link href="/signup" className="font-bold text-orange-500">
						Signup
					</Link>
				</p>
			</form>
		</div>
	);
}
