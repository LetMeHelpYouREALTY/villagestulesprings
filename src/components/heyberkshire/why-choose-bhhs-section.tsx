import { House, Shield, TrendingUp, Users } from "lucide-react";

const REASONS = [
  {
    icon: Shield,
    title: "Trusted Brand",
    description: "Backed by Warren Buffett's Berkshire Hathaway Inc.\u2014unmatched financial stability",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "50,000+ agents worldwide for seamless referrals and relocations",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "Serving Las Vegas since 2008, $127M+ in closed transactions",
  },
  {
    icon: House,
    title: "Full Service",
    description: "Buying, selling, luxury, investment, relocation\u2014we do it all",
  },
];

export function WhyChooseBhhsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Why Choose Berkshire Hathaway HomeServices?
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent, you&apos;re backed by a name
            synonymous with trust, ethical standards, and financial strength—the same principles that built Warren
            Buffett&apos;s empire.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 p-4">
                <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{title}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-slate-50 p-8">
          <blockquote className="mb-4 text-lg italic text-slate-700">
            &quot;When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them:
            you&apos;re not just getting me—you&apos;re getting a global network of 50,000 agents, world-class
            marketing, and a brand that&apos;s synonymous with trust.&quot;
          </blockquote>
          <cite className="font-semibold text-slate-900">— Dr. Jan Duffy, BHHS Nevada Properties</cite>
        </div>
      </div>
    </section>
  );
}
