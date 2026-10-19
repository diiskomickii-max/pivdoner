import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { FloatingDock } from './components/FloatingDock';
import { Toast } from './components/Toast';
import { MenuItem } from './data/menu';

export const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleOpenModal = (item?: MenuItem) => {
    setSelectedItem(item || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-orange selection:text-white relative overflow-x-hidden">
      {/* Sticky Header */}
      <Navbar onShowToast={showToast} />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero onOpenOrderModal={() => handleOpenModal()} onShowToast={showToast} />
        <Advantages />
        <FeaturedDishes onSelectItem={(item) => handleOpenModal(item)} />
        <MenuSection onSelectItem={(item) => handleOpenModal(item)} />
        <AboutSection />
        <FaqSection />
        <ContactsSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Action Order / Inquiry Modal */}
      <OrderModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onShowToast={showToast}
      />

      {/* Mobile Floating Action Dock */}
      <FloatingDock />

      {/* Action Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;
