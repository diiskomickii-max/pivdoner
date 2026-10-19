import React from 'react';
import { CheckCircle2, Navigation, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/menu';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Facade Image Card */}
          <div className="lg:col-span-6 relative min-w-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200 group">
              <img
                src="/images/facade.jpg"
                alt="Кафе ПивДонер на улице Одинцова, 20 в Минске — фасад павильона"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-transparent to-transparent opacity-95" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase font-extrabold text-brand-yellow tracking-wider block mb-1">
                  Фасад кафе
                </span>
                <p className="text-base sm:text-lg font-bold truncate">
                  {CAFE_INFO.name} — {CAFE_INFO.address}
                </p>
                <p className="text-xs text-gray-200 mt-0.5">
                  График работы: {CAFE_INFO.schedule}
                </p>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-6 min-w-0">
            <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-brand-orange bg-orange-100/80 px-3.5 py-1 rounded-full border border-orange-200">
              О заведении
            </span>
            
            <h2 className="mt-3 text-2xl sm:text-4xl font-black font-heading text-brand-charcoal leading-tight break-words">
              Городской стритфуд на ул. Одинцова, 20
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed break-words">
              «<strong className="text-brand-charcoal font-bold">ПивДонер</strong>» — это точка уличного кафе в Минске, где можно быстро, сытно и вкусно перекусить любимыми блюдами стритфуда.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed break-words">
              Мы готовим сочную авторскую шаурму в подрумяненном лаваше, аппетитные донеры, тёплые питы, сытные ланчбоксы, горячие закуски и свежие салаты. Готовим быстро и упаковываем так, чтобы еда сохраняла свой вкус и тепло.
            </p>

            {/* Facade Points */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">
                  Работаем ежедневно с 10:00 до 23:00 без выходных
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">
                  Удобная термоупаковка — еда остаётся горячей навынос
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">
                  Возможность быстрого предзаказа по телефону
                </span>
              </div>
            </div>

            {/* Slogans pills */}
            <div className="mt-6 pt-5 border-t border-brand-border/80 flex flex-wrap gap-2">
              {CAFE_INFO.slogans.map((slogan, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-brand-cream-alt text-brand-charcoal text-xs font-bold border border-brand-border shrink-0"
                >
                  {slogan}
                </span>
              ))}
            </div>

            {/* Interactive Action Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Позвонить для предзаказа</span>
              </a>

              <a
                href={CAFE_INFO.yandexRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gray-100 hover:bg-gray-200 text-brand-charcoal transition-colors border border-gray-200"
              >
                <Navigation className="w-4 h-4 text-brand-orange" />
                <span>Маршрут до кафе</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
