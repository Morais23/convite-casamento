import React from 'react';
import { QrCodeScanner } from '../../components/common/QrCodeScanner';
import { QrCodeGenerator } from '../../components/admin/QrCodeGenerator';

export const QrManagerView = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-serif text-[#d4af37] text-center">Gerenciamento de QR Codes</h2>
      <QrCodeScanner onScanSuccess={(id) => alert(`Convite entregue para o ID: ${id}`)} />
      <QrCodeGenerator guestId="guest_001" guestName="Maria Silva" />
    </div>
  );
};