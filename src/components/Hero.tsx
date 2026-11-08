import React from 'react';
import { Star, MapPin, Clock, ArrowRight, Utensils, Phone, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Breadcrumb / Category Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 mb-6 font-medium">
          <span>Holly River State Park</span>
          <span aria-hidden="true">·</span>
          <span>Hacker Valley, West Virginia</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-900 font-semibold">{RESTAURANT_INFO.priceRange}</span>
          <span aria-hidden="true">·</span>
          <span>Dine-in & Takeaway</span>
        </div>

        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & Call-to-actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Rating & Trust Line (Clean unboxed metadata) */}
            <div className="flex items-center gap-2 text-sm text-stone-700">
              <div className="flex items-center text-amber-600">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="ml-1 font-bold text-stone-900 tabular-nums">4.9</span>
              </div>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <a href="#reviews" className="hover:text-amber-900 underline underline-offset-4 decoration-stone-300">
                41 Google Reviews
              </a>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-stone-600">Top Rated in Webster County</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.12] text-balance">
              The Cookhouse at Holly River
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Nestled along a crystal mountain stream inside Holly River State Park. 
              Serving legendary griddled Patty Melts, sizzling Ribeye dinners, loaded Philly steaks, 
              and scratch-made breakfast from 8:00 AM every morning.
            </p>

            {/* Operating Hours & Status Note */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-stone-800 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-amber-950">
                <Clock className="w-4 h-4 text-amber-800" />
                <span>Open Tuesday – Sunday · Opens at 8:00 AM</span>
              </div>
              <p className="text-stone-600 text-xs">
                Country Breakfast served 8:00 AM – 11:30 AM · Hearty Lunch & Dinner 11:30 AM – Close
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-stone-50 hover:bg-amber-900 rounded-lg font-semibold text-sm transition-all shadow-sm group"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white text-stone-800 hover:bg-stone-100 border border-stone-300 rounded-lg font-medium text-sm transition-colors cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-stone-600" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-stone-700 hover:text-amber-900 font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>Call Ahead</span>
              </a>
            </div>

            {/* Micro Location Marker */}
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-500">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
              <span className="truncate">{RESTAURANT_INFO.address}</span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Creekside Cookhouse Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 aspect-[16/10] sm:aspect-[16/10] bg-stone-200">
              <img
                src={RESTAURANT_INFO.heroImage}
                alt="The Cookhouse restaurant nestled beside the clear bubbling stream at Holly River State Park"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Refined gradient scrim for textual clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-1">
                  Creekside Atmosphere
                </span>
                <p className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  "Bubbling stream runs right along the outside with benches to enjoy nature."
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-stone-300">
                  <span>Holly River State Park</span>
                  <span aria-hidden="true">·</span>
                  <span>Outdoor benches & indoor timber seating</span>
                </div>
              </div>
            </div>

            {/* Floating Review Badge Overlay */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-stone-200 shadow-lg items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 font-bold text-sm">
                4.9★
              </div>
              <div className="text-xs">
                <p className="font-semibold text-stone-900">Loved by Hikers & Families</p>
                <p className="text-stone-500">"The cook is a national treasure!"</p>
              </div>
            </div>

            {/* Quick Directions Floating Tag */}
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-stone-900/90 hover:bg-stone-900 text-stone-100 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors shadow"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-300" />
              <span>Get Directions</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
