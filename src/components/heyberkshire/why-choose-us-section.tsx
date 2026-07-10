import { Award, Clock, House, Shield, TrendingUp, Users } from "lucide-react";

const REASONS = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Serving Las Vegas and Henderson since 2008 with proven results.",
  },
  {
    icon: TrendingUp,
    title: "Market Knowledge",
    description: "Deep understanding of local market trends and neighborhood insights.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated attention to every client with customized solutions.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "500+ successful transactions and satisfied clients.",
  },
  {
    icon: Clock,
    title: "Responsive",
    description: "Quick response times and seamless communication throughout.",
  },
  {
    icon: House,
    title: "Full Service",
    description: "Complete support from search to closing and beyond.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">Why Choose Us</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Experience the difference of working with a trusted real estate professional
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-lg p-6 text-center transition-colors hover:bg-slate-50"
            >
              <div className="mb-4 rounded-full bg-blue-100 p-4">
                <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
              <p className="text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
