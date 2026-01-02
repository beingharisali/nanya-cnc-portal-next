import Navbar from "@/components/Navbar";
import AboutSection from "@/components/pages/home/About";
import ProductsSection from "@/components/pages/home/Center";
import Footer from "@/components/pages/home/Footer";
import HeroSection from "@/components/pages/home/HeroSection";
import JourneySection from "@/components/pages/home/Journey";

export default function page() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<JourneySection />
			<ProductsSection />
			<Footer />
		</div>
	);
}
