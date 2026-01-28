import { Zap, Settings, Disc, ShieldCheck, LucideIcon } from "lucide-react";
import React from "react";
import Product, { ProductSpec } from "@/types/product";
import Link from "next/link";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
	return (
		<Link href={`/products/${product.id}/product`}>
			<div className="relative isolate overflow-hidden bg-gray-100 rounded-2xl group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-slate-700/50 w-full mx-auto lg:max-w-xl xl:max-w-2xl">
				<div className="relative h-68 md:h-80 lg:h-120 w-full bg-gray-100 flex items-center justify-center flex-col ">
					<img
						src={product.image}
						alt={product.model}
						className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-105 will-change-transform"
					/>
					<div className="z-10 pointer-events-none">
						<div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
							{product.badge}
						</div>
						<div className="absolute top-4 right-4 bg-white text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
							<h1 className="font-semibold">{product.badge2}</h1>
						</div>
					</div>
					<div className="hidden lg:flex absolute bottom-2 inset-x-0 justify-center p-5 text-center text-2xl font-extrabold transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
						<h1 className="text-gray-800">{product.model}</h1>
					</div>
				</div>

				<div className="p-6 transition-all duration-500 ease-in-out lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-full lg:group-hover:translate-y-0 bg-gray-100 lg:bg-gray-800 lg:opacity-70 lg:backdrop-blur-sm lg:max-h-full lg:overflow-y-auto">
					<h3 className="text-orange-400 text-sm font-bold mb-1">
						{product.title}
					</h3>
					<h4 className="text-2xl font-bold lg:text-white text-gray-800 mb-6">
						{product.model}
					</h4>

					<div className="grid grid-cols-2 gap-y-4 gap-x-6">
						{product.specs.map((spec: ProductSpec, index: number) => (
							<div key={index} className="flex items-start gap-3">
								<div className="mt-1 text-slate-500">
									<spec.icon size={18} strokeWidth={2} />
								</div>
								<div>
									<div className="text-xs lg:text-slate-400 text-gray-800 font-medium">
										{spec.label}
									</div>
									<div className="text-sm text-gray-800 lg:text-slate-200 font-bold">
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
