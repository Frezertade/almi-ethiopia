import PageHeader from "@/components/page-header";
import AnimatedSection from "@/components/animated-section";
import TeamSection from "@/components/team-section";
import { images } from "@/lib/config";
import { CheckCircle } from "lucide-react";

const objectives = [
  "Planting multipurpose tree species to increase forest and fruit trees in degraded areas, farmlands, homesteads, gullies, and farm boundaries.",
  "Promoting better farming practices and tillage tools for higher productivity, food security, and improved livelihoods for small-scale farmers.",
  "Promoting urban agriculture to support disadvantaged groups and improve city livelihoods by providing healthy food.",
  "Creating job opportunities for unemployed youth and supporting government efforts to reduce unemployment.",
  "Empowering women and youth in urban areas to make informed decisions and choose suitable technologies to improve their economic status.",
];

export const metadata = {
  title: "About Us",
  description:
    "Learn about ALMI Ethiopia's mission, vision, objectives, and the dedicated team working to restore Ethiopia's agricultural future.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Restoring Ethiopia's agricultural capacity through sustainable practices and community empowerment."
      />

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mt-3 mb-6">
                A Commitment to Ethiopia&apos;s Future
              </h2>
              <div className="space-y-4 text-stone-medium leading-relaxed">
                <p>
                  ALMI Ethiopia (Agroforestry and Agricultural Land Management Initiative) was founded by a group of passionate Ethiopian professionals who have dedicated their careers to agriculture, environmental science, and community development.
                </p>
                <p>
                  With decades of combined experience working with the Ethiopian Ministry of Agriculture, international development agencies, and research institutions, our team understands the unique challenges facing Ethiopian farmers.
                </p>
                <p>
                  We believe that sustainable change comes from empowering communities with knowledge, tools, and resources. Our approach is rooted in participatory methodologies where local communities are active partners in every project.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl overflow-hidden h-80 lg:h-full relative">
                <img
                  src={images.about}
                  alt="Ethiopian farming community"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden h-80 lg:h-96 relative">
                <img
                  src={images.team}
                  alt="Community working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-serif mb-6">
                    Our Main Objective
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-8">
                    To prevent or reverse the persistent deterioration of Natural Resources and the decline of soil fertility and productivity to restore and improve agricultural production, food security, and livelihoods of farming communities.
                  </p>
                  <div className="space-y-4">
                    {objectives.map((obj, index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                        <p className="text-white/80 text-sm">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mt-3 mb-4">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sustainability",
                desc: "Every solution must be environmentally sound and economically viable for long-term impact.",
              },
              {
                title: "Participation",
                desc: "Communities are partners, not beneficiaries. We listen, learn, and collaborate.",
              },
              {
                title: "Innovation",
                desc: "We embrace new technologies and approaches while respecting traditional knowledge.",
              },
              {
                title: "Integrity",
                desc: "Transparency and accountability guide every decision we make and every dollar we spend.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full border border-stone-light/10">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-dark mb-2 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-stone-medium text-sm">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
}
