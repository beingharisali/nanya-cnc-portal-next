import { Zap, Settings, Disc, ShieldCheck, LucideIcon } from "lucide-react";
import React from "react";
import Product, { ProductSpec } from "@/types/product";
import Link from "next/link";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
	return (
		<Link href={`/products/${product.id}/product`}>
			<div className="relative isolate overflow-hidden bg-gray-100 rounded-2xl group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-slate-700/50 w-full mx-auto lg:max-w-xl xl:max-w-2xl">
				<div className="relative h-68 md:h-80 lg:h-90 w-full bg-gray-100 flex items-center justify-center flex-col">
					<img
						src={product.image}
						alt={product.model}
						className="max-w-full max-h-full object-contain transform transition-transform duration-500 lg:scale-95 group-hover:scale-100 will-change-transform"
					/>

					<div className="z-10 pointer-events-none">
						<div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
							{product.badge}
						</div>
						<div className="absolute top-4 right-4 bg-white text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
							<h1 className="font-semibold">{product.badge2}</h1>
						</div>
					</div>
				</div>

				<div
					className="px-6 pb-4 transition-all duration-500 ease-in-out bg-gray-100 
                lg:absolute lg:inset-0 lg:z-20 
                lg:bg-gray-800/60 lg:backdrop-blur-md 
                lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                lg:flex lg:flex-col lg:justify-center lg:items-center">
					<h3 className="text-orange-400 text-sm font-bold mb-1">
						{product.title}
					</h3>
					<h4 className="text-2xl font-bold lg:text-white text-gray-800 mb-6">
						{product.model}
					</h4>

					<div className="grid grid-cols-2 gap-y-4 gap-x-6">
						{product.specs.map((spec: ProductSpec, index: number) => (
							<div key={index} className="flex items-start gap-3">
								<div className="mt-1 text-slate-400">
									<spec.icon size={18} strokeWidth={2} />
								</div>
								<div>
									<div className="text-xs lg:text-slate-300 text-gray-800 font-medium">
										{spec.label}
									</div>
									<div className="text-sm text-gray-800 lg:text-white font-bold">
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
