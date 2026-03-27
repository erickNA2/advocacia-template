"use client";

import FadeIn from "./ui/FadeIn";
import { useLoading } from "./LoadingProvider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["estratégia.", "experiência.", "confiança."];

export default function Hero() {
	const { isLoading } = useLoading();
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		if (isLoading) return;

		const interval = setInterval(() => {
			setCurrentWordIndex((prev) => (prev + 1) % words.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [isLoading]);

	return (
		<section
			id="hero"
			className="relative h-[110vh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden mt-auto md:m-0"
			aria-labelledby="hero-heading"
		>
			<div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 z-10">
				<header className="relative h-auto flex-1 flex flex-col justify-center items-start">
					<FadeIn delay={isLoading ? 2.8 : 0.2} direction="up">
						<h1
							id="hero-heading"
							className="text-2xl md:text-5xl font-bold text-white leading-tight mb-6"
						>
							Criminal não se improvisa.
							<br />
							Se enfrenta com{" "}
							<span className="relative inline-block align-middle text-[#F5D47A]">
								<AnimatePresence mode="wait">
									<motion.span
										key={currentWordIndex}
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										transition={{ duration: 0.4 }}
										className="inline-block"
										role="text"
									>
										{words[currentWordIndex]}
									</motion.span>
								</AnimatePresence>
							</span>
						</h1>
					</FadeIn>
					<FadeIn delay={isLoading ? 3.0 : 0.4} direction="up">
						<p className="text-[#C7C7C7] text-base md:text-lg mb-8 max-w-lg">
							Atuamos 24 horas com estratégia, urgência e sigilo
							absoluto para proteger sua liberdade e garantir que
							seus direitos sejam respeitados desde o primeiro
							minuto.
						</p>
					</FadeIn>
					<FadeIn delay={isLoading ? 3.2 : 0.6} direction="up">
						<button
							className="bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition"
							aria-label="Fale com um advogado criminalista"
						>
							Falar com Advogado
						</button>
					</FadeIn>
				</header>
				<FadeIn delay={isLoading ? 3.4 : 0.8} direction="right">
					<div className="flex-1 flex justify-center items-center">
						<img
							src="woman-statue.svg"
							alt="Estátua da Justiça representando o sistema jurídico criminal"
							width={400}
							className="h-auto object-contain drop-shadow-xl"
						/>
					</div>
				</FadeIn>
			</div>
			<img
				src="/woman-statue.svg"
				alt=""
				width={600}
				className="hidden md:block absolute right-0 bottom-0 opacity-5 pointer-events-none select-none z-0"
				aria-hidden="true"
			/>
		</section>
	);
}
