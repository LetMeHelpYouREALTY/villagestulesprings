import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Contact section — Calendly booking replaces the former lead form.
 */
export function ContactForm() {
  return (
    <section className="bg-cream-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <DrJanPortrait size="lg" className="mx-auto mb-4 ring-2 ring-gold-300" />
          <h2 className="mb-4 font-serif text-4xl text-navy-800">Get In Touch</h2>
          <p className="mx-auto max-w-2xl font-sans text-xl font-light text-navy-500">
            Book a 15-minute conversation with Dr. Jan Duffy — no contact form required.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-gold-600" />
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Villages at Tule Springs</p>
                <p className="text-navy-500">North Las Vegas, NV 89084</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-gold-600" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+17022221964" className="font-semibold text-navy-800 hover:text-gold-600">
                  702-222-1964
                </a>
                <p className="text-sm text-navy-500">Monday – Sunday</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-gold-600" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:DrDuffySells@VillagesTuleSprings.com"
                  className="break-all text-navy-500 hover:text-gold-600"
                >
                  DrDuffySells@VillagesTuleSprings.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-gold-600" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-navy-500">
                  <div className="flex justify-between gap-4">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Saturday:</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday:</span>
                    <span>By appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <CalendlyInlineWidget
              event="conversation"
              title="Schedule a conversation with Dr. Jan Duffy"
              utmMedium="contact"
              utmCampaign="contact-form"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
