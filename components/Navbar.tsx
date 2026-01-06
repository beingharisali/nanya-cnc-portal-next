"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white">
				<div className="flex items-center justify-between w-[90%] mx-auto py-4">
					<Link href={"/"} className="flex items-center justify-center">
						<img src="/logoN.jpg" alt="logo" className="w-35 pt-2" />
						<img src="/LOGOY.jpg" alt="logo" className="w-25" />
					</Link>
					<ul className="hidden lg:flex items-center gap-10 list-none text-gray-700">
						<li className="cursor-pointer hover:scale-110 transition-all duration-300">
							<Link href={"/"}>Home</Link>
						</li>
						<li className="cursor-pointer hover:scale-110 transition-all duration-300">
							<Link href={"/about"}>About</Link>
						</li>
						<li className="cursor-pointer hover:scale-110 transition-all duration-300">
							<Link href={"/products"}>Products</Link>
						</li>
						<li className="cursor-pointer hover:scale-110 transition-all duration-300">
							Global
						</li>
						<li className="cursor-pointer hover:scale-110 transition-all duration-300">
							Contact
						</li>
						<div>
							<button className="px-4 py-2 mx-2 text-white border-none bg-orange-500 rounded-3xl hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-110">
								Get Quote
							</button>
							<button className="px-4 py-2 text-white border-none bg-gray-500 rounded-3xl hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-110">
								<Link href={"/login"}>Login</Link>
							</button>
						</div>
					</ul>
					<button
						className="lg:hidden text-2xl p-2"
						onClick={() => setIsOpen(!isOpen)}>
						☰
					</button>
				</div>
			</nav>

			<div
				className={`fixed inset-0 z-40 transform transition-transform duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}>
				<div
					className="fixed inset-0 bg-black bg-opacity-50"
					onClick={() => setIsOpen(false)}></div>
				<div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg">
					<div className="p-6">
						<button
							className="absolute top-4 right-4 text-2xl"
							onClick={() => setIsOpen(false)}>
							×
						</button>
						<ul className="mt-8 space-y-6">
							<li>
								<Link href="/" onClick={() => setIsOpen(false)}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" onClick={() => setIsOpen(false)}>
									About
								</Link>
							</li>
							<li>
								<Link href="/products" onClick={() => setIsOpen(false)}>
									Products
								</Link>
							</li>
							<li>Global</li>
							<li>Contact</li>
							<li className="space-y-4 mt-8">
								<button className="w-full px-4 py-2 text-white bg-orange-500 rounded-3xl">
									Get Quote
								</button>
								<button className="w-full px-4 py-2 text-white bg-gray-500 rounded-3xl">
									<Link href="/login">Login</Link>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
