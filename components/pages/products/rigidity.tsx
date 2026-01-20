import { useProducts } from "@/context/productContext";
import { useParams } from "next/navigation";
import React from "react";

const RigiditySection = () => {
	const params = useParams();
	const id = params.id;
	const modelParam = params.model;

	const { products } = useProducts();
	const parentProduct = products.find((p: any) => p.id === Number(id));

	const detailedModel = parentProduct?.models?.find(
		(m: any) => m.name === modelParam,
	);

	const data = detailedModel.feature1.data;
	const imageURL = detailedModel.feature1.image;

	return (
		<section className="w-full lg:w-[90%] mx-auto py-12 md:py-20 font-sans text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<div className="flex flex-col justify-center order-2 lg:order-1 px-[5%] lg:px-0">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-10 tracking-tight text-center lg:text-left">
						Structure Rigidity
					</h2>
					<ul className="space-y-5 md:space-y-6">
						{data.map((text: string, index: number) => (
							<li key={index} className="flex items-start gap-3 md:gap-4 group">
								<span className="text-[8px] md:text-[10px] mt-2 text-white shrink-0 opacity-70">
									▲
								</span>
								<p className="text-base md:text-lg leading-snug opacity-90 group-hover:opacity-100 transition-opacity">
									{text}
								</p>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col items-center justify-center w-full order-1 lg:order-2">
					<div className="w-[90%] lg:w-full lg:max-w-5xl">
						<div className="flex flex-col items-center">
							<img
								src={imageURL}
								alt="T series rigid structure"
								className="w-full h-auto object-contain rounded-2xl shadow-2xl"
							/>
							<div className="mt-6 flex flex-col items-center">
								<span className="text-lg md:text-xl font-semibold tracking-widest uppercase">
									X Series
								</span>
								<div className="h-1 w-12 bg-white mt-2 opacity-50 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RigiditySection;
