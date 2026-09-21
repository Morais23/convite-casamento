import React from 'react';

export const IOSInstallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="glass-effect rounded-2xl p-6 max-w-sm text-center">
        <h3 className="text-xl font-bold text-[#d4af37] mb-2">Instale o App no seu iPhone</h3>
        <p className="text-sm text-gray-200 mb-4">
          Para ter a melhor experiÃªncia e receber notificaÃ§Ãµes, adicione este aplicativo Ã  sua Tela de InÃ­cio:
        </p>
        <ol className="text-left text-xs space-y-2 mb-6 text-gray-300">
          <li>1. Toque no botÃ£o <strong>Compartilhar</strong> no menu do Safari.</li>
          <li>2. Role para baixo e selecione <strong>Adicionar Ã  Tela de InÃ­cio</strong>.</li>
          <li>3. Toque em <strong>Adicionar</strong> no canto superior direito.</li>
        </ol>
        <button 
          onClick={onClose}
          className="w-full bg-[#d4af37] text-[#001f3f] font-bold py-2 rounded-xl"
        >
          Entendi
        </button>
      </div>
    </div>
  );
};