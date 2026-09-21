import React from 'react';

export const FloatingTabBar = ({ activeTab, onSelectTab, showBridalShower }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-effect rounded-full px-4 py-2 flex items-center gap-4 z-50 shadow-2xl">
      <button 
        onClick={() => onSelectTab('info')}
        className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${activeTab === 'info' ? 'bg-[#d4af37] text-navy-900' : 'text-white'}`}
      >
        Informações
      </button>
      <button 
        onClick={() => onSelectTab('important')}
        className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${activeTab === 'important' ? 'bg-[#d4af37] text-navy-900' : 'text-white'}`}
      >
        Importante
      </button>
      <button 
        onClick={() => onSelectTab('gifts')}
        className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${activeTab === 'gifts' ? 'bg-[#d4af37] text-navy-900' : 'text-white'}`}
      >
        Presentes
      </button>
      {showBridalShower && (
        <button 
          onClick={() => onSelectTab('bridal')}
          className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${activeTab === 'bridal' ? 'bg-[#d4af37] text-navy-900' : 'text-white'}`}
        >
          Chá de panela
        </button>
      )}
    </nav>
  );
};