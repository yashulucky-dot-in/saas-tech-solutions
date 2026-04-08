import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  GitBranch,
  Home,
  Layers,
  Phone,
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
  | "qatesting"
  | "aiservices";

interface Props {
  setPage: (p: PageType) => void;
}

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 },
    );
    const els = document.querySelectorAll(".fade-in-up");
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Pixel-perfect, performant UIs built with React, Angular, and Vue. Responsive, accessible, and optimized for every device.",
  },
  {
    icon: Layers,
    title: "Backend APIs",
    desc: "Scalable RESTful and GraphQL APIs using Node.js, Java Spring Boot, and Python Django—built for performance and reliability.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    desc: "Design, normalize, and optimize relational and NoSQL databases—PostgreSQL, MySQL, MongoDB, Redis—for peak query performance.",
  },
  {
    icon: Layers,
    title: "Cloud-Native Applications",
    desc: "Build applications purpose-designed for the cloud with containerization, serverless functions, and managed services.",
  },
  {
    icon: GitBranch,
    title: "Microservices Architecture",
    desc: "Decompose monoliths into independently deployable microservices with service mesh, API gateways, and event-driven patterns.",
  },
  {
    icon: Code2,
    title: "DevOps & CI/CD Pipelines",
    desc: "Automate build, test, and deployment with GitHub Actions, Jenkins, and ArgoCD—shipping code faster with confidence.",
  },
];

const TECH = [
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Java Spring",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Redis",
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "Deep-dive requirements workshops to map user journeys, technical constraints, and business goals.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Architecture blueprints, UI/UX wireframes, API contracts, and database schemas before a single line of code.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Agile sprints with daily standups, code reviews, and continuous integration to deliver working software iteratively.",
  },
  {
    step: "04",
    title: "Test",
    desc: "Automated unit, integration, and end-to-end testing with load testing and security scanning before release.",
  },
  {
    step: "05",
    title: "Deploy",
    desc: "Blue-green deployments, canary releases, and post-launch monitoring to ensure a smooth go-live experience.",
  },
];

const WHY = [
  {
    title: "Modern Tech Stack",
    desc: "We stay current with the latest frameworks and best practices—no legacy approaches, no outdated patterns.",
  },
  {
    title: "Code Quality First",
    desc: "Every line of code is reviewed, tested, and documented. We build software that your team can maintain and extend.",
  },
  {
    title: "End-to-End Ownership",
    desc: "One team handles frontend, backend, and DevOps—no handoff friction, no finger-pointing, just delivery.",
  },
];

export default function FullStackPage({ setPage }: Props) {
  useScrollAnimation();

  return (
    <div className="min-h-screen font-sans">
      {/* Hero */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A3D62 0%, #0d4f7c 60%, #1a6e5a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #1ABC9C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <button
              type="button"
              onClick={() => setPage("home")}
              className="hover:text-white transition-colors flex items-center gap-1"
              data-ocid="fs.home.link"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              type="button"
              onClick={() => setPage("services")}
              className="hover:text-white transition-colors"
              data-ocid="fs.services.link"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Full Stack Development</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <Code2 className="w-4 h-4 text-[#1ABC9C]" />
              <span className="text-white/90 text-sm font-medium">
                Full Stack Development
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              End-to-End <br />
              <span style={{ color: "#1ABC9C" }}>Web & App Development</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              From pixel-perfect frontends to robust backend APIs—we build
              full-stack applications that scale, perform, and delight users.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setPage("home")}
                className="px-8 py-3 text-base font-semibold rounded-xl"
                style={{ backgroundColor: "#1ABC9C", color: "white" }}
                data-ocid="fs.hero.primary_button"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setPage("home")}
                className="px-8 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
                data-ocid="fs.hero.secondary_button"
              >
                <Phone className="w-4 h-4 mr-2" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              Why It Matters
            </p>
            <h2 className="text-4xl font-bold text-[#0A3D62] mb-4">
              Build Once, Scale Forever
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Bad software is expensive. We build applications right the first
              time—architected for growth, security, and long-term
              maintainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "200+ Apps Delivered",
                desc: "From MVPs to enterprise platforms across healthcare, fintech, and logistics.",
              },
              {
                icon: Layers,
                title: "Full-Stack Team",
                desc: "Frontend, backend, DevOps, and QA under one roof—no coordination overhead.",
              },
              {
                icon: GitBranch,
                title: "Agile Delivery",
                desc: "2-week sprints with live demos. You see progress every step of the way.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="fade-in-up text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "#0A3D62" }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A3D62] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold text-[#0A3D62] mb-4">
              Full-Stack Development Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="fade-in-up bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  data-ocid={`fs.capability.item.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#0A3D62" }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A3D62] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              Technology Stack
            </p>
            <h2 className="text-3xl font-bold text-[#0A3D62]">
              Technologies We Master
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 fade-in-up">
            {TECH.map((t) => (
              <span
                key={t}
                className="px-5 py-2.5 rounded-full border-2 border-[#0A3D62]/15 text-[#0A3D62] font-semibold text-sm hover:border-[#1ABC9C] hover:text-[#1ABC9C] transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              Our Process
            </p>
            <h2 className="text-4xl font-bold text-[#0A3D62] mb-4">
              How We Build Your Application
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="fade-in-up text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`fs.process.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                  style={{ backgroundColor: "#0A3D62" }}
                >
                  {p.step}
                </div>
                <div
                  className="h-1 rounded-full mx-auto mb-4 w-12"
                  style={{ backgroundColor: "#1ABC9C" }}
                />
                <h3 className="font-bold text-[#0A3D62] text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Ekan */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 fade-in-up">
            <p className="text-[#1ABC9C] font-semibold uppercase tracking-widest text-sm mb-3">
              Why Ekan
            </p>
            <h2 className="text-4xl font-bold text-[#0A3D62] mb-4">
              Why Choose Ekan for Development
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY.map((w, i) => (
              <div
                key={w.title}
                className="fade-in-up p-8 rounded-2xl border-l-4 bg-gray-50"
                style={{
                  borderColor: "#1ABC9C",
                  transitionDelay: `${i * 80}ms`,
                }}
                data-ocid={`fs.why.item.${i + 1}`}
              >
                <CheckCircle2
                  className="w-8 h-8 mb-4"
                  style={{ color: "#1ABC9C" }}
                />
                <h3 className="text-xl font-bold text-[#0A3D62] mb-3">
                  {w.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0A3D62" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Have an Idea? Let's Build It Together.
          </h2>
          <p className="text-white/70 text-xl mb-10">
            From MVP to enterprise scale—our engineers are ready to turn your
            vision into reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setPage("home")}
              className="px-10 py-3 text-base font-semibold rounded-xl"
              style={{ backgroundColor: "#1ABC9C", color: "white" }}
              data-ocid="fs.cta.primary_button"
            >
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage("services")}
              className="px-10 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
              data-ocid="fs.cta.secondary_button"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
