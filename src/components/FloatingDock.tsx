import React from 'react';
import { Utensils, Phone, Navigation, Info } from 'lucide-react';
import { CAFE_INFO } from '../data/menu';

export const FloatingDock: React.FC = () => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-30 sm:hidden">
      <div className="bg-brand-charcoal/95 backdrop-blur-lg border border-brand-charcoal-light/80 rounded-2xl shadow-2xl p-1.5 flex items-center justify-around gap-1">
        
        {/* Menu shortcut */}
        <a
          href="#menu"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-gray-300 hover:text-white hover:bg-brand-charcoal-light transition-all active:scale-95"
        >
          <Utensils className="w-4 h-4 text-brand-orange mb-0.5" />
          <span className="text-[10px] font-bold leading-none">Меню</span>
        </a>

        {/* Call shortcut */}
        <a
          href={`tel:${CAFE_INFO.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-orange text-white font-bold shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold leading-none">Позвонить</span>
        </a>

        {/* Route shortcut */}
        <a
          href={CAFE_INFO.yandexRouteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-gray-300 hover:text-white hover:bg-brand-charcoal-light transition-all active:scale-95"
        >
          <Navigation className="w-4 h-4 text-brand-yellow mb-0.5" />
          <span className="text-[10px] font-bold leading-none">Маршрут</span>
        </a>

        {/* About shortcut */}
        <a
          href="#about"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-gray-300 hover:text-white hover:bg-brand-charcoal-light transition-all active:scale-95"
        >
          <Info className="w-4 h-4 text-gray-400 mb-0.5" />
          <span className="text-[10px] font-bold leading-none">О нас</span>
        </a>

      </div>
    </div>
  );
};
