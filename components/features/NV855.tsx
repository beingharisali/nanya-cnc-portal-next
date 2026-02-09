import React from "react";

// 1. TypeScript Interface for the 7 Sections
interface TechSectionProps {
	title: string;
	subtitle: string;
	items: string[];
	imageUrl: string;
	isReversed: boolean;
	sectionNumber: string;
}

// 2. Individual Feature Section Component
const TechSection: React.FC<TechSectionProps> = ({
	title,
	subtitle,
	items,
	imageUrl,
	isReversed,
	sectionNumber,
}) => (
	<section className=" mx-auto mb-20 group">
		<div className=" backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700">
			<div className="grid lg:grid-cols-2 gap-0 items-stretch">
				<div
					className={`p-10 md:p-16 flex flex-col justify-center space-y-8 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
					<div className="space-y-3">
						<h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9]">
							{title}
						</h2>
						<p className="text-orange-500 font-bold text-xs tracking-widest uppercase">
							{subtitle}
						</p>
					</div>

					<ul className="space-y-4">
						{items.map((text, i) => (
							<li
								key={i}
								className="flex items-start gap-4 text-[11px] md:text-[13px] leading-relaxed text-gray-400 uppercase tracking-widest font-semibold  transition-colors">
								{text}
							</li>
						))}
					</ul>
				</div>

				<div
					className={`relative min-h-[500px] overflow-hidden  ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
					<img
						src={imageUrl}
						alt={title}
						className="absolute inset-0 w-full h-full object-cover"
					/>
					<div className="absolute inset-0 via-transparent to-transparent pointer-events-none" />
					<div className="absolute bottom-10 right-10">
						<div className="w-12 h-1 " />
					</div>
				</div>
			</div>
		</div>
	</section>
);

const NV855ProductPage: React.FC = () => {
	const sections = [
		{
			title: "Core Brand Spirit",
			subtitle: "Strong & Trust-Building",
			items: [
				"Precision is not sourced. It is controlled.",
				"We don't just assemble machines. We validate performance.",
				"Foundation of engineering excellence.",
			],
			imageUrl: "/nv/NV-855-01.png",
			isReversed: false,
		},
		{
			title: "Vertical Column",
			subtitle: "Machine Frame Structure",
			items: [
				"High-precision CNC Milling structure.",
				"Vertical column optimized for high-load cycles.",
				"Machining Center NV-855 Vertical Milling Cnc.",
			],
			imageUrl: "/feature/nv-855/01.png",
			isReversed: true,
		},
		{
			title: "HT300 Cast Iron",
			subtitle: "Material Integrity",
			items: [
				"High-Grade HT300 Cast Iron usage.",
				"High rigidity, strength, and thermal stability.",
				"Minimized deformation during continuous operation.",
			],
			imageUrl: "/feature/nv-855/02.png",
			isReversed: false,
		},
		{
			title: "T-Base Structure",
			subtitle: "Stroke Support Optimization",
			items: [
				"T-base rigid structure for maximum support.",
				"Eliminates overhang issues during extreme axis movement.",
				"Consistent accuracy across the entire travel range.",
			],
			imageUrl: "/feature/nv-855/03.png",
			isReversed: true,
		},
		{
			title: "Royal PTC Spindle",
			subtitle: "DDS Technology",
			items: [
				"High-Speed Spindle Unit (Made in Taiwan).",
				"Direct driven technology (DDS).",
				"Thermal stability and runout verified before installation.",
			],
			imageUrl: "/feature/nv-855/05.png",
			isReversed: false,
		},
		{
			title: "Linear Motion Way",
			subtitle: "HIWIN / Noulei Components",
			items: [
				"High-precision ball screws (ground or rolled).",
				"Heavy load series with internal/endcap recirculation.",
				"High axial stiffness and low friction.",
			],
			imageUrl: "/feature/nv-855/04.png",
			isReversed: true,
		},
		{
			title: "Validation Art",
			subtitle: "QC & Calibration Excellence",
			items: [
				"XL Laser & XC Compensator environmental sensors.",
				"Linear Interferometer system verification.",
				"Micron-level accuracy through proprietary software.",
			],
			imageUrl: "/feature/nv-855/06.png",
			isReversed: false,
		},
	];

	return (
		<div className="min-h-screen bg-transparent py-20 font-sans text-white">
			{/* RENDER THE 7 SECTIONS */}
			<div className="relative z-10 space-y-12">
				{sections.map((section, idx) => (
					<TechSection
						key={idx}
						sectionNumber={`0${idx + 1}`}
						title={section.title}
						subtitle={section.subtitle}
						items={section.items}
						imageUrl={section.imageUrl}
						isReversed={section.isReversed}
					/>
				))}
			</div>

			{/* FOOTER LABEL */}
		</div>
	);
};

export default NV855ProductPage;
