import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Copy, Check, ExternalLink, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <Compass className="w-4 h-4" />
            <span>Visiting Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Hours, Location & Mountain Directions
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Located directly inside Holly River State Park off Route 20 in Hacker Valley, West Virginia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Essential Visitor Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-stone-900">
                    Physical Address
                  </h3>
                  <p className="text-sm text-stone-700 mt-1">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Inside Holly River State Park, Hacker Valley, WV
                  </p>
                </div>
              </div>

              {/* Action Buttons for Address & Plus Code */}
              <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-2">
                <button
                  onClick={() => copyToClipboard(RESTAURANT_INFO.address, 'address')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer"
                >
                  {copiedType === 'address' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => copyToClipboard(RESTAURANT_INFO.plusCode, 'plusCode')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer"
                >
                  {copiedType === 'plusCode' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Plus Code Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Plus Code: MJ8W+C9</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Maps Launchers */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-300" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={RESTAURANT_INFO.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Apple Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Telephone Call Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Call the Kitchen</h4>
                  <p className="text-xs text-stone-500">Takeout orders & table questions</p>
                </div>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="px-3.5 py-2 bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold rounded-lg transition-colors"
              >
                {RESTAURANT_INFO.formattedPhone}
              </a>
            </div>

            {/* Mountain Driving Guidance */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-xs sm:text-sm text-stone-800">
              <h4 className="font-bold text-amber-950 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-800" />
                <span>Mountain Road Travel Tips</span>
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Holly River State Park is accessed via WV Route 20 between Webster Springs and Flatwoods/Sutton. 
                GPS works reliably along State Park Road. If cellular reception dips in the hollow, 
                follow signs for Holly River State Park Main Lodge & Cookhouse.
              </p>
            </div>

          </div>

          {/* Right Column: Weekly Hours Schedule */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-amber-800" />
                <h3 className="font-display text-xl font-bold text-stone-900">
                  Weekly Operating Hours
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Opens at 8:00 AM
              </span>
            </div>

            {/* Schedule Table */}
            <div className="divide-y divide-stone-100 text-sm">
              {RESTAURANT_INFO.openingHours.map((item) => (
                <div
                  key={item.day}
                  className="py-3 flex items-center justify-between font-medium"
                >
                  <span className={item.day === 'Monday' ? 'text-stone-400' : 'text-stone-800'}>
                    {item.day}
                  </span>
                  <span
                    className={`tabular-nums ${
                      item.day === 'Monday'
                        ? 'text-stone-400 font-normal italic'
                        : 'text-stone-900 font-semibold'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Meal Time Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Breakfast Service
                </span>
                <p className="font-display text-lg font-bold text-stone-900 mt-0.5">
                  8:00 AM – 11:30 AM
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Scratch buttermilk biscuits, hot sausage gravy, farm eggs, wild blueberry stacks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Lunch & Dinner
                </span>
                <p className="font-display text-lg font-bold text-stone-900 mt-0.5">
                  11:30 AM – Close
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Patty Melts, Philly steaks, char-grilled ribeye specials, hand-cut fries, and cobblers.
                </p>
              </div>
            </div>

            {/* Nearby State Park Landmarks */}
            <div className="pt-2 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Nearby within the park:</span>{' '}
              Tecumseh Falls Trailhead (0.4 mi) · Shupe's Chute (1.2 mi) · Holly River Campgrounds (0.8 mi) · Laurel Fork Trout Stream (adjacent).
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
