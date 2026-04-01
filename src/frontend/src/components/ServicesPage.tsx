import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Code2,
  Coffee,
  Layers,
  Lock,
  PenTool,
  Phone,
  Rocket,
  Search,
  Shield,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

type PageType =
  | "home"
  | "about"
  | "services"
  | "solutions"
  | "cybersecurity"
  | "projectmanagement"
  | "fullstack"
  | "awscloud"
  | "javadevelopment"
  | "qatesting";

interface ServicesPageProps {
  setPage: (p: PageType) => void;
}

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    const elements = document.querySelectorAll(".fade-in-up");
    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

const SERVICES_OVERVIEW = [
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect your organization with enterprise-grade threat detection, compliance management, and proactive security monitoring.",
    color: "#0A3D62",
    anchor: "#cybersecurity",
    page: "cybersecurity" as PageType,
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Drive successful outcomes with Agile, PMBOK, and hybrid methodologies—on time, within budget, aligned to your strategy.",
    color: "#1ABC9C",
    anchor: "#project-management",
    page: "projectmanagement" as PageType,
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "End-to-end web and application development using modern frameworks—React, Node.js, Spring Boot, and beyond.",
    color: "#0A3D62",
    anchor: "#fullstack",
    page: "fullstack" as PageType,
  },
  {
    icon: Cloud,
    title: "AWS Cloud Solutions",
    desc: "Architect, migrate, and optimize workloads on AWS. Reduce costs while scaling with confidence and reliability.",
    color: "#1ABC9C",
    anchor: "#aws",
    page: "awscloud" as PageType,
  },
  {
    icon: Coffee,
    title: "Java Development",
    desc: "Build robust, high-performance enterprise applications with Java EE, Spring, and microservices architectures.",
    color: "#0A3D62",
    anchor: "#java",
    page: "javadevelopment" as PageType,
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance / Testing",
    desc: "End-to-end QA services including manual, automated, performance, and security testing to ship with confidence.",
    color: "#1ABC9C",
    anchor: "#qatesting",
    page: "qatesting" as PageType,
  },
];

const SERVICE_DETAILS = [
  {
    id: "cybersecurity",
    icon: Shield,
    color: "#0A3D62",
    title: "Comprehensive Security for Modern Enterprises",
    body: "Our cybersecurity team delivers tailored solutions that safeguard your digital assets. From vulnerability assessments to 24/7 SOC monitoring, we keep your business resilient.",
    bullets: [
      "Threat detection & incident response",
      "Compliance management (HIPAA, SOC 2, PCI DSS)",
      "Penetration testing & red team exercises",
      "Security awareness training for staff",
      "Zero-trust architecture design",
    ],
  },
  {
    id: "project-management",
    icon: ClipboardList,
    color: "#1ABC9C",
    title: "Deliver Projects On Time, Every Time",
    body: "We bring certified PMPs and Agile coaches to ensure every initiative ships on schedule, within scope, and under budget—while keeping stakeholders informed throughout.",
    bullets: [
      "Agile, Scrum & Kanban facilitation",
      "Risk assessment & mitigation planning",
      "Resource & budget management",
      "Stakeholder communication frameworks",
      "PMO setup and governance",
    ],
  },
  {
    id: "fullstack",
    icon: Code2,
    color: "#0A3D62",
    title: "Scalable Applications, Built to Last",
    body: "From pixel-perfect UIs to battle-tested APIs, our full-stack engineers deliver software that performs at scale and adapts to your growing business needs.",
    bullets: [
      "React, Vue.js, Angular front-end engineering",
      "Node.js, Python, Java back-end APIs",
      "Database design (SQL & NoSQL)",
      "CI/CD pipeline setup & DevOps",
      "Performance optimization & code audits",
    ],
  },
  {
    id: "aws",
    icon: Cloud,
    color: "#1ABC9C",
    title: "Unlock the Full Power of AWS",
    body: "Our AWS-certified architects help you migrate, modernize, and optimize cloud workloads—reducing operational overhead and unlocking elasticity at any scale.",
    bullets: [
      "Cloud migration & lift-and-shift strategies",
      "Serverless architecture (Lambda, API Gateway)",
      "Cost optimization & FinOps reporting",
      "High availability & disaster recovery design",
      "Managed services & ongoing cloud operations",
    ],
  },
  {
    id: "java",
    icon: Coffee,
    color: "#0A3D62",
    title: "Enterprise Java, Engineered for Scale",
    body: "We design and build robust Java applications—from legacy modernization to greenfield microservices—ensuring performance, security, and maintainability.",
    bullets: [
      "Spring Boot & Spring Cloud microservices",
      "Java EE / Jakarta EE enterprise apps",
      "RESTful & GraphQL API development",
      "Legacy system modernization",
      "JVM performance tuning & code reviews",
    ],
  },
];

const TECH_STACK = [
  "React",
  "Node.js",
  "Java",
  "Spring Boot",
  "AWS",
  "Python",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "TypeScript",
  "Angular",
  "Vue.js",
  "Terraform",
  "Jenkins",
];

const STATS = [
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: Star, value: "15+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: BarChart3, value: "24/7", label: "Support" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Analyze",
    desc: "We assess your infrastructure, goals, and challenges to build a comprehensive baseline.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Plan",
    desc: "Our architects design a tailored roadmap—technology choices, timelines, and success metrics.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Build",
    desc: "Certified engineers execute with precision—agile sprints, code reviews, and continuous delivery.",
  },
  {
    num: "04",
    icon: Lock,
    title: "Secure",
    desc: "Security checks, penetration tests, and compliance reviews are baked in at every layer.",
  },
  {
    num: "05",
    icon: Layers,
    title: "Deploy",
    desc: "We ship to production, monitor performance, and provide ongoing support to ensure success.",
  },
];

export default function ServicesPage({ setPage }: ServicesPageProps) {
  useScrollAnimation();

  const scrollTo = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative bg-[#0A3D62] text-white pt-32 pb-20 px-4"
        data-ocid="services.section"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #1ABC9C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e6fa0 0%, transparent 40%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-blue-300 mb-8"
            aria-label="breadcrumb"
          >
            <button
              type="button"
              className="hover:text-white transition-colors"
              onClick={() => {
                setPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-ocid="services.breadcrumb_home.link"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white font-medium">Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1ABC9C]/20 border border-[#1ABC9C]/40 text-[#1ABC9C] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Enterprise IT Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Our IT Services
            </h1>
            <p className="text-xl text-blue-200 mb-10 max-w-2xl leading-relaxed">
              Enterprise-grade technology solutions tailored to drive your
              business forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-semibold px-8 py-3 text-base"
                onClick={() => scrollTo("service-overview")}
                data-ocid="services.explore.primary_button"
              >
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A3D62] font-semibold px-8 py-3 text-base bg-transparent"
                onClick={() => {
                  setPage("home");
                  setTimeout(() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                data-ocid="services.contact.secondary_button"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section
        id="service-overview"
        className="py-24 bg-gray-50 px-4"
        data-ocid="services.overview.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold text-[#0A3D62] mb-4">
              Core Service Areas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Five specialized practice areas designed to address your most
              critical technology challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_OVERVIEW.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="fade-in-up bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  data-ocid={`services.overview.item.${i + 1}`}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: svc.color }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  <button
                    type="button"
                    className="mt-5 flex items-center gap-1.5 text-[#1ABC9C] font-semibold text-sm hover:gap-3 transition-all"
                    onClick={() => setPage(svc.page)}
                    data-ocid={`services.overview.link.${i + 1}`}
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {SERVICE_DETAILS.map((svc, i) => {
        const Icon = svc.icon;
        const isEven = i % 2 === 1;
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-24 px-4 ${isEven ? "bg-gray-50" : "bg-white"}`}
            data-ocid={`services.detail.${svc.id}.section`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? "" : ""}`}
              >
                {/* Visual panel */}
                <div
                  className={`fade-in-up relative rounded-2xl overflow-hidden h-80 lg:h-96 flex items-center justify-center ${isEven ? "lg:order-2" : ""}`}
                  style={{
                    background: `linear-gradient(135deg, ${svc.color}15 0%, ${svc.color}30 100%)`,
                    border: `2px solid ${svc.color}20`,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: svc.color }}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <p
                      className="text-lg font-bold"
                      style={{ color: svc.color }}
                    >
                      {SERVICES_OVERVIEW[i].title}
                    </p>
                  </div>
                  {/* Decorative circles */}
                  <div
                    className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-20"
                    style={{ backgroundColor: svc.color }}
                  />
                  <div
                    className="absolute bottom-6 left-6 w-10 h-10 rounded-full opacity-15"
                    style={{ backgroundColor: svc.color }}
                  />
                </div>

                {/* Content panel */}
                <div className={`fade-in-up ${isEven ? "lg:order-1" : ""}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: svc.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A3D62] mb-5 leading-snug">
                    {svc.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-7">
                    {svc.body}
                  </p>
                  <ul className="space-y-3">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: svc.color }}
                        />
                        <span className="text-gray-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 font-semibold px-6 py-2.5"
                    style={{ backgroundColor: svc.color }}
                    onClick={() => {
                      setPage("home");
                      setTimeout(() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    data-ocid={`services.detail.${svc.id}.button`}
                  >
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Tech Stack */}
      <section
        className="py-20 bg-gray-50 px-4"
        data-ocid="services.techstack.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              Tools & Platforms
            </p>
            <h2 className="text-3xl font-bold text-[#0A3D62]">
              Technologies We Work With
            </h2>
          </div>
          <div className="fade-in-up flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-[#0A3D62] shadow-sm hover:border-[#1ABC9C] hover:shadow-md transition-all duration-200"
                data-ocid="services.techstack.item.1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-16 bg-[#0A3D62] px-4"
        data-ocid="services.stats.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="fade-in-up text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  data-ocid={`services.stats.item.${i + 1}`}
                >
                  <div className="w-12 h-12 bg-[#1ABC9C]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#1ABC9C]" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-blue-300 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-24 bg-white px-4"
        data-ocid="services.process.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              Our Methodology
            </p>
            <h2 className="text-4xl font-bold text-[#0A3D62] mb-4">
              How We Work
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A proven 5-step delivery framework that guarantees results on
              every engagement.
            </p>
          </div>
          <div className="relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px border-t-2 border-dashed border-gray-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="fade-in-up text-center relative"
                    style={{ transitionDelay: `${i * 100}ms` }}
                    data-ocid={`services.process.item.${i + 1}`}
                  >
                    <div className="relative inline-block mb-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#0A3D62] flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 bg-[#1ABC9C] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A3D62] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, #0A3D62 0%, #0d4f7a 50%, #0A3D62 100%)",
        }}
        data-ocid="services.cta.section"
      >
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <div className="w-16 h-16 bg-[#1ABC9C]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-8 h-8 text-[#1ABC9C]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Talk to our experts and get a customized IT strategy for your
            organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-semibold px-10 py-4 text-base"
              onClick={() => {
                setPage("home");
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              data-ocid="services.cta.primary_button"
            >
              Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href="tel:8322950408">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A3D62] font-semibold px-10 py-4 text-base bg-transparent"
                data-ocid="services.cta.secondary_button"
              >
                <Phone className="mr-2 w-4 h-4" /> Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
