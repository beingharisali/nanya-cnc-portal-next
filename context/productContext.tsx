"use client";
import React, { createContext, useContext } from "react";
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

interface ProductContextType {
	products: Product[];
	filters: FilterOption[];
}

const products: Product[] = [
	{
		id: 1,
		category: "Vertical",
		badge: "Best Seller",
		title: "Vertical Machining Center",
		model: "VMC-NANO-X8 / X10",
		image: "https://media.istockphoto.com/id/1398763091/photo/mechanic-repairing-dent-on-a-car-body-at-auto-service-center.jpg?s=612x612&w=0&k=20&c=0NR4LNBzEkkFIMDGsJ9HU-Ysk6zW8egFsswQdOmYEHU=",
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
		image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "20,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "30 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.003mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "2 Years" },
		],
	},
	{
		id: 3,
		category: "Horizontal",
		badge: "Performance",
		title: "Horizontal Machining Center",
		model: "HMC-630",
		image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "15,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "24 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.003mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "2 Years" },
		],
	},
];

const filters: FilterOption[] = [
	{ name: "Vertical", count: "6 Models" },
	{ name: "Horizontal", count: "3 Models" },
	{ name: "5-Axis", count: "3 Models" },
	{ name: "Turning", count: "4 Models" },
	{ name: "Surface Grinder", count: "4 Models" },
	{ name: "All", count: "20 Models" },
];

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
	return (
		<ProductContext.Provider value={{ products, filters }}>
			{children}
		</ProductContext.Provider>
	);
}

export function useProducts() {
	const context = useContext(ProductContext);
	if (!context) {
		throw new Error("useProducts must be used within ProductProvider");
	}
	return context;
}