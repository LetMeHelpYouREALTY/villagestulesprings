import {
  ShoppingBag,
  Plane,
  Stethoscope,
  GraduationCap,
  Building,
  TreePine,
  Waves,
  Dumbbell,
  Gamepad2,
  Coffee,
} from "lucide-react";

export interface LocationFeature {
  id: string;
  name: string;
  type: "shopping" | "dining" | "healthcare" | "education" | "entertainment" | "transportation";
  distance: string;
  driveTime: string;
  rating: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  coordinates: { lat: number; lng: number };
}

export interface CommunityAmenity {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "open" | "coming-soon" | "maintenance";
  hours?: string;
  features: string[];
}

export const nearbyLocations: LocationFeature[] = [
  {
    id: "1",
    name: "Las Vegas Premium Outlets",
    type: "shopping",
    distance: "8.2 miles",
    driveTime: "12 min",
    rating: 4.3,
    description: "Premium shopping destination with 150+ stores",
    icon: ShoppingBag,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
  {
    id: "2",
    name: "McCarran International Airport",
    type: "transportation",
    distance: "15.1 miles",
    driveTime: "18 min",
    rating: 4.1,
    description: "Las Vegas main airport with domestic and international flights",
    icon: Plane,
    coordinates: { lat: 36.084, lng: -115.1537 },
  },
  {
    id: "3",
    name: "University Medical Center",
    type: "healthcare",
    distance: "12.3 miles",
    driveTime: "15 min",
    rating: 4.2,
    description: "Leading medical center with emergency services",
    icon: Stethoscope,
    coordinates: { lat: 36.1074, lng: -115.1634 },
  },
  {
    id: "4",
    name: "Clark County School District",
    type: "education",
    distance: "3.7 miles",
    driveTime: "8 min",
    rating: 4.0,
    description: "Top-rated schools serving the community",
    icon: GraduationCap,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
  {
    id: "5",
    name: "Downtown Las Vegas",
    type: "entertainment",
    distance: "18.5 miles",
    driveTime: "22 min",
    rating: 4.4,
    description: "Entertainment district with casinos, shows, and dining",
    icon: Building,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
  {
    id: "6",
    name: "Red Rock Canyon",
    type: "entertainment",
    distance: "25.2 miles",
    driveTime: "28 min",
    rating: 4.7,
    description: "National Conservation Area for hiking and outdoor activities",
    icon: TreePine,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
];

export const communityAmenities: CommunityAmenity[] = [
  {
    id: "1",
    name: "Resort-Style Waves Complex",
    description: "Olympic-sized pool with cabanas, poolside bar, and kids splash zone",
    icon: Waves,
    status: "open",
    hours: "6 AM - 10 PM",
    features: ["Olympic Waves", "Kids Splash Zone", "Wavesside Bar", "Cabanas", "Lifeguards"],
  },
  {
    id: "2",
    name: "Fitness Center",
    description: "State-of-the-art gym with personal training and group classes",
    icon: Dumbbell,
    status: "open",
    hours: "5 AM - 11 PM",
    features: ["Cardio Equipment", "Weight Training", "Personal Training", "Group Classes", "Yoga Studio"],
  },
  {
    id: "3",
    name: "Community Game Room",
    description: "Entertainment space with billiards, arcade games, and lounge area",
    icon: Gamepad2,
    status: "open",
    hours: "8 AM - 10 PM",
    features: ["Billiards", "Arcade Games", "Lounge Area", "TV Room", "Snack Bar"],
  },
  {
    id: "4",
    name: "Walking Trails & Parks",
    description: "Beautiful walking trails and community parks throughout the neighborhood",
    icon: TreePine,
    status: "open",
    hours: "24/7",
    features: ["Walking Trails", "Dog Park", "Playground", "Picnic Areas", "Exercise Stations"],
  },
  {
    id: "5",
    name: "Coffee Shop & Lounge",
    description: "On-site coffee shop and community gathering space",
    icon: Coffee,
    status: "coming-soon",
    hours: "Coming Soon",
    features: ["Coffee Bar", "WiFi Lounge", "Meeting Rooms", "Outdoor Seating", "Community Events"],
  },
];
