import React, { useState } from 'react';
import { X, Star, Check } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: ReviewItem) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmitReview }) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(5);
  const [text, setText] = useState('');
  const [favoriteDish, setFavoriteDish] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      rating: rating,
      date: 'Just now',
      text: text.trim(),
      likes: 1,
      tags: favoriteDish ? [favoriteDish.trim()] : ['Verified Guest'],
    };

    onSubmitReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAuthor('');
      setText('');
      setFavoriteDish('');
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-md w-full p-6 overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display text-xl font-bold text-stone-900">
              Thank You for Your Review!
            </h4>
            <p className="text-xs text-stone-500">
              Your feedback helps other Holly River travelers discover The Cookhouse.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                Google Review Simulator
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 mt-0.5">
                Share Your Experience
              </h3>
              <p className="text-xs text-stone-500">
                Rate your meal, the atmosphere, or our cook's handiwork!
              </p>
            </div>

            {/* Star Rating Selector */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Your Rating
              </label>
              <div className="flex items-center gap-1.5 pt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(rating)}
                    className="p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= (hoverRating || rating)
                          ? 'fill-amber-500 text-amber-500'
                          : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm font-bold text-stone-800 tabular-nums">
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            {/* Author Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rachel Adams"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>

            {/* Favorite Dish Tag */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Favorite Dish or Highlight (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Patty Melt, Hand-Cut Fries, Creekside Benches"
                value={favoriteDish}
                onChange={(e) => setFavoriteDish(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>

            {/* Review Text */}
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Your Review
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell others about the food, the mountain setting, the ribeye or the friendly cook..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-stone-900 hover:bg-amber-900 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
            >
              Post Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
