"use client";
import React, { useState } from "react";
import { Zap, Settings, Disc, ShieldCheck, LucideIcon } from "lucide-react";

interface ProductSpec {
	icon: LucideIcon;
	label: string;
	value: string;
}

interface Product {
	id: number;
	category: string;
	badge: string;
	title: string;
	model: string;
	image: string;
	specs: ProductSpec[];
}

interface FilterOption {
	name: string;
	count: string;
}

const filters: FilterOption[] = [
	{ name: "All", count: "20 Models" },
	{ name: "Vertical", count: "6 Models" },
	{ name: "Horizontal", count: "3 Models" },
	{ name: "5-Axis", count: "3 Models" },
	{ name: "Turning", count: "4 Models" },
	{ name: "Surface Grinder", count: "4 Models" },
];

const products: Product[] = [
	{
		id: 1,
		category: "Vertical",
		badge: "Best Seller",
		title: "Vertical Machining Center",
		model: "VMC-NANO-X8 / X10",
		image:
			"https://images.unsplash.com/photo-1565035014741-a09f5c587705?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "12,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "24 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.005mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "2 Years" },
		],
	},
	{
		id: 2,
		category: "Vertical",
		badge: "High Speed",
		title: "High Precision VMC",
		model: "VMC-650 HS",
		image:
			"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "20,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "30 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.003mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "2 Years" },
		],
	},
	{
		id: 3,
		category: "Vertical",
		badge: "Industrial",
		title: "Heavy Duty VMC",
		model: "VMC-1200 HD",
		image:
			"https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "8,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "40 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.010mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "3 Years" },
		],
	},
	{
		id: 4,
		category: "Vertical",
		badge: "Standard",
		title: "Entry VMC",
		model: "VMC-400E",
		image:
			"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "10k RPM" },
			{ icon: Settings, label: "Slots", value: "16 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.005" },
			{ icon: ShieldCheck, label: "Warr.", value: "1 Yr" },
		],
	},
	{
		id: 5,
		category: "Vertical",
		badge: "Standard",
		title: "Mid VMC",
		model: "VMC-800M",
		image:
			"https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "12k RPM" },
			{ icon: Settings, label: "Slots", value: "24 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.005" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 6,
		category: "Vertical",
		badge: "Elite",
		title: "Ultra VMC",
		model: "VMC-MAX-Z",
		image:
			"https://images.unsplash.com/photo-1565706482631-7a4616c68e37?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "24k RPM" },
			{ icon: Settings, label: "Slots", value: "60 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.001" },
			{ icon: ShieldCheck, label: "Warr.", value: "5 Yr" },
		],
	},
	{
		id: 7,
		category: "Horizontal",
		badge: "Performance",
		title: "Horizontal Machining Center",
		model: "HMC-630",
		image:
			"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "15,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "24 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.003mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "2 Years" },
		],
	},
	{
		id: 8,
		category: "Horizontal",
		badge: "Pro",
		title: "Pro HMC",
		model: "HMC-800",
		image:
			"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "12k RPM" },
			{ icon: Settings, label: "Slots", value: "40 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.003" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 9,
		category: "Horizontal",
		badge: "XL",
		title: "Heavy HMC",
		model: "HMC-1250",
		image:
			"https://images.unsplash.com/photo-1565035014741-a09f5c587705?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "8k RPM" },
			{ icon: Settings, label: "Slots", value: "80 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.008" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
	{
		id: 10,
		category: "5-Axis",
		badge: "Premium",
		title: "5-Axis Machining Center",
		model: "5AX-500",
		image:
			"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "18,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "24 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.002mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "3 Years" },
		],
	},
	{
		id: 11,
		category: "5-Axis",
		badge: "Aero",
		title: "Aerospace 5-Axis",
		model: "5AX-700-AIR",
		image:
			"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "24k RPM" },
			{ icon: Settings, label: "Slots", value: "48 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.001" },
			{ icon: ShieldCheck, label: "Warr.", value: "5 Yr" },
		],
	},
	{
		id: 12,
		category: "5-Axis",
		badge: "Compact",
		title: "Lab 5-Axis",
		model: "5AX-MINI",
		image:
			"https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "30k RPM" },
			{ icon: Settings, label: "Slots", value: "12 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 13,
		category: "Turning",
		badge: "New",
		title: "CNC Lathe",
		model: "NL-250",
		image:
			"https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "4k RPM" },
			{ icon: Settings, label: "Turret", value: "10 Pos" },
			{ icon: Disc, label: "Prec.", value: "0.008" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 14,
		category: "Turning",
		badge: "Pro",
		title: "Pro Lathe",
		model: "NL-400",
		image:
			"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "3k RPM" },
			{ icon: Settings, label: "Turret", value: "12 Pos" },
			{ icon: Disc, label: "Prec.", value: "0.008" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 15,
		category: "Turning",
		badge: "Dual",
		title: "Twin Spindle Lathe",
		model: "TSL-200",
		image:
			"https://images.unsplash.com/photo-1565706482631-7a4616c68e37?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "6k RPM" },
			{ icon: Settings, label: "Turret", value: "24 Pos" },
			{ icon: Disc, label: "Prec.", value: "0.005" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
	{
		id: 16,
		category: "Turning",
		badge: "Swift",
		title: "Swiss Turn",
		model: "SW-12",
		image:
			"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "10k RPM" },
			{ icon: Settings, label: "Turret", value: "Live" },
			{ icon: Disc, label: "Prec.", value: "0.001" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
	{
		id: 17,
		category: "Surface Grinder",
		badge: "Manual",
		title: "Surface Grinder",
		model: "SG-150",
		image:
			"https://images.unsplash.com/photo-1565035014741-a09f5c587705?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Wheel", value: "3k RPM" },
			{ icon: Settings, label: "Table", value: "Manual" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "1 Yr" },
		],
	},
	{
		id: 18,
		category: "Surface Grinder",
		badge: "Auto",
		title: "Auto Grinder",
		model: "SG-300A",
		image:
			"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Wheel", value: "3k RPM" },
			{ icon: Settings, label: "Table", value: "Hydraulic" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 19,
		category: "Surface Grinder",
		badge: "Large",
		title: "Heavy Grinder",
		model: "SG-800HD",
		image:
			"https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Wheel", value: "2k RPM" },
			{ icon: Settings, label: "Table", value: "Auto" },
			{ icon: Disc, label: "Prec.", value: "0.005" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 20,
		category: "Surface Grinder",
		badge: "Precision",
		title: "Ultra Grinder",
		model: "SG-UL-1",
		image:
			"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Wheel", value: "5k RPM" },
			{ icon: Settings, label: "Table", value: "CNC" },
			{ icon: Disc, label: "Prec.", value: "0.0005" },
			{ icon: ShieldCheck, label: "Warr.", value: "5 Yr" },
		],
	},
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
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
	);
};

const ProductsSection: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredProducts =
		activeFilter === "All"
			? products
			: products.filter(
					(product: Product) => product.category === activeFilter
			  );

	return (
		<section className="w-full py-20 bg-slate-900 text-white">
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
