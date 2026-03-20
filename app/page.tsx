import React from "react";

import AreasAtuacao from "./components/AreasAtuacao";
import DiferentialSection from "./components/DiferentialSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<section id="hero" className="relative w-screen min-h-screen flex items-center justify-center">
				<HeroSection />
			</section>
			<section id="about" className="relative w-screen h-screen">
				<AboutSection />
			</section>
			<section id="segments" className="relative w-screen h-screen">
				<AreasAtuacao />
			</section>
			<section id="diferential" className="relative w-screen h-screen">
				<DiferentialSection />
			</section>
			<section id="beforeafter" className="relative w-screen h-screen">
				<BeforeAfterSection />
			</section>
			<Footer />
		</>
	);
}
