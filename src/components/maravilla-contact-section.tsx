import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MaravillaContactInfo {
  salesOffice: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  salesTeam: {
    name: string;
    title: string;
    phone: string;
    email: string;
    specialties: string[];
  }[];
}

const maravillaContact: MaravillaContactInfo = {
  salesOffice: {
    phone: "(702) 555-MARAVILLA",
    email: "sales@maravillahomes.com",
    address: "123 Maravilla Boulevard, Las Vegas, NV 89134",
    hours: "Mon-Sun: 9AM-6PM",
  },
  salesTeam: [
    {
      name: "Sarah Johnson",
      title: "Senior Sales Consultant",
      phone: "(702) 555-0101",
      email: "sarah.johnson@maravillahomes.com",
      specialties: ["First-time Buyers", "Family Homes", "Investment Properties"],
    },
    {
      name: "Michael Chen",
      title: "Luxury Sales Specialist",
      phone: "(702) 555-0102",
      email: "michael.chen@maravillahomes.com",
      specialties: ["Executive Homes", "Custom Builds", "Relocation Services"],
    },
    {
      name: "Elena Rodriguez",
      title: "Community Relations Manager",
      phone: "(702) 555-0103",
      email: "elena.rodriguez@maravillahomes.com",
      specialties: ["Community Events", "Amenities Tours", "New Resident Services"],
    },
  ],
};

function SalesTeamCard({ member }: { member: MaravillaContactInfo["salesTeam"][number] }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{member.name}</h4>
            <p className="mb-2 text-sm text-gray-600">{member.title}</p>
            <div className="mb-2 flex items-center text-sm text-gray-600">
              <Phone className="mr-1 h-3 w-3" />
              {member.phone}
            </div>
            <div className="mb-3 flex items-center text-sm text-gray-600">
              <Mail className="mr-1 h-3 w-3" />
              {member.email}
            </div>
            <div className="flex flex-wrap gap-1">
              {member.specialties.map((specialty) => (
                <Badge key={specialty} variant="outline" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          <Button size="sm" variant="outline">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ScheduleVisitForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Visit</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tour" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tour">Schedule Tour</TabsTrigger>
            <TabsTrigger value="info">Get Info</TabsTrigger>
            <TabsTrigger value="consultation">Consultation</TabsTrigger>
          </TabsList>

          <TabsContent value="tour" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Preferred Date</label>
                  <input type="date" className="w-full rounded-md border p-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">Preferred Time</label>
                  <select className="w-full rounded-md border p-2">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input type="text" className="w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input type="tel" className="w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full rounded-md border p-2" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Tour
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="info" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input type="text" className="w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="text-sm font-medium">What information are you looking for?</label>
                <textarea
                  className="h-20 w-full rounded-md border p-2"
                  placeholder="Tell us about your home buying needs..."
                ></textarea>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Mail className="mr-2 h-4 w-4" />
                Send Request
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="consultation" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input type="text" className="w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input type="tel" className="w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Best time to call</label>
                <select className="w-full rounded-md border p-2">
                  <option>Morning (9AM-12PM)</option>
                  <option>Afternoon (12PM-5PM)</option>
                  <option>Evening (5PM-8PM)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Budget Range</label>
                <select className="w-full rounded-md border p-2">
                  <option>$400K - $500K</option>
                  <option>$500K - $600K</option>
                  <option>$600K - $700K</option>
                  <option>$700K+</option>
                </select>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Phone className="mr-2 h-4 w-4" />
                Request Consultation
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export function MaravillaContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Connect With Our Team</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Our experienced sales team is here to help you find your perfect Maravilla home. Contact us today to
            schedule a tour or get more information.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-green-600" />
                  Sales Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Maravilla Sales Center</p>
                    <p className="text-gray-600">{maravillaContact.salesOffice.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-green-600" />
                    <span className="font-semibold">{maravillaContact.salesOffice.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-green-600" />
                    <span>{maravillaContact.salesOffice.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-green-600" />
                    <span>{maravillaContact.salesOffice.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sales Team */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Meet Our Sales Team</h3>
              {maravillaContact.salesTeam.map((member) => (
                <SalesTeamCard key={member.email} member={member} />
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <ScheduleVisitForm />
          </div>
        </div>
      </div>
    </section>
  );
}
