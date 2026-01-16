import React from "react";

const RigiditySection = () => {
	const features = [
		"The rigid inverted Y-shaped structure has full stroke support without overhang that guarantees the most dynamic leveling accuracy",
		"Without counterweight design that enhances surface accuracy",
		"A 198% increase in column span significantly improves load-bearing capacity and rigidity, enhancing the structure's stability and reliability",
	];

	return (
		<section className="w-[90%]  mx-auto py-16 font-sans text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="flex flex-col justify-center">
					<h2 className="text-3xl font-bold mb-8 tracking-tight">
						Structure Rigidity
					</h2>
					<ul className="space-y-6">
						{features.map((text, index) => (
							<li key={index} className="flex items-start gap-4 group">
								<span className="text-[10px] mt-2 text-white shrink-0">▲</span>
								<p className="text-lg leading-snug opacity-90 group-hover:opacity-100 transition-opacity">
									{text}
								</p>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col items-center justify-end w-full">
					<div className="relative w-full max-w-md lg:max-w-full flex justify-center items-baseline gap-4">
						<div className="flex flex-col items-center w-full">
							<img
								src="https://www.ycmcnc.com/_upload/T11/2-Enforced%20Column%20Structure.jpg"
								alt="T series rigid structure"
								className="w-full h-auto object-contain rounded-2xl"
							/>
							<span className="mt-4 text-xl font-semibold tracking-wide uppercase">
								X Series
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RigiditySection;
