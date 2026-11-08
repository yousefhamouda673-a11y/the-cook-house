import React, { useState, useMemo } from 'react';
import { Search, Plus, Utensils, Sparkles, ChefHat } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onQuickAdd }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'specials', label: 'Signature Dishes & Specials' },
    { id: 'breakfast', label: 'Mountain Breakfast (8 AM)' },
    { id: 'sandwiches', label: 'Burgers & Sandwiches' },
    { id: 'sides', label: 'Fresh Sides & Soups' },
    { id: 'desserts', label: 'Desserts & Beverages' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured signature items that have dedicated photography
  const featuredSpecials = useMemo(() => {
    return MENU_ITEMS.filter((item) => item.image);
  }, []);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <ChefHat className="w-4 h-4" />
            <span>Honest Appalachian Cooking</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Our Kitchen Menu
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Freshly prepared by our legendary head cook. From warm country breakfast skillets starting at 8:00 AM, 
            to our award-winning Patty Melts, ribeye dinners, and hand-cut fries.
          </p>
        </div>

        {/* Featured Showcase (The Big 3 Popular Items Mentioned by Guests) */}
        {activeCategory === 'all' && searchQuery === '' && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-stone-900">
                Signature Guest Favorites
              </h3>
              <span className="text-xs text-stone-500 hidden sm:inline">
                Most reviewed on Google
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {featuredSpecials.map((dish) => (
                <div
                  key={dish.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs px-2.5 py-1 rounded-md font-medium">
                      Top Rated
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h4 className="font-display text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                          {dish.name}
                        </h4>
                        <span className="text-lg font-bold text-stone-950 tabular-nums">
                          ${dish.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                        {dish.description}
                      </p>
                      
                      {dish.tags && (
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 mt-3">
                          {dish.tags.map((t, i) => (
                            <React.Fragment key={t}>
                              <span>{t}</span>
                              {i < dish.tags!.length - 1 && <span aria-hidden="true">·</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectItem(dish)}
                        className="text-xs font-semibold text-stone-700 hover:text-amber-900 underline underline-offset-4 cursor-pointer"
                      >
                        Customize & Details
                      </button>
                      <button
                        onClick={() => onQuickAdd(dish)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-amber-900 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs (Segmented functional buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search dishes, fries, sides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-800 text-stone-800 placeholder-stone-400"
            />
          </div>

        </div>

        {/* Menu Items List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h4 className="font-display text-lg font-bold text-stone-800">No dishes match your search</h4>
            <p className="text-sm text-stone-500 mt-1">Try another keyword or reset the category filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-amber-900 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 border border-stone-200/90 hover:border-amber-700/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display text-lg font-bold text-stone-900">
                          {item.name}
                        </h4>
                        {item.isPopular && (
                          <span className="text-[11px] text-amber-800 font-medium">
                            · Popular
                          </span>
                        )}
                      </div>
                      
                      {item.tags && (
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 mt-1">
                          {item.tags.map((t, idx) => (
                            <React.Fragment key={t}>
                              <span>{t}</span>
                              {idx < item.tags!.length - 1 && <span aria-hidden="true">·</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>

                    <span className="font-bold text-base text-stone-900 tabular-nums shrink-0">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-sm text-stone-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    {item.category === 'breakfast' ? 'Breakfast 8AM–11:30AM' : 'Dine-in or Takeaway'}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs font-semibold text-stone-700 hover:text-amber-900 py-1 px-2 cursor-pointer"
                    >
                      Customize
                    </button>
                    <button
                      onClick={() => onQuickAdd(item)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-900 hover:bg-amber-900 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Breakfast & Daily Specials Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-900 text-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-stone-800">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              Daily Specials Board
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Planning to stop by before hitting the Holly River trails?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
              We open promptly at 8:00 AM with fresh mountain biscuits, hot sausage gravy, and steaming coffee. 
              Call ahead at (304) 493-9493 to have your trail lunch ready when you arrive.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap"
            >
              Call {RESTAURANT_INFO.formattedPhone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
