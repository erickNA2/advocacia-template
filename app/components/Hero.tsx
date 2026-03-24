"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
	const words = ["estratégia", "experiencia", "precisão"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [transitionWordIndex, setTransitionWordIndex] = useState<
		number | null
	>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		let current = 0;
		let clearAction: NodeJS.Timeout | null = null;

		const interval = setInterval(() => {
			const next = (current + 1) % words.length;
			setTransitionWordIndex(current);
			setCurrentWordIndex(next);
			setIsTransitioning(true);

			clearAction = setTimeout(() => {
				setIsTransitioning(false);
				setTransitionWordIndex(null);
			}, 500);

			current = next;
		}, 2000);

		return () => {
			clearInterval(interval);
			if (clearAction) clearTimeout(clearAction);
		};
	}, []);

	return (
		<section
			id="hero"
			className="relative h-[110vh] md:h-screen w-full flex flex-col justify-center items-center overflow-hidden mt-auto md:m-0"
		>
			<div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 z-10">
				<div className="relative h-auto flex-1 flex flex-col justify-center items-start">
					<h1 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-6">
						Criminal não se improvisa.
						<br />
						Se enfrenta com{" "}
						<span className="relative inline-block overflow-hidden align-middle z-40">
							{transitionWordIndex !== null && (
								<span
									key={`out-${transitionWordIndex}`}
									className="absolute inset-0 flex items-center text-[#F5D47A] hero-word-out"
								>
									{words[transitionWordIndex]}.
								</span>
							)}
							<span
								key={`in-${currentWordIndex}`}
								className={`absolute inset-0 flex items-center text-[#F5D47A] ${
									isTransitioning
										? "hero-word-in"
										: "opacity-100"
								}`}
							>
								{words[currentWordIndex]}.
							</span>
						</span>
					</h1>
					<p className="text-[#C7C7C7] text-base md:text-lg mb-8 max-w-lg">
						Atuamos 24 horas com estratégia, urgência e sigilo
						absoluto para proteger sua liberdade e garantir que seus
						direitos sejam respeitados desde o primeiro minuto.
					</p>
					<button className="bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition">
						Falar com Advogado
					</button>
				</div>
				<div className="flex-1 flex justify-center items-center">
					<img
						src="woman-statue.svg"
						alt="Estátua da Justiça"
						width={400}
						className="h-auto object-contain drop-shadow-xl"
					/>
				</div>
			</div>
			<img
				src="/woman-statue.svg"
				alt="Estátua da Justiça background"
				width={600}
				className="hidden md:block absolute right-0 bottom-0 opacity-5 pointer-events-none select-none z-0"
				aria-hidden="true"
			/>
		</section>
	);
}
