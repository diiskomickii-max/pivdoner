import React from 'react';
import { Utensils, Layers, ShoppingBag, Clock, PhoneCall, MapPin } from 'lucide-react';
import { ADVANTAGES, METRICS } from '../data/menu';

const iconMap = {
  Utensils: Utensils,
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Clock: Clock,
  PhoneCall: PhoneCall,
  MapPin: MapPin,
};

export const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-16 sm:py-24 bg-brand-cream-alt border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Metrics / Facts Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {METRICS.map((metric, i) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap] || Clock;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-border/80 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block truncate">
                    {metric.label}
                  </span>
                  <div className="text-base sm:text-lg font-black font-heading text-brand-charcoal truncate">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 truncate">
                    {metric.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-brand-orange bg-orange-100/70 px-3 py-1 rounded-full border border-orange-200">
            Наши стандарты
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black font-heading text-brand-charcoal break-words">
            Стритфуд высокого качества
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 break-words">
            Готовим для вас каждый день с заботой о вкусе, свежести ингредиентов и вашем времени
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv) => {
            const IconComponent = iconMap[adv.icon as keyof typeof iconMap] || Utensils;
            return (
              <div
                key={adv.id}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-brand-border/80 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200 border border-brand-orange/20 shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2 font-heading break-words">
                  {adv.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed break-words">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
