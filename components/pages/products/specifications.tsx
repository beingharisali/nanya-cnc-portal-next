import React from "react";

export default function Specifications() {
	return (
		<>
			<div>
				<div className="flex justify-center items-center my-10">
					<h1 className="text-3xl">Specification</h1>
				</div>
			</div>
			<section className="max-w-7xl mx-auto px-6 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
					<div className="lg:col-span-5">
						<div className="sticky top-28">
							<div className="bg-linear-to-b from-gray-200 to-gray-700 rounded-3xl p-10 border border-slate-800 shadow-2xl group">
								<img
									src={detailedModel.image}
									alt={detailedModel.name}
									className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="mt-8 p-6 bg-orange-600/10 border border-orange-600/20 rounded-2xl">
								<h4 className="text-orange-500 font-bold mb-2">
									Machine Highlight
								</h4>
								<p className="text-sm text-slate-400 leading-relaxed">
									The {detailedModel.name} features{" "}
									{detailedModel.spindle[1].valM} technology with a maximum
									speed of {detailedModel.spindle[2].valM} RPM, designed for
									high-precision {parentProduct.category} applications.
								</p>
							</div>
						</div>
					</div>

					<div className="lg:col-span-7">
						<div className="flex items-center gap-3 mb-10">
							<Settings className="text-orange-500" size={32} />
							<h2 className="text-3xl font-bold text-white uppercase italic">
								Technical Data
							</h2>
						</div>

						<SpecTable title="Travel (Axes)" data={detailedModel.travel} />
						<SpecTable title="Work Table" data={detailedModel.table} />
						<SpecTable title="Spindle Unit" data={detailedModel.spindle} />
						<SpecTable title="Feed Rates" data={detailedModel.feedRate} />
						<SpecTable
							title="Automatic Tool Changer (ATC)"
							data={detailedModel.atc}
						/>
						<SpecTable title="Drive Motors" data={detailedModel.motors} />
						<SpecTable
							title="Accuracy (JIS Std)"
							data={detailedModel.accuracy}
						/>
						<SpecTable
							title="Physical Dimensions & Power"
							data={detailedModel.physical}
						/>
					</div>
				</div>

				<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-slate-900/80 p-10 rounded-[2.5rem] border border-slate-800">
						<h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
							<CheckCircle2 className="text-green-500" /> Standard Accessories
						</h3>
						<div className="grid grid-cols-1 gap-4">
							{detailedModel.standardAccessories.map(
								(item: string, i: number) => (
									<div key={i} className="flex items-start gap-3 group">
										<div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
										<span className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">
											{item}
										</span>
									</div>
								)
							)}
						</div>
					</div>

					<div className="bg-slate-900/80 p-10 rounded-[2.5rem] border border-slate-800">
						<h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
							<Box className="text-orange-500" /> Optional Accessories
						</h3>
						<div className="grid grid-cols-1 gap-4">
							{detailedModel.optionalAccessories.map(
								(item: string, i: number) => (
									<div key={i} className="flex items-start gap-3 group">
										<div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2 shrink-0 group-hover:bg-orange-500 transition-colors" />
										<span className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">
											{item}
										</span>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
