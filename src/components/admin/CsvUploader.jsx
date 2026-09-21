import React from 'react';
import { parseGuestsCsv } from '../../services/csvParser';

export const CsvUploader = ({ onGuestsLoaded }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      const parsedData = parseGuestsCsv(text);
      onGuestsLoaded(parsedData);
    };
    reader.readAsText(file, 'UTF-8');
  };

  return (
    <div className="glass-effect p-4 rounded-xl border border-dashed border-[#d4af37] text-center">
      <p className="text-xs text-gray-300 mb-2">Importar Lista de Convidados via CSV</p>
      <input 
        type="file" 
        accept=".csv"
        onChange={handleFileUpload}
        className="text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#d4af37] file:text-[#001f3f]"
      />
    </div>
  );
};