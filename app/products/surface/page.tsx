import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/pages/machines/machines";
import Footer from "@/components/pages/home/Footer";
import React from "react";

export default function page() {
	return (
		<div>
			<Navbar />
			<ProductsSection filtered="Surface Grinder" />
			<Footer />
		</div>
	);
}
