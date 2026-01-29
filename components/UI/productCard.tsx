"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
	name: string;
	image: string;
	id: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image }) => {
	const productSlug = encodeURIComponent(name.toLowerCase());

	return (
		<Link href={`/products/${id}/product/${productSlug}/details`}>
			<div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,115,0,0.15)]">
				<div className="relative flex aspect-square items-center scale-85 justify-center bg-gray-100">
					<img
						src={image}
						alt={name}
						className="px-4 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
					/>
					<div className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						VIEW
					</div>
				</div>

				<div className="bg-gray-100 pb-6 text-center">
					<h3 className="mb-2 px-4 text-2xl font-black uppercase tracking-tighter text-gray-900 transition-colors duration-300 group-hover:text-orange-600 sm:text-3xl">
						{name}
					</h3>
					<div className="flex items-center justify-center gap-2">
						<span className="h-0.5 w-4 bg-gray-200 transition-all duration-500 group-hover:w-8 group-hover:bg-orange-500"></span>
						<span className="h-0.5 w-4 bg-gray-200 transition-all duration-500 group-hover:w-8 group-hover:bg-orange-500"></span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
