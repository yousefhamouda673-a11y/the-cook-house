import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquarePlus, CheckCircle, ShieldCheck } from 'lucide-react';
import { GOOGLE_REVIEWS, POPULAR_MENTIONS, RESTAURANT_INFO } from '../data/restaurantData';
import { ReviewItem } from '../types';
import { ReviewModal } from './ReviewModal';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(GOOGLE_REVIEWS);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  const handleLike = (id: string) => {
    setLikedReviews((prev) => {
      const isLiked = !!prev[id];
      const nextLiked = !isLiked;
      
      setReviews((curReviews) =>
        curReviews.map((r) =>
          r.id === id ? { ...r, likes: (r.likes || 0) + (nextLiked ? 1 : -1) } : r
        )
      );
      
      return { ...prev, [id]: nextLiked };
    });
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setReviews([newReview, ...reviews]);
  };

  const filteredReviews = selectedTag === 'all'
    ? reviews
    : reviews.filter((r) => {
        const query = selectedTag.toLowerCase();
        return (
          r.text.toLowerCase().includes(query) ||
          (r.tags && r.tags.some((t) => t.toLowerCase().includes(query)))
        );
      });

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Google Maps Verified Reviews</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Loved by Travelers & Locals
            </h2>
            <p className="mt-2 text-base text-stone-600 max-w-2xl">
              Real feedback from diners, hikers, and campers who stopped by The Cookhouse at Holly River State Park.
            </p>
          </div>

          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-stone-900 hover:bg-amber-900 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Rating Breakdown & Popular Mentions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200 mb-12">
          
          {/* Big Score Box */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center sm:items-start border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
            <div className="text-5xl sm:text-6xl font-display font-extrabold text-stone-950 tabular-nums">
              {RESTAURANT_INFO.rating}
            </div>
            <div className="flex items-center gap-1 my-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-sm font-medium text-stone-700">
              Based on {RESTAURANT_INFO.totalReviews} Google reviews
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              US$10–20 per person · 98% positive rating
            </p>
          </div>

          {/* Star Distribution Bars */}
          <div className="lg:col-span-4 space-y-2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8 text-xs font-medium text-stone-700">
            <div className="flex items-center gap-3">
              <span className="w-3 text-right">5</span>
              <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <span className="w-8 text-right text-stone-500 tabular-nums">38</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 text-right">4</span>
              <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '8%' }}></div>
              </div>
              <span className="w-8 text-right text-stone-500 tabular-nums">3</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 text-right">3</span>
              <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <span className="w-8 text-right text-stone-500 tabular-nums">0</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 text-right">2</span>
              <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <span className="w-8 text-right text-stone-500 tabular-nums">0</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 text-right">1</span>
              <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <span className="w-8 text-right text-stone-500 tabular-nums">0</span>
            </div>
          </div>

          {/* Popular Review Keywords / Mentions Filter */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
              Filter by Review Mention:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  selectedTag === 'all'
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                All ({reviews.length})
              </button>
              {POPULAR_MENTIONS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSelectedTag(item.label)}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                    selectedTag === item.label
                      ? 'bg-amber-800 text-white'
                      : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {item.label} ({item.count})
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Author Info */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-stone-900 text-base">
                      {rev.author}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                      {rev.isLocalGuide && (
                        <>
                          <span className="text-amber-800 font-medium">Local Guide</span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      {rev.reviewsCount && (
                        <>
                          <span>{rev.reviewsCount} reviews</span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      <span>{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-500 shrink-0">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-sm leading-relaxed">
                  "{rev.text}"
                </p>

                {/* Tags */}
                {rev.tags && rev.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 pt-1">
                    {rev.tags.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span className="font-medium text-stone-700">{t}</span>
                        {idx < rev.tags!.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer with Like Button */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1 text-emerald-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Google Visit</span>
                </span>

                <button
                  onClick={() => handleLike(rev.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    likedReviews[rev.id]
                      ? 'text-amber-900 font-semibold bg-amber-50'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
                  }`}
                  aria-label="Like this review"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedReviews[rev.id] ? 'fill-amber-800' : ''}`} />
                  <span className="tabular-nums">{rev.likes || 0}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </section>
  );
};
