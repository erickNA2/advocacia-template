import React from "react";

const stats = [
	{ value: "+20", label: "Anos de Experiência" },
	{ value: "+100", label: "Casos Atendidos" },
	{ value: "100%", label: "Clientes Satisfeitos" },
];

export default function About() {
	return (
		<section
			id="about"
			className="relative h-autp md:h-screen w-full flex flex-col items-center"
		>
			<div className="md:max-w-3xl w-full flex flex-row justify-center items-center mb-12 bg-[#181F25] rounded-xl border border-[#F5D47A] p-2 md:p-4 shadow-lg">
				{stats.map((stat, idx) => (
					<div
						key={stat.label}
						className={`flex flex-col items-center justify-between text-center px-4 md:px-8 ${idx !== stats.length - 1 ? "border-r border-[#F5D47A]" : ""}`}
					>
						<span className="text-2xl md:text-4xl font-bold text-[#F5D47A]">
							{stat.value}
						</span>
						<span className="text-[#C7C7C7] mt-2 text-sm md:text-lg">
							{stat.label}
						</span>
					</div>
				))}
			</div>
			{/* Main content */}
			<div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
				{/* Image */}
				<div className="flex-1 flex justify-center">
					<img
						src="/desk.jpg"
						alt="Direito Penal"
						className="rounded-xl shadow-lg w-[350px] h-[400px] object-cover"
					/>
				</div>
				{/* Text */}
				<div className="flex-1 flex flex-col justify-center">
					<h2 className="text-2xl md:text-3xl font-bold text-[#F5D47A] mb-4">
						Especialistas em Direito Penal com atuação nacional
					</h2>
					<p className="text-[#C7C7C7] text-base mb-6">
						O escritório Pires, Carvalho & Oliveira – Advocacia
						Criminal é referência em defesa penal estratégica, com
						atuação exclusiva na área criminal. Formado por uma
						equipe de advogados criminalistas experientes, o
						escritório atende com excelência casos de urgência,
						investigação, prisão em flagrante, habeas corpus e
						tribunal do júri, garantindo atendimento 24 horas e
						representação técnica de alto nível.
					</p>
					<p className="text-[#C7C7C7] text-base mb-6">
						Com atuação prioritária no centro-oeste Brasileiro,
						nossa advocacia é pautada em ética, agilidade, sigilo e
						profundo conhecimento do Direito Penal e Processual
						Penal.
					</p>
					<button className="bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition">
						Falar com Advogado
					</button>
				</div>
			</div>
		</section>
	);
}
