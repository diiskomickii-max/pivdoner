import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS, CAFE_INFO } from '../data/menu';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-brand-cream-alt border-t border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 min-w-0">
          <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-brand-orange bg-orange-100/80 px-3.5 py-1 rounded-full border border-orange-200">
            Вопрос — ответ
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black font-heading text-brand-charcoal break-words">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 break-words">
            Всё, что важно знать о заказе, оплате и визите в кафе «ПивДонер»
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-border/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-orange-50/50 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <HelpCircle className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-brand-charcoal break-words">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-orange' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn break-words pl-13">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Panel */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-brand-border/80 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-brand-charcoal">
              Остались вопросы по меню или ингредиентам?
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Позвоните нам — с радостью подскажем и примем предзаказ
            </p>
          </div>

          <a
            href={`tel:${CAFE_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors shadow-sm shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{CAFE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
