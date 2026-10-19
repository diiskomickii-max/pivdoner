import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Copy, Check } from 'lucide-react';
import { CAFE_INFO } from '../data/menu';

interface ContactsSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({ onShowToast }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText(CAFE_INFO.phone);
    setCopiedPhone(true);
    onShowToast(`Телефон ${CAFE_INFO.phone} скопирован!`);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.fullAddress);
    setCopiedAddress(true);
    onShowToast('Адрес скопирован в буфер обмена!');
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 bg-brand-cream-alt border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 min-w-0">
          <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-brand-orange bg-orange-100/80 px-3.5 py-1 rounded-full border border-orange-200">
            Как нас найти
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black font-heading text-brand-charcoal break-words">
            Контакты и местоположение
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 break-words">
            Ждём вас ежедневно на улице Одинцова, 20. Заглядывайте за сочным перекусом!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5 min-w-0">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-brand-border/80">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] uppercase font-extrabold tracking-wider text-gray-400">
                      Наш адрес
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-brand-charcoal mt-1 break-words">
                      {CAFE_INFO.fullAddress}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Ориентир: {CAFE_INFO.metro}
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyAddress}
                  type="button"
                  className="p-2 text-gray-400 hover:text-brand-orange rounded-xl hover:bg-orange-50 transition-colors shrink-0"
                  title="Скопировать адрес"
                  aria-label="Скопировать адрес"
                >
                  {copiedAddress ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-brand-border/80">
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/30">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[11px] uppercase font-extrabold tracking-wider text-gray-400">
                    График работы
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-brand-charcoal mt-1 break-words">
                    {CAFE_INFO.schedule}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Работаем каждый день без выходных
                  </p>
                </div>
              </div>
            </div>

            {/* Preorder Phone Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-brand-border/80">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] uppercase font-extrabold tracking-wider text-gray-400">
                      Номер предзаказа (с вывески)
                    </h3>
                    <a
                      href={`tel:${CAFE_INFO.phoneRaw}`}
                      className="text-base sm:text-xl font-black text-brand-orange hover:text-brand-orange-hover mt-1 block font-heading truncate"
                    >
                      {CAFE_INFO.phone}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Позвоните, чтобы забрать готовый горячий заказ
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  type="button"
                  className="p-2 text-gray-400 hover:text-brand-orange rounded-xl hover:bg-orange-50 transition-colors shrink-0"
                  title="Скопировать телефон"
                  aria-label="Скопировать телефон"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Map Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={CAFE_INFO.yandexMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-charcoal text-white hover:bg-gray-800 transition-colors shadow-sm text-center"
              >
                <span>В Яндекс Картах</span>
                <ExternalLink className="w-4 h-4 text-brand-yellow shrink-0" />
              </a>

              <a
                href={CAFE_INFO.yandexRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors shadow-sm text-center"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Построить маршрут</span>
              </a>
            </div>

          </div>

          {/* Embedded Map (7 cols) */}
          <div className="lg:col-span-7 h-full min-h-[380px] lg:min-h-[460px] min-w-0">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-card border border-brand-border/80 bg-gray-200 relative min-h-[380px]">
              <iframe
                title="ПивДонер на Яндекс Картах"
                src={CAFE_INFO.yandexWidgetUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-[11px] font-semibold text-gray-700 shadow-md border border-gray-200 pointer-events-none flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>ул. Одинцова, 20</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
