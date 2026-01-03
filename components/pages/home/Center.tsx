"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useProducts } from "@/context/productContext";

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
	return (
		<div className="bg-slate-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-slate-700/50">
			<div className="relative h-64 overflow-hidden">
				<img
					src={product.image}
					alt={product.model}
					className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
					{product.badge}
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-orange-400 text-sm font-bold mb-1">
					{product.title}
				</h3>
				<h4 className="text-2xl font-bold text-white mb-6">{product.model}</h4>

				<div className="grid grid-cols-2 gap-y-4 gap-x-6">
					{product.specs.map((spec: any, index: number) => (
						<div key={index} className="flex items-start gap-3">
							<div className="mt-1 text-slate-500">
								<spec.icon size={18} strokeWidth={2} />
							</div>
							<div>
								<div className="text-xs text-slate-400 font-medium">
									{spec.label}
								</div>
								<div className="text-sm text-slate-200 font-bold">
									{spec.value}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const ProductsSection: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState("Vertical");
	const { products, filters } = useProducts();

	const filteredProducts =
		activeFilter === "Vertical"
			? products
			: products.filter((product: any) => product.category === activeFilter);

	// Create a new variable to hold only the first 6 items
	const displayedProducts = filteredProducts.slice(0, 6);

	return (
		<section className="w-full py-20 bg-slate-900 text-white px-10">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-black mb-4">
						CNC Machine <br />
						<span className="text-orange-500">Centers</span>
					</h2>
					<p className="text-slate-400 max-w-2xl mx-auto text-lg">
						Discover our comprehensive range of CNC machines designed for
						precision manufacturing at scale.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Map over displayedProducts instead of filteredProducts */}
					{displayedProducts.map((product: any) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{displayedProducts.length === 0 && (
					<div className="text-center text-slate-400 py-20">
						No models currently available in this category.
					</div>
				)}
			</div>

			<div className="flex items-center justify-center m-5 pt-5">
				<button className="mt-5 z-10 bg-orange-500 p-3 w-38 rounded-3xl transition-all duration-500 hover:scale-110 cursor-pointer hover:shadow-gray-500 shadow-sm">
					<Link href={"/products"} className="font-semibold">
						View more
					</Link>
				</button>
				<div className="bg-orange-500 pt-px w-screen absolute z-0 mt-5"> </div>
			</div>
		</section>
	);
};
export default ProductsSection;
