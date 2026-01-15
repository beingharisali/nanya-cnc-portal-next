import { Zap, Settings, Disc, ShieldCheck, LucideIcon } from "lucide-react";

import React from "react";
import Product, { ProductSpec } from "@/types/product";
import Link from "next/link";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
	return (
		<Link href={`/products/${product.id}/product`}>
			<div className="bg-slate-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-slate-700/50">
				<div className="relative h-68 overflow-hidden">
					<img
						src={product.image}
						alt={product.model}
						className="w-full h-full object-fit transform transition-transform duration-500 group-hover:scale-110 "
					/>
					<div>
						<div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
							{product.badge}
						</div>

						<div className="absolute top-4 right-4 bg-white text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
							<h1 className="font-semibold">{product.badge2}</h1>
						</div>
					</div>
				</div>

				<div className="p-6">
					<h3 className="text-orange-400 text-sm font-bold mb-1">
						{product.title}
					</h3>
					<h4 className="text-2xl font-bold text-white mb-6">
						{product.model}
					</h4>

					<div className="grid grid-cols-2 gap-y-4 gap-x-6">
						{product.specs.map((spec: ProductSpec, index: number) => (
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
		</Link>
	);
};

export default ProductCard;
