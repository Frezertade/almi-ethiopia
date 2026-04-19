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

export const metadata = {
  title: "Our Projects",
  description:
    "Explore ALMI Ethiopia's initiatives in agroforestry, urban agriculture, farm implements, and community engagement.",
};

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
    title: "National Agroforestry Program",
    category: "Agroforestry",
    description:
      "A comprehensive initiative to establish multistory agroforestry systems across degraded farmlands, homesteads, and gullies. We plant multipurpose tree species including fruit trees, nitrogen-fixing species, and timber trees to restore soil fertility and provide additional income sources.",
    goals: [
      "Plant 10,000+ multipurpose trees annually",
      "Establish demonstration plots in 20 communities",
      "Train 500 farmers in agroforestry management",
    ],
  },
  {
    icon: Building2,
    title: "Urban Agriculture Innovation",
    category: "Urban Agriculture",
    description:
      "Promoting appropriate agricultural technologies in urban areas to provide alternative income sources for disadvantaged groups including women, veterans, and unemployed youth. Our urban gardens use container farming, vertical growing, and hydroponic systems.",
    goals: [
      "Establish 50 urban community gardens",
      "Support 1,000 urban farmers with training",
      "Create market linkages for urban produce",
    ],
  },
  {
    icon: Tractor,
    title: "Modern Farm Implements Initiative",
    category: "Technology",
    description:
      "Introducing and developing improved farm implements and efficient energy tools to replace the outdated single-ox plow system. This project addresses low productivity, food insecurity, and energy insufficiency among farming communities.",
    goals: [
      "Distribute 200 improved tillage tools",
      "Demonstrate efficient energy solutions",
      "Reduce farming labor by 40%",
    ],
  },
  {
    icon: Users,
    title: "Community Empowerment Network",
    category: "Community",
    description:
      "Building participatory platforms where communities actively shape project design and implementation. We establish farmer field schools, women's cooperatives, and youth agricultural clubs to ensure inclusive development.",
    goals: [
      "Form 30 farmer cooperatives",
      "Train 100 community facilitators",
      "Achieve 50% women participation",
    ],
  },
  {
    icon: Sprout,
    title: "Soil Health Restoration",
    category: "Conservation",
    description:
      "Implementing comprehensive soil conservation measures including terracing, contour farming, cover cropping, and organic matter enrichment. Our approach combines indigenous knowledge with modern soil science.",
    goals: [
      "Treat 5,000 hectares with conservation measures",
      "Establish 100 composting demonstration sites",
      "Increase soil organic matter by 25%",
    ],
  },
  {
    icon: Droplets,
    title: "Water Harvesting & Irrigation",
    category: "Water",
    description:
      "Developing small-scale water harvesting structures and drip irrigation systems to combat drought and extend growing seasons. This project is critical for building climate resilience in rain-fed agricultural areas.",
    goals: [
      "Construct 50 water harvesting ponds",
      "Install 200 drip irrigation kits",
      "Reduce crop failure by 60%",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Comprehensive initiatives designed to transform Ethiopia's agricultural landscape and empower communities."
      />

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-stone-light/10 group">
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={projectImages[index]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
                        Key Goals
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
                      Learn More
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
