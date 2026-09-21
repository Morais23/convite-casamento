import React, { useState } from 'react';

export const LoginView = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({ email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl max-w-sm w-full border border-[#d4af37]">
        <h2 className="text-2xl font-serif text-[#d4af37] text-center mb-6">Painel Administrativo</h2>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-gray-600 p-2.5 rounded-xl text-sm text-white"
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-600 p-2.5 rounded-xl text-sm text-white"
            required
          />
          <button 
            type="submit"
            className="w-full bg-[#d4af37] text-[#001f3f] font-bold py-2.5 rounded-xl text-sm hover:brightness-110"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};