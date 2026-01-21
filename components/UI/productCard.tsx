"use client";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
	name: string;
	image: string;
	id: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ id, name, image }) => {
	return (
		<Link href={`/products/${id}/product/${name}/details`}>
			<div className="bg-white rounded-2xl overflow-hidden group hover:shadow-[0_20px_50px_rgba(255,115,0,0.15)] transition-all duration-500 border border-gray-100">
				<div className="relative h-72 overflow-hidden bg-gray-100 scale-75">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
					/>
					<div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						VIEW
					</div>
				</div>

				<div className="p-8 text-center bg-white">
					<h3 className="text-gray-900 text-3xl font-black mb-2 tracking-tighter uppercase group-hover:text-orange-600 transition-colors duration-300">
						{name}
					</h3>
					<div className="flex justify-center items-center gap-2">
						<span className="h-0.5 w-4 bg-gray-200 group-hover:w-8 group-hover:bg-orange-500 transition-all duration-500"></span>
						<span className="h-0.5 w-4 bg-gray-200 group-hover:w-8 group-hover:bg-orange-500 transition-all duration-500"></span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
