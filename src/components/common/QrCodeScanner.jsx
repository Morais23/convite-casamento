import React, { useState } from 'react';

export const QrCodeScanner = ({ onScanSuccess }) => {
  const [mockId, setMockId] = useState('');

  const handleSimulateScan = () => {
    if (mockId) {
      onScanSuccess(mockId);
    }
  };

  return (
    <div className="p-4 border border-[#d4af37] rounded-xl text-center">
      <h4 className="font-semibold text-lg text-[#d4af37] mb-2">Leitor de QR Code</h4>
      <p className="text-xs text-gray-300 mb-4">Aponte a cÃ¢mera do dispositivo para o QR Code do Convidado</p>
      
      <div className="space-y-2">
        <input 
          type="text" 
          placeholder="Simular leitura de guest_id..." 
          value={mockId} 
          onChange={(e) => setMockId(e.target.value)}
          className="w-full p-2 bg-transparent border border-gray-500 rounded text-white text-sm"
        />
        <button 
          onClick={handleSimulateScan}
          className="w-full bg-[#d4af37] text-[#001f3f] font-bold py-2 rounded"
        >
          Confirmar Leitura
        </button>
      </div>
    </div>
  );
};