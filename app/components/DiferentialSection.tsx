import React from "react";

const diferentialItems = [
  {
    icon: "🌎",
    text: "Atendimento presencial e remoto em todo o Brasil",
  },
  {
    icon: "⚖️",
    text: "Atuação técnica, estratégica e humanizada.",
  },
  {
    icon: "🧑‍⚖️",
    text: "Especialistas em crimes complexos e defesa em primeira instância e tribunais.",
  },
  {
    icon: "🔒",
    text: "Sigilo absoluto, comprometimento e ética profissional.",
  },
  {
    icon: "📄",
    text: "Histórico de resultados expressivos na advocacia penal.",
  },
];

export default function DiferentialSection() {
  return (
    <section className="w-full bg-[#10151A] py-16 px-4 flex flex-col items-center relative">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <div className="mb-6">
            <img src="/logo.png" alt="Logo" className="h-10 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Por que escolher <span className="text-[#F5D47A]">Pires de Carvalho?</span>
            </h2>
            <button className="mt-4 bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition">Falar com Advogado</button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1 flex flex-col gap-6">
          {diferentialItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-2xl text-[#F5D47A]">{item.icon}</span>
              <span className="text-white text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom box */}
      <div className="mt-12 w-full max-w-3xl bg-[#181F25] rounded-xl border border-[#232A31] p-8 flex flex-col items-center shadow-lg">
        <span className="text-[#F5D47A] font-semibold mb-2">ATENDIMENTO 24 HORAS</span>
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">NÃO DEIXE SEU FUTURO A CARGO DO ACASO</h3>
        <p className="text-[#C7C7C7] text-center mb-6">Entre em contato agora e agende seu atendimento inicial.<br/>Sua luta pela justiça começa aqui!</p>
        <button className="bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition">Falar com Advogado</button>
      </div>
    </section>
  );
}
