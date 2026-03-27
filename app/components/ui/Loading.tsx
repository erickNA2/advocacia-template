"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingProps {
	onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			onComplete();
		}, 2500);

		const progressTimer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(progressTimer);
					return 100;
				}
				return prev + 4;
			});
		}, 100);

		return () => {
			clearTimeout(timer);
			clearInterval(progressTimer);
		};
	}, [onComplete]);

	const lineVariants = {
		initial: {
			scaleX: 0,
			opacity: 0,
		},
		animate: {
			scaleX: 1,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 0 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="fixed inset-0 bg-[#10151A] z-50 flex items-center justify-center overflow-hidden"
		>
			<div className="relative w-full max-w-md px-8">
				{/* Animated lines */}
				<div className="space-y-6">
					<motion.div
						variants={lineVariants}
						initial="initial"
						animate="animate"
						className="h-1 bg-gradient-to-r from-transparent via-[#F5D47A] to-transparent"
					/>
					<motion.div
						variants={lineVariants}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.2 }}
						className="h-1 bg-gradient-to-r from-transparent via-[#F5D47A] to-transparent"
					/>
					<motion.div
						variants={lineVariants}
						initial="initial"
						animate="animate"
						transition={{ delay: 0.4 }}
						className="h-1 bg-gradient-to-r from-transparent via-[#F5D47A] to-transparent"
					/>
				</div>

				{/* Loading text */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="text-center mt-12"
				>
					<h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
						Advocacia Criminal
					</h1>
					<p className="text-[#C7C7C7] text-sm">
						Defesa Penal Estratégica
					</p>
				</motion.div>

				{/* Progress bar */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="mt-8"
				>
					<div className="w-full h-0.5 bg-[#232A31] rounded-full overflow-hidden">
						<motion.div
							className="h-full bg-[#F5D47A] rounded-full"
							initial={{ width: "0%" }}
							animate={{ width: `${progress}%` }}
							transition={{ duration: 0.1 }}
						/>
					</div>
					<p className="text-center text-[#C7C7C7] text-xs mt-2">
						{progress}%
					</p>
				</motion.div>
			</div>
		</motion.div>
	);
}
