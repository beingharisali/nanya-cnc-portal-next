import React from "react";
import { Target, Wrench, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
	return (
		<section className="w-full pt-30 pb-16 bg-white text-slate-800 ">
			<div className="w-[90%] mx-auto">
				<div className="text-center w-[90%] mx-auto mb-16 space-y-4">
					<div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-2">
						Our Story
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-slate-900">
						Engineering Excellence <br />
						<span className="text-orange-500">Since 2010</span>
					</h1>
					<p className="text-slate-500 max-w-2xl mx-auto text-lg">
						From a small workshop in China to a global leader in CNC
						manufacturing, our journey is defined by relentless pursuit of
						precision.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="relative rounded-2xl overflow-hidden shadow-xl group">
						<img
							src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
							alt="Factory Engineer"
							className="w-full h-125 object-cover transform transition-transform duration-700 group-hover:scale-105"
						/>

						<div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-8 text-white flex gap-8">
							<div>
								<div className="text-3xl font-bold">50,000+</div>
								<div className="text-sm text-gray-300">sqm Factory</div>
							</div>
							<div className="w-px bg-gray-500/50 h-full"></div>
							<div>
								<div className="text-3xl font-bold">500+</div>
								<div className="text-sm text-gray-300">Team Members</div>
							</div>
						</div>
					</div>

					<div className="space-y-8">
						<h2 className="text-3xl font-bold text-slate-900">
							Building Machines That Build Industries
						</h2>

						<div className="space-y-4 text-slate-600 leading-relaxed">
							<p>
								NANYA CNC was founded with a singular vision: to democratize
								access to world-class CNC technology. What began as a modest
								operation has grown into a state-of-the-art manufacturing
								powerhouse.
							</p>
							<p>
								Our commitment to quality is unwavering. Every machine that
								leaves our facility undergoes rigorous testing protocols,
								ensuring that our clients receive equipment that meets the
								highest international standards.
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
							<div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
								<div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center text-orange-600 mb-3">
									<Target size={20} />
								</div>
								<h3 className="font-bold text-slate-900">Precision</h3>
								<p className="text-sm text-slate-500 mt-1">
									Micron-level accuracy in every machine
								</p>
							</div>

							<div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
								<div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center text-orange-600 mb-3">
									<Wrench size={20} />
								</div>
								<h3 className="font-bold text-slate-900">Innovation</h3>
								<p className="text-sm text-slate-500 mt-1">
									Continuous R&D investment
								</p>
							</div>

							<div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
								<div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center text-orange-600 mb-3">
									<Users size={20} />
								</div>
								<h3 className="font-bold text-slate-900">Expert Team</h3>
								<p className="text-sm text-slate-500 mt-1">
									Dedicated support & engineering
								</p>
							</div>

							<div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
								<div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center text-orange-600 mb-3">
									<TrendingUp size={20} />
								</div>
								<h3 className="font-bold text-slate-900">Global Scale</h3>
								<p className="text-sm text-slate-500 mt-1">
									Serving clients worldwide
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
