"use client";
import React, { createContext, useContext } from "react";
import { Zap, Settings, Disc, ShieldCheck, LucideIcon } from "lucide-react";
import Product, { ProductSpec } from "@/types/product";

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
		badge: "Best Selling",
		title: "Vertical Machining Center",
		model: "VMC-NANO-X8 / X10",
		badge2: "Eco-Line",
		image: "/testignseller1.jpeg",
		specs: [
			{ icon: Zap, label: "Spindle", value: "12,000 RPM" },
			{ icon: Settings, label: "Tool Slots", value: "24 ATC" },
			{ icon: Disc, label: "Precision", value: "±0.005mm" },
			{ icon: ShieldCheck, label: "Warranty", value: "2 Years" },
		],
		models: [
			{
				name: "VMC-NANO-X8",
				image: "/x8/img.png",
				travel: [
					{
						item: "X-Axis Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "800",
						valI: "31.50",
					},
					{
						item: "Y-Axis Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "500",
						valI: "19.69",
					}, //
					{
						item: "Z-Axis Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "550",
						valI: "21.65",
					}, //
					{
						item: "Spindle Nose to Table",
						unitM: "mm",
						unitI: "inch",
						valM: "90 - 600",
						valI: "3.54 - 23.62",
					}, //
					{
						item: "Spindle Center to Z-Rail Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "550",
						valI: "21.65",
					}, //
					{
						item: "Three-Axis Guideway",
						unitM: "",
						unitI: "",
						valM: "X Y Z Load Roller Linear Guideway",
						valI: "X Y Z Load Roller Linear Guideway",
					}, //
				],
				table: [
					{
						item: "Table Size",
						unitM: "mm",
						unitI: "inch",
						valM: "1000 x 500",
						valI: "39.37 x 19.69",
					}, //
					{
						item: "T-Slot (Number x Width x Pitch)",
						unitM: "mm",
						unitI: "inch",
						valM: "3 x 18 x 102",
						valI: "3 x 0.71 x 4.02",
					}, //
					{
						item: "Maximum Table Load",
						unitM: "kg",
						unitI: "lb",
						valM: "700",
						valI: "1,543",
					}, //
				],
				spindle: [
					{
						item: "Spindle Taper",
						unitM: "",
						unitI: "",
						valM: "BT-40 (Ø140mm)",
						valI: "BT-40 (Ø140mm)",
					}, //
					{
						item: "Spindle Driven",
						unitM: "",
						unitI: "",
						valM: "Direct Driven (DDS)",
						valI: "Direct Driven (DDS)",
					}, //
					{
						item: "Spindle Speed",
						unitM: "rpm",
						unitI: "rpm",
						valM: "12,000",
						valI: "12,000",
					}, //
					{
						item: "Spindle Motor Torque",
						unitM: "N-m",
						unitI: "ft-lb",
						valM: "96",
						valI: "70.8",
					}, //
				],
				feedRate: [
					{
						item: "X.Y Axis Rapid Traverse",
						unitM: "m/min",
						unitI: "ipm",
						valM: "40 / 40",
						valI: "1,575 / 1,575",
					}, //
					{
						item: "Z-Axis Rapid Traverse",
						unitM: "m/min",
						unitI: "ipm",
						valM: "40",
						valI: "1,575",
					}, //
					{
						item: "X.Y.Z Max. Cutting Feed Rate",
						unitM: "m/min",
						unitI: "ipm",
						valM: "12",
						valI: "472",
					}, //
				],
				atc: [
					{
						item: "ATC Type",
						unitM: "",
						unitI: "",
						valM: "Arm-Type (Tool to Tool)",
						valI: "Arm-Type (Tool to Tool)",
					}, //
					{
						item: "Tool Storage Capacity",
						unitM: "T",
						unitI: "T",
						valM: "24",
						valI: "24",
					}, //
					{
						item: "Tool Change Time (T-T)",
						unitM: "sec",
						unitI: "sec",
						valM: "1.8",
						valI: "1.8",
					}, //
					{
						item: "Max. Tool Diameter x Length",
						unitM: "mm",
						unitI: "inch",
						valM: "Ø100 x 300",
						valI: "Ø3.94 x 11.81",
					}, //
					{
						item: "Max. Tool Weight",
						unitM: "kg",
						unitI: "lb",
						valM: "8",
						valI: "17.6",
					}, //
				],
				motors: [
					{
						item: "Spindle Motor (Rate/Max.)",
						unitM: "kW",
						unitI: "HP",
						valM: "7.5 / 11",
						valI: "10 / 14.7",
					}, //
					{
						item: "X.Y Axis Servo Motor",
						unitM: "kW",
						unitI: "HP",
						valM: "2.0",
						valI: "2.68",
					}, //
					{
						item: "Z Axis Servo Motor (w/ Brake)",
						unitM: "kW",
						unitI: "HP",
						valM: "3.0",
						valI: "4.02",
					}, //
				],
				accuracy: [
					{
						item: "Positioning Accuracy (JIS)",
						unitM: "mm",
						unitI: "inch",
						valM: "± 0.008 / 300",
						valI: "± 0.0003",
					}, //
					{
						item: "Repeatability Accuracy (JIS)",
						unitM: "mm",
						unitI: "inch",
						valM: "± 0.003",
						valI: "± 0.0001",
					}, //
				],
				physical: [
					{
						item: "External Dimensions (LxWxH)",
						unitM: "mm",
						unitI: "inch",
						valM: "2300 x 2300 x 2400",
						valI: "90.6 x 90.6 x 94.5",
					}, //
					{
						item: "Gross Weight",
						unitM: "kg",
						unitI: "lb",
						valM: "4700",
						valI: "10,362",
					}, //
					{
						item: "Power Required",
						unitM: "kva",
						unitI: "kva",
						valM: "20",
						valI: "20",
					}, //
					{
						item: "Air Pressure Requirement",
						unitM: "kg/cm²",
						unitI: "psi",
						valM: "6 - 8",
						valI: "85 - 114",
					}, //
				],
				standardAccessories: [
					"BT-40 Direct Driven (DDS) 12,000 Rpm",
					"Tool Box & Tools",
					"Air-Blast Through Spindle",
					"Screw Type Chip Conveyor + Cart",
					"Work Lamp / Work LED Light",
					"Tools Length Measuring Equipment",
					"Three Color Light",
					"Arm-Type ATC-24 Tools",
					"Auto Power Off",
					"High Pressure Water & Air-Gun",
					"Auto Lubrication System",
					"Chip Flush System & Nobs",
					"Rigid Tapping & Threading System Operation",
					"Full Splash Guard",
					"Heat Exchanger for Controller Cabinet",
					"USB Interface",
					"Spindle Oil Coolant System",
					"Spindle Cutting Coolant Ring",
				], //
				optionalAccessories: [
					"4th Axis Rotary Table (Ø125 / Ø170 / Ø210 / Ø255mm)",
					"Heavy Spindle Motor (11KW / 18.5KW)",
					"Chain Type Chip Conveyor + Cart",
					"CE Safety Doors System",
					"Semi-Auto Rotary Table APC System",
					"Heavy Spindle Torque Motor",
					'LCD Screen 15"',
					"CE Approved Certification",
				], //
			},
			{
				name: "VMC-NANO-X10",
				image: "/x8/img.png",
				travel: [
					{
						item: "X-Axis Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "1,020",
						valI: "40.16",
					},
					{
						item: "Y-Axis Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "550",
						valI: "21.65",
					},
					{
						item: "Z-Axis Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "550",
						valI: "21.65",
					},
					{
						item: "Spindle Nose to Table",
						unitM: "mm",
						unitI: "inch",
						valM: "100 - 700",
						valI: "3.94 - 27.56",
					},
					{
						item: "Spindle Center to Z-Rail Travel",
						unitM: "mm",
						unitI: "inch",
						valM: "550",
						valI: "21.65",
					},
					{
						item: "Three-Axis Guideway",
						unitM: "",
						unitI: "",
						valM: "X Y Z Load Roller Linear Guideway",
						valI: "X Y Z Load Roller Linear Guideway",
					},
				],
				table: [
					{
						item: "Table Size",
						unitM: "mm",
						unitI: "inch",
						valM: "1200 x 600",
						valI: "47.24 x 23.62",
					},
					{
						item: "T-Slot (Number x Width x Pitch)",
						unitM: "mm",
						unitI: "inch",
						valM: "5 x 18 x 100",
						valI: "5 x 0.71 x 3.94",
					},
					{
						item: "Maximum Table Load",
						unitM: "kg",
						unitI: "lb",
						valM: "900",
						valI: "1,984",
					},
				],
				spindle: [
					{
						item: "Spindle Taper",
						unitM: "",
						unitI: "",
						valM: "BT-40 (Ø140mm)",
						valI: "BT-40 (Ø140mm)",
					},
					{
						item: "Spindle Driven",
						unitM: "",
						unitI: "",
						valM: "Direct Driven (DDS)",
						valI: "Direct Driven (DDS)",
					},
					{
						item: "Spindle Speed",
						unitM: "rpm",
						unitI: "rpm",
						valM: "12,000",
						valI: "12,000",
					},
				],
				feedRate: [
					{
						item: "X.Y Axis Rapid Traverse",
						unitM: "m/min",
						unitI: "ipm",
						valM: "36 / 36",
						valI: "1,417 / 1,417",
					},
					{
						item: "Z-Axis Rapid Traverse",
						unitM: "m/min",
						unitI: "ipm",
						valM: "30",
						valI: "1,181",
					},
					{
						item: "X.Y.Z Max. Cutting Feed Rate",
						unitM: "m/min",
						unitI: "ipm",
						valM: "12",
						valI: "472",
					},
				],
				atc: [
					{
						item: "ATC Type",
						unitM: "",
						unitI: "",
						valM: "Arm-Type (Tool to Tool)",
						valI: "Arm-Type (Tool to Tool)",
					},
					{
						item: "Tool Storage Capacity",
						unitM: "T",
						unitI: "T",
						valM: "24",
						valI: "24",
					},
					{
						item: "Tool Change Time (T-T)",
						unitM: "sec",
						unitI: "sec",
						valM: "1.8",
						valI: "1.8",
					},
					{
						item: "Max. Tool Diameter x Length",
						unitM: "mm",
						unitI: "inch",
						valM: "Ø100 x 300",
						valI: "Ø3.94 x 11.81",
					},
					{
						item: "Max. Tool Weight",
						unitM: "kg",
						unitI: "lb",
						valM: "8",
						valI: "17.6",
					},
				],
				motors: [
					{
						item: "Spindle Motor (Rate/Max.)",
						unitM: "kW",
						unitI: "HP",
						valM: "7.5 / 11",
						valI: "10 / 14.7",
					},
					{
						item: "X.Y Axis Servo Motor",
						unitM: "kW",
						unitI: "HP",
						valM: "2.0",
						valI: "2.68",
					},
					{
						item: "Z Axis Servo Motor (w/ Brake)",
						unitM: "kW",
						unitI: "HP",
						valM: "3.0",
						valI: "4.02",
					},
				],
				accuracy: [
					{
						item: "Positioning Accuracy (JIS)",
						unitM: "mm",
						unitI: "inch",
						valM: "± 0.008 / 300",
						valI: "± 0.0003 / 11.8",
					},
					{
						item: "Repeatability Accuracy (JIS)",
						unitM: "mm",
						unitI: "inch",
						valM: "± 0.003",
						valI: "± 0.0001",
					},
				],
				physical: [
					{
						item: "External Dimensions (LxWxH)",
						unitM: "mm",
						unitI: "inch",
						valM: "3300 x 2300 x 2600",
						valI: "129.9 x 90.6 x 102.4",
					},
					{
						item: "Gross Weight",
						unitM: "kg",
						unitI: "lb",
						valM: "5700",
						valI: "12,566",
					},
					{
						item: "Power Required",
						unitM: "kva",
						unitI: "kva",
						valM: "20",
						valI: "20",
					},
					{
						item: "Air Pressure Requirement",
						unitM: "kg/cm²",
						unitI: "psi",
						valM: "6 - 8",
						valI: "85 - 114",
					},
					{
						item: "Ground Clearance",
						unitM: "mm",
						unitI: "inch",
						valM: "2850",
						valI: "112.2",
					},
				],
				standardAccessories: [
					"BT-40 Direct Driven (DDS) 12,000 Rpm",
					"Tool Box & Tools",
					"Air-Blast Through Spindle",
					"Screw Type Chip Conveyor + Cart",
					"Work Lamp / Work LED Light",
					"Tools Length Measuring Equipment",
					"Three Color Light",
					"Arm-Type ATC-24 Tools",
					"Auto Power Off",
					"High Pressure Water & Air-Gun",
					"Auto Lubrication System",
					"Chip Flush System & Nobs",
					"Rigid Tapping & Threading System Operation",
					"Full Splash Guard",
					"Heat Exchanger for Controller Cabinet",
					"USB Interface",
					"Spindle Oil Coolant System",
					"Spindle Cutting Coolant Ring",
				],
				optionalAccessories: [
					"4th Axis Rotary Table (Ø125 / Ø170 / Ø210 / Ø255mm)",
					"Heavy Spindle Motor (11KW / 18.5KW)",
					"Chain Type Chip Conveyor + Cart",
					"CE Safety Doors System",
					"Semi-Auto Rotary Table APC System",
					"Heavy Spindle Torque Motor",
					'LCD Screen 15"',
					"CE Approved Certification",
				],
			},
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
		badge: "Reliable",
		title: "Mid Range VMC",
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
			"https://plus.unsplash.com/premium_photo-1682144880138-9f1c0bfe6fa7?w=600&auto=format&fit=crop&q=60",
		specs: [
			{ icon: Zap, label: "Spindle", value: "8k RPM" },
			{ icon: Settings, label: "Slots", value: "80 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.008" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
	{
		id: 10,
		category: "Horizontal",
		badge: "Compact",
		title: "Mini HMC",
		model: "HMC-400-S",
		image:
			"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "18k RPM" },
			{ icon: Settings, label: "Slots", value: "20 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 11,
		category: "Horizontal",
		badge: "New",
		title: "Smart HMC",
		model: "HMC-AI-80",
		image:
			"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "15k RPM" },
			{ icon: Settings, label: "Slots", value: "60 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.001" },
			{ icon: ShieldCheck, label: "Warr.", value: "5 Yr" },
		],
	},
	{
		id: 12,
		category: "Horizontal",
		badge: "Dual Pallet",
		title: "Production HMC",
		model: "HMC-DUPLEX",
		image:
			"https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "10k RPM" },
			{ icon: Settings, label: "Slots", value: "120 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.005" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
	{
		id: 13,
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
		id: 14,
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
		id: 15,
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
		id: 16,
		category: "5-Axis",
		badge: "Elite",
		title: "Titanium 5AX",
		model: "5AX-ULTRA-900",
		image:
			"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "15k RPM" },
			{ icon: Settings, label: "Slots", value: "120 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.0005" },
			{ icon: ShieldCheck, label: "Warr.", value: "5 Yr" },
		],
	},
	{
		id: 17,
		category: "5-Axis",
		badge: "Versatile",
		title: "Universal 5-Axis",
		model: "U-5AX-600",
		image:
			"https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "20k RPM" },
			{ icon: Settings, label: "Slots", value: "32 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
	{
		id: 18,
		category: "5-Axis",
		badge: "High Torque",
		title: "Milling Center",
		model: "5AX-TORQUE",
		image:
			"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "6k RPM" },
			{ icon: Settings, label: "Slots", value: "40 ATC" },
			{ icon: Disc, label: "Prec.", value: "0.004" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 19,
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
		id: 20,
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
		id: 21,
		category: "Turning",
		badge: "Dual",
		title: "Twin Spindle Lathe",
		model: "TSL-200",
		image:
			"https://plus.unsplash.com/premium_photo-1664298925852-a10f7112c548?w=600&auto=format&fit=crop&q=60",
		specs: [
			{ icon: Zap, label: "Spindle", value: "6k RPM" },
			{ icon: Settings, label: "Turret", value: "24 Pos" },
			{ icon: Disc, label: "Prec.", value: "0.005" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
	{
		id: 22,
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
		id: 23,
		category: "Turning",
		badge: "Heavy",
		title: "Bore Lathe",
		model: "NL-800-B",
		image:
			"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "1.5k RPM" },
			{ icon: Settings, label: "Turret", value: "8 Pos" },
			{ icon: Disc, label: "Prec.", value: "0.012" },
			{ icon: ShieldCheck, label: "Warr.", value: "5 Yr" },
		],
	},
	{
		id: 24,
		category: "Turning",
		badge: "Fast",
		title: "Precision Turning",
		model: "NL-FAST-40",
		image:
			"https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Spindle", value: "8k RPM" },
			{ icon: Settings, label: "Turret", value: "16 Pos" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 25,
		category: "Surface Grinder",
		badge: "Manual",
		title: "Surface Grinder",
		model: "SG-150",
		image:
			"https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?w=600&auto=format&fit=crop&q=60",
		specs: [
			{ icon: Zap, label: "Wheel", value: "3k RPM" },
			{ icon: Settings, label: "Table", value: "Manual" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "1 Yr" },
		],
	},
	{
		id: 26,
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
		id: 27,
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
		id: 28,
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
	{
		id: 29,
		category: "Surface Grinder",
		badge: "Compact",
		title: "Toolroom Grinder",
		model: "SG-MINI-X",
		image:
			"https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Wheel", value: "4.5k RPM" },
			{ icon: Settings, label: "Table", value: "Manual" },
			{ icon: Disc, label: "Prec.", value: "0.002" },
			{ icon: ShieldCheck, label: "Warr.", value: "2 Yr" },
		],
	},
	{
		id: 30,
		category: "Surface Grinder",
		badge: "Industrial",
		title: "Rotary Grinder",
		model: "SG-ROT-50",
		image:
			"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
		specs: [
			{ icon: Zap, label: "Wheel", value: "1.5k RPM" },
			{ icon: Settings, label: "Table", value: "Rotary" },
			{ icon: Disc, label: "Prec.", value: "0.008" },
			{ icon: ShieldCheck, label: "Warr.", value: "3 Yr" },
		],
	},
];

const filters: FilterOption[] = [
	{ name: "Vertical", count: "6 Models" },
	{ name: "Horizontal", count: "6 Models" },
	{ name: "5-Axis", count: "6 Models" },
	{ name: "Turning", count: "6 Models" },
	{ name: "Surface Grinder", count: "6 Models" },
	{ name: "All", count: "30 Models" },
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
