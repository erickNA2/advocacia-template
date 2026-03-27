import { TfiAgenda, TfiAlignCenter, TfiKey, TfiLock } from "react-icons/tfi";
import Image from "next/image";
import FadeIn from "./ui/FadeIn";

const diferentialItems = [
	{
		icon: <TfiAgenda size={20} color="#F5D47A" />,
		text: "Atendimento presencial e remoto em todo o Brasil",
	},
	{
		icon: <TfiAlignCenter size={20} color="#F5D47A" />,
		text: "Atuação técnica, estratégica e humanizada.",
	},
	{
		icon: <TfiKey size={20} color="#F5D47A" />,
		text: "Especialistas em crimes complexos e defesa em primeira instância e tribunais.",
	},
	{
		icon: <TfiLock size={20} color="#F5D47A" />,
		text: "Sigilo absoluto, comprometimento e ética profissional.",
	},
];

export default function Diferential() {
	return (
		<section
			id="dif"
			className="min-h-screen w-full flex flex-col items-center relative"
		>
			<div className="absolute top-0 left-0 w-full h-full bg-[#181f25ea] z-10">
				{" "}
			</div>
			<Image
				src="/justice.jpg"
				alt="Contact"
				fill={true}
				className="absolute top-0 left-0 mb-4 z-1 rounded-xl object-cover"
			/>
			<div className="max-w-6xl w-full  mt-10 px-2 flex flex-col md:flex-row items-center justify-between gap-8 z-40">
				<FadeIn delay={0.2} direction="left">
					<div className="flex-1 flex flex-col items-start justify-center">
						<div className="mb-6">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
								Por que escolher{" "}
								<span className="text-[#F5D47A]">
									Advocacia SA?
								</span>
							</h2>
							<button className="mt-4 bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition">
								Falar com Advogado
							</button>
						</div>
					</div>
				</FadeIn>
				<FadeIn delay={0.4} direction="right">
					<div className="flex-1 flex flex-col space-y-10">
						{diferentialItems.map((item, idx) => (
							<FadeIn
								key={idx}
								delay={0.5 + idx * 0.1}
								direction="up"
							>
								<div className="flex items-center gap-4 border-b border-[#F5D47A] pb-4">
									<span className="text-2xl text-[#F5D47A]">
										{item.icon}
									</span>
									<span className="text-white text-lg">
										{item.text}
									</span>
								</div>
							</FadeIn>
						))}
					</div>
				</FadeIn>
			</div>
			<div className="relative mt-12 w-full max-w-3xl rounded-xl border-1 border-[#F5D47A] shadow-lg z-40">
				<Image
					src="/justice.jpg"
					alt="Contact"
					fill={true}
					className="absolute top-0 left-0 mb-4 z-1 rounded-xl object-cover"
				/>
				<div className="relative z-2 w-full h-full flex flex-col items-center bg-[#181f25f6] p-8 rounded-xl">
					<span className="text-[#F5D47A] font-semibold mb-2">
						ATENDIMENTO 24 HORAS
					</span>
					<h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
						NÃO DEIXE SEU FUTURO A CARGO DO ACASO
					</h3>
					<p className="text-[#C7C7C7] text-center mb-6">
						Entre em contato agora e agende seu atendimento inicial.
						<br />
						Sua luta pela justiça começa aqui!
					</p>
					<button className="bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition">
						Falar com Advogado
					</button>
				</div>
			</div>
		</section>
	);
}
