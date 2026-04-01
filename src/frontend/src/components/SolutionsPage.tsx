import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  DollarSign,
  Globe,
  Layers,
  Lock,
  RefreshCw,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

type PageType = "home" | "about" | "services" | "solutions";

interface SolutionsPageProps {
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

const SOLUTIONS_OVERVIEW = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    desc: "Comprehensive threat detection, compliance frameworks, and risk management strategies to protect your digital assets and ensure business continuity.",
    color: "#0A3D62",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "AWS cloud migration, DevOps automation, and infrastructure optimization that scale with your business and reduce operational overhead.",
    color: "#1ABC9C",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Full-stack web and mobile applications tailored precisely to your business needs — from MVP to enterprise-grade systems.",
    color: "#0A3D62",
  },
  {
    icon: Target,
    title: "IT Project Management",
    desc: "Agile delivery methodologies, resource planning, and stakeholder alignment that keep complex technology projects on track and on budget.",
    color: "#1ABC9C",
  },
  {
    icon: Database,
    title: "Java Enterprise Solutions",
    desc: "Scalable Java/Spring backend systems and enterprise integrations built for high-performance, mission-critical business operations.",
    color: "#0A3D62",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    desc: "Modernizing legacy systems, automating processes, and leveraging data analytics to position your organization for the future.",
    color: "#1ABC9C",
  },
];

const SOLUTION_DETAILS = [
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Our cybersecurity experts deliver layered protection strategies that evolve with the threat landscape. We combine proactive monitoring with robust compliance frameworks to keep your organization resilient.",
    features: [
      "24/7 Security Operations Center (SOC) monitoring",
      "Vulnerability assessment & penetration testing",
      "HIPAA, SOC 2, and NIST compliance frameworks",
      "Incident response planning & forensics",
      "Employee security awareness training",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "We architect, migrate, and optimize cloud environments on AWS and hybrid platforms. Our DevOps-first approach ensures your infrastructure is automated, scalable, and cost-efficient.",
    features: [
      "AWS cloud architecture & migration",
      "CI/CD pipeline setup and automation",
      "Infrastructure-as-Code (Terraform, CloudFormation)",
      "Cost optimization and right-sizing",
      "Disaster recovery and business continuity planning",
    ],
  },
  {
    id: "software",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "From concept to production, our full-stack teams build tailored web and mobile applications using modern frameworks and agile delivery. We prioritize code quality, performance, and long-term maintainability.",
    features: [
      "React, Angular, and Vue.js front-end development",
      "Node.js, Python, and Java back-end engineering",
      "iOS and Android mobile application development",
      "API design, integration, and microservices",
      "QA testing, performance tuning, and maintenance",
    ],
  },
  {
    id: "projectmgmt",
    icon: Target,
    title: "IT Project Management",
    description:
      "Our certified PMs bring structure and clarity to complex technology programs. We align business objectives with technical delivery using proven agile and hybrid frameworks.",
    features: [
      "Agile/Scrum and hybrid project delivery",
      "Resource planning & capacity management",
      "Risk identification and mitigation",
      "Executive stakeholder reporting & communication",
      "Vendor management and contract oversight",
    ],
  },
  {
    id: "java",
    icon: Database,
    title: "Java Enterprise Solutions",
    description:
      "Our Java engineers design and build high-throughput backend systems and enterprise integrations. We specialize in Spring Boot microservices, Oracle integrations, and IBM platform solutions.",
    features: [
      "Spring Boot and Spring Cloud microservices",
      "Oracle, IBM, and Microsoft platform integrations",
      "ERP system customization and development",
      "Legacy Java system modernization",
      "Performance optimization for high-volume systems",
    ],
  },
  {
    id: "digital",
    icon: RefreshCw,
    title: "Digital Transformation",
    description:
      "We partner with organizations to replace outdated processes and legacy systems with modern, data-driven solutions. The result: faster operations, better insights, and competitive advantage.",
    features: [
      "Legacy system modernization and re-platforming",
      "Business process automation (RPA, workflow tools)",
      "Data analytics and business intelligence dashboards",
      "Change management and adoption programs",
      "Digital strategy roadmap development",
    ],
  },
];

const INDUSTRIES = [
  "Healthcare",
  "Insurance",
  "State & Local Government",
  "Manufacturing",
  "Transportation",
  "Legal",
  "Finance",
  "Food & Catering",
];

const ENGAGEMENT_MODELS = [
  {
    icon: DollarSign,
    title: "Fixed Price",
    desc: "Defined scope, predictable cost. Ideal for well-understood projects with clear requirements and delivery milestones.",
    bullets: [
      "Clear deliverables",
      "Budget certainty",
      "Milestone-based payment",
    ],
  },
  {
    icon: Zap,
    title: "Time & Materials",
    desc: "Flexible and adaptive. Perfect for evolving requirements where scope may change as the project progresses.",
    bullets: ["Agile-friendly", "Scope flexibility", "Transparent billing"],
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Long-term embedded partnership. A fully integrated team that works as an extension of your in-house staff.",
    bullets: [
      "Deep domain knowledge",
      "Seamless integration",
      "Ongoing collaboration",
    ],
  },
];

const TECH_PARTNERS = [
  { name: "IBM", color: "#0F62FE" },
  { name: "Oracle", color: "#C74634" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "AWS", color: "#FF9900" },
  { name: "Open Source", color: "#1ABC9C" },
];

const STATS = [
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function SolutionsPage({ setPage }: SolutionsPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  useScrollAnimation();

  const ActiveIcon = SOLUTION_DETAILS[activeTab].icon;

  return (
    <div className="min-h-screen font-sans">
      {/* Hero */}
      <section
        className="relative pt-28 pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A3D62 0%, #0d4f7c 60%, #1a6b8a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #1ABC9C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0%, transparent 40%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            type="button"
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
            onClick={() => {
              setPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            data-ocid="solutions.link"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              <Layers className="w-3.5 h-3.5" /> Enterprise IT Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transforming Business Through{" "}
              <span style={{ color: "#1ABC9C" }}>Technology</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              End-to-end technology solutions designed to accelerate your
              business growth and digital transformation. From cybersecurity to
              cloud — we deliver results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="text-white font-bold px-8 py-3 text-base shadow-lg"
                style={{ backgroundColor: "#1ABC9C" }}
                onClick={() => {
                  setPage("home");
                  setTimeout(() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                data-ocid="solutions.primary_button"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3 text-base"
                style={{ background: "transparent" }}
                onClick={() => setPage("services")}
                data-ocid="solutions.secondary_button"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ color: "#1ABC9C", background: "#e8faf6" }}
            >
              What We Offer
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#0A3D62" }}
            >
              Comprehensive IT Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Six core solution areas engineered to address every dimension of
              modern enterprise technology challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_OVERVIEW.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="fade-in-up group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  data-ocid={`solutions.item.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor:
                        sol.color === "#1ABC9C" ? "#e8faf6" : "#e8f1f8",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: sol.color }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#0A3D62" }}
                  >
                    {sol.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Deep Dives */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ color: "#1ABC9C", background: "#e8faf6" }}
            >
              Deep Dive
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#0A3D62" }}
            >
              Explore Each Solution
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Click any solution to see detailed capabilities, features, and how
              we deliver results.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tab List */}
            <div className="lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {SOLUTION_DETAILS.map((sol, i) => {
                const Icon = sol.icon;
                return (
                  <button
                    key={sol.id}
                    type="button"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left whitespace-nowrap lg:whitespace-normal ${
                      activeTab === i
                        ? "text-white shadow-md"
                        : "text-gray-600 bg-white hover:bg-gray-50 border border-gray-100"
                    }`}
                    style={activeTab === i ? { background: "#0A3D62" } : {}}
                    onClick={() => setActiveTab(i)}
                    data-ocid={"solutions.tab"}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{sol.title}</span>
                  </button>
                );
              })}
            </div>
            {/* Tab Content */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#e8f1f8" }}
                >
                  <ActiveIcon
                    className="w-7 h-7"
                    style={{ color: "#0A3D62" }}
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-extrabold mb-1"
                    style={{ color: "#0A3D62" }}
                  >
                    {SOLUTION_DETAILS[activeTab].title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {SOLUTION_DETAILS[activeTab].description}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Key Capabilities
                </h4>
                <ul className="space-y-3">
                  {SOLUTION_DETAILS[activeTab].features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "#1ABC9C" }}
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ color: "#1ABC9C", background: "#e8faf6" }}
            >
              Industries
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#0A3D62" }}
            >
              Industries We Serve
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Our solutions span diverse sectors, adapting to unique regulatory
              and operational requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center fade-in-up">
            {INDUSTRIES.map((industry, i) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
                style={{
                  borderColor: i % 2 === 0 ? "#0A3D62" : "#1ABC9C",
                  color: i % 2 === 0 ? "#0A3D62" : "#1ABC9C",
                  background: i % 2 === 0 ? "#e8f1f8" : "#e8faf6",
                }}
                data-ocid={`solutions.item.${i + 1}`}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ color: "#1ABC9C", background: "#e8faf6" }}
            >
              Engagement Models
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#0A3D62" }}
            >
              How We Work With You
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Flexible engagement options designed to match your project scope,
              timeline, and business objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="fade-in-up bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  data-ocid={`solutions.card.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#e8f1f8" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#0A3D62" }} />
                  </div>
                  <h3
                    className="text-xl font-extrabold mb-3"
                    style={{ color: "#0A3D62" }}
                  >
                    {model.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    {model.desc}
                  </p>
                  <ul className="space-y-2">
                    {model.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "#1ABC9C" }}
                        />
                        <span className="text-gray-700 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full"
              style={{ color: "#1ABC9C", background: "#e8faf6" }}
            >
              Technology Partners
            </span>
            <h2
              className="text-2xl font-extrabold"
              style={{ color: "#0A3D62" }}
            >
              Powered by Industry Leaders
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 fade-in-up">
            {TECH_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: partner.color,
                  color: partner.color,
                  background: `${partner.color}12`,
                }}
              >
                <Globe className="w-4 h-4" />
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16" style={{ background: "#0A3D62" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center fade-in-up"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`solutions.item.${i + 1}`}
              >
                <div
                  className="text-4xl sm:text-5xl font-extrabold mb-2"
                  style={{ color: "#1ABC9C" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ekan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ color: "#1ABC9C", background: "#e8faf6" }}
              >
                Why Ekan
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-5"
                style={{ color: "#0A3D62" }}
              >
                Built on Trust,
                <br />
                Driven by Results
              </h2>
              <p className="text-gray-500 mb-8 text-base leading-relaxed">
                Since 2010, Ekan Solutions has partnered with enterprises,
                government agencies, and fast-growing companies to deliver
                technology that actually moves the needle. Our 35+ years of
                combined expertise means your project is in experienced hands.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: BarChart3,
                    text: "Proven delivery methodology with measurable outcomes",
                  },
                  {
                    icon: Shield,
                    text: "Security-first approach embedded at every layer",
                  },
                  {
                    icon: Cpu,
                    text: "Deep expertise across IBM, Oracle, Microsoft & AWS platforms",
                  },
                  {
                    icon: Users,
                    text: "Onshore team backed by 24/7 offshore development support",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#e8f1f8" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#0A3D62" }} />
                    </div>
                    <span className="text-gray-700 text-sm pt-2">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-up grid grid-cols-2 gap-4">
              {[
                { label: "Enterprise Clients", value: "200+", icon: Users },
                { label: "Technologies Mastered", value: "40+", icon: Cpu },
                { label: "Countries Served", value: "12+", icon: Globe },
                { label: "Certifications Held", value: "25+", icon: Shield },
              ].map(({ label, value, icon: Icon }, i) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
                  data-ocid={`solutions.card.${i + 1}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: i % 2 === 0 ? "#e8f1f8" : "#e8faf6" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: i % 2 === 0 ? "#0A3D62" : "#1ABC9C" }}
                    />
                  </div>
                  <div
                    className="text-2xl font-extrabold mb-1"
                    style={{ color: "#0A3D62" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A3D62 0%, #0d4f7c 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, #1ABC9C 0%, transparent 50%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            Let's build a tailored solution roadmap for your organization. Our
            consultants are ready to assess your needs and recommend the right
            approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="font-bold px-10 py-4 text-base shadow-xl text-white"
              style={{ backgroundColor: "#1ABC9C" }}
              onClick={() => {
                setPage("home");
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 150);
              }}
              data-ocid="solutions.primary_button"
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 font-semibold px-10 py-4 text-base"
              style={{ background: "transparent" }}
              onClick={() => {
                setPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-ocid="solutions.secondary_button"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
