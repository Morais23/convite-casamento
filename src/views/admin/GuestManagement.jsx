import React, { useState } from 'react';
import { GuestCard } from '../../components/admin/GuestCard';
import { CsvUploader } from '../../components/admin/CsvUploader';

export const GuestManagement = () => {
  const [guests, setGuests] = useState([
    { id: 'guest_001', name: 'Maria Silva', phone: '31999991111', group: 'FamÃ­lia Noiva', allowed_companions: 2, has_bridal_shower: true, invitation_delivered: true },
    { id: 'guest_002', name: 'JoÃ£o Souza', phone: '31988882222', group: 'Padrinhos', allowed_companions: 1, has_bridal_shower: false, invitation_delivered: false }
  ]);

  const handleDeliver = (id) => {
    setGuests(guests.map(g => g.id === id ? { ...g, invitation_delivered: true } : g));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-serif text-[#d4af37]">GestÃ£o de Convidados</h2>
      
      <CsvUploader onGuestsLoaded={(data) => console.log('CSV Importado:', data)} />

      <div>
        <h3 className="text-lg font-bold text-[#d4af37] mb-3">Lista de Convidados</h3>
        {guests.map(guest => (
          <GuestCard key={guest.id} guest={guest} onDeliver={handleDeliver} />
        ))}
      </div>
    </div>
  );
};