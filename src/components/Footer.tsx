import React from 'react';
import { MapPin, Phone, Star, Clock, Trees } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenCart }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white block">
              {RESTAURANT_INFO.name}
            </span>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Authentic Appalachian country dining nestled along the stream at Holly River State Park, Hacker Valley, West Virginia. 
              Proudly serving our community, hikers, campers, and park visitors.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="ml-1 font-bold text-white tabular-nums">4.9</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>41 Verified Reviews</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400">$10–$20 per person</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Our Menu & Specials
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-white transition-colors">
                  Creekside Benches & Stream
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Directions & Park Road
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Reserve a Table
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCart}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Takeaway Order
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Visit The Cookhouse
            </h4>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>680 State Park Road, Hacker Valley, WV 26222</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                  (304) 493-9493
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Opens at 8:00 AM</p>
                  <p className="text-xs">Tuesday – Sunday · 8:00 AM to 8:00 PM</p>
                  <p className="text-xs text-stone-500">Closed on Mondays</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} The Cookhouse. Holly River State Park, Hacker Valley, West Virginia.
          </p>
          <div className="flex items-center gap-4">
            <span>Dine-in</span>
            <span aria-hidden="true">·</span>
            <span>Takeaway</span>
            <span aria-hidden="true">·</span>
            <span>Creekside Benches</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
