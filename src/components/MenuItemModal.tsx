import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, selectedOption?: string, specialInstructions?: string) => void;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>(
    item.options && item.options.length > 0 ? item.options[0] : ''
  );
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedOption, specialInstructions);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 p-2 bg-stone-900/60 hover:bg-stone-900 text-white rounded-full transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image if available */}
        {item.image ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="h-4 bg-amber-800" />
        )}

        <div className="p-6 space-y-5">
          {/* Item Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                {item.name}
              </h3>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 mt-1">
                  {item.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {idx < item.tags!.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
            <span className="font-semibold text-lg text-amber-900 tabular-nums">
              ${item.price.toFixed(2)}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-stone-600 leading-relaxed">
            {item.description}
          </p>

          {/* Customization Options */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                Select Option / Preparation
              </label>
              <div className="grid grid-cols-1 gap-2">
                {item.options.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-between p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-colors ${
                      selectedOption === opt
                        ? 'border-amber-800 bg-amber-50/60 text-stone-900 font-medium'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <span>{opt}</span>
                    <input
                      type="radio"
                      name="itemOption"
                      value={opt}
                      checked={selectedOption === opt}
                      onChange={() => setSelectedOption(opt)}
                      className="accent-amber-800"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
              Kitchen Notes (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Extra crispy fries, sauce on the side, well-toasted bun"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
            />
          </div>

          {/* Quantity and Add CTA */}
          <div className="pt-2 flex items-center justify-between gap-4 border-t border-stone-200">
            <div className="flex items-center border border-stone-300 rounded-lg p-1 bg-stone-50">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1.5 hover:bg-stone-200 rounded text-stone-700 cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-semibold tabular-nums text-stone-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-1.5 hover:bg-stone-200 rounded text-stone-700 cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={isAdded}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-all cursor-pointer ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-900 hover:bg-amber-900 text-white shadow-sm'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Takeaway · ${(item.price * quantity).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
