import React from 'react';

export const InfoView = () => {
  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-serif text-[#d4af37] text-center mb-6">InformaÃ§Ãµes do Casamento</h2>

      <div className="glass-effect p-5 rounded-2xl border border-gold/30">
        <h3 className="text-lg font-bold text-[#d4af37] mb-2">ðŸ—“ Data e HorÃ¡rio</h3>
        <p className="text-sm text-gray-200">20 de Novembro de 2026 Ã s 18:00h</p>
      </div>

      <div className="glass-effect p-5 rounded-2xl border border-gold/30">
        <h3 className="text-lg font-bold text-[#d4af37] mb-2">ðŸ“ Local da CerimÃ´nia e Festa</h3>
        <p className="text-sm font-semibold text-white">EspaÃ§o X</p>
        <p className="text-xs text-gray-300">Rua Exemplo, 123 - Cidade/UF</p>
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-3 bg-[#d4af37] text-[#001f3f] text-xs font-bold px-4 py-2 rounded-lg"
        >
          Abrir no Google Maps / Waze
        </a>
      </div>

      <div className="glass-effect p-5 rounded-2xl border border-gold/30">
        <h3 className="text-lg font-bold text-[#d4af37] mb-2">ðŸ‘” Traje Sugerido</h3>
        <p className="text-sm text-gray-200">Passeio Completo</p>
      </div>
    </div>
  );
};