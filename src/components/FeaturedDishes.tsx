import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/menu';
import { DishCard } from './DishCard';

interface FeaturedDishesProps {
  onSelectItem: (item: MenuItem) => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onSelectItem }) => {
  const featured = MENU_ITEMS.filter((item) => item.isFeatured);

  return (
    <section id="featured" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl min-w-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-3 border border-amber-200 shrink-0">
              <Camera className="w-3.5 h-3.5 text-brand-orange" />
              <span>Реальные фотографии блюд</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-brand-charcoal break-words">
              Блюда нашего меню
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 break-words">
              Оцените подачу и аппетитный вид наших сочных донеров и свежих салатов. Готовим каждый заказ аккуратно и с душой.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-hover group shrink-0 self-start md:self-end"
          >
            <span>Смотреть всё меню ({MENU_ITEMS.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <DishCard key={item.id} item={item} onSelect={onSelectItem} />
          ))}
        </div>

      </div>
    </section>
  );
};
