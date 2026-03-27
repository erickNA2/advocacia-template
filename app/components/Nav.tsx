"use client";

import React, { useEffect, useState } from "react";

export default function Nav() {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		const threshold = 10;

		const updateScrollDirection = () => {
			const scrollY = window.scrollY;
			const diff = scrollY - lastScrollY;

			// Always show near top
			if (scrollY < 50) {
				setScrollDirection("up");
				lastScrollY = scrollY;
				return;
			}

			if (Math.abs(diff) < threshold) return;

			setScrollDirection(diff > 0 ? "down" : "up");
			lastScrollY = scrollY;
		};

		window.addEventListener("scroll", updateScrollDirection);

		return () =>
			window.removeEventListener("scroll", updateScrollDirection);
	}, []);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isMobileMenuOpen]);

	const navLinks = [
		{ name: "Home", href: "#hero" },
		{ name: "Sobre", href: "#about" },
		{ name: "Atuação", href: "#field" },
		{ name: "Diferenciais", href: "#dif" },
	];

	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full z-50 bg-[#10151A] shadow-lg rounded-b-2xl border-b-4 border-[#F5D47A] transition-transform duration-300 ${
					scrollDirection === "down" && !isMobileMenuOpen
						? "-translate-y-full"
						: "translate-y-0"
				}`}
			>
				<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
					<div className="flex items-center gap-3">
						<span className="text-[#F5D47A] font-bold text-lg tracking-wide">
							ADVOCACIA
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex flex-1 justify-center">
						<ul className="flex gap-6 md:gap-8 text-white font-medium text-base">
							{navLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="px-1 pb-1 border-b-2 border-transparent hover:border-[#F5D47A] hover:text-[#F5D47A] transition"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Desktop CTA Button */}
					<a
						href="#contact"
						className="hidden md:flex bg-[#F5D47A] text-[#10151A] font-semibold px-5 py-2 rounded-full shadow hover:bg-[#bfa25a] transition items-center gap-2 border-2 border-[#F5D47A] hover:scale-105 hover:shadow-lg"
					>
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
						</svg>
						Falar com Advogado
					</a>

					{/* Mobile Hamburger Button */}
					<button
						className="md:hidden text-[#F5D47A] p-2 focus:outline-none"
						onClick={() => setIsMobileMenuOpen(true)}
						aria-label="Open Menu"
					>
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</header>

			{/* Mobile Navigation Modal */}
			<div
				className={`fixed inset-0 bg-[#10151A] z-[60] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Close Button */}
				<button
					className="absolute top-6 right-6 text-[#F5D47A] p-2 focus:outline-none hover:scale-110 transition"
					onClick={() => setIsMobileMenuOpen(false)}
					aria-label="Close Menu"
				>
					<svg
						className="w-10 h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				{/* Mobile Links */}
				<nav className="flex flex-col items-center gap-8">
					<ul className="flex flex-col items-center gap-8 text-white font-medium text-2xl">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="hover:text-[#F5D47A] transition"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>

					{/* Mobile CTA Button */}
					<a
						href="#contact"
						onClick={() => setIsMobileMenuOpen(false)}
						className="mt-6 bg-[#F5D47A] text-[#10151A] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#bfa25a] transition flex items-center gap-2 border-2 border-[#F5D47A]"
					>
						<svg
							className="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
						</svg>
						Falar com Advogado
					</a>
				</nav>
			</div>
		</>
	);
}
