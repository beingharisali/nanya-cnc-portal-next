"use client";
import React, { useState } from "react";
import { useProducts } from "@/context/productContext";
import Product from "@/types/product";
import ProductCard from "@/components/UI/Card";

interface props {
	filtered?: string;
}

interface FilterOption {
	name: string;
	count: string;
}

const ProductsSection: React.FC<props> = (props) => {
	// Hooks must be called inside the component
	const { products, filters } = useProducts();

	const [activeFilter, setActiveFilter] = useState(props.filtered || "All");

	const filteredProducts =
		activeFilter === "All"
			? products
			: products.filter(
					(product: Product) => product.category === activeFilter
			  );

	return (
		<section className="w-full py-20 bg-slate-900 text-white px-10 mt-15">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				{/* Render filters only if props.filtered is not provided */}
				{!props.filtered && (
					<div className="flex flex-wrap justify-center gap-3 mb-16">
						{filters.map((filter: FilterOption) => (
							<button
								key={filter.name}
								onClick={() => setActiveFilter(filter.name)}
								className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border ${
									activeFilter === filter.name
										? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/30"
										: "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:border-slate-600"
								}`}>
								{filter.name}
								<span
									className={`text-xs ${
										activeFilter === filter.name
											? "text-orange-200"
											: "text-slate-500"
									}`}>
									{filter.count}
								</span>
							</button>
						))}
					</div>
				)}

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
					{filteredProducts.map((product: Product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{filteredProducts.length === 0 && (
					<div className="text-center text-slate-400 py-20">
						No models currently available in this category.
					</div>
				)}
			</div>
		</section>
	);
};

export default ProductsSection;
