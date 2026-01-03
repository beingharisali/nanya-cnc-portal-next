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
		image:
			"https://media.istockphoto.com/id/1398763091/photo/mechanic-repairing-dent-on-a-car-body-at-auto-service-center.jpg?s=612x612&w=0&k=20&c=0NR4LNBzEkkFIMDGsJ9HU-Ysk6zW8egFsswQdOmYEHU=",
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
			"https://media.istockphoto.com/id/2149279878/photo/shot-blasting-man-in-production-the-sandblaster-is-sending-to-steel-material-abrasive.jpg?s=612x612&w=0&k=20&c=iVntK-1R42eULcv0hVGUEWlhHe0fweeAXU5sZQ4Dz04=",
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
			"https://plus.unsplash.com/premium_photo-1682144880138-9f1c0bfe6fa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdnklMjBtYWNoaW5lJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
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
			"https://plus.unsplash.com/premium_photo-1664298925852-a10f7112c548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
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
			"https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbmRlcnxlbnwwfHwwfHx8MA%3D%3D",
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
