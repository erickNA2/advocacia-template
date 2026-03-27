import React from "react";
import {
	TfiAgenda,
	TfiAlignCenter,
	TfiComments,
	TfiKey,
	TfiLock,
	TfiPrinter,
} from "react-icons/tfi";
import FadeIn from "./ui/FadeIn";

const areas = [
	{
		title: "Prisão em flagrante e audiência de custódia",
		description:
			"Atuação imediata para garantir os direitos do cliente desde o primeiro momento, com análise da legalidade da prisão e medidas para liberdade provisória.",
		icon: <TfiAgenda size={40} color="#F5D47A" />,
	},
	{
		title: "Habeas corpus preventivo e liberatório",
		description:
			"Ação urgente para evitar prisões ilegais ou buscar a liberdade do cliente já detido, com argumentação técnica e estratégica.",
		icon: <TfiAlignCenter size={40} color="#F5D47A" />,
	},
	{
		title: "Defesa em inquérito policial",
		description:
			"Atuação especializada em defesas técnicas durante a investigação policial, com construção de teses sólidas e sustentação de impacto.",
		icon: <TfiComments size={40} color="#F5D47A" />,
	},
	{
		title: "Crimes contra a vida (júri popular)",
		description:
			"Atuação especializada em defesas técnicas perante o tribunal do júri, com construção de teses sólidas e sustentação de impacto.",
		icon: <TfiKey size={40} color="#F5D47A" />,
	},
	{
		title: "Crimes econômicos e tributários",
		description:
			"Defesa qualificada em casos de lavagem de dinheiro, evasão fiscal, fraudes econômicas e delitos do colarinho branco.",
		icon: <TfiLock size={40} color="#F5D47A" />,
	},
	{
		title: "Crimes de trânsito, Lei Maria da Penha e crimes digitais",
		description:
			"Atuação em crimes de maior prevalência e defesa nos juizados, promovendo medidas legais e soluções adequadas.",
		icon: <TfiPrinter size={40} color="#F5D47A" />,
	},
];

export default function Field() {
	return (
		<section
			id="field"
			className="relative min-h-screen w-full flex flex-col items-center space-y-4"
		>
			<FadeIn delay={0.2} direction="up">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-[#F5D47A]">
					Áreas de Atuação
				</h2>
			</FadeIn>
			<FadeIn delay={0.3} direction="up">
				<p className="text-[#C7C7C7] text-center">
					Atuação completa em Direito Penal e Processo Penal
				</p>
			</FadeIn>
			<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
				{areas.map((area, idx) => (
					<FadeIn
						key={area.title}
						delay={0.4 + idx * 0.1}
						direction="up"
					>
						<div className="bg-[#181F25] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-[#232A31] hover:scale-105 transition-transform duration-200 h-full">
							<div className="text-4xl mb-4">{area.icon}</div>
							<h3 className="text-xl font-semibold text-[#F5D47A] mb-2">
								{area.title}
							</h3>
							<p className="text-[#C7C7C7] text-sm">
								{area.description}
							</p>
						</div>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
