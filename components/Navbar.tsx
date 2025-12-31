import React from "react";

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white">
			<div className="flex items-center justify-between w-[90%] mx-auto py-4">
				<div className="flex flex-col">
					<h1 className="text-xl font-bold">Nanya</h1>
					<p className="text-sm font-semibold text-orange-500">CNC</p>
				</div>
				<ul className="hidden md:flex items-center gap-10 list-none">
					<li className="cursor-pointer hover:scale-110 transition-all duration-300">
						Home
					</li>
					<li className="cursor-pointer hover:scale-110 transition-all duration-300">
						About
					</li>
					<li className="cursor-pointer hover:scale-110 transition-all duration-300">
						Products
					</li>
					<li className="cursor-pointer hover:scale-110 transition-all duration-300">
						Global
					</li>
					<li className="cursor-pointer hover:scale-110 transition-all duration-300">
						Contact
					</li>
					<button className="px-4 py-2 text-white border-none bg-orange-500 rounded-3xl hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-110">
						Get Quote
					</button>
				</ul>
				<button className="md:hidden text-2xl p-2">☰</button>
			</div>
		</nav>
	);
}
