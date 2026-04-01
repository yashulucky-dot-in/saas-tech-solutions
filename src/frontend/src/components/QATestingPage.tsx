import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Home,
  Phone,
  Shield,
  Smartphone,
  Zap,
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
    icon: CheckCircle2,
    title: "Manual Testing",
    desc: "Exploratory, functional, and regression testing by skilled QA engineers who think like your end users.",
  },
  {
    icon: Zap,
    title: "Automated Testing",
    desc: "Selenium, Cypress, and Playwright-driven automation frameworks for faster, more reliable releases.",
  },
  {
    icon: ArrowRight,
    title: "Performance Testing",
    desc: "Load, stress, and scalability testing using JMeter and Gatling to ensure your app performs under pressure.",
  },
  {
    icon: Shield,
    title: "Security Testing",
    desc: "Vulnerability assessments, penetration testing, and OWASP compliance checks to harden your application.",
  },
  {
    icon: CheckCircle2,
    title: "API Testing",
    desc: "REST/SOAP API validation with Postman and RestAssured frameworks for reliable backend integrations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Testing",
    desc: "Cross-platform mobile app testing on real devices and emulators to guarantee consistent user experiences.",
  },
];

const TECH = [
  "Selenium",
  "Cypress",
  "Playwright",
  "JMeter",
  "Gatling",
  "Postman",
  "JIRA",
  "TestRail",
  "Appium",
  "SonarQube",
];

const PROCESS = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "Understand scope, define test objectives, and build a comprehensive coverage strategy aligned to your goals.",
  },
  {
    step: "02",
    title: "Test Planning",
    desc: "Create test plans, select the right tools, and define the automation roadmap for maximum efficiency.",
  },
  {
    step: "03",
    title: "Test Design",
    desc: "Write detailed test cases, automation scripts, and prepare high-quality test data sets.",
  },
  {
    step: "04",
    title: "Test Execution",
    desc: "Run manual and automated tests across environments, log defects, and track resolution to closure.",
  },
  {
    step: "05",
    title: "Reporting & Sign-off",
    desc: "Deliver quality reports, metrics dashboards, and formal release approval documentation.",
  },
];

const WHY = [
  {
    title: "Certified QA Engineers",
    desc: "Our team holds ISTQB and CSTE certifications with deep expertise across web, mobile, and enterprise applications.",
  },
  {
    title: "Shift-Left Testing",
    desc: "We integrate testing early in your SDLC—catching bugs when they're cheapest to fix and accelerating delivery.",
  },
  {
    title: "CI/CD Native",
    desc: "Our automation frameworks plug seamlessly into Jenkins, GitHub Actions, and Azure DevOps pipelines.",
  },
];

const STATS = [
  { value: "500+", label: "Projects Tested" },
  { value: "99.9%", label: "Bug Detection Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export default function QATestingPage({ setPage }: Props) {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <button
              type="button"
              onClick={() => setPage("home")}
              className="hover:text-white transition-colors flex items-center gap-1"
              data-ocid="qa.home.link"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              type="button"
              onClick={() => setPage("services")}
              className="hover:text-white transition-colors"
              data-ocid="qa.services.link"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Quality Assurance / Testing</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <CheckCircle2 className="w-4 h-4 text-[#1ABC9C]" />
              <span className="text-white/90 text-sm font-medium">
                Quality Assurance / Testing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Deliver Flawless Software, <br />
              <span style={{ color: "#1ABC9C" }}>Every Release</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Comprehensive QA &amp; Testing services to eliminate bugs, ensure
              performance, and accelerate your delivery pipeline with
              confidence.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                onClick={() => setPage("home")}
                className="px-8 py-3 text-base font-semibold rounded-xl"
                style={{ backgroundColor: "#1ABC9C", color: "white" }}
                data-ocid="qa.hero.primary_button"
              >
                Get a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setPage("services")}
                className="px-8 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
                data-ocid="qa.hero.secondary_button"
              >
                View Our Services
              </Button>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                "500+ Projects Tested",
                "99.9% Bug Detection Rate",
                "Agile & CI/CD Ready",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1ABC9C]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14" style={{ backgroundColor: "#0A3D62" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="fade-in-up text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`qa.stats.item.${i + 1}`}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {s.value}
                </p>
                <p className="text-[#1ABC9C] text-sm font-medium">{s.label}</p>
              </div>
            ))}
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
              Full-Spectrum QA Capabilities
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From manual exploratory testing to AI-powered automation—we cover
              every dimension of software quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="fade-in-up bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  data-ocid={`qa.capability.item.${i + 1}`}
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
              Industry-Leading QA Tools
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
              How We Deliver Quality
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="fade-in-up text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`qa.process.item.${i + 1}`}
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
                <h3 className="font-bold text-[#0A3D62] text-base mb-2">
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
              Why Choose Ekan for QA / Testing
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
                data-ocid={`qa.why.item.${i + 1}`}
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
            Ready to Ship Bug-Free Software?
          </h2>
          <p className="text-white/70 text-xl mb-10">
            Let our QA experts help you build confidence in every release.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setPage("home")}
              className="px-10 py-3 text-base font-semibold rounded-xl"
              style={{ backgroundColor: "#1ABC9C", color: "white" }}
              data-ocid="qa.cta.primary_button"
            >
              Start Your QA Journey <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <a href="tel:8322950408">
              <Button
                variant="outline"
                className="px-10 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
                data-ocid="qa.cta.secondary_button"
              >
                <Phone className="w-4 h-4 mr-2" /> (832) 295-0408
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
