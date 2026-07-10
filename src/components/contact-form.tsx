"use client";

import { useState } from "react";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
    tour: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Ready to find your dream home? Contact Dr. Jan Duffy&apos;s team for personalized assistance.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-green-600" />
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Villages At Tule Springs</p>
                    <p className="text-gray-600">1234 Tule Springs Drive</p>
                    <p className="text-gray-600">North Las Vegas, NV 89031</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-green-600" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Sales Office</p>
                  <p className="text-gray-600">(702) 555-0123</p>
                  <p className="text-sm text-gray-500">Monday - Sunday: 9AM - 6PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-green-600" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">General Inquiries</p>
                  <p className="text-gray-600">DrDuffySells@VillagesTuleSprings.com</p>
                  <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-green-600" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="interest">I&apos;m interested in</Label>
                      <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Buying a Home</SelectItem>
                          <SelectItem value="renting">Renting a Home</SelectItem>
                          <SelectItem value="investment">Investment Property</SelectItem>
                          <SelectItem value="general">General Information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="300-400">$300K - $400K</SelectItem>
                          <SelectItem value="400-500">$400K - $500K</SelectItem>
                          <SelectItem value="500-600">$500K - $600K</SelectItem>
                          <SelectItem value="600+">$600K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">When are you looking to move?</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1-3months">1-3 Months</SelectItem>
                        <SelectItem value="3-6months">3-6 Months</SelectItem>
                        <SelectItem value="6-12months">6-12 Months</SelectItem>
                        <SelectItem value="planning">Just Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about what you're looking for..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for updates and new listings
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="tour"
                        checked={formData.tour}
                        onCheckedChange={(checked) => handleChange("tour", checked as boolean)}
                      />
                      <Label htmlFor="tour" className="text-sm">
                        I&apos;d like to schedule a community tour
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
