"use client";
import { useProducts } from "@/context/productContext";
import { useParams, useRouter } from "next/navigation"; // Corrected import
import React, { useEffect } from "react";

export default function Page() {
	const params = useParams();
	const router = useRouter();
	const { products } = useProducts();

	const id = params?.id;
	const modelParam = params?.model;

	// 1. Find the parent product
	const parentProduct = products.find((p: any) => p.id === Number(id));

	// 2. Find the specific model
	const detailedModel = parentProduct?.models?.find(
		(m: any) => m.name === modelParam,
	);

	useEffect(() => {
		// Only attempt redirect if we have the data we need
		if (detailedModel) {
			if (!detailedModel.staticRoute) {
				router.push(`/products/${id}/product/${modelParam}/details`);
			} else {
				router.push(`/model/${modelParam}`);
			}
		}
	}, [detailedModel, id, modelParam, router]);

	// 3. Handle "Not Found" State
	if (!parentProduct || (parentProduct && !detailedModel)) {
		return (
			<div className="h-dvh flex items-center justify-center bg-gray-900 text-white">
				<h1>404 Machine or Model Not Found</h1>
			</div>
		);
	}

	// 4. Loading State (Shown while useEffect triggers)
	return (
		<div className="h-dvh w-dvw bg-gray-800 flex items-center justify-center text-white">
			<p className="text-3xl font-bold">Redirecting...</p>
		</div>
	);
}
