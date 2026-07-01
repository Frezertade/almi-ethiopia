"use client";

import PageHeader from "@/components/page-header";
import AnimatedSection from "@/components/animated-section";
import { images } from "@/lib/config";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { useI18n } from "@/components/i18n-provider";
import { useEffect, useState } from "react";

const objectives = [
  "Planting multipurpose tree species to increase forest and fruit trees in degraded areas, farmlands, homesteads, gullies, and farm boundaries.",
  "Promoting better farming practices and tillage tools for higher productivity, food security, and improved livelihoods for small-scale farmers.",
  "Promoting urban agriculture to support disadvantaged groups and improve city livelihoods by providing healthy food.",
  "Creating job opportunities for unemployed youth and women in order to support government efforts to reduce unemployment with a motto: together, we can make a difference in the lives of those who need it most.",
  "Empowering women and youth in urban areas to make informed decisions and choose suitable technologies to improve their economic status.",
];

function useRuntimeImages() {
  const [runtime, setRuntime] = useState<Record<string, string>>({});
  useEffect(() => {
    fetch("/data/images.json", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => setRuntime(data))
      .catch(() => setRuntime({}));
  }, []);
  return runtime;
}

const ceo = {
  name: "Dr. Kefeni Kejela",
  role: "CEO and President of ALMI Ethiopia",
  imageKey: "drKefeni",
  bio: `Dr Kefeni Kejela has served as a Soil Scientist in the Ministry of Agriculture, Department of Soil and Water Conservation in Ethiopia for over 10 years conducting soil and water conservation research with particular emphasis on soil productivity and agricultural production in 6 different agroecological zones of Ethiopia and Eritrea before coming to USA. He also provided technical support such as Training and workshops for employees working for the Department of Soil and Water Conservation in the Ministry of Agriculture – Ethiopia implementing soil and water conservation activities in the densely populated and highly degraded highlands of Ethiopia funded by SIDA (Swedish International Development Agency), CIPAR (Canadian International Physician Aid and Relief), WFP (World Food Program), UNDP (United Nations Development Program), SADC (Swiss Agency for Development and Cooperation) in Ethiopia. Upon completion of his Ph.D. in Environmental Science at Oklahoma State University, Dr Kejela began his career as a Resource Soil Scientist and Soil Conservationist in the States of Maine and Pennsylvania in the United States Department of Agriculture, Natural Resources Conservation Services in several field offices for the last 23 years. During his 23 years of service in USDA/Natural Resources Conservation Services, he provided leadership in the development, analyses, interpretation, and use of land and water resource data, including collection of information on soil resources, existing land use, and conservation treatment needed in support of the planning and implementation of soil and water conservation systems. Dr Kejela has promoted these values since arriving in the U.S. from Ethiopia in 1997.

He won the USDA/NRCS Individual National Civil Rights Award of 2022 for his significant contribution to USDA/NRCS in civil rights program delivery. He demonstrated honesty, integrity, impartiality, objectivity, unity, and diversity in his everyday work with customers including Mennonite farmers, limited-resource or beginning urban farmers in Philadelphia and Pittsburgh, and traditional corn/soybean producers in Pennsylvania. In 2017, He received the USDA Public Service Award for contributing to outreach, soil health, and promotion of Best Management Practices to sustain the productivity of crop and pasture lands.

Dr. Kejela holds a Ph.D. in Environmental Science from Oklahoma State University, USA, an MSc (honors degree) in Soil Science from Krasnodar Institute of Tropical and Subtropical Agriculture, former Soviet Union, and an MSc in Resource Assessment for Development Planning from the University of East Anglia (England) United Kingdom.

Dr. Kejela served as a Soil Health Cadre in the State of Pennsylvania, USA Providing soil-related training for States and Federal Natural Resource Management employees for the last 10 years. Dr Kejela has published over 20 Scientific Research Papers in various journals on soils and soil management & also published a book entitled "Heavy Metal Leaching in Different Environments, 2010.`,
};

const team = [
  {
    name: "Assefa Foche (MBA)",
    role: "Executive member and Secretary-ALMI-Ethiopia",
    imageKey: "assefaFoche",
    bio: "Education:\n• Earned an MBA from the University of Phoenix\n• Earned Associate Degree in CIS (Computer Information Systems – Database) and Academic Award Achievement\n• Earned a BA in Geography from Addis Ababa University\n\nProfessional Experience:\nI. In Ethiopia:\n• Board of Directors and Audit Committee Chairperson for various public enterprises under the Ministry of Commerce and Industry\n• Deputy General Manager: Finance, Commerce, Human Resources, and Logistics at Coffee Plantation and Development Enterprise\n• Manager: Transport and Logistics Department at Agricultural Inputs Supply Enterprise\n• District Manager: Ministry of Agriculture\n\nII. In the United States:\n• Application Analyst at Union Community Care\n• Program Compliance and Impact Manager at Community First Fund\n• Service Director, Area Supervisor, and Program Supervisor at Keystone Human Services\n• Program Manager and Program Coordinator at Friendship Community\n\nLeadership and Skills:\n• Assefa has demonstrated strong leadership skills as a member of the Board of Directors and Audit Committee Chairperson for various public enterprises in Ethiopia. He was instrumental in preparing and implementing public policies to achieve organizational objectives.\n• He combines the hard skills of an MBA with the soft skills of cross-functional team building and leadership at all levels, delivering powerful results.\n• Assefa effectively manages budgets, controls costs, and optimizes routes and schedules.\n\nPassion and Vision:\n• Assefa thrives in challenging environments and believes that leadership and community service bring together dynamic individuals from diverse backgrounds. He aims to make a positive impact on relationships between countries.\n• His desire lies in working within the Economic Affairs and Management career tracks, leveraging his strong knowledge and experience in East Africa, particularly Ethiopia.\n• Foche excels in analyzing, integrating, and collaborating to address the dangers of failed states, emphasizing peacemaking, democratic development, and economic progress.",
  },
  {
    name: "Abishu Wogari",
    role: "ALMI-Ethiopia Executive Board member and Chief Accountant",
    imageKey: "abishuWogari",
    bio: "• Graduated from Ethiopian Naval College in Asmara, Eritrea in 1988 with a BSC in Naval Logistics and Accounting.\n• Served in the Ethiopian Navy at Massawa Naval base for 3 years as a logistics officer and for two years at the Asseb Naval base as a finance officer.\n• Graduated from Harrisburg Area Community College with in HVAC (Heating, Ventilation, and Air Conditioning) technology and pursued his career in Tyson Foods as a refrigeration mechanic from 2005 to the present.\n• Passionate in protecting planet Earth from deterioration of natural resources including deforestation and degradation, declining soil fertility, and productivity.",
  },
  {
    name: "Dr. Dejene Alemayehu (PhD)",
    role: "Executive Member and Project Officer ALMI-Ethiopia",
    imageKey: "drDejene",
    bio: "• Dr. Dejene is a graduate of Oklahoma State University with a Doctoral degree in Environmental Science in 2000 and a Master of Science degree in Agronomy with emphasis on forest Physiology and Range Management. Bachelor of Science degree in Plant Science from Alemaya University, Ethiopia, and Agricultural Diploma from Jimma Agricultural Institute.\n• Dr. Dejene before joining ALMI-Ethiopia, worked with the Kaw Nation Environmental Department, a Tribal Government in the Northern part of Oklahoma, and served over 17 years in the capacity of Environmental Director and Scientist, closely working with the states and various federal agencies like U.S. Environmental Protection Agency and Bureau of Indian Affairs to protect and preserve the environment in the fields of water quality, air quality, renewable energy, solid and hazardous wastes, climate adaptation and others.\n• Dr. Dejene Worked for Non-Governmental Organization (Norwegian Church Aid) for 7 years as a Program Officer and Project Manager. He was managing the Dello Development Project (DDP) in Bale, Southern Part of Ethiopia. The DDP had a yearly budget of 2 million dollars to rehabilitate drought-stricken farmers, with improved seeds, fertilizers, and pesticides, and run forest nurseries to conserve natural resources with soil conservation practices such as terracing and planting agroforestry seedlings.\n• Dr. Dejene was also a member of the Ethiopian Highlands Reclamation Study Team (EHRST) within the Ministry of Agriculture, Ethiopia. EHRST was funded by the World Bank and Food and Agricultural Organization (FAO). As a team member served as Agronomist, Junior Soil Scientist, and counterpart to the FAO expert.\n• Dr. Dejene has also served the Ministry of Agriculture, Extension and Project Implementation Department of the World Bank, in Ethiopia for over 5 years (1974-1979).\n• Dr. Dejene has published over ten scientific research papers in various journals in the field of water, soil, aquatic species, forestry, sodic soils, and recently on the concentrations of mercury in fish. He also wrote two Environmental Assessments documents based on the National Environmental Policy Act (NEPA) to transfer fee land into federal land status.",
  },
  {
    name: "Mekonnen Abote (MA)",
    role: "Executive member and PR/IT Officer-ALMI-Ethiopia",
    imageKey: "mekonnenAbote",
    bio: "• Earned MA- Rural Social Development, from University of Reading, Reading, UK.\n• Received Post Graduate Diploma, Rural Social Development, University of Reading, Reading, UK.\n• Received Certificate, Development Studies, Sellyoak Colleges, Birmingham, UK.\n• Earned Diploma, Educational Administration, Addis Abeba University, Addis Abeba, Ethiopia.\n• Communication Specialist/Translation, work collaboratively with diverse offices to translate web pages, Quick Notes broadcasting, newsletter-type publications, forms, letters, and notices, for use by MCPS schools and offices to engage the non-and limited English-speaking community.\n• Help Promoting effective, inclusive, and culturally and linguistically competent family engagement in MCPS school system.\n• Experienced Rural Development Specialist with more than twenty years of work in managing rural social development projects programs including needs assessment, operational planning, reporting, and evaluation.\n• Promoted empowerment of women's direct participation in rural development activities through advocacy of gender sensitivity.\n• Directed the management of relief assistance and rehabilitation programs in more than 12 drought-prone Districts.\n• Maintained ongoing relationships with project donors and partners from the Finnish International Development Agency (FINIDA), Finish Evangelical Lutheran Mission (FELM), Lutheran World Federation (LWF), KNH (Germany), Pathfinder International (USA), Local communities, and Government Agencies.\n• In addition to his full-time professional Job, Mr. Mekonnen has been Currently, working as the PR/IT Officer of ALMI-Ethiopia Project in North America that is developing a project under the Logo \"Agroforestry and Agricultural Land Management Initiatives in Ethiopia focusing on Urban Agriculture and Gardner's Innovative activities, Tillage improvement, and Agricultural Land Management.",
  },
  {
    name: "Dr. Melkamu Adeba",
    role: "Executive member and Treasury-ALMI-Ethiopia",
    imageKey: "drMelkamu",
    bio: "• Earned a Ph.D. in Instructional Design and Technology from Keiser University, FL, USA, and a BSC degree in Chemistry with a combined mathematics and physics minor from Addis Ababa University in 1988.\n• Received a Higher Diploma in professional teacher educator from Addis Ababa University, College of Education, and earned a master's degree in science, specializing in organic chemistry, from Punjabi University Patiala, India.\n• Dr. Melkamu Adeba received a pedagogy of online instruction certificate from Maryland University online education. He also received a training certificate in 'How to Design Effective Learning Programs for A Hybrid Workforce'.\n• Member of the National Society of Leadership and Success (NSLS).\n• Chemistry Adjunct Faculty, currently working as a Program Specialist for Human Service Organization.\n• Dr. Melkamu's passion for environmental issues emerged as early as a teenager. He grew up in a naturally dense forest area in Ethiopia.\n• Dr. Melkamu Adeba understands and believes that our planet Earth is the center of ill-managed human activities that adversely impact the environment, threatening the security and well-being of the world population. Due to his unwavering interest in environmental issues, Melkamu joined ALMI-Ethiopia as a board and executive member to voluntarily support the initiative.",
  },
  {
    name: "Erjabo Wanore",
    role: "Executive member and PR Officer-ALMI-Ethiopia",
    imageKey: "erjaboWanore",
    bio: "Erjabo Wanore is an American of Ethiopian heritage and a business owner who has been in the residential construction industry for the past 15 years. He has extensive experience and knowledge of the industry that enabled him to build a solid network of like-minded entrepreneurs to make a difference in society.\n\nMr. Wanore served on the Board of Directors at Unto Global Logistics Center (1506 Quarry Rd. Mount Joy, PA 17552). During the challenging years of the COVID pandemic, he managed coordinating, shipping, and distributing various medical equipment and supplies to the Ethiopian Defense Force, to Ethiopian COVID centers, and to various hospitals in Ethiopia. Mr. Wanore always makes himself available to serve in areas where he can make a difference in the lives of others. He describes the opportunity he has serving as a board member with ALMI as a privilege.\n\nMr. Wanore is a graduate of the Ethiopian Teachers' Training Institute and a certified Elementary & Junior High Teacher. He taught at various schools in southern Ethiopia. He also served as zone representative of Teachers' Associations for several years.",
  },
  {
    name: "Frezer Kifle M.Sc",
    role: "Technology Consultant",
    imageKey: "frezerKifle",
    bio: "Frezer Kifle is an efficient software engineer with over 7 years of experience building high-quality, scalable software solutions, primarily benefiting the healthcare sector and other industries. Over the past 5 years, he has honed his skills and expertise in the USA, delivering robust software solutions tailored to client needs.\n\nHe is passionate about leveraging his technical expertise to contribute to the development and technological advancement of Ethiopia. His skill set includes Java, JavaScript, jQuery, AJAX, Bootstrap, CSS3, HTML5, Servlet, Angular 6, 7, ReactJS, JSP, Spring, and Hibernate.\n\nAdept at all stages of end-to-end software development—from requirement definition and technical planning to testing, delivery, and support—he is a team player with excellent communication, research, and time management skills. His dedication to implementing successful projects and his commitment to continuous learning drive him to deliver the best solutions to complex problems.",
  },
  {
    name: "Betru Nedessa M.SC",
    role: "Country Representative: ALMI-Ethiopia",
    imageKey: "betruNedessa",
    bio: "• Betru Nedessa holds M.Sc. Degree in Agricultural Science specializing in Pasture Agronomy and Soil Fertility Management from Queensland University, Australia, and a bachelor's degree in plant science.\n• He has served in the Ministry of Agriculture in Ethiopia for over 30 years in different capacities. He led the World Food Program (WFP) supporting the multi-million-dollar MERET Project of the Ministry of Agriculture as a National Project Coordinator for over 20 years during which the project achieved stellar performance. In this role, he formulated, developed, and promoted the Homestead Development Approach (Intensive Home Garden Production System) and Technological Packages that have sustainably transformed the lives of millions of target beneficiaries within a short period.\n• The project gained wide recognition both nationally and internationally and became a learning ground for various relevant projects and government programs. The project was awarded the first prize of the 2019 Land for Life Award of the United Nations Convention to Combat Desertification (UNCCD) for its outstanding achievements in sustainable land management, improvement of food security, and resilience building against climate change.\n• Throughout his professional career, he has a track record of developing strategies and promoting Biological Soil Conservation Technologies and Practices in the rural areas of Ethiopia, which enhanced sustainable land management, food security, and Livelihoods of Farming communities.\n• Betru is passionate about sustainable natural resource management, food security improvement, and transformation of the lives of farming communities, particularly smallholder farmers and vulnerable groups.",
  },
];

export default function AboutPage() {
  const { t } = useI18n();
  const runtime = useRuntimeImages();

  const getImage = (key: keyof typeof images) => runtime[key] ?? images[key];

  return (
    <>
      <PageHeader
        title={t("about.pageTitle")}
        subtitle={t("about.pageSubtitle")}
      />

      {/* Banner Image */}
      <section className="py-12 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden h-72 md:h-[28rem] relative shadow-xl">
              <img
                src={getImage("aboutBanner")}
                alt="ALMI Ethiopia agricultural landscape"
                className="w-full h-full object-cover almi-image-treatment"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-primary-dark/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="text-white text-xl md:text-2xl font-medium max-w-3xl font-serif">
                  Agroforestry and Agricultural Land Management Initiative in Ethiopia
                </p>
                <p className="text-white/80 mt-2 text-sm md:text-base">
                  Sowing Seeds for a Sustainable Future
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision / Objective */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full border border-stone-light/10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-stone-dark mb-4 font-serif">{t("about.mission")}</h2>
                <p className="text-stone-medium leading-relaxed">
                  To promote and support the sustainable management of Natural Resources, implement efficient Agricultural Technologies, and offer a range of opportunities to enhance the livelihoods of our targeted beneficiaries in partnership with States, local communities, and producers (Farmers) across the country who steward our Nation&apos;s Forest, Pasturelands, and croplands.
                </p>
                <p className="text-stone-medium leading-relaxed mt-4">
                  To protect and enhance Natural Resources such as air, land, water, wildlife, forests, and the ecosystems that sustain all life to achieve a healthier and more sustainable environment to combat the looming threat of climate change and to ensure the right of all people to use and enjoy these Natural Resources in their work and leisure to achieve common goals and progress, as a forward-thinking approach is necessary when forming partnerships.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full border border-stone-light/10">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-stone-dark mb-4 font-serif">{t("about.vision")}</h2>
                <p className="text-stone-medium leading-relaxed">
                  To provide economic opportunity through innovation, helping rural Ethiopia to thrive; promote agriculture production that better nourishes Ethiopians and to preserve our Nation&apos;s Natural Resources through conservation, afforestation of healthy small-scale farmlands for a sustainable future.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full border border-stone-light/10">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-stone-dark mb-4 font-serif">{t("about.objective")}</h2>
                <p className="text-stone-medium leading-relaxed">
                  The project&apos;s main objective is to prevent or reverse the persistent deterioration of Natural Resources and the decline of soil fertility and productivity to restore and improve agricultural production, food security, and livelihoods of farming communities.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Main Focuses */}
          <AnimatedSection className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif text-center mb-4">
              {t("about.focusesTitle")}
            </h2>
          </AnimatedSection>

          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden max-w-4xl mx-auto shadow-lg">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-4">
              {objectives.map((obj, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent-light shrink-0 mt-0.5" />
                  <p className="text-white/90">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section - Full Width */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("about.teamSubtitle")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-dark font-serif mt-3 mb-4">
              {t("about.teamTitle")}
            </h2>
            <p className="text-stone-medium text-lg max-w-2xl mx-auto">
              {t("about.teamDesc")}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-light/10">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* CEO Photo */}
                <div className="lg:col-span-2 relative">
                  <div className="h-80 lg:h-full min-h-[400px] relative almi-portrait-stage">
                    <img
                      src={getImage(ceo.imageKey as keyof typeof images)}
                      alt={ceo.name}
                      className="max-h-full max-w-full object-contain almi-portrait-img"
                    />
                  </div>
                </div>

                {/* CEO Bio */}
                <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block w-fit px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
                    {t("about.ceoRole")}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-stone-dark font-serif mb-6">
                    {ceo.name}
                  </h3>
                  <div className="text-stone-medium leading-relaxed whitespace-pre-line space-y-4">
                    {ceo.bio.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid - 2 Column */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-light/10 h-full flex flex-col">
                  {/* Photo Area with background */}
                  <div className="relative h-72 md:h-80 almi-portrait-stage overflow-hidden flex items-center justify-center">
                    <img
                      src={getImage(member.imageKey as keyof typeof images)}
                      alt={member.name}
                      className="h-[92%] max-w-[88%] w-auto object-contain object-bottom almi-portrait-img"
                    />
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-stone-dark font-serif mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-5">
                      {member.role}
                    </p>
                    <div className="text-stone-medium text-sm leading-relaxed whitespace-pre-line flex-grow">
                      {member.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i} className={i > 0 ? "mt-3" : ""}>{paragraph}</p>
                      ))}
                    </div>
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
