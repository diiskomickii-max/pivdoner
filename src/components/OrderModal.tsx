import React, { useEffect, useState } from 'react';
import { X, Phone, Navigation, Clock, MapPin, Sparkles, Copy, Check } from 'lucide-react';
import { MenuItem, CAFE_INFO } from '../data/menu';

interface OrderModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ item, isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyPhone = () => {
    navigator.clipboard.writeText(CAFE_INFO.phone);
    setCopied(true);
    onShowToast(`Номер ${CAFE_INFO.phone} скопирован!`);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-brand-border z-10 animate-scaleUp my-auto max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange cursor-pointer"
          aria-label="Закрыть окно"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Image preview if exists */}
        {item?.image && (
          <div className="relative aspect-[16/9] w-full bg-gray-900 shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            {item.hasRealPhoto && (
              <div className="absolute top-3 left-3 bg-brand-charcoal/90 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-brand-orange/40">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <span>Реальное фото блюда</span>
              </div>
            )}
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="min-w-0">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-orange block">
                Предзаказ в ПивДонер
              </span>
              <h3 className="text-lg sm:text-xl font-black font-heading text-brand-charcoal mt-0.5 break-words">
                {item ? item.name : 'Оформить предзаказ'}
              </h3>
            </div>
            {item && (
              <span className="text-sm sm:text-base font-black text-brand-charcoal font-heading shrink-0 bg-brand-cream-alt px-3 py-1 rounded-xl border border-brand-border">
                {item.price}
              </span>
            )}
          </div>

          {item && (
            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed break-words">
              {item.description}
            </p>
          )}

          {/* Dish tags */}
          {item?.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {item.tags.map((t, i) => (
                <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg">
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* How to Order Callout */}
          <div className="bg-orange-50/80 rounded-2xl p-4 border border-orange-200/80 mb-5">
            <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              Как сделать предзаказ?
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Позвоните по номеру предзаказа, назовите блюдо и примерное время вашего визита. Мы приготовим всё горячим и свежим точно в срок!
            </p>
          </div>

          {/* Quick info chips */}
          <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs text-gray-600">
            <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 min-w-0">
              <Clock className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
              <span className="truncate">{CAFE_INFO.scheduleShort}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 min-w-0">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="truncate">{CAFE_INFO.address}</span>
            </div>
          </div>

          {/* Action Buttons Panel */}
          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm sm:text-base font-bold bg-brand-orange text-white hover:bg-brand-orange-hover shadow-food transition-all text-center"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Позвонить: {CAFE_INFO.phone}</span>
            </a>

            <div className="flex gap-2">
              <button
                onClick={copyPhone}
                type="button"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Скопировать номер</span>
              </button>

              <a
                href={CAFE_INFO.yandexRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-brand-charcoal hover:bg-gray-800 text-white transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <span>Маршрут</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
