import React, { useState, useEffect } from 'react';

export const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center my-6 text-center">
      <div className="glass-effect px-4 py-2 rounded-xl border border-[#d4af37]">
        <span className="block text-2xl font-bold text-[#d4af37]">{timeLeft.days}</span>
        <span className="text-xs text-gray-300">Dias</span>
      </div>
      <div className="glass-effect px-4 py-2 rounded-xl border border-[#d4af37]">
        <span className="block text-2xl font-bold text-[#d4af37]">{timeLeft.hours}</span>
        <span className="text-xs text-gray-300">Horas</span>
      </div>
      <div className="glass-effect px-4 py-2 rounded-xl border border-[#d4af37]">
        <span className="block text-2xl font-bold text-[#d4af37]">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-300">Min</span>
      </div>
      <div className="glass-effect px-4 py-2 rounded-xl border border-[#d4af37]">
        <span className="block text-2xl font-bold text-[#d4af37]">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-300">Seg</span>
      </div>
    </div>
  );
};