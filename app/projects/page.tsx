"use client";

import PageHeader from "@/components/page-header";
import AnimatedSection from "@/components/animated-section";
import { images } from "@/lib/config";
import {
  TreePine,
  Building2,
  Tractor,
  Users,
  Sprout,
  Droplets,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/components/i18n-provider";

export default function ProjectsPage() {
  const { t } = useI18n();

  const projectImages = [
    images.agroforestry,
    images.urbanAg,
    images.farmImplements,
    images.community,
    images.soil,
    images.water,
  ];

  const projects = [
    {
      icon: TreePine,
      title: t("projects.agroforestryTitle"),
      category: "Agroforestry",
      description: t("projects.agroforestryDesc"),
      goals: [
        "Plant 10,000+ multipurpose trees annually",
        "Establish demonstration plots in 20 communities",
        "Train 500 farmers in agroforestry management",
      ],
    },
    {
      icon: Building2,
      title: t("projects.urbanTitle"),
      category: "Urban Agriculture",
      description: t("projects.urbanDesc"),
      goals: [
        "Establish 50 urban community gardens",
        "Support 1,000 urban farmers with training",
        "Create market linkages for urban produce",
      ],
    },
    {
      icon: Tractor,
      title: t("projects.implementsTitle"),
      category: "Technology",
      description: t("projects.implementsDesc"),
      goals: [
        "Distribute 200 improved tillage tools",
        "Demonstrate efficient energy solutions",
        "Reduce farming labor by 40%",
      ],
    },
    {
      icon: Users,
      title: t("projects.communityTitle"),
      category: "Community",
      description: t("projects.communityDesc"),
      goals: [
        "Form 30 farmer cooperatives",
        "Train 100 community facilitators",
        "Achieve 50% women participation",
      ],
    },
    {
      icon: Sprout,
      title: t("projects.soilTitle"),
      category: "Conservation",
      description: t("projects.soilDesc"),
      goals: [
        "Treat 5,000 hectares with conservation measures",
        "Establish 100 composting demonstration sites",
        "Increase soil organic matter by 25%",
      ],
    },
    {
      icon: Droplets,
      title: t("projects.waterTitle"),
      category: "Water",
      description: t("projects.waterDesc"),
      goals: [
        "Construct 50 water harvesting ponds",
        "Install 200 drip irrigation kits",
        "Reduce crop failure by 60%",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title={t("projects.pageTitle")}
        subtitle={t("projects.pageSubtitle")}
      />

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title as string} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-stone-light/10 group">
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={projectImages[index]}
                      alt={project.title as string}
                      className="w-full h-full object-cover almi-image-treatment group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-stone-dark mb-3 font-serif">
                      {project.title}
                    </h3>
                    <p className="text-stone-medium leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="bg-cream rounded-xl p-5 mb-6">
                      <h4 className="text-sm font-semibold text-stone-dark mb-3 uppercase tracking-wider">
                        {t("projects.goalsTitle")}
                      </h4>
                      <ul className="space-y-2">
                        {project.goals.map((goal, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-stone-medium"
                          >
                            <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">
                      {t("common.learnMore")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
