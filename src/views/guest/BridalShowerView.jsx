import React from 'react';
import { BridalShowerGift } from '../../components/guest/BridalShowerGift';

export const BridalShowerView = ({ gifts = [], onReserveGift }) => {
  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-serif text-[#d4af37] text-center">â˜• ChÃ¡ de Panela</h2>

      <div className="glass-effect p-5 rounded-2xl border border-gold/30">
        <h3 className="text-lg font-bold text-[#d4af37] mb-1">InformaÃ§Ãµes do Evento</h3>
        <p className="text-xs text-gray-200">10 de Outubro de 2026 Ã s 16:00h</p>
        <p className="text-xs text-gray-300 mt-2">Venha comemorar conosco nosso ChÃ¡ de Panela!</p>
      </div>

      <div>
        <h3 className="text-md font-bold text-[#d4af37] mb-3">SugestÃµes de Presente</h3>
        {gifts.map(gift => (
          <BridalShowerGift key={gift.id} gift={gift} onReserve={onReserveGift} />
        ))}
      </div>
    </div>
  );
};