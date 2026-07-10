export interface MaravillaProperty {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  address: string;
  status: "available" | "pending" | "sold" | "coming-soon";
  image: string;
  images: string[];
  features: string[];
  description: string;
  yearBuilt: number;
  lotSize: string;
  garage: number;
  hoa: string;
  propertyType: "single-family" | "townhome" | "condo";
  energyRating: "A" | "B" | "C";
  daysOnMarket: number;
  pricePerSqFt: number;
  estimatedPayment: string;
  virtualTour: boolean;
  openHouse?: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const maravillaProperties: MaravillaProperty[] = [
  {
    id: "1",
    title: "Luxury Single-Story Villa",
    price: "$485,000",
    originalPrice: "$510,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1950,
    address: "123 Maravilla Drive",
    status: "available",
    image: "/api/placeholder/400/300",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    features: ["Granite Countertops", "Stainless Appliances", "Open Floor Plan", "Solar Ready", "Smart Home"],
    description:
      "Beautiful single-story home featuring modern finishes and energy-efficient design with smart home technology.",
    yearBuilt: 2024,
    lotSize: "6,500 sq ft",
    garage: 2,
    hoa: "$180/month",
    propertyType: "single-family",
    energyRating: "A",
    daysOnMarket: 12,
    pricePerSqFt: 249,
    estimatedPayment: "$2,847/month",
    virtualTour: true,
    openHouse: "Saturday 2-4 PM",
    agent: {
      name: "Sarah Johnson",
      phone: "(702) 555-0101",
      email: "sarah.johnson@maravillahomes.com",
    },
  },
  {
    id: "2",
    title: "Spacious Two-Story Family Home",
    price: "$525,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2250,
    address: "456 Desert Vista Lane",
    status: "available",
    image: "/api/placeholder/400/300",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    features: ["Master Suite", "Gourmet Kitchen", "Two-Car Garage", "Patio", "Waves Ready"],
    description: "Perfect for growing families with spacious rooms, modern amenities, and pool-ready backyard.",
    yearBuilt: 2024,
    lotSize: "7,200 sq ft",
    garage: 2,
    hoa: "$195/month",
    propertyType: "single-family",
    energyRating: "A",
    daysOnMarket: 8,
    pricePerSqFt: 233,
    estimatedPayment: "$3,082/month",
    virtualTour: true,
    agent: {
      name: "Michael Chen",
      phone: "(702) 555-0102",
      email: "michael.chen@maravillahomes.com",
    },
  },
  {
    id: "3",
    title: "Modern Executive Home",
    price: "$595,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2650,
    address: "789 Canyon Ridge Court",
    status: "pending",
    image: "/api/placeholder/400/300",
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
    ],
    features: ["High Ceilings", "Premium Finishes", "Smart Home", "Waves Ready", "Wine Cellar"],
    description: "Executive-level home with premium finishes, smart home technology, and wine cellar.",
    yearBuilt: 2024,
    lotSize: "8,100 sq ft",
    garage: 3,
    hoa: "$220/month",
    propertyType: "single-family",
    energyRating: "A",
    daysOnMarket: 5,
    pricePerSqFt: 225,
    estimatedPayment: "$3,492/month",
    virtualTour: true,
    agent: {
      name: "Elena Rodriguez",
      phone: "(702) 555-0103",
      email: "elena.rodriguez@maravillahomes.com",
    },
  },
  {
    id: "4",
    title: "Charming Townhome",
    price: "$425,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1650,
    address: "321 Garden View Place",
    status: "coming-soon",
    image: "/api/placeholder/400/300",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    features: ["Low Maintenance", "Modern Appliances", "Patio", "Attached Garage"],
    description: "Low-maintenance townhome perfect for first-time buyers or downsizers.",
    yearBuilt: 2024,
    lotSize: "3,200 sq ft",
    garage: 1,
    hoa: "$150/month",
    propertyType: "townhome",
    energyRating: "A",
    daysOnMarket: 0,
    pricePerSqFt: 258,
    estimatedPayment: "$2,495/month",
    virtualTour: false,
    agent: {
      name: "David Kim",
      phone: "(702) 555-0104",
      email: "david.kim@maravillahomes.com",
    },
  },
];

const statusColors: Record<MaravillaProperty["status"], string> = {
  available: "bg-green-500",
  pending: "bg-yellow-500",
  sold: "bg-red-500",
  "coming-soon": "bg-blue-500",
};

const statusLabels: Record<MaravillaProperty["status"], string> = {
  available: "Available",
  pending: "Pending",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};

export function getStatusColor(status: MaravillaProperty["status"]): string {
  return statusColors[status];
}

export function getStatusText(status: MaravillaProperty["status"]): string {
  return statusLabels[status];
}
