"use client";
import Link from "next/link";
import React from "react";
import { FaProjectDiagram, FaGlobe, FaClock } from "react-icons/fa";

export default function HeroSection() {
	return (
		<section className="bg-gray-900 min-h-screen flex items-center justify-center pt-40 pb-20 mb-20">
			<div className="flex flex-col lg:flex-row items-center justify-between  mx-auto w-[90%] gap-12">
				<div className="flex-1 text-center lg:text-left w-[45%]">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
						PRECISION
					</h1>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-4">
						CNC
					</h1>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
						EXCELLENCE
					</h1>
					<p className="text-lg md:text-xl text-white mb-8">
						World-class CNC machine center engineered for ultimate precision.
						Trusted by manufacturers across 50+ countries.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<button className="px-8 py-4 bg-orange-500 text-white rounded-[40px] text-lg font-semibold hover:bg-gray-600 transition-colors duration-300">
							<Link href={"/products"}>Explore Machines</Link>
						</button>
						<Link href={"/about"}>
							<button className="px-8 rounded-[40px] py-4 border-2 border-gray-500 text-white  text-lg font-semibold hover:bg-gray-500 hover:text-white transition-colors duration-300">
								Our Story
							</button>
						</Link>
					</div>
					<div className="flex gap-8 mt-8 justify-around ">
						<div className="text-center">
							<div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
								<FaProjectDiagram
									className="text-orange-500 text-xl"
									aria-hidden="true"
								/>
							</div>
							<h3 className="text-3xl font-bold text-orange-500">500+</h3>
							<p className="text-white text-sm">Projects</p>
						</div>
						<div className="text-center">
							<div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
								<FaGlobe
									className="text-orange-500 text-xl"
									aria-hidden="true"
								/>
							</div>
							<h3 className="text-3xl font-bold text-orange-500">50+</h3>
							<p className="text-white text-sm">Countries</p>
						</div>
						<div className="text-center">
							<div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
								<FaClock
									className="text-orange-500 text-xl"
									aria-hidden="true"
								/>
							</div>
							<h3 className="text-3xl font-bold text-orange-500">25+</h3>
							<p className="text-white text-sm">Years</p>
						</div>
					</div>
				</div>
				<div className="flex-1 w-full sm:w-[70%] lg:w-[45%]">
					<img
						src="https://images.pexels.com/photos/30889575/pexels-photo-30889575.jpeg"
						alt="CNC Machine center"
						className="w-full h-auto object-cover rounded-lg shadow-2xl"
					/>
				</div>
			</div>
		</section>
	);
}
