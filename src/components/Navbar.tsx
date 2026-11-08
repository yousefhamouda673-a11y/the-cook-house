import React from 'react';
import { ShoppingBag, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onOpenCart, onOpenReservation }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#home" 
          className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-900 transition-colors"
        >
          {RESTAURANT_INFO.name}
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a href="#menu" className="hover:text-amber-900 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0">
            Menu
          </a>
          <a href="#atmosphere" className="hover:text-amber-900 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0">
            Creekside Experience
          </a>
          <a href="#reviews" className="hover:text-amber-900 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0">
            Reviews ({RESTAURANT_INFO.rating}★)
          </a>
          <a href="#location" className="hover:text-amber-900 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0">
            Hours & Location
          </a>
          <button 
            onClick={onOpenReservation}
            className="hover:text-amber-900 transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Table Inquiry
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Call The Cookhouse"
          >
            <Phone className="w-3.5 h-3.5 text-amber-800" />
            <span>(304) 493-9493</span>
          </a>

          <button
            onClick={onOpenCart}
            aria-label="View takeaway order cart"
            className="relative inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 text-stone-50 hover:bg-amber-900 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-amber-200" />
            <span>Takeaway Order</span>
            {cartItemCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-xs font-bold bg-amber-500 text-stone-950 rounded-full tabular-nums">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
