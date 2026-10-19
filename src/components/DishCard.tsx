import React from 'react';
import { Sparkles, PhoneCall, UtensilsCrossed, ArrowUpRight } from 'lucide-react';
import { MenuItem } from '../data/menu';

interface DishCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ item, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1 min-w-0 w-full">
      
      {/* Dish Image or Placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream-alt">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-6 bg-gradient-to-br from-gray-50 to-orange-50/40">
            <div className="w-12 h-12 rounded-2xl bg-orange-100/60 text-brand-orange flex items-center justify-center mb-2">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-gray-500">Фото готовится</span>
            <span className="text-[10px] text-gray-400 mt-0.5">ПивДонер</span>
          </div>
        )}

        {/* Real Photo Badge */}
        {item.hasRealPhoto && (
          <div className="absolute top-3 left-3 bg-brand-charcoal/90 backdrop-blur-md border border-brand-orange/40 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
            <Sparkles className="w-3 h-3 text-brand-yellow shrink-0" />
            <span>Реальное фото</span>
          </div>
        )}

        {/* Weight Badge if available */}
        {item.weight && item.weight !== 'Граммовка уточняется' && (
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded-lg shadow-sm">
            {item.weight}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between min-w-0">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-bold font-heading text-brand-charcoal group-hover:text-brand-orange transition-colors break-words min-w-0">
              {item.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed break-words mb-3">
            {item.description}
          </p>

          {/* Ingredient / Category Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] sm:text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md truncate max-w-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="text-[10px] text-gray-400 block font-medium leading-none">Стоимость</span>
            <span className="text-sm sm:text-base font-black text-brand-charcoal font-heading block mt-1 truncate">
              {item.price}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onSelect(item)}
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-brand-orange text-white hover:bg-brand-orange-hover active:scale-95 transition-all shadow-sm cursor-pointer"
              title="Заказать или уточнить наличие"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Заказать</span>
            </button>

            <button
              onClick={() => onSelect(item)}
              type="button"
              className="p-1.5 rounded-xl text-gray-500 hover:text-brand-charcoal bg-gray-100 hover:bg-gray-200 transition-colors"
              title="Подробнее о блюде"
              aria-label="Подробнее о блюде"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
