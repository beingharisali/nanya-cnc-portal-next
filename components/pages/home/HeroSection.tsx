"use client";
import Link from "next/link";
import React from "react";
import { FaProjectDiagram, FaGlobe, FaClock } from "react-icons/fa";

export default function HeroSection() {
	return (
		<section className="bg-gray-900 min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 lg:pt-40 lg:pb-20">
			<div className="flex flex-col lg:flex-row items-center justify-between mx-auto w-[90%] max-w-7xl gap-10 lg:gap-12">
				<div className="flex-1 text-center lg:text-left w-full lg:max-w-[50%] order-2 lg:order-1">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
						PRECISION
					</h1>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 leading-tight">
						CNC
					</h1>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
						EXCELLENCE
					</h1>

					<p className="text-base md:text-lg lg:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0">
						World-class CNC machine center engineered for ultimate precision.
						Trusted by manufacturers across 50+ countries.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<Link href="/products" className="w-full sm:w-auto">
							<button className="w-full px-8 py-3 md:py-4 bg-orange-500 text-white rounded-[40px] text-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
								Explore Machines
							</button>
						</Link>
						<Link href="/about" className="w-full sm:w-auto">
							<button className="w-full px-8 py-3 md:py-4 rounded-[40px] border-2 border-gray-500 text-white text-lg font-semibold hover:bg-gray-500 hover:text-white transition-colors duration-300">
								Our Story
							</button>
						</Link>
					</div>

					<div className="grid grid-cols-3 gap-2 md:gap-8 mt-12">
						<div className="text-center">
							<div className="bg-white/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2">
								<FaProjectDiagram className="text-orange-500 text-lg md:text-xl" />
							</div>
							<h3 className="text-xl md:text-3xl font-bold text-orange-500">
								500+
							</h3>
							<p className="text-white text-xs md:text-sm">Projects</p>
						</div>
						<div className="text-center">
							<div className="bg-white/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2">
								<FaGlobe className="text-orange-500 text-lg md:text-xl" />
							</div>
							<h3 className="text-xl md:text-3xl font-bold text-orange-500">
								50+
							</h3>
							<p className="text-white text-xs md:text-sm">Countries</p>
						</div>
						<div className="text-center">
							<div className="bg-white/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2">
								<FaClock className="text-orange-500 text-lg md:text-xl" />
							</div>
							<h3 className="text-xl md:text-3xl font-bold text-orange-500">
								25+
							</h3>
							<p className="text-white text-xs md:text-sm">Years</p>
						</div>
					</div>
				</div>

				<div className="flex-1 w-full sm:w-[85%] lg:w-[50%] order-1 lg:order-2">
					<img
						src="/Hero.jpeg"
						alt="CNC Machine center"
						className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-orange-500/10"
					/>
				</div>
			</div>
		</section>
	);
}
