export interface MenuItem {
  id: string;
  name: string;
  category: 'specials' | 'breakfast' | 'sandwiches' | 'sides' | 'desserts';
  price: number;
  description: string;
  image?: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  tags?: string[];
  options?: string[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedOption?: string;
  specialInstructions?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  isLocalGuide?: boolean;
  reviewsCount?: number;
  photosCount?: number;
  rating: number;
  date: string;
  text: string;
  likes?: number;
  tags?: string[];
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor' | 'creekside-outdoor' | 'any';
  notes?: string;
}
