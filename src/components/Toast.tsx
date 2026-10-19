import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 animate-scaleUp pointer-events-none">
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-charcoal text-white text-xs sm:text-sm font-semibold shadow-2xl border border-brand-orange/40 backdrop-blur-md">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="whitespace-nowrap">{message}</span>
      </div>
    </div>
  );
};
