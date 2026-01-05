import React from "react";

const JourneySection = () => {
	const milestones = [
		{
			year: "2010",
			title: "Founded",
			description: "Started manufacturing in Guangdong",
		},
		{
			year: "2014",
			title: "Expansion",
			description: "First international export",
		},
		{
			year: "2018",
			title: "Innovation",
			description: "5-axis machining centers launched",
		},
		{
			year: "2025",
			title: "Global",
			description: "Serving 50+ countries worldwide",
		},
	];

	return (
		<section className="w-full py-20 bg-white">
			<div className="max-w-6xl w-[90%] mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-20">
					Our Journey
				</h2>

				<div className="relative">
					<div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-orange-100 -z-10 rounded-full" />

					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
						{milestones.map((item, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center group">
								<div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-200 mb-6 relative z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
									{item.year}
								</div>

								<div className="space-y-2">
									<h3 className="text-lg font-bold text-slate-900">
										{item.title}
									</h3>
									<p className="text-sm text-slate-500 font-medium max-w-45 mx-auto leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default JourneySection;
