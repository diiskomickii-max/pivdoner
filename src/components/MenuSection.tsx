import React, { useState, useMemo } from 'react';
import { Utensils, Info, PhoneCall, Search, Sparkles, LayoutGrid, List, X, Flame, Sandwich, Box, Salad, Cookie } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, CAFE_INFO } from '../data/menu';
import { DishCard } from './DishCard';

const categoryIconMap = {
  Utensils: Utensils,
  Flame: Flame,
  Sandwich: Sandwich,
  Box: Box,
  Salad: Salad,
  Cookie: Cookie,
};

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyRealPhotos, setOnlyRealPhotos] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: MENU_ITEMS.length };
    MENU_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered Items calculation
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      const matchesPhoto = !onlyRealPhotos || item.hasRealPhoto;

      return matchesCategory && matchesSearch && matchesPhoto;
    });
  }, [activeCategory, searchQuery, onlyRealPhotos]);

  const currentCategoryObj = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setOnlyRealPhotos(false);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-brand-cream border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 min-w-0">
          <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-brand-orange bg-orange-100/80 px-3.5 py-1 rounded-full border border-orange-200">
            Наше меню
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black font-heading text-brand-charcoal break-words">
            Выберите любимое блюдо
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 break-words">
            {currentCategoryObj ? currentCategoryObj.description : 'Свежий стритфуд на каждый день'}
          </p>
        </div>

        {/* Modern Interactive Toolbar Panel */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-brand-border/80 shadow-card mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Bar Input */}
            <div className="relative flex-1 min-w-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по названию или составу (например, «донер», «фета»)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-brand-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Очистить поиск"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Buttons & View Controls */}
            <div className="flex items-center flex-wrap gap-2.5 shrink-0">
              
              {/* Only Real Photo Toggle Button */}
              <button
                type="button"
                onClick={() => setOnlyRealPhotos(!onlyRealPhotos)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                  onlyRealPhotos
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${onlyRealPhotos ? 'text-white' : 'text-amber-500'}`} />
                <span>Только с фото (4)</span>
              </button>

              {/* View Mode Toggle Buttons */}
              <div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-2xl border border-gray-200">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-xl transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-brand-charcoal shadow-sm'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  title="Сетка"
                  aria-label="Сетка"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-xl transition-all ${
                    viewMode === 'list'
                      ? 'bg-white text-brand-charcoal shadow-sm'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  title="Список"
                  aria-label="Список"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Active filters reset button */}
              {(searchQuery || onlyRealPhotos || activeCategory !== 'all') && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover px-2 py-1 transition-colors"
                >
                  Сбросить
                </button>
              )}

            </div>

          </div>

          {/* Category Tabs / Filters */}
          <div className="flex items-center justify-start overflow-x-auto pt-4 mt-4 border-t border-gray-100 gap-2 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              const Icon = categoryIconMap[cat.iconName as keyof typeof categoryIconMap] || Utensils;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-brand-charcoal text-white shadow-md shadow-brand-charcoal/20 border-brand-charcoal'
                      : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-brand-orange border border-gray-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-brand-orange text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Informational Callout regarding prices/composition */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm break-words">
              <span className="font-bold block sm:inline mr-1">
                Обратите внимание:
              </span>
              Цены, граммовки и составы некоторых новинок уточняются. Для актуальной информации и быстрого предзаказа звоните в кафе.
            </div>
          </div>

          <a
            href={`tel:${CAFE_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors shrink-0 shadow-sm whitespace-nowrap self-stretch sm:self-auto justify-center"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{CAFE_INFO.phone}</span>
          </a>
        </div>

        {/* Results Counter Panel */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
          <span>Найдено блюд: <strong className="text-brand-charcoal font-bold">{filteredItems.length}</strong></span>
          {onlyRealPhotos && <span className="text-amber-600 font-semibold">• Фильтр: только с реальными фото</span>}
        </div>

        {/* Grid or List of Dishes */}
        {filteredItems.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <DishCard key={item.id} item={item} onSelect={onSelectItem} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-border/80 shadow-sm hover:shadow-card transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <Utensils className="w-6 h-6" />
                        </div>
                      )}
                      {item.hasRealPhoto && (
                        <div className="absolute top-1 left-1 bg-brand-charcoal/90 text-[9px] text-white px-1.5 py-0.5 rounded-full font-bold">
                          Фото
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-brand-charcoal break-words">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-1 mt-0.5 break-words">
                        {item.description}
                      </p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {item.tags.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    <div className="sm:text-right">
                      <span className="text-[10px] text-gray-400 block">Стоимость</span>
                      <span className="text-base font-black text-brand-charcoal font-heading">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectItem(item)}
                      type="button"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors shadow-sm cursor-pointer"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300 p-6">
            <Utensils className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-700">Ничего не найдено</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Попробуйте изменить поисковый запрос или выбрать другую категорию
            </p>
            <button
              onClick={resetFilters}
              type="button"
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-brand-charcoal text-white hover:bg-gray-800 transition-colors"
            >
              Показать все блюда
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
