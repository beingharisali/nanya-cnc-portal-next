import React from "react";

const StructureSection = () => {
	const points = [
		"Cabinet design reduces transportation costs and decreases carbon emissions.",
		"The T11 and T13 are the first in the industry to obtain ISO14955 certification for green machine tools, contributing to net zero carbon emissions and fostering a sustainable future.",
		"Combining smart digital transformation, driving energy transition, and achieving net-zero carbon emissions to realize a circular economy.",
		"Incorporates energy-saving and carbon-reducing concepts into the machine manufacturing process, using low-pollution materials, lightweight design, and energy-efficient peripheral equipment to reduce power consumption.",
		"Smart management calculates carbon emissions, monitors carbon footprint, enhances production efficiency, and improves energy performance.",
	];

	return (
		<section className="w-full max-w-7xl mx-auto px-6 py-16 font-sans text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
				<div className="w-full flex justify-center lg:justify-start">
					<div className="relative w-full max-w-137.5 overflow-hidden rounded-2xl shadow-2xl">
						<img
							src="https://media.istockphoto.com/id/2218779162/photo/automatic-industry-robotic-lathe-system-shaping-metal-component-in-real-time-during.webp?a=1&b=1&s=612x612&w=0&k=20&c=BSWiGm1hefDWMKa4rcY4z0fqBiNEAH_iykMxqR00XP4="
							alt="Green Machine Technical Infographic"
							className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</div>

				<div className="flex flex-col">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight tracking-tight">
						ISO14955 Certified <br className="hidden md:block" />
						Green Machine Tools
					</h2>

					<ul className="space-y-5">
						{points.map((point, index) => (
							<li key={index} className="flex items-start gap-4">
								<span className="text-xs mt-2 shrink-0 opacity-80">▲</span>
								<p className="text-base md:text-lg leading-relaxed text-gray-200">
									{point}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default StructureSection;
