import React from "react";

const stats = [
  { value: "+20", label: "Anos de Experiência" },
  { value: "+100", label: "Casos Atendidos" },
  { value: "100%", label: "Satisfação" },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#10151A] py-16 px-4 flex flex-col items-center">
      {/* Stats */}
      <div className="max-w-3xl w-full flex flex-row justify-center items-center mb-12 bg-[#181F25] rounded-xl border border-[#F5D47A] p-6 shadow-lg">
        {stats.map((stat, idx) => (
          <div key={stat.label} className={`flex flex-col items-center px-8 ${idx !== stats.length - 1 ? 'border-r border-[#F5D47A]' : ''}`}>
            <span className="text-4xl font-bold text-[#F5D47A]">{stat.value}</span>
            <span className="text-[#C7C7C7] mt-2 text-base">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Main content */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img src="/gavel.jpg" alt="Direito Penal" className="rounded-xl shadow-lg w-[350px] h-[350px] object-cover" />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5D47A] mb-4">Especialistas em Direito Penal com atuação nacional</h2>
          <p className="text-[#C7C7C7] text-base mb-6">
            O escritório Pires, Carvalho & Oliveira – Advocacia Criminal é referência em defesa penal estratégica, com atuação exclusiva na área criminal. Formado por uma equipe de advogados criminalistas experientes, o escritório atende com excelência casos de urgência, investigação, prisão em flagrante, habeas corpus e tribunal do júri, garantindo atendimento 24 horas e representação técnica de alto nível.
          </p>
          <p className="text-[#C7C7C7] text-base mb-6">
            Com atuação prioritária no centro-oeste Brasileiro, nossa advocacia é pautada em ética, agilidade, sigilo e profundo conhecimento do Direito Penal e Processual Penal.
          </p>
          <button className="bg-[#F5D47A] text-[#10151A] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e6c15f] transition">Falar com Advogado</button>
        </div>
      </div>
    </section>
  );
}
