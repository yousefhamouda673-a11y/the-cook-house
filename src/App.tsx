/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { MenuSection } from './components/MenuSection';
import { AtmosphereStory } from './components/AtmosphereStory';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MenuItemModal } from './components/MenuItemModal';
import { OrderCartDrawer } from './components/OrderCartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedOption?: string,
    specialInstructions?: string
  ) => {
    setCart((prevCart) => {
      // Check if item with same option and special instructions already exists
      const existingIdx = prevCart.findIndex(
        (ci) =>
          ci.menuItem.id === item.id &&
          ci.selectedOption === selectedOption &&
          ci.specialInstructions === specialInstructions
      );

      if (existingIdx > -1) {
        const next = [...prevCart];
        next[existingIdx].quantity += quantity;
        return next;
      } else {
        return [...prevCart, { menuItem: item, quantity, selectedOption, specialInstructions }];
      }
    });
  };

  const handleQuickAdd = (item: MenuItem) => {
    handleAddToCart(item, 1, item.options?.[0]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prevCart) => {
      const next = [...prevCart];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Navigation Bar */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <QuickInfoBar />

        <MenuSection
          onSelectItem={(item) => setSelectedMenuItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        <AtmosphereStory />

        <ReviewsSection />

        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Item Customization & Add Modal */}
      <MenuItemModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Takeaway Order Cart Drawer */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation & Creekside Inquiry Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
