import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'dine-in'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupNote, setPickupNote] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderNumber: string;
    total: number;
    name: string;
    time: string;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const tax = subtotal * 0.06; // 6% WV sales tax
  const total = subtotal + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const orderNum = 'CK-' + Math.floor(1000 + Math.random() * 9000);
    const pickupTime = new Date(Date.now() + 25 * 60000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    setConfirmedOrder({
      orderNumber: orderNum,
      total: total,
      name: customerName || 'Valued Guest',
      time: pickupTime,
    });
  };

  const handleReset = () => {
    onClearCart();
    setConfirmedOrder(null);
    setCustomerName('');
    setCustomerPhone('');
    setPickupNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-800" />
            <h3 className="font-display text-xl font-bold text-stone-900">
              Your Kitchen Order
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmed Order State */}
        {confirmedOrder ? (
          <div className="p-6 my-auto text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Order Sent to Kitchen
              </span>
              <h4 className="font-display text-2xl font-bold text-stone-900 mt-1">
                Order #{confirmedOrder.orderNumber}
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                Thank you, {confirmedOrder.name}!
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl text-left space-y-2 text-xs sm:text-sm text-stone-800">
              <div className="flex justify-between">
                <span className="text-stone-500">Estimated Ready Time:</span>
                <span className="font-bold text-stone-900">{confirmedOrder.time} (~20-25 min)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Pickup Counter:</span>
                <span className="font-semibold text-stone-900">The Cookhouse Main Counter</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Total Due at Pickup:</span>
                <span className="font-bold text-amber-900 tabular-nums">
                  ${confirmedOrder.total.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 pt-1 border-t border-amber-200/60">
                Payment accepted upon pickup (Cash or Card).
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>Call Kitchen: (304) 493-9493</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-3 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Cart Body */}
            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              
              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    orderType === 'takeaway'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Takeaway / Trailhead
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('dine-in')}
                  className={`py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    orderType === 'dine-in'
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Dine-in Table Order
                </button>
              </div>

              {/* Items List */}
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <ShoppingBag className="w-10 h-10 text-stone-300 mx-auto" />
                  <p className="text-sm font-semibold text-stone-700">Your basket is empty</p>
                  <p className="text-xs text-stone-500">
                    Add our famous Patty Melt, Ribeye special, or mountain breakfast to start.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, idx) => (
                    <div
                      key={`${item.menuItem.id}-${idx}`}
                      className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col gap-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-stone-900">
                            {item.menuItem.name}
                          </h4>
                          {item.selectedOption && (
                            <p className="text-xs text-amber-900 font-medium">
                              {item.selectedOption}
                            </p>
                          )}
                          {item.specialInstructions && (
                            <p className="text-[11px] text-stone-500 italic">
                              "{item.specialInstructions}"
                            </p>
                          )}
                        </div>
                        <span className="text-sm font-bold text-stone-900 tabular-nums">
                          ${(item.menuItem.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-stone-200 rounded-lg bg-white p-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                            className="p-1 text-stone-500 hover:text-stone-900 rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold tabular-nums text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="p-1 text-stone-500 hover:text-stone-900 rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(idx)}
                          className="text-stone-400 hover:text-red-700 text-xs flex items-center gap-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Guest Details Form */}
              {cart.length > 0 && (
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Denise Harper"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                      Phone Number (For Ready Alert)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (304) 555-0199"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                      Pickup Time or Table Note
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ready in 30 mins / Table 4 creekside"
                      value={pickupNote}
                      onChange={(e) => setPickupNote(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>Average kitchen turnaround: 15–25 minutes</span>
                  </div>
                </form>
              )}
            </div>

            {/* Drawer Footer with Calculation */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-stone-900 tabular-nums">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WV State Tax (6%):</span>
                    <span className="font-semibold text-stone-900 tabular-nums">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-stone-900 pt-1.5 border-t border-stone-200">
                    <span>Estimated Total:</span>
                    <span className="text-amber-950 tabular-nums text-base">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full py-3.5 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Place Takeaway Order (${total.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-stone-500">
                  Pay in person with cash or card upon pickup.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
