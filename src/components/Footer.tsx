import React from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/menu';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-20 sm:pb-12 border-t border-brand-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 bg-diamond-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-charcoal-light">
          
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 min-w-0">
            <div className="flex items-center tracking-tight font-black font-heading text-2xl uppercase mb-4">
              <span className="text-white">ПИВ</span>
              <span className="text-brand-orange ml-1 bg-brand-charcoal-light px-2 py-0.5 rounded-lg border border-brand-orange/30">
                ДОНЕР
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6 break-words">
              {CAFE_INFO.tagline}. Сочная шаурма, аппетитные донеры, тёплые питы, сытные ланчбоксы и свежие салаты на улице Одинцова, 20.
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-gray-400">
              {CAFE_INFO.slogans.map((s, i) => (
                <span key={i} className="bg-brand-charcoal-light px-2.5 py-1 rounded-lg border border-gray-800 shrink-0">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="lg:col-span-3 min-w-0">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-yellow mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#featured" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Популярные блюда
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Меню и категории
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-brand-orange transition-colors">
                  О заведении
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Вопросы и ответы
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Контакты и карта
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Schedule (4 cols) */}
          <div className="lg:col-span-4 min-w-0">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-yellow mb-4">
              Контакты
            </h4>
            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block font-semibold text-white break-words">{CAFE_INFO.fullAddress}</span>
                  <span className="text-xs text-gray-400">Уличное кафе стритфуда</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block font-semibold text-white">{CAFE_INFO.schedule}</span>
                  <span className="text-xs text-gray-400">Без выходных и перерывов</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <a
                    href={`tel:${CAFE_INFO.phoneRaw}`}
                    className="block font-bold text-brand-yellow hover:text-white transition-colors truncate"
                  >
                    {CAFE_INFO.phone}
                  </a>
                  <span className="text-xs text-gray-400">Номер предзаказа с вывески</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CAFE_INFO.yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-orange hover:text-brand-yellow font-bold transition-colors"
                >
                  <span>Организация на Яндекс Картах</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} «{CAFE_INFO.name}». Все права защищены.</p>
          <p className="text-center sm:text-right">
            г. Минск, {CAFE_INFO.address} • Ежедневно {CAFE_INFO.scheduleShort}
          </p>
        </div>

      </div>
    </footer>
  );
};
