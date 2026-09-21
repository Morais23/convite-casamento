import React from 'react';

export const BackButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-effect rounded-full px-6 py-3 text-[#d4af37] font-bold shadow-2xl flex items-center gap-2 hover:bg-[#001f3f] transition-all z-50"
    >
      Voltar
    </button>
  );
};