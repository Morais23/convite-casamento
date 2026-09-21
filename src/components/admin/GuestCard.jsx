import React from 'react';

export const GuestCard = ({ guest, onDeliver }) => {
  return (
    <div className="glass-effect p-4 rounded-xl border border-gold/20 mb-3 flex justify-between items-center">
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-white text-sm">{guest.name}</h4>
          <span className="text-[10px] bg-blue-900/60 px-2 py-0.5 rounded text-gold border border-gold/30">
            {guest.group}
          </span>
        </div>
        <p className="text-xs text-gray-400">{guest.phone || guest.email || 'Sem contato'}</p>
        <p className="text-[10px] text-gray-300 mt-1">
          Acompanhantes permitidos: {guest.allowed_companions} | ChÃ¡ de Panela: {guest.has_bridal_shower ? 'Sim' : 'NÃ£o'}
        </p>
      </div>

      <div>
        {guest.invitation_delivered ? (
          <span className="text-xs font-semibold text-green-400 bg-green-950/80 px-3 py-1 rounded-full border border-green-600/50">
            âœ“ Entregue
          </span>
        ) : (
          <button 
            onClick={() => onDeliver(guest.id)}
            className="bg-[#d4af37] text-[#001f3f] text-xs font-bold px-3 py-1.5 rounded-lg hover:brightness-110"
          >
            Entregar Convite
          </button>
        )}
      </div>
    </div>
  );
};