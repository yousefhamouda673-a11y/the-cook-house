import { MenuItem, ReviewItem } from '../types';

export const RESTAURANT_INFO = {
  name: "The Cookhouse",
  tagline: "Hearty Mountain Fare & Creekside Dining in Holly River State Park",
  rating: 4.9,
  totalReviews: 41,
  priceRange: "$10 – $20 per person",
  priceCategory: "US$10–20",
  serviceTypes: ["Dine-in", "Takeaway"],
  address: "680 State Park Road, Hacker Valley, WV 26222, United States",
  plusCode: "MJ8W+C9 Hacker Valley, West Virginia, USA",
  phone: "+1 304-493-9493",
  formattedPhone: "(304) 493-9493",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Cookhouse+680+State+Park+Road+Hacker+Valley+WV+26222",
  appleMapsUrl: "http://maps.apple.com/?q=The+Cookhouse+Hacker+Valley+WV",
  parkLocation: "Holly River State Park, Webster County, West Virginia",
  coordinates: {
    lat: 38.6728,
    lng: -80.3475,
  },
  openingHours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "8:00 AM – 8:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 8:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 8:00 PM" },
    { day: "Friday", hours: "8:00 AM – 8:30 PM" },
    { day: "Saturday", hours: "8:00 AM – 8:30 PM" },
    { day: "Sunday", hours: "8:00 AM – 7:30 PM" },
  ],
  breakfastHours: "8:00 AM – 11:30 AM",
  lunchDinnerHours: "11:30 AM – Close",
  heroImage: "/src/assets/images/hero_cookhouse_exterior_1794137533353.jpg",
};

export const MENU_ITEMS: MenuItem[] = [
  // Signature Specials
  {
    id: "patty-melt",
    name: "The Cookhouse Patty Melt",
    category: "specials",
    price: 13.95,
    description: "Our signature dish: seasoned beef patty on grilled artisan sourdough with slow-caramelized sweet onions, melted Swiss and American cheddar, served with our golden hand-cut mountain fries.",
    image: "/src/assets/images/food_patty_melt_1794137534065.jpg",
    isPopular: true,
    isChefSpecial: true,
    tags: ["Signature Dish", "Customer Favorite", "Includes Hand-Cut Fries"],
    options: ["Regular Hand-Cut Fries", "Beer-Battered Onion Rings (+$1.50)", "Garden Green Beans"]
  },
  {
    id: "ribeye-special",
    name: "Holly River Cut Ribeye Steak Special",
    category: "specials",
    price: 19.95,
    description: "Thick hand-cut USDA Choice ribeye char-grilled to order, basted in garlic rosemary butter. Served with fresh-from-the-garden country green beans and roasted red potatoes.",
    image: "/src/assets/images/food_ribeye_steak_1794137535232.jpg",
    isPopular: true,
    isChefSpecial: true,
    tags: ["Top Review Choice", "Garden Fresh Sides", "Chef's Feature"],
    options: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"]
  },
  {
    id: "philly-cheesesteak",
    name: "Mountain Philly Cheese Steak",
    category: "specials",
    price: 14.50,
    description: "Raved by our guests as the best Philly in West Virginia! Thinly shaved tender beef griddled with sweet bell peppers and onions, smothered in melted provolone on a toasted bakery hoagie.",
    image: "/src/assets/images/food_philly_cheesesteak_1794137535427.jpg",
    isPopular: true,
    tags: ["Guest Favorite", "Loaded", "Includes Hand-Cut Fries"],
    options: ["With Sweet Peppers & Onions", "No Onions", "Extra Provolone (+$1.00)"]
  },
  {
    id: "smash-burger",
    name: "State Park Double Smash Burger",
    category: "sandwiches",
    price: 13.25,
    description: "Two crispy-edged seared beef patties, melted sharp cheddar, house dill pickles, ripe tomato, and crisp leaf lettuce on our signature fresh daily baked burger bun.",
    isPopular: true,
    tags: ["Fresh-Baked Buns", "Double Patty"],
    options: ["Regular Hand-Cut Fries", "Crispy Onion Rings (+$1.50)"]
  },

  // Mountain Breakfast (Opens 8:00 AM)
  {
    id: "sunrise-skillet",
    name: "Holly River Sunrise Skillet",
    category: "breakfast",
    price: 11.95,
    description: "Two farm eggs cooked your way, choice of thick hickory-smoked bacon or country ham, golden skillet potatoes, and a fresh warm buttermilk biscuit with homemade sausage gravy.",
    isPopular: true,
    tags: ["Hearty Start", "Served From 8 AM"],
    options: ["Eggs Over Easy", "Eggs Sunny Side Up", "Scrambled Eggs", "Poached"]
  },
  {
    id: "buttermilk-biscuits-gravy",
    name: "Warm Buttermilk Biscuits & Sawmill Gravy",
    category: "breakfast",
    price: 8.50,
    description: "Two oversized, flaky buttermilk biscuits baked fresh every morning, ladled with our rich, peppery country sausage sawmill gravy.",
    tags: ["Scratch-Made Daily", "Appalachian Classic"]
  },
  {
    id: "hikers-stack-pancakes",
    name: "Wild Mountain Blueberry Pancakes",
    category: "breakfast",
    price: 10.50,
    description: "Three golden, fluffy buttermilk pancakes folded with mountain blueberries, served with warm maple syrup, whipped butter, and two bacon strips.",
    tags: ["Sweet Morning", "Pure Maple Syrup"]
  },
  {
    id: "breakfast-sandwich",
    name: "Trailhead Breakfast Biscuit",
    category: "breakfast",
    price: 7.95,
    description: "Fried farm egg, thick-cut country bacon or savory sausage patty, and melted cheddar tucked into a warm scratch-made biscuit. Perfect to take on the hiking trail!",
    tags: ["Great for Hikers", "Takeaway Ready"]
  },

  // Sandwiches & Baskets
  {
    id: "country-fried-chicken",
    name: "Crispy Country Fried Chicken Sandwich",
    category: "sandwiches",
    price: 12.75,
    description: "Buttermilk and pickle-brined chicken breast fried golden crisp, topped with tangy house slaw, spicy mayo, and pickles on a toasted brioche bun.",
    isPopular: true,
    tags: ["Hand-Breaded", "Crunchy & Juicy"]
  },
  {
    id: "classic-reuben",
    name: "Grilled Reuben on Marble Rye",
    category: "sandwiches",
    price: 13.50,
    description: "Tender shaved corned beef, barrel-aged sauerkraut, melted Swiss cheese, and creamy thousand island dressing grilled crisp on artisan marble rye.",
    tags: ["Classic Deli", "Grilled Crisp"]
  },
  {
    id: "creekside-blt",
    name: "Smoked Bacon BLT & Garden Mayo",
    category: "sandwiches",
    price: 10.95,
    description: "Four thick slices of hardwood-smoked bacon, crisp garden greens, vine-ripened tomatoes, and herb garlic mayo on thick toasted country white bread.",
    tags: ["Hickory Smoked", "Garden Fresh"]
  },

  // Sides & Starters
  {
    id: "hand-cut-fries",
    name: "Fresh Hand-Cut Mountain Fries",
    category: "sides",
    price: 4.75,
    description: "Appalachian russet potatoes cut fresh in-house throughout the day, double-fried golden and tossed in our signature sea salt & herb seasoning.",
    isPopular: true,
    tags: ["Customer Praise", "Cut Fresh Daily"]
  },
  {
    id: "garden-green-beans",
    name: "Fresh Garden Green Beans",
    category: "sides",
    price: 4.50,
    description: "Tender green beans like they just came from the backyard garden, simmered with smoked bacon ends, sweet Vidalia onions, and black pepper.",
    isPopular: true,
    tags: ["Denise's Review Pick", "Farm Fresh"]
  },
  {
    id: "crispy-onion-rings",
    name: "Beer-Battered Sweet Onion Rings",
    category: "sides",
    price: 5.75,
    description: "Thick-cut sweet mountain onions dipped in crisp craft batter, served piping hot with our spicy Cookhouse dip.",
    tags: ["Crispy Crunch"]
  },
  {
    id: "kettle-soup",
    name: "Daily Mountain Kettle Soup",
    category: "sides",
    price: 5.25,
    description: "Ask your server for today's simmering pot: Country Vegetable Beef, Creamy Loaded Potato, or Appalachian Black Bean & Corn.",
    tags: ["Scratch-Made", "Comfort Food"]
  },

  // Desserts & Drinks
  {
    id: "skillet-blackberry-cobbler",
    name: "Warm Skillet Mountain Blackberry Cobbler",
    category: "desserts",
    price: 6.95,
    description: "Sweet and tart West Virginia wild mountain blackberries baked with a sugary biscuit topping, served warm with a scoop of vanilla bean ice cream.",
    isPopular: true,
    tags: ["Warm & A La Mode", "Local Tradition"]
  },
  {
    id: "grandma-apple-crisp",
    name: "Grandma's Cinnamon Spiced Apple Crisp",
    category: "desserts",
    price: 6.50,
    description: "Sliced Granny Smith apples simmered with brown sugar, nutmeg, and cinnamon, covered with buttery toasted oat crumble and caramel drizzle.",
    tags: ["Cast Iron Baked"]
  },
  {
    id: "sweet-tea-coffee",
    name: "Southern Sweet Tea or Fresh Mountain Roast Coffee",
    category: "desserts",
    price: 2.95,
    description: "Freshly brewed iced sweet tea with fresh lemon wedge, or bottomless hot mug of rich mountain blend roast coffee.",
    tags: ["Bottomless Refills", "Refreshing"]
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Denise Harper",
    reviewsCount: 10,
    photosCount: 2,
    rating: 5,
    date: "1 week ago",
    text: "Wow! I was impressed! We went when they had a special on ribeye. Let me tell you folks! The ribeye was the best I've ever had. The green beans tasted like they were fresh from the garden and our friend said it was the best Philly steak sandwich he had ever had! We will be back!",
    likes: 4,
    tags: ["Ribeye", "Garden Green Beans", "Philly Cheese Steak"]
  },
  {
    id: "rev-2",
    author: "Copernicus Kali",
    isLocalGuide: true,
    reviewsCount: 68,
    photosCount: 360,
    rating: 5,
    date: "2 months ago",
    text: "Nice restaurant nestled in the Holly River State Park. Atmosphere is incredible, bubbling stream runs along the outside of the restaurant with benches where you can enjoy a map and nature. Plenty of seating inside and a great menu with hearty portions for hikers and families.",
    likes: 12,
    tags: ["Atmosphere", "Holly River Stream", "Great Menu"]
  },
  {
    id: "rev-3",
    author: "Kristopher Keith",
    reviewsCount: 3,
    photosCount: 1,
    rating: 5,
    date: "4 months ago",
    text: "Best food I've ever had! Everything is amazing! Staff is great but the cook is a machine! She is a national treasure! You have to stop here whenever you are anywhere near Hacker Valley.",
    likes: 8,
    tags: ["Cook is a Machine", "National Treasure", "Friendly Staff"]
  },
  {
    id: "rev-4",
    author: "Morgan Vance",
    reviewsCount: 14,
    photosCount: 6,
    rating: 5,
    date: "5 months ago",
    text: "The Patty Melt here is unmatched! Golden grilled bread, gooey cheese, and those hand-cut fries are to die for. Sitting outside by the water on the wooden benches after doing the waterfall trails made our entire vacation.",
    likes: 5,
    tags: ["Patty Melt", "Hand-Cut Fries", "Creekside"]
  },
  {
    id: "rev-5",
    author: "Dave & Sarah Miller",
    reviewsCount: 22,
    photosCount: 15,
    rating: 5,
    date: "6 months ago",
    text: "Such a hidden gem in West Virginia. We camp at Holly River every summer and The Cookhouse is the highlight of every trip. Fresh homemade burger buns, honest country hospitality, and prices that are so fair for how generous the portions are.",
    likes: 7,
    tags: ["Burger Buns", "Fair Prices", "Camping Favorite"]
  }
];

export const POPULAR_MENTIONS = [
  { label: "Hand-Cut Fries", count: 3 },
  { label: "Atmosphere & Stream", count: 2 },
  { label: "Philly Cheese Steak", count: 2 },
  { label: "Homemade Burger Buns", count: 2 },
  { label: "Exceptional Service", count: 2 },
  { label: "Ribeye Steak", count: 2 },
];

export const PARK_HIGHLIGHTS = [
  {
    title: "Bubbling Mountain Stream",
    description: "A crystal clear, babbling mountain creek flows directly along the restaurant patio with wooden benches where you can relax, study trail maps, and immerse in the forest.",
  },
  {
    title: "Holly River State Park",
    description: "Nestled in West Virginia's second-largest state park, surrounded by 8,294 acres of dense hemlock, oak, and rhododendron forests, waterfalls, and hiking trails.",
  },
  {
    title: "The Cook Is a National Treasure",
    description: "Celebrated by travelers and locals alike for her culinary stamina, precision, and passion—cooking up every hearty plate made-to-order with genuine Appalachian warmth.",
  },
  {
    title: "Dine-In & Trailside Takeout",
    description: "Enjoy a relaxed warm meal in our timber-beamed dining room or grab a hearty packed lunch for your hike up to Tecumseh Falls.",
  }
];
