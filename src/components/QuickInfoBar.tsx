import React from 'react';
import { DollarSign, Clock, MapPin, Phone, Coffee, Trees } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const QuickInfoBar: React.FC = () => {
  return (
    <div className="bg-stone-900 text-stone-100 py-6 border-y border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Card 1: Hours */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Hours</span>
            </div>
            <p className="text-sm font-semibold text-white">Opens at 8:00 AM</p>
            <p className="text-xs text-stone-400">Tue – Sun · 8 AM to 8 PM</p>
          </div>

          {/* Card 2: Price Per Person */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <DollarSign className="w-4 h-4" />
              <span>Price Range</span>
            </div>
            <p className="text-sm font-semibold text-white tabular-nums">$10 – $20 per person</p>
            <p className="text-xs text-stone-400">Generous country portions</p>
          </div>

          {/* Card 3: Location */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>State Park Road</span>
            </div>
            <p className="text-sm font-semibold text-white truncate">Hacker Valley, WV</p>
            <p className="text-xs text-stone-400">Holly River State Park</p>
          </div>

          {/* Card 4: Services & Seating */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Trees className="w-4 h-4" />
              <span>Dining Experience</span>
            </div>
            <p className="text-sm font-semibold text-white">Dine-in · Takeaway</p>
            <p className="text-xs text-stone-400">Outdoor creekside benches</p>
          </div>

        </div>
      </div>
    </div>
  );
};
