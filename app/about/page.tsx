import Navbar from "@/components/Navbar";
import AboutSection from "@/components/pages/home/About";
import Footer from "@/components/pages/home/Footer";
import JourneySection from "@/components/pages/home/Journey";
import React from "react";

export default function page() {
	return (
		<div>
			<Navbar />
			<AboutSection />
			<JourneySection />
			<Footer />
		</div>
	);
}
