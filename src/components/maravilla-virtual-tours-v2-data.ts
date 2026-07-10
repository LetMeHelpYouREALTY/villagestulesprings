import { Waves, Dumbbell, TreePine, Gamepad2, Coffee, Shield } from "lucide-react";

export interface VirtualTour {
  id: string;
  title: string;
  type: "360" | "video" | "photos" | "walkthrough";
  duration: string;
  thumbnail: string;
  description: string;
  propertyId: string;
  features: string[];
  rooms: string[];
  isInteractive: boolean;
  quality: "HD" | "4K" | "8K";
}

export interface TourRoom {
  id: string;
  name: string;
  thumbnail: string;
  hotspots: number;
  description: string;
}

export interface AmenityTour {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export const virtualTours: VirtualTour[] = [
  {
    id: "1",
    title: "360° Virtual Tour - Model Home A",
    type: "360",
    duration: "5 min",
    thumbnail: "/api/placeholder/300/200",
    description:
      "Interactive 360° tour of our luxury single-story model home featuring modern finishes and smart home technology.",
    propertyId: "1",
    features: ["360° Views", "Interactive Hotspots", "Room-to-Room Navigation", "Property Details"],
    rooms: ["Living Room", "Kitchen", "Master Bedroom", "Bathroom", "Garage"],
    isInteractive: true,
    quality: "4K",
  },
  {
    id: "2",
    title: "Video Walkthrough - Model Home B",
    type: "video",
    duration: "8 min",
    thumbnail: "/api/placeholder/300/200",
    description: "Professional video walkthrough showcasing the spacious two-story family home with premium amenities.",
    propertyId: "2",
    features: ["HD Video", "Narrated Tour", "Property Highlights", "Neighborhood Views"],
    rooms: ["All Rooms", "Backyard", "Garage", "Neighborhood"],
    isInteractive: false,
    quality: "HD",
  },
  {
    id: "3",
    title: "Photo Gallery - Community Amenities",
    type: "photos",
    duration: "3 min",
    thumbnail: "/api/placeholder/300/200",
    description:
      "High-quality photo gallery showcasing community amenities including pool, fitness center, and walking trails.",
    propertyId: "community",
    features: ["High-Res Photos", "Zoom Functionality", "Amenity Details", "Community Life"],
    rooms: ["Waves Complex", "Fitness Center", "Walking Trails", "Game Room"],
    isInteractive: true,
    quality: "4K",
  },
  {
    id: "4",
    title: "Live Walkthrough - Executive Home",
    type: "walkthrough",
    duration: "12 min",
    thumbnail: "/api/placeholder/300/200",
    description: "Live agent walkthrough of the executive home with real-time Q&A and detailed property information.",
    propertyId: "3",
    features: ["Live Agent", "Real-time Q&A", "Detailed Information", "Custom Scheduling"],
    rooms: ["All Rooms", "Premium Features", "Smart Home Tech", "Outdoor Spaces"],
    isInteractive: true,
    quality: "HD",
  },
];

export const tourRooms: TourRoom[] = [
  {
    id: "living",
    name: "Living Room",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 5,
    description: "Spacious living room with high ceilings and modern finishes",
  },
  {
    id: "kitchen",
    name: "Gourmet Kitchen",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 8,
    description: "Modern kitchen with granite countertops and stainless appliances",
  },
  {
    id: "master",
    name: "Master Suite",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 4,
    description: "Luxurious master bedroom with walk-in closet and ensuite bathroom",
  },
  {
    id: "bathroom",
    name: "Master Bathroom",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 3,
    description: "Spa-like bathroom with dual vanities and walk-in shower",
  },
  {
    id: "garage",
    name: "Two-Car Garage",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 2,
    description: "Spacious garage with storage and direct home access",
  },
];

export const amenityTours: AmenityTour[] = [
  { name: "Resort-Style Waves", icon: Waves, description: "Olympic-sized pool with cabanas" },
  { name: "Fitness Center", icon: Dumbbell, description: "State-of-the-art gym equipment" },
  { name: "Walking Trails", icon: TreePine, description: "Beautiful nature trails" },
  { name: "Game Room", icon: Gamepad2, description: "Entertainment and recreation" },
  { name: "Coffee Shop", icon: Coffee, description: "Community gathering space" },
  { name: "Security Gate", icon: Shield, description: "24/7 community security" },
];
