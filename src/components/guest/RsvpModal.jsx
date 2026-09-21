import React, { useState } from 'react';

export const RsvpModal = ({ isOpen, onClose, onConfirm, allowedCompanions }) => {
  const [status, setStatus] = useState('confirmed');
  const [companionsCount, setCompanionsCount] = useState(0);
  const [companionNames, setCompanionNames] = useState([]);

  if (!isOpen) return null;

  const handleCompanionsChange = (count) => {
    setCompanionsCount(count);
    const newNames = Array(count).fill('').map((_, i) => companionNames[i] || '');
    setCompanionNames(newNames);
  };

  const handleNameChange = (index, value) => {
    const updated = [...companionNames];
    updated[index] = value;
    setCompanionNames(updated);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="glass-effect rounded-2xl p-6 max-w-md w-full border border-[#d4af37]">
        <h3 className="text-xl font-bold text-[#d4af37] mb-4">ConfirmaÃ§Ã£o de PresenÃ§a</h3>
        
        <div className="flex gap-2 mb-4">
          <button 
            onClick={() => setStatus('confirmed')}
            className={`flex-1 py-2 font-bold rounded-xl text-xs ${status === 'confirmed' ? 'bg-[#d4af37] text-[#001f3f]' : 'border border-gray-500'}`}
          >
            Vou Comparecer
          </button>
          <button 
            onClick={() => setStatus('declined')}
            className={`flex-1 py-2 font-bold rounded-xl text-xs ${status === 'declined' ? 'bg-red-800 text-white' : 'border border-gray-500'}`}
          >
            NÃ£o Poderei Ir
          </button>
        </div>

        {status === 'confirmed' && allowedCompanions > 0 && (
          <div className="space-y-3 mb-4">
            <label className="text-xs text-gray-300 block">NÃºmero de Acompanhantes:</label>
            <select 
              value={companionsCount} 
              onChange={(e) => handleCompanionsChange(Number(e.target.value))}
              className="w-full bg-[#001f3f] border border-gray-500 rounded p-2 text-xs"
            >
              {[...Array(allowedCompanions + 1).keys()].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            {companionNames.map((name, idx) => (
              <input 
                key={idx}
                type="text"
                placeholder={`Nome do Acompanhante ${idx + 1}`}
                value={name}
                onChange={(e) => handleNameChange(idx, e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded p-2 text-xs text-white"
              />
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-6">
          <button onClick={onClose} className="flex-1 border border-gray-500 py-2 rounded-xl text-xs">Cancelar</button>
          <button 
            onClick={() => onConfirm({ status, companionsCount, companionNames })}
            className="flex-1 bg-[#d4af37] text-[#001f3f] font-bold py-2 rounded-xl text-xs"
          >
            Enviar Resposta
          </button>
        </div>
      </div>
    </div>
  );
};