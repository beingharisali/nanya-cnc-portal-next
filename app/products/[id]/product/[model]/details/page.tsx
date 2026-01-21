"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/pages/home/Footer";
import { useProducts } from "@/context/productContext";
import { useParams } from "next/navigation";
import {
	Settings,
	Box,
	CheckCircle2,
	ChevronRight,
	Weight,
	Ruler,
} from "lucide-react";
import { useState } from "react";
import RigiditySection from "@/components/pages/products/rigidity";
import StructureSection from "@/components/pages/products/structure";

export default function Page() {
	const params = useParams();
	const id = params.id;
	const modelParam = params.model;
	const [display, setDisplay] = useState("features");

	const { products } = useProducts();
	const parentProduct = products.find((p: any) => p.id === Number(id));

	const detailedModel = parentProduct?.models?.find(
		(m: any) => m.name === modelParam,
	);

	const downloadURl = parentProduct?.download;

	if (!parentProduct || !detailedModel) {
		return (
			<div className="text-white bg-gray-950 h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">404</h1>
					<p className="text-gray-400">Machine Model Not Found</p>
				</div>
			</div>
		);
	}

	const SpecTable = ({ title, data }: { title: string; data: any[] }) => (
		<div className="mb-12">
			<div className="flex items-center gap-2 mb-4">
				<div className="w-1 h-6 bg-orange-600"></div>
				<h3 className="text-white font-bold text-xl uppercase tracking-wider">
					{title}
				</h3>
			</div>
			<div className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
				<table className="w-full text-sm md:text-base">
					<thead>
						<tr className="bg-slate-800/50 text-slate-400 border-b border-slate-800">
							<th className="p-4 font-medium text-left">Description</th>
							<th className="p-4 font-medium text-right">
								Specification (Metric)
							</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((spec, idx) => (
							<tr
								key={idx}
								className="border-b border-slate-800/30 hover:bg-white/5 transition-colors">
								<td className="p-4 text-slate-300">{spec.item}</td>
								<td className="p-4 text-white font-semibold text-right">
									{spec.valM}{" "}
									<span className="text-xs text-orange-500 ml-1">
										{spec.unitM}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);

	return (
		<div className="bg-gray-900 min-h-screen text-slate-200">
			<Navbar />
			<section className="relative h-[55vh] flex items-center justify-center">
				<div className="absolute inset-0 bg-black/60 z-10"></div>
				<div className="absolute inset-0 bg-[url('/Hero1.jpeg')] bg-cover bg-center"></div>
				<div className="relative z-20 text-center px-6">
					<nav className="flex justify-center items-center gap-2 text-orange-500 text-sm font-bold mb-4 uppercase tracking-widest">
						<span>{parentProduct.category}</span>
						<ChevronRight size={14} />
						<span className="text-white">{parentProduct.badge2}</span>
					</nav>
					<h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">
						{detailedModel.name}
					</h1>
					<div className="mt-6 flex justify-center gap-8">
						<div className="flex items-center gap-2 text-slate-400">
							<Ruler size={18} className="text-orange-500" />
							<span>Travel: {detailedModel.travel[0].valM}mm</span>
						</div>
						<div className="flex items-center gap-2 text-slate-400">
							<Weight size={18} className="text-orange-500" />
							<span>Load: {detailedModel.table[2].valM}kg</span>
						</div>
					</div>
				</div>
			</section>
			<div className="p-10 flex items-center justify-center gap-5">
				<button
					onClick={() => setDisplay("features")}
					className="bg-orange-500 p-3 rounded-4xl font-semibold">
					Features
				</button>
				<button
					onClick={() => setDisplay("specification")}
					className="bg-orange-500 p-3 rounded-4xl font-semibold">
					Specifications
				</button>
				<a href={downloadURl} download="Machine_Catalog_2024.pdf">
					<button className="bg-orange-500 p-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors">
						Download
					</button>
				</a>
			</div>
			{display === "features" && (
				<section>
					<div className="flex justify-center items-center my-10">
						<h1 className="text-3xl">Features</h1>
					</div>

					<RigiditySection />
					<StructureSection />
				</section>
			)}
			{display === "specification" && (
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
									<div className="bg-linear-to-br from-gray-300 to-white rounded-3xl p-10 border border-slate-800 shadow-2xl group">
										<img
											src={detailedModel.image}
											alt={detailedModel.name}
											className="w-full h-auto object-contain transition-transform duration-500 scale-120 group-hover:scale-105"
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
									<CheckCircle2 className="text-green-500" /> Standard
									Accessories
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
										),
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
										),
									)}
								</div>
							</div>
						</div>
					</section>
				</>
			)}
			<Footer />
		</div>
	);
}
