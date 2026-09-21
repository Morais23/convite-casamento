import React from 'react';

export const GiftsView = () => {
  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-serif text-[#d4af37] text-center mb-6">Lista de Presentes</h2>

      <div className="glass-effect p-5 rounded-2xl border border-gold/30 text-center">
        <h3 className="text-lg font-bold text-[#d4af37] mb-2">Chave PIX dos Noivos</h3>
        <p className="text-xs text-gray-300 mb-4">Sua presenÃ§a Ã© nosso maior presente! Se desejar nos presentear com algum valor:</p>
        <div className="bg-[#001f3f] p-3 rounded-xl border border-gray-600 font-mono text-xs text-[#d4af37] break-all select-all">
          pix@casamento.com
        </div>
      </div>
    </div>
  );
};