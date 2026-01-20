import React, { createContext, useContext } from "react";

interface model {
	name?: string;
	image?: string;
	feature?: string;
	travel?: any;
	table?: any;
	spindle?: any;
	feedRate?: any;
	atc?: any;
	motors?: any;
	accuracy?: any;
	physical?: any;
	standardAccessories?: any;
	optionalAccessories?: any;
}
interface ModelContextType {
	models: any | model[];
}

const models: model[] = [
	{
		name: "VMC-NANO-X8",
		image: "/x8/x8.png",
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
				valM: "90 - 600",
				valI: "3.54 - 23.62",
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
				valM: "1000 x 500",
				valI: "39.37 x 19.69",
			},
			{
				item: "T-Slot (Number x Width x Pitch)",
				unitM: "mm",
				unitI: "inch",
				valM: "3 x 18 x 102",
				valI: "3 x 0.71 x 4.02",
			},
			{
				item: "Maximum Table Load",
				unitM: "kg",
				unitI: "lb",
				valM: "700",
				valI: "1,543",
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
			{
				item: "Spindle Motor Torque",
				unitM: "N-m",
				unitI: "ft-lb",
				valM: "96",
				valI: "70.8",
			},
		],
		feedRate: [
			{
				item: "X.Y Axis Rapid Traverse",
				unitM: "m/min",
				unitI: "ipm",
				valM: "40 / 40",
				valI: "1,575 / 1,575",
			},
			{
				item: "Z-Axis Rapid Traverse",
				unitM: "m/min",
				unitI: "ipm",
				valM: "40",
				valI: "1,575",
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
		],
	},
	{
		name: "VMC-NANO-X10",
		image: "/x8/x10.png",
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
];
const modelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: { children: React.ReactNode }) {
	return (
		<modelContext.Provider value={{ models }}>{children}</modelContext.Provider>
	);
}

export function useModels() {
	const context = useContext(modelContext);
	if (!context) {
		throw new Error("Use Models must be used within ModelProvider");
	}
	return context;
}
