export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  avatar?: string;
  homeType: string;
  moveInDate: string;
  features: string[];
}

export interface ReviewStats {
  totalReviews: number;
  averageRating: number;
  ratingBreakdown: { rating: number; count: number; percentage: number }[];
  verifiedPurchases: number;
  responseRate: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Johnson",
    role: "New Homeowners",
    location: "Maravilla Drive",
    rating: 5,
    review:
      "We absolutely love our new home at Maravilla! The quality is exceptional and the community is amazing. The pool complex and fitness center are incredible amenities. The sales team was professional and made the entire process smooth.",
    date: "2 weeks ago",
    verified: true,
    homeType: "Single-Story Villa",
    moveInDate: "December 2024",
    features: ["Waves Access", "Fitness Center", "Smart Home", "Energy Efficient"],
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    role: "Family of Four",
    location: "Desert Vista Lane",
    rating: 5,
    review:
      "Perfect for our growing family! The schools nearby are excellent and the community is so family-friendly. Our kids love the playground and walking trails. The home itself is beautifully designed with modern finishes.",
    date: "1 month ago",
    verified: true,
    homeType: "Two-Story Family Home",
    moveInDate: "November 2024",
    features: ["Family Friendly", "Great Schools", "Walking Trails", "Modern Design"],
  },
  {
    id: "3",
    name: "David Chen",
    role: "Executive",
    location: "Canyon Ridge Court",
    rating: 5,
    review:
      "The executive home exceeded all our expectations. The smart home technology is impressive and the energy efficiency is remarkable. The location is perfect - close to everything but still peaceful and private.",
    date: "3 weeks ago",
    verified: true,
    homeType: "Executive Home",
    moveInDate: "January 2025",
    features: ["Smart Home", "Energy Efficient", "Prime Location", "Executive Level"],
  },
  {
    id: "4",
    name: "Lisa & Tom Wilson",
    role: "Retirees",
    location: "Garden View Place",
    rating: 5,
    review:
      "We downsized to a townhome and couldn't be happier! Low maintenance living with all the amenities we need. The community events are wonderful and we've made great friends. Highly recommend Maravilla!",
    date: "1 week ago",
    verified: true,
    homeType: "Townhome",
    moveInDate: "December 2024",
    features: ["Low Maintenance", "Community Events", "Great Neighbors", "Perfect Size"],
  },
  {
    id: "5",
    name: "Maria & Carlos Garcia",
    role: "First-Time Buyers",
    location: "Maravilla Drive",
    rating: 5,
    review:
      "As first-time homebuyers, we were nervous about the process. The Maravilla team made everything so easy and explained everything clearly. Our home is beautiful and we love the energy-efficient features.",
    date: "2 weeks ago",
    verified: true,
    homeType: "Single-Story Villa",
    moveInDate: "January 2025",
    features: ["First-Time Buyer Friendly", "Energy Efficient", "Beautiful Design", "Great Support"],
  },
  {
    id: "6",
    name: "Jennifer & Robert Kim",
    role: "Investors",
    location: "Desert Vista Lane",
    rating: 5,
    review:
      "We purchased this as an investment property and couldn't be more pleased. The rental market is strong in this area and the home's modern features attract quality tenants. Great investment opportunity!",
    date: "1 month ago",
    verified: true,
    homeType: "Two-Story Family Home",
    moveInDate: "Rental Property",
    features: ["Investment Property", "Strong Rental Market", "Modern Features", "Quality Tenants"],
  },
];

export const reviewStats: ReviewStats = {
  totalReviews: 127,
  averageRating: 4.9,
  ratingBreakdown: [
    { rating: 5, count: 118, percentage: 93 },
    { rating: 4, count: 7, percentage: 6 },
    { rating: 3, count: 2, percentage: 1 },
    { rating: 2, count: 0, percentage: 0 },
    { rating: 1, count: 0, percentage: 0 },
  ],
  verifiedPurchases: 124,
  responseRate: "98%",
};
