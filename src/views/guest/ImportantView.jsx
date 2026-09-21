import React, { useState } from 'react';
import { RsvpModal } from '../../components/guest/RsvpModal';

export const ImportantView = ({ allowedCompanions = 2 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-serif text-[#d4af37] text-center mb-6">Avisos Importantes</h2>

      <div className="glass-effect p-5 rounded-2xl border border-gold/30 text-center">
        <h3 className="text-lg font-bold text-[#d4af37] mb-2">Confirmar sua PresenÃ§a</h3>
        <p className="text-xs text-gray-300 mb-4">Por favor, confirme sua presenÃ§a e de seus acompanhantes atÃ© 01/10/2026.</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#d4af37] text-[#001f3f] font-bold px-6 py-2.5 rounded-xl text-xs hover:brightness-110"
        >
          Confirmar PresenÃ§a (RSVP)
        </button>
      </div>

      <RsvpModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        allowedCompanions={allowedCompanions}
        onConfirm={(res) => {
          console.log('Resposta enviada:', res);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};