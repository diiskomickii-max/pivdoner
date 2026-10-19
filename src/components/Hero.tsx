import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Phone, Sparkles, Flame, Copy, Check } from 'lucide-react';
import { CAFE_INFO } from '../data/menu';

interface HeroProps {
  onOpenOrderModal: () => void;
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.fullAddress);
    setCopied(true);
    onShowToast('Адрес скопирован в буфер обмена!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-brand-charcoal text-white">
      {/* Background accents & subtle street pattern */}
      <div className="absolute inset-0 bg-diamond-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start min-w-0 w-full">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-5 max-w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white shadow-md shrink-0">
                <Flame className="w-3.5 h-3.5" />
                <span>Городской стритфуд</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-charcoal-light border border-gray-700 text-brand-yellow shrink-0">
                <Clock className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <span>{CAFE_INFO.schedule}</span>
              </div>
              <button
                onClick={copyAddress}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-charcoal-light border border-gray-700 hover:border-brand-orange text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Нажмите, чтобы скопировать адрес"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span className="truncate max-w-[170px] sm:max-w-none">{CAFE_INFO.address}</span>
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-gray-500" />}
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] mb-5 break-words max-w-full">
              <span className="text-white block">ПивДонер —</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-orange to-red-500 block">
                вкус, за которым
              </span>
              <span className="text-white block">возвращаются</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-gray-300 max-w-xl mb-7 leading-relaxed font-normal break-words">
              {CAFE_INFO.subtitle}. Готовим сочные блюда из свежих продуктов прямо при вас на открытой кухне.
            </p>

            {/* Facade Hashtags / Taglines */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-full">
              {CAFE_INFO.slogans.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs sm:text-sm font-semibold text-gray-300 bg-brand-charcoal-light/90 px-3 py-1.5 rounded-xl border border-gray-700/60 shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons Panels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-extrabold bg-brand-orange text-white hover:bg-brand-orange-hover transition-all duration-200 shadow-food hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                <span>Смотреть меню</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-brand-charcoal-light hover:bg-gray-800 text-white border border-gray-700 transition-all duration-200 text-center"
              >
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Как нас найти</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold text-brand-yellow hover:text-white bg-brand-charcoal-light/80 hover:bg-brand-charcoal-light border border-brand-yellow/30 transition-all duration-200 text-center cursor-pointer"
              >
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Быстрый предзаказ</span>
              </button>
            </div>

            {/* Micro Feature Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-4 border-t border-gray-800 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                <span className="truncate">Только свежее мясо</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                <span className="truncate">Хрустящий лаваш</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="truncate">Термоупаковка навынос</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Photo */}
          <div className="lg:col-span-5 relative min-w-0 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow & Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-orange to-brand-yellow rounded-3xl opacity-30 blur-lg" />
              
              <div className="relative bg-brand-charcoal-light rounded-3xl p-3 border-2 border-brand-orange/40 shadow-2xl overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[4/4.5] bg-gray-900">
                  <img
                    src="./images/doner-classic.jpg"
                    alt="Сочный авторский донер и шаурма ПивДонер в разрезе"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  
                  {/* Real Photo Authentic Badge */}
                  <div className="absolute top-4 left-4 bg-brand-charcoal/90 backdrop-blur-md border border-brand-orange/50 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span>Реальное фото блюда</span>
                  </div>

                  {/* Bottom Dish Overlay Card */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/90 to-transparent p-5 pt-12">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-[11px] font-bold text-brand-yellow uppercase tracking-wider block mb-1">
                          Фирменная подача
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white truncate">
                          Сочный донер в лаваше
                        </h3>
                        <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                          Свежие овощи, сочное мясо и авторский соус
                        </p>
                      </div>
                      <a
                        href="#menu"
                        className="p-2.5 rounded-xl bg-brand-orange text-white hover:bg-brand-orange-hover shrink-0 transition-colors"
                        aria-label="Перейти к блюдам"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Mini Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-brand-charcoal border border-brand-orange/40 rounded-2xl p-3 shadow-xl flex items-center gap-3 hidden sm:flex backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-lg">
                  🌯
                </div>
                <div>
                  <div className="text-[11px] font-medium text-gray-400">Свежее мясо и овощи</div>
                  <div className="text-xs font-extrabold text-white">#Меньшеслов_больше_мяса</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
