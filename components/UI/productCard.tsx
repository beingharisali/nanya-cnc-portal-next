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
			<div className="bg-slate-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-slate-700/50">
				<div className="relative h-72 overflow-hidden">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
					/>
				</div>

				<div className="p-6 text-center">
					<h3 className="text-white text-4xl font-bold mb-1">{name}</h3>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
