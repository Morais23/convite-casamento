import React from 'react';
import { Countdown } from '../../components/guest/Countdown';

export const HomeView = ({ guestName }) => {
  return (
    <div className="text-center py-12 px-4 max-w-lg mx-auto">
      <p className="text-sm uppercase tracking-widest text-[#d4af37]">Você está convidado para o casamento de</p>
      <h1 className="text-4xl font-serif text-[#d4af37] my-4 font-bold">Aline e Marcelo</h1>
      
      {guestName && (
        <div className="my-6 glass-effect p-3 rounded-xl inline-block border border-gold/30">
          <p className="text-sm text-gray-200">OlÃ¡, <strong className="text-[#d4af37]">{guestName}</strong>! Ã‰ uma alegria ter vocÃª conosco.</p>
        </div>
      )}

      <Countdown targetDate="2026-11-20T18:00:00Z" />

      <p className="text-xs text-gray-300 italic mt-8 max-w-xs mx-auto">
        "O amor tudo sofre, tudo crê, tudo espera, tudo suporta."
      </p>
    </div>
  );
};