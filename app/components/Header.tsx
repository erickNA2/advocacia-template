import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#10151A] shadow-lg rounded-b-2xl border-b-4 border-[#F5D47A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-[#F5D47A] font-bold text-lg tracking-wide hidden sm:block">
            PIRES DE CARVALHO & OLIVEIRA <span className="text-[#C7C7C7] font-normal">ADVOCACIA</span>
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-6 md:gap-8 text-white font-medium text-base">
            <li>
              <a href="#hero" className="px-1 pb-1 border-b-2 border-[#F5D47A] hover:text-[#F5D47A] transition font-bold relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#F5D47A] after:rounded-full after:scale-x-100">Home</a>
            </li>
            <li>
              <a href="#about" className="px-1 pb-1 border-b-2 border-transparent hover:border-[#F5D47A] hover:text-[#F5D47A] transition">Quem Somos</a>
            </li>
            <li>
              <a href="#segments" className="px-1 pb-1 border-b-2 border-transparent hover:border-[#F5D47A] hover:text-[#F5D47A] transition">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#diferential" className="px-1 pb-1 border-b-2 border-transparent hover:border-[#F5D47A] hover:text-[#F5D47A] transition">Diferenciais</a>
            </li>
            <li>
              <a href="#contact" className="px-1 pb-1 border-b-2 border-transparent hover:border-[#F5D47A] hover:text-[#F5D47A] transition">Contato</a>
            </li>
          </ul>
        </nav>
        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-[#F5D47A] text-[#10151A] font-semibold px-5 py-2 rounded-full shadow hover:bg-[#bfa25a] transition flex items-center gap-2 border-2 border-[#F5D47A] hover:scale-105 hover:shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
          Falar com Advogado
        </a>
      </div>
    </header>
  );
}
