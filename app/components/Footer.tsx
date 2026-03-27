export default function Footer() {
	return (
		<footer className="w-full border-t border-[#232A31] bg-[#10151A] md:px-10 py-10 flex flex-col items-center relative">
			<div className="flex flex-col items-center max-w-3xl w-full">
				<p className="text-[#C7C7C7] text-center text-base mb-2">
					O escritório{" "}
					<span className="font-bold text-white">
						Advocacia Criminal
					</span>{" "}
					é referência em defesa penal estratégica, com atuação
					exclusiva na área criminal.
				</p>
				<hr className="w-full border-[#F5D47A] my-4" />
				<p className="text-[#C7C7C7] text-center text-sm">
					©2026 – Erick & Arthur – Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
