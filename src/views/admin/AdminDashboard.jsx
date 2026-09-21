import React from 'react';

export const AdminDashboard = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-serif text-[#d4af37] mb-6">VisÃ£o Geral / MÃ©tricas</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-effect p-4 rounded-xl text-center border border-gold/30">
          <span className="text-2xl font-bold text-[#d4af37]">120</span>
          <span className="block text-xs text-gray-300">Total Convidados</span>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center border border-gold/30">
          <span className="text-2xl font-bold text-green-400">85</span>
          <span className="block text-xs text-gray-300">Confirmados</span>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center border border-gold/30">
          <span className="text-2xl font-bold text-blue-400">45</span>
          <span className="block text-xs text-gray-300">Convites Entregues</span>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center border border-gold/30">
          <span className="text-2xl font-bold text-purple-400">30</span>
          <span className="block text-xs text-gray-300">ChÃ¡ de Panela</span>
        </div>
      </div>
    </div>
  );
};