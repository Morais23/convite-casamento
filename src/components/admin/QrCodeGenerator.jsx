import React from 'react';

export const QrCodeGenerator = ({ guestId, guestName }) => {
  const guestUrl = `${window.location.origin}/?guest_id=${guestId}`;

  return (
    <div className="glass-effect p-4 rounded-xl border border-[#d4af37] text-center max-w-xs mx-auto">
      <h4 className="text-sm font-bold text-[#d4af37] mb-2">{guestName || 'Convite GenÃ©rico'}</h4>
      <div className="bg-white p-4 rounded-lg inline-block my-2">
        <p className="text-black text-xs font-mono break-all max-w-[200px]">
          [QR Code para: {guestId}]
        </p>
      </div>
      <p className="text-[10px] text-gray-300 break-all">{guestUrl}</p>
    </div>
  );
};