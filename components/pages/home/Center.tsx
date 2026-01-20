"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useProducts } from "@/context/productContext";
import ProductCard from "@/components/UI/Card";

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
		<section className="w-full py-20 bg-slate-900 text-white ">
			<div>
				<div className="max-w-[90%] mx-auto p-2">
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
					<div className="bg-orange-500 pt-px w-screen absolute z-0 mt-5">
						{" "}
					</div>
				</div>
			</div>
		</section>
	);
};
export default ProductsSection;
