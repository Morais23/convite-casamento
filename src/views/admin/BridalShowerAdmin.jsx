import React, { useState } from 'react';

export const BridalShowerAdmin = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center glass-effect p-4 rounded-xl border border-gold/30">
        <div>
          <h3 className="font-bold text-white text-md">Status do ChÃ¡ de Panela</h3>
          <p className="text-xs text-gray-300">Ativar ou inativar o mÃ³dulo do ChÃ¡ de Panela globalmente</p>
        </div>
        <button 
          onClick={() => setIsActive(!isActive)}
          className={`px-4 py-2 font-bold text-xs rounded-xl ${isActive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
        >
          {isActive ? 'Ativado' : 'Desativado'}
        </button>
      </div>
    </div>
  );
};