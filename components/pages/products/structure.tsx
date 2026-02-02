import { useProducts } from "@/context/productContext";
import { useParams } from "next/navigation";
import React from "react";

const StructureSection = () => {
	const params = useParams();
	const id = params.id;
	const modelParam = params.model;

	const { products } = useProducts();
	const parentProduct = products.find((p: any) => p.id === Number(id));

	const detailedModel = parentProduct?.models?.find(
		(m: any) => m.name === modelParam,
	);

	const data = detailedModel?.feature2?.data || [];
	const imageURL = detailedModel?.feature2?.image;
	const heading = detailedModel?.feature2?.heading;

	return (
		<section className="w-full px-[5%] mx-auto py-16 md:py-24 lg:py-32 font-sans text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
				<div className="w-full order-1 lg:order-1 lg:sticky lg:top-24">
					<div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
						<img
							src={imageURL}
							alt="Green Machine Technical Infographic"
							className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</div>

				<div className="flex flex-col order-2 lg:order-2">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight text-center lg:text-left">
						{heading}
					</h2>

					<ul className="space-y-4 md:space-y-5">
						{data.map((point: string, index: number) => (
							<li key={index} className="flex items-start gap-3 md:gap-4 group">
								<span className="text-[10px] md:text-xs mt-2 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
									▲
								</span>
								<p className="text-base  leading-relaxed text-gray-200 group-hover:text-white transition-colors">
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
