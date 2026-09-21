import React from 'react';

export const BridalShowerGift = ({ gift, onReserve }) => {
  const isReserved = gift.status === 'reserved';

  return (
    <div className="glass-effect p-4 rounded-xl border border-gold/30 flex justify-between items-center mb-3">
      <div>
        <h4 className="font-semibold text-[#d4af37]">{gift.title}</h4>
        <p className="text-xs text-gray-300">{gift.description}</p>
        <span className="text-[10px] text-gray-400 font-mono">{gift.category}</span>
      </div>
      <button 
        disabled={isReserved}
        onClick={() => onReserve(gift.id)}
        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
          isReserved 
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
            : 'bg-[#d4af37] text-[#001f3f] hover:brightness-110'
        }`}
      >
        {isReserved ? 'Reservado' : 'Reservar'}
      </button>
    </div>
  );
};