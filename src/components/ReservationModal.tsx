import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone } from 'lucide-react';
import { ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
    guests: 2,
    seatingPreference: 'creekside-outdoor',
    notes: '',
  });

  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'RES-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(code);
  };

  const handleReset = () => {
    setConfirmationCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {confirmationCode ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Table Inquiry Confirmed
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 mt-1">
                Reservation #{confirmationCode}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                We have saved a table for {formData.name}!
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl text-left text-xs sm:text-sm space-y-2 text-stone-800">
              <div className="flex justify-between">
                <span className="text-stone-500">Date & Time:</span>
                <span className="font-semibold text-stone-900">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Party Size:</span>
                <span className="font-semibold text-stone-900">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Seating:</span>
                <span className="font-semibold text-stone-900 capitalize">
                  {formData.seatingPreference === 'creekside-outdoor'
                    ? 'Creekside Outdoor Benches'
                    : formData.seatingPreference === 'indoor'
                    ? 'Indoor Timber Dining'
                    : 'First Available'}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-500">
              Walk-ins are always welcomed warmly. For last-minute changes or large groups over 8, please call (304) 493-9493.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                Holly River State Park Dining
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-0.5">
                Reserve a Table
              </h3>
              <p className="text-xs text-stone-500">
                Join us by the mountain creek or inside our rustic timber room.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Denise Harper"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. (304) 493-9493"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 bg-white"
                >
                  <option value="8:00 AM">8:00 AM (Breakfast)</option>
                  <option value="9:00 AM">9:00 AM (Breakfast)</option>
                  <option value="10:30 AM">10:30 AM (Breakfast)</option>
                  <option value="12:00 PM">12:00 PM (Lunch)</option>
                  <option value="1:30 PM">1:30 PM (Lunch)</option>
                  <option value="3:00 PM">3:00 PM (Afternoon)</option>
                  <option value="5:00 PM">5:00 PM (Dinner)</option>
                  <option value="6:30 PM">6:30 PM (Dinner)</option>
                  <option value="7:30 PM">7:30 PM (Dinner)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Seating Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'creekside-outdoor', label: 'Creekside Outdoor' },
                  { id: 'indoor', label: 'Indoor Timber Room' },
                  { id: 'any', label: 'First Available' },
                ].map((pref) => (
                  <label
                    key={pref.id}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer ${
                      formData.seatingPreference === pref.id
                        ? 'border-amber-800 bg-amber-50 font-semibold text-stone-900'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>{pref.label}</span>
                    <input
                      type="radio"
                      name="seatingPref"
                      value={pref.id}
                      checked={formData.seatingPreference === pref.id}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          seatingPreference: pref.id as 'indoor' | 'creekside-outdoor' | 'any',
                        })
                      }
                      className="accent-amber-800"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Special Requests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Highchair needed, celebrating a hike, dog on patio"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
            >
              Confirm Reservation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
