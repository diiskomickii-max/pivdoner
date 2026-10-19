import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Copy, Check } from 'lucide-react';
import { CAFE_INFO } from '../data/menu';

interface NavbarProps {
  onShowToast: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShowToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  // Real-time open/closed status calculation
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      setIsOpenNow(currentHour >= CAFE_INFO.startHour && currentHour < CAFE_INFO.endHour);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CAFE_INFO.phone);
    setCopied(true);
    onShowToast(`Номер ${CAFE_INFO.phone} скопирован в буфер!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-xl border-b border-brand-charcoal-light py-2'
          : 'bg-brand-charcoal/90 backdrop-blur-sm py-3 sm:py-4'
      }`}
    >
      {/* Top micro banner for open status & address on desktop */}
      <div className="hidden lg:block border-b border-white/5 pb-2 mb-2 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-gray-400'}`} />
              <span className={isOpenNow ? 'text-emerald-400 font-bold' : 'text-gray-400'}>
                {isOpenNow ? 'Сейчас открыто' : 'Закрыто'}
              </span>
              <span className="text-gray-500">• {CAFE_INFO.schedule}</span>
            </div>
            <div className="text-gray-600">|</div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>{CAFE_INFO.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-500">{CAFE_INFO.slogans[0]}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">{CAFE_INFO.slogans[2]}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-xl shrink-0"
          >
            <div className="flex items-center tracking-tight font-black font-heading text-xl sm:text-2xl lg:text-3xl uppercase">
              <span className="text-white">ПИВ</span>
              <span className="text-brand-orange ml-1 bg-brand-charcoal-light px-2 py-0.5 rounded-lg border border-brand-orange/30 shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                ДОНЕР
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] uppercase font-bold text-brand-yellow px-2 py-0.5 bg-brand-charcoal-light rounded-md border border-brand-yellow/30">
              Стритфуд
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 text-sm font-semibold shrink-0">
            <a
              href="#hero"
              className="text-gray-200 hover:text-brand-orange transition-colors duration-150"
            >
              Главная
            </a>
            <a
              href="#advantages"
              className="text-gray-200 hover:text-brand-orange transition-colors duration-150"
            >
              Преимущества
            </a>
            <a
              href="#featured"
              className="text-gray-200 hover:text-brand-orange transition-colors duration-150"
            >
              Популярное
            </a>
            <a
              href="#menu"
              className="text-gray-200 hover:text-brand-orange transition-colors duration-150"
            >
              Меню
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-brand-orange transition-colors duration-150"
            >
              О нас
            </a>
            <a
              href="#faq"
              className="text-gray-200 hover:text-brand-orange transition-colors duration-150"
            >
              Вопросы
            </a>
            <a
              href="#contacts"
              className="text-gray-200 hover:text-brand-orange transition-colors duration-150"
            >
              Контакты
            </a>
          </nav>

          {/* Quick Contacts & Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 bg-brand-charcoal-light/80 border border-gray-700/60 rounded-xl px-3 py-1.5">
              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-bold text-gray-200 hover:text-brand-yellow transition-colors"
                title="Позвонить для предзаказа"
              >
                <div className="w-6 h-6 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="whitespace-nowrap">{CAFE_INFO.phone}</span>
              </a>

              <button
                onClick={copyPhone}
                type="button"
                className="p-1 text-gray-400 hover:text-white rounded-md transition-colors"
                title="Скопировать номер"
                aria-label="Скопировать номер"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-brand-orange text-white hover:bg-brand-orange-hover transition-all shadow-md hover:shadow-food active:scale-95"
            >
              Посмотреть меню
            </a>
          </div>

          {/* Mobile Right Quick Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="p-2 rounded-xl bg-brand-orange text-white hover:bg-brand-orange-hover shadow-sm"
              aria-label="Позвонить в кафе"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-brand-charcoal-light focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brand-charcoal border-b border-brand-charcoal-light px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-charcoal-light text-xs">
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-gray-400'}`} />
              <span className={isOpenNow ? 'text-emerald-400 font-bold' : 'text-gray-400'}>
                {isOpenNow ? 'Открыто сейчас (10:00–23:00)' : 'Закрыто до 10:00'}
              </span>
            </div>
            <span className="text-gray-400 font-medium">ул. Одинцова, 20</span>
          </div>

          <nav className="flex flex-col space-y-2 font-semibold text-sm">
            <a
              href="#hero"
              onClick={closeMenu}
              className="px-3 py-2 rounded-xl text-gray-200 hover:bg-brand-charcoal-light hover:text-brand-orange"
            >
              Главная
            </a>
            <a
              href="#advantages"
              onClick={closeMenu}
              className="px-3 py-2 rounded-xl text-gray-200 hover:bg-brand-charcoal-light hover:text-brand-orange"
            >
              Преимущества
            </a>
            <a
              href="#featured"
              onClick={closeMenu}
              className="px-3 py-2 rounded-xl text-gray-200 hover:bg-brand-charcoal-light hover:text-brand-orange"
            >
              Популярные блюда
            </a>
            <a
              href="#menu"
              onClick={closeMenu}
              className="px-3 py-2 rounded-xl text-gray-200 hover:bg-brand-charcoal-light hover:text-brand-orange"
            >
              Меню и категории
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="px-3 py-2 rounded-xl text-gray-200 hover:bg-brand-charcoal-light hover:text-brand-orange"
            >
              О заведении
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="px-3 py-2 rounded-xl text-gray-200 hover:bg-brand-charcoal-light hover:text-brand-orange"
            >
              Вопросы и ответы
            </a>
            <a
              href="#contacts"
              onClick={closeMenu}
              className="px-3 py-2 rounded-xl text-gray-200 hover:bg-brand-charcoal-light hover:text-brand-orange"
            >
              Контакты и карта
            </a>

            <div className="pt-3 border-t border-brand-charcoal-light flex flex-col gap-2.5">
              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-charcoal-light border border-brand-orange/40 text-brand-yellow font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                Предзаказ: {CAFE_INFO.phone}
              </a>
              <a
                href="#menu"
                onClick={closeMenu}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-orange text-white font-bold text-center text-xs shadow-md"
              >
                Перейти в меню
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
