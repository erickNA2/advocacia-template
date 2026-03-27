import React from "react";
import FadeIn from "./ui/FadeIn";

const beforeItems = [
	"Insegurança sobre seus direitos e decisões",
	"Noites mal dormidas com conflitos familiares",
	"Processos judiciais demorados e angustiantes",
	"Medo de perder direitos por falta de orientação",
	"Dúvidas jurídicas sem respostas claras",
];

const afterItems = [
	"Clareza sobre seus direitos e estratégia definida",
	"Segurança para tomar decisões com respaldo jurídico",
	"Atuação firme e responsável no seu caso",
	"Proteção do seu patrimônio e direitos",
	"Atendimento estratégico e humanizado",
];

export default function BeforeAfter() {
	return (
		<section
			id="beforeafter"
			className="relative h-auto w-full flex flex-col items-center justify-center mb-20"
		>
			<FadeIn delay={0.2} direction="up">
				<h2 className="text-3xl md:text-4xl font-bold text-center my-6">
					<span className="text-white">Antes</span>{" "}
					<span className="text-[#F5D47A]">
						e Depois da Assessoria
					</span>
				</h2>
			</FadeIn>
			<div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
				<FadeIn delay={0.3} direction="left">
					<div className="flex-1 bg-[#181F25] border border-[#F5D47A] rounded-xl p-8 shadow-lg">
						<div className="flex items-center mb-4">
							<span className="text-2xl text-red-500 mr-2">
								✗
							</span>
							<span className="text-xl font-semibold text-red-400">
								ANTES
							</span>
						</div>
						<ul className="list-none space-y-4">
							{beforeItems.map((item, idx) => (
								<FadeIn
									key={idx}
									delay={0.4 + idx * 0.1}
									direction="up"
								>
									<li className="flex items-center text-white text-base">
										<span className="text-red-500 mr-2">
											✗
										</span>
										{item}
									</li>
								</FadeIn>
							))}
						</ul>
					</div>
				</FadeIn>
				<FadeIn delay={0.5} direction="right">
					<div className="flex-1 bg-[#181F25] border border-[#F5D47A] rounded-xl p-8 shadow-lg">
						<div className="flex items-center mb-4">
							<span className="text-2xl text-green-500 mr-2">
								✓
							</span>
							<span className="text-xl font-semibold text-green-400">
								DEPOIS
							</span>
						</div>
						<ul className="list-none space-y-4">
							{afterItems.map((item, idx) => (
								<FadeIn
									key={idx}
									delay={0.6 + idx * 0.1}
									direction="up"
								>
									<li className="flex items-center text-white text-base">
										<span className="text-green-500 mr-2">
											✓
										</span>
										{item}
									</li>
								</FadeIn>
							))}
						</ul>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
