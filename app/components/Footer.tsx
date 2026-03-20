import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#10151A] border-t border-[#232A31] py-8 px-4 flex flex-col items-center relative">
      <div className="flex flex-col items-center max-w-3xl w-full">
        <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
        <p className="text-[#C7C7C7] text-center text-base mb-2">
          O escritório <span className="font-bold text-white">Pires, Carvalho & Oliveira – Advocacia Criminal</span> é referência em defesa penal estratégica, com atuação exclusiva na área criminal.
        </p>
        <hr className="w-full border-[#F5D47A] my-4" />
        <p className="text-[#C7C7C7] text-center text-sm">
          ©2025 – Pires de Carvalho & Oliveira – Todos os direitos reservados.
        </p>
      </div>
      {/* Optional: background image overlay for effect */}
      {/* <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(/footer-bg.jpg)' }} /> */}
    </footer>
  );
}
