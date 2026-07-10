import {
  TreePine,
  Shield,
  Dumbbell,
  Heart,
  Sparkles,
  Waves,
  Gamepad2,
  Coffee,
  ShoppingBag,
  Stethoscope,
  Plane,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MaravillaAmenity {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  category: "lifestyle" | "recreation" | "convenience" | "health";
  featured?: boolean;
}

const maravillaAmenities: MaravillaAmenity[] = [
  {
    icon: Waves,
    title: "Resort-Style Waves",
    description: "Olympic-sized pool with cabanas and poolside bar",
    category: "recreation",
    featured: true,
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym with personal training available",
    category: "health",
    featured: true,
  },
  {
    icon: TreePine,
    title: "Parks & Trails",
    description: "Beautiful walking trails and community parks",
    category: "lifestyle",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Gated community with professional security team",
    category: "convenience",
    featured: true,
  },
  {
    icon: Gamepad2,
    title: "Game Room",
    description: "Community game room with billiards and arcade games",
    category: "recreation",
  },
  {
    icon: Coffee,
    title: "Coffee Shop",
    description: "On-site coffee shop and community gathering space",
    category: "convenience",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Center",
    description: "Nearby shopping with grocery stores and restaurants",
    category: "convenience",
  },
  {
    icon: Stethoscope,
    title: "Medical Center",
    description: "On-site medical facility with urgent care",
    category: "health",
  },
  {
    icon: Plane,
    title: "Airport Access",
    description: "Just 15 minutes from McCarran International Airport",
    category: "convenience",
  },
];

export function MaravillaCommunityFeatures() {
  const featuredAmenities = maravillaAmenities.filter((a) => a.featured);
  const lifestyleAmenities = maravillaAmenities.filter((a) => a.category === "lifestyle");
  const recreationAmenities = maravillaAmenities.filter((a) => a.category === "recreation");
  const convenienceAmenities = maravillaAmenities.filter((a) => a.category === "convenience");
  const healthAmenities = maravillaAmenities.filter((a) => a.category === "health");

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-2 h-4 w-4" />
            Maravilla Community
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Luxury Living at Its Finest</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Experience resort-style living with world-class amenities and a vibrant community in the heart of Las Vegas.
          </p>
        </div>

        {/* Featured Amenities */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">Featured Amenities</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredAmenities.map((amenity) => (
              <Card key={amenity.title} className="border-l-4 border-l-green-500 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <amenity.icon className="mr-3 h-6 w-6 text-green-600" />
                    {amenity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Amenities Grid */}
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Lifestyle */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Lifestyle</h3>
              <p className="text-sm text-gray-600">Community living at its best</p>
            </div>
            <div className="space-y-4">
              {lifestyleAmenities.map((amenity) => (
                <Card key={amenity.title} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recreation */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Waves className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Recreation</h3>
              <p className="text-sm text-gray-600">Fun and entertainment</p>
            </div>
            <div className="space-y-4">
              {recreationAmenities.map((amenity) => (
                <Card key={amenity.title} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Convenience */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <ShoppingBag className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Convenience</h3>
              <p className="text-sm text-gray-600">Everything you need nearby</p>
            </div>
            <div className="space-y-4">
              {convenienceAmenities.map((amenity) => (
                <Card key={amenity.title} className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Health */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Stethoscope className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Health</h3>
              <p className="text-sm text-gray-600">Your wellness matters</p>
            </div>
            <div className="space-y-4">
              {healthAmenities.map((amenity) => (
                <Card key={amenity.title} className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <amenity.icon className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{amenity.title}</h4>
                        <p className="text-xs text-gray-600">{amenity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-4xl border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Ready to Experience Maravilla Living?</h3>
              <p className="mb-6 text-gray-600">
                Join our exclusive community and discover why Maravilla is Las Vegas&apos; premier destination for
                luxury living.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Badge variant="secondary" className="px-4 py-2">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Resort-Style Amenities
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Shield className="mr-2 h-4 w-4" />
                  Gated Security
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Heart className="mr-2 h-4 w-4" />
                  Community Living
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
