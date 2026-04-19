import PageHeader from "@/components/page-header";
import AnimatedSection from "@/components/animated-section";
import { images } from "@/lib/config";
import Link from "next/link";
import {
  Heart,
  HandHelping,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Get Involved",
  description:
    "Join ALMI Ethiopia's mission. Volunteer, partner with us, or contribute your skills to transform Ethiopia's agricultural future.",
};

const ways = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Your financial contribution directly supports our programs in agroforestry, urban agriculture, and community development.",
    action: "Make a Donation",
    href: "/donate",
    color: "bg-accent",
  },
  {
    icon: HandHelping,
    title: "Volunteer",
    description:
      "Join us on the ground in Ethiopia or support our work remotely. We need skilled professionals in agriculture, education, and technology.",
    action: "Apply to Volunteer",
    href: "/contact",
    color: "bg-primary",
  },
  {
    icon: Briefcase,
    title: "Partner With Us",
    description:
      "Organizations, corporations, and institutions can partner with ALMI Ethiopia to scale impact and create shared value.",
    action: "Explore Partnerships",
    href: "/contact",
    color: "bg-secondary",
  },
  {
    icon: GraduationCap,
    title: "Spread the Word",
    description:
      "Help us raise awareness about sustainable agriculture in Ethiopia. Share our stories, follow us on social media, and engage your network.",
    action: "Follow Us",
    href: "#",
    color: "bg-terra",
  },
];

const volunteerRoles = [
  "Agricultural Extension Workers",
  "Environmental Scientists",
  "Project Managers",
  "Communications Specialists",
  "Grant Writers",
  "IT & Web Developers",
  "Trainers & Educators",
  "Research Associates",
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        title="Get Involved"
        subtitle="There are many ways to contribute to our mission. Find the one that fits you best."
      />

      {/* Impact Image */}
      <section className="py-12 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden h-64 md:h-80 relative">
              <img
                src={images.getInvolved}
                alt="Volunteers working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-lg md:text-xl font-medium max-w-2xl">
                  Together, we can make a difference in the lives of those who need it most.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ways.map((way, index) => (
              <AnimatedSection key={way.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-stone-light/10 flex flex-col">
                  <div
                    className={`w-14 h-14 ${way.color} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <way.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-dark mb-3 font-serif">
                    {way.title}
                  </h3>
                  <p className="text-stone-medium text-sm leading-relaxed mb-6 flex-grow">
                    {way.description}
                  </p>
                  <Link
                    href={way.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors group"
                  >
                    {way.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Join Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mt-3 mb-6">
                Volunteer With Us
              </h2>
              <p className="text-stone-medium leading-relaxed mb-8">
                We are always looking for passionate individuals who want to make a difference. Whether you can contribute a few hours a week or commit to a field placement in Ethiopia, your skills and dedication can help transform communities.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-stone-light/10">
                <h3 className="text-lg font-bold text-stone-dark mb-4 font-serif">
                  Current Opportunities
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {volunteerRoles.map((role) => (
                    <div key={role} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-stone-medium text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors duration-300"
                >
                  Apply to Volunteer
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <Heart className="w-10 h-10 text-accent-light mb-6" />
                  <h3 className="text-2xl font-bold font-serif mb-4">
                    Why Volunteer?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Make a tangible impact on farming communities",
                      "Gain hands-on experience in sustainable agriculture",
                      "Work alongside experienced professionals",
                      "Build your network in the development sector",
                      "Contribute to Ethiopia's green future",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mb-4">
                Have Another Idea?
              </h2>
              <p className="text-stone-medium text-lg mb-8">
                We are open to creative collaborations. If you have an idea for how you can contribute to our mission, we would love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
