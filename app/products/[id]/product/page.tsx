"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/pages/home/Footer";
import ProductCard from "@/components/UI/productCard";
import { useProducts } from "@/context/productContext";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
	const params = useParams();
	const id = params.id;

	const { products } = useProducts();

	const parentProduct = products.find((p: any) => p.id === Number(id));
	if (!parentProduct) {
		return (
			<div className="text-white bg-gray-900 h-screen flex items-center justify-center">
				Product not found
			</div>
		);
	}

	const modelsList = Object.values(parentProduct.models || {});

	return (
		<div className="bg-gray-900 min-h-screen">
			<Navbar />
			<section className="mt-10">
				<div className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
					<div className="absolute inset-0 bg-[url('/Hero1.jpeg')] bg-cover bg-center bg-no-repeat brightness-50 saturate-50" />

					<h1 className="relative z-10 text-white text-5xl font-bold uppercase tracking-widest">
						{parentProduct.title}
					</h1>
				</div>

				<div className="pb-20 pt-15 px-4 ">
					<div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
						{modelsList.map((modelData: any, index: number) => (
							<div key={index} className="w-full max-w-md">
								<ProductCard
									name={modelData.name}
									image={modelData.image}
									id={id}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
