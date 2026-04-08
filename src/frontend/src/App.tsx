import AIServicesPage from "@/components/AIServicesPage";
import AWSCloudPage from "@/components/AWSCloudPage";
import AboutPage from "@/components/AboutPage";
import CybersecurityPage from "@/components/CybersecurityPage";
import FullStackPage from "@/components/FullStackPage";
import JavaDevelopmentPage from "@/components/JavaDevelopmentPage";
import ProjectManagementPage from "@/components/ProjectManagementPage";
import QATestingPage from "@/components/QATestingPage";
import ServicesPage from "@/components/ServicesPage";
import SolutionsPage from "@/components/SolutionsPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  ClipboardList,
  Clock,
  Cloud,
  Code2,
  Coffee,
  Facebook,
  Layers,
  Lightbulb,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  PenTool,
  Phone,
  Rocket,
  Search,
  Shield,
  Star,
  ThumbsUp,
  Twitter,
  Users,
  Wrench,
  X,
  Youtube,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

// ──────────────────────────────────────────────
// Scroll animation hook
// ──────────────────────────────────────────────
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
      { threshold: 0.12 },
    );
    const elements = document.querySelectorAll(".fade-in-up, .fade-in");
    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect your organization with enterprise-grade threat detection, compliance management, and proactive security monitoring.",
    color: "#0A3D62",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Drive successful outcomes with Agile, PMBOK, and hybrid methodologies—on time, within budget, and aligned to your strategy.",
    color: "#1ABC9C",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "End-to-end web and application development using modern frameworks—React, Node.js, Spring Boot, and beyond.",
    color: "#0A3D62",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Solutions",
    desc: "Architect, migrate, and optimize workloads on AWS. Reduce costs while scaling with confidence and reliability.",
    color: "#1ABC9C",
  },
  {
    icon: Coffee,
    title: "Java Development",
    desc: "Build robust, high-performance enterprise applications with Java EE, Spring, and microservices architectures.",
    color: "#0A3D62",
  },
  {
    icon: CheckSquare,
    title: "Quality Assurance / Testing",
    desc: "Comprehensive QA and testing services to ensure your software is reliable, performant, and defect-free before every release.",
    color: "#1ABC9C",
    page: "qatesting" as const,
  },
  {
    icon: Bot,
    title: "AI & Automation Services",
    desc: "Harness the power of artificial intelligence and intelligent automation to streamline operations, reduce costs, and accelerate growth.",
    color: "#0A3D62",
    page: "aiservices" as const,
  },
];

const SERVICE_DETAILS = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: Shield,
    headline: "Comprehensive Security for Modern Enterprises",
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
    label: "Project Mgmt",
    icon: ClipboardList,
    headline: "Deliver Projects On Time, Every Time",
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
    label: "Full Stack Dev",
    icon: Code2,
    headline: "Scalable Applications, Built to Last",
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
    label: "AWS Cloud",
    icon: Cloud,
    headline: "Unlock the Full Power of AWS",
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
    label: "Java Dev",
    icon: Coffee,
    headline: "Enterprise Java, Engineered for Scale",
    body: "We design and build robust Java applications—from legacy modernization to greenfield microservices—ensuring performance, security, and maintainability.",
    bullets: [
      "Spring Boot & Spring Cloud microservices",
      "Java EE / Jakarta EE enterprise apps",
      "RESTful & GraphQL API development",
      "Legacy system modernization",
      "JVM performance tuning & code reviews",
    ],
  },
  {
    id: "qatesting",
    label: "QA / Testing",
    icon: CheckSquare,
    headline: "Deliver Flawless Software, Every Release",
    body: "We ensure every release meets the highest quality standards through rigorous manual and automated testing across functional, performance, security, and mobile dimensions.",
    bullets: [
      "Manual & Exploratory Testing",
      "Automated Test Suites (Selenium, Cypress, Playwright)",
      "Performance & Load Testing (JMeter, Gatling)",
      "Security & Penetration Testing",
      "API & Mobile Testing",
    ],
  },
  {
    id: "aiservices",
    label: "AI & Automation",
    icon: Bot,
    headline: "Intelligent Automation for the Modern Enterprise",
    body: "We design and deploy intelligent automation solutions—from ML models and NLP engines to RPA workflows—that help your business scale smarter and faster.",
    bullets: [
      "AI Strategy & Consulting",
      "Machine Learning Model Development",
      "NLP & Conversational AI (Chatbots, Voice Assistants)",
      "Robotic Process Automation (RPA)",
      "Predictive Analytics & Business Intelligence",
    ],
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Analyze",
    desc: "Deep-dive into your infrastructure, goals, and pain points to build a clear picture of needs.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Plan",
    desc: "Create a detailed roadmap with milestones, resource allocation, and risk mitigation strategies.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Build",
    desc: "Execute with precision using agile sprints, rigorous testing, and continuous integration.",
  },
  {
    icon: Lock,
    step: "04",
    title: "Secure",
    desc: "Harden systems with security reviews, compliance checks, and vulnerability assessments.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deploy",
    desc: "Launch with confidence using blue-green deployments, monitoring, and dedicated support.",
  },
];

const ABOUT_VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We build every relationship—clients, partners, vendors, and community—with unwavering transparency and trust.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    desc: "We treat every engagement as a learning opportunity, keeping our team and clients ahead of the technology curve.",
  },
  {
    icon: Star,
    title: "Commitment",
    desc: "We are dedicated to exceeding expectations, delivering results that keep our clients well ahead of the competition.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We constantly evolve our services to deliver the most complete, usable, and effective IT solutions in the world.",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "Collaboration is our way of working—partnering closely with clients, internal teams, and stakeholders every day.",
  },
];

const INDUSTRIES = [
  "Healthcare",
  "Insurance",
  "Environment",
  "Food & Catering",
  "Transportation",
  "Legal",
  "Manufacturing",
  "State & Local Government",
  "Finance",
  "Technology",
];

// ──────────────────────────────────────────────
// Components
// ──────────────────────────────────────────────

function Header({
  setPage,
}: {
  setPage: (
    p:
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
      | "aiservices",
  ) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2"
            onClick={() => {
              setPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/es-logo-icon-transparent.dim_200x200.png"
              alt="ES Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="font-bold text-lg text-navy leading-none block">
                Ekan Solutions
              </span>
              <span className="text-xs text-gray-500 leading-none">Inc.</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                className="text-sm font-semibold text-gray-700 hover:text-[#0A3D62] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1ABC9C] hover:after:w-full after:transition-all after:duration-300"
                onClick={() => {
                  if (link.label === "About") {
                    setPage("about");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (link.label === "Services") {
                    setPage("services");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (link.label === "Solutions") {
                    setPage("solutions");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setPage("home");
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <a
                href="tel:8322950408"
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#0A3D62] transition-colors"
              >
                <Phone className="w-3 h-3" /> (832) 295-0408
              </a>
              <a
                href="tel:4105968362"
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#0A3D62] transition-colors"
              >
                <Phone className="w-3 h-3" /> 410-596-8362
              </a>
            </div>
            <Button
              className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-semibold px-5 py-2 text-sm"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="nav.primary_button"
            >
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3 mt-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  className="text-sm font-semibold text-gray-700 hover:text-[#0A3D62] py-1 text-left"
                  onClick={() => {
                    setMenuOpen(false);
                    if (link.label === "About") {
                      setPage("about");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (link.label === "Services") {
                      setPage("services");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (link.label === "Solutions") {
                      setPage("solutions");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      setPage("home");
                      setTimeout(() => {
                        const el = document.querySelector(link.href);
                        el?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-1 mt-2">
                <a
                  href="tel:8322950408"
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <Phone className="w-4 h-4" /> (832) 295-0408
                </a>
                <a
                  href="tel:4105968362"
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <Phone className="w-4 h-4" /> 410-596-8362
                </a>
              </div>
              <Button
                className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-semibold mt-2"
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="nav.primary_button"
              >
                Get Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A3D62 0%, #0d4f80 50%, #0A3D62 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('/assets/generated/ekan-hero-bg.dim_1600x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1ABC9C] animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Trusted IT Partner Since 2009
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Empowering Business{" "}
              <span className="text-[#1ABC9C]">Through Technology</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Ekan Solutions delivers enterprise IT services—cybersecurity,
              cloud, development, and project management—that transform
              complexity into competitive advantage.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                size="lg"
                className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-semibold px-8"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.primary_button"
              >
                Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 font-semibold px-8"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.secondary_button"
              >
                Contact Us
              </Button>
            </div>
            {/* Trust points */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: BarChart3, value: "500+", label: "Projects Delivered" },
                { icon: Clock, value: "15+", label: "Years Experience" },
                { icon: Users, value: "24/7", label: "Expert Support" },
              ].map((trust) => (
                <div key={trust.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <trust.icon className="w-5 h-5 text-[#1ABC9C]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-none">
                      {trust.value}
                    </div>
                    <div className="text-white/60 text-xs">{trust.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — visual card */}
          <div
            className="hidden lg:block fade-in"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">
                  Core Services
                </h3>
                <div className="space-y-4">
                  {SERVICES.map((svc) => (
                    <div
                      key={svc.title}
                      className="flex items-center gap-4 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor:
                            svc.color === "#1ABC9C"
                              ? "rgba(26,188,156,0.25)"
                              : "rgba(255,255,255,0.15)",
                        }}
                      >
                        <svc.icon
                          className="w-5 h-5"
                          style={{
                            color: svc.color === "#1ABC9C" ? "#1ABC9C" : "#fff",
                          }}
                        />
                      </div>
                      <span className="text-white font-medium text-sm">
                        {svc.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/40 ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1ABC9C]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 80L1440 80L1440 20C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function IntroCards() {
  return (
    <section className="relative z-10 bg-white pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Layers,
              title: "Our Services",
              desc: "Seven specialized IT services—cybersecurity, cloud, development, QA, AI & automation—delivered by certified professionals.",
              color: "#0A3D62",
            },
            {
              icon: Lightbulb,
              title: "Why Choose Us",
              desc: "15+ years of enterprise experience, a results-driven approach, and a commitment to long-term client partnerships.",
              color: "#1ABC9C",
            },
            {
              icon: BarChart3,
              title: "Client Success",
              desc: "500+ projects delivered across healthcare, finance, government, and tech sectors with a 97% client satisfaction rate.",
              color: "#0A3D62",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="fade-in-up bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,61,98,0.12)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(10,61,98,0.18)] hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${card.color}18` }}
              >
                <card.icon className="w-6 h-6" style={{ color: card.color }} />
              </div>
              <h3 className="font-bold text-xl text-[#0A3D62] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white" data-ocid="about.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block text-[#1ABC9C] font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </span>
          <h2 className="text-4xl font-extrabold text-[#0A3D62] mb-4">
            About Ekan Solutions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A technology partner built on integrity, innovation, and 15+ years
            of enterprise expertise.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-14">
          {/* LEFT — Company Story */}
          <div className="fade-in-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1ABC9C] mb-4">
              Our Story
            </span>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2010, Ekan Solutions Inc. is a Maryland-based software
              consulting and development firm specializing in enterprise IT
              services. We blend strategic thinking with deep technical
              expertise to tackle the most complex business challenges.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team brings over 35 years of combined experience, supported by
              a dedicated 24/7 offshore development center. We serve clients
              across healthcare, insurance, government, finance, and
              more—delivering solutions that are scalable, secure, and built to
              last.
            </p>

            {/* Mission block */}
            <div
              className="rounded-2xl p-6 text-white mt-6"
              style={{ backgroundColor: "#0A3D62" }}
            >
              <span className="inline-block text-[#1ABC9C] text-xs font-bold uppercase tracking-widest mb-2">
                Our Mission
              </span>
              <p className="text-white/85 leading-relaxed text-sm">
                To empower organizations with cutting-edge technology solutions,
                expert services, and continuous education—enabling superior
                performance and lasting competitive advantage.
              </p>
            </div>
          </div>

          {/* RIGHT — Our Values */}
          <div className="fade-in-up" style={{ transitionDelay: "0.15s" }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1ABC9C] mb-4">
              Our Values
            </span>
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_VALUES.map((value, i) => (
                <div
                  key={value.title}
                  className={`border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 ${
                    i === 4
                      ? "col-span-2 sm:col-span-1 sm:col-start-1 md:col-span-2 lg:col-span-1 lg:col-start-1"
                      : ""
                  }`}
                  data-ocid={`about.item.${i + 1}`}
                >
                  <div className="w-9 h-9 rounded-full bg-[#1ABC9C]/15 flex items-center justify-center mb-3">
                    <value.icon className="w-4 h-4 text-[#1ABC9C]" />
                  </div>
                  <h4 className="font-bold text-[#0A3D62] text-sm mb-1.5">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="fade-in-up mb-10" style={{ transitionDelay: "0.2s" }}>
          <div className="text-center mb-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1ABC9C]">
              Industries We Serve
            </span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="border rounded-full px-4 py-1.5 text-sm font-medium cursor-default transition-all duration-200 hover:text-white"
                style={{
                  borderColor: "rgba(10,61,98,0.2)",
                  color: "#0A3D62",
                  backgroundColor: "rgba(10,61,98,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#0A3D62";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(10,61,98,0.05)";
                  (e.currentTarget as HTMLElement).style.color = "#0A3D62";
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Our Promise */}
        <div
          className="fade-in-up rounded-2xl p-8 text-center bg-gray-50"
          style={{ transitionDelay: "0.3s" }}
        >
          <h3 className="text-2xl font-extrabold text-[#0A3D62] mb-1">
            Our Promise to You
          </h3>
          <div
            className="w-12 h-1 rounded-full mx-auto mb-4"
            style={{ backgroundColor: "#1ABC9C" }}
          />
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            To provide clients worldwide with best-in-class solutions, services,
            and expertise. Every interaction is guided by care, respect, and a
            relentless focus on results.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block text-[#1ABC9C] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-4xl font-extrabold text-[#0A3D62] mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Comprehensive IT solutions engineered to protect, optimize, and
            accelerate your business.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className="fade-in-up group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-center cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
              data-ocid={`services.item.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${svc.color}18` }}
              >
                <svc.icon className="w-7 h-7" style={{ color: svc.color }} />
              </div>
              <h3 className="font-bold text-[#0A3D62] mb-2 text-base">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section
      id="solutions"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A3D62 0%, #0d5a8a 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in-up">
          <span className="inline-block text-[#1ABC9C] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Edge
          </span>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Why Choose Ekan Solutions?
          </h2>
          <p className="text-white/65 max-w-xl mx-auto">
            We combine technical depth with strategic thinking to deliver IT
            solutions that actually move the needle.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Smart Strategy",
              desc: "We align every technology decision to your business objectives—no over-engineering, no unnecessary complexity.",
            },
            {
              icon: Layers,
              title: "End-to-End Solutions",
              desc: "From architecture to deployment and ongoing support, we own the full lifecycle so nothing falls through the cracks.",
            },
            {
              icon: ThumbsUp,
              title: "100% Satisfaction",
              desc: "Our client retention rate speaks for itself—we don't close a project until you're fully satisfied with the results.",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="fade-in-up bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1ABC9C]/20 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-[#1ABC9C]" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">
                {card.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-up">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "97%", label: "Client Retention" },
            { value: "15+", label: "Years in Business" },
            { value: "50+", label: "Certified Experts" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-[#1ABC9C] mb-1">
                {stat.value}
              </div>
              <div className="text-white/65 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetails() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in-up">
          <span className="inline-block text-[#1ABC9C] font-semibold text-sm uppercase tracking-widest mb-3">
            Deep Dive
          </span>
          <h2 className="text-4xl font-extrabold text-[#0A3D62] mb-4">
            Service Details
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore what's included in each of our specialized practice areas.
          </p>
        </div>
        <div className="fade-in-up">
          <Tabs defaultValue="cybersecurity" className="w-full">
            <TabsList className="flex flex-wrap gap-2 h-auto bg-transparent mb-8 justify-center">
              {SERVICE_DETAILS.map((svc) => (
                <TabsTrigger
                  key={svc.id}
                  value={svc.id}
                  className="data-[state=active]:bg-[#0A3D62] data-[state=active]:text-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-semibold text-gray-600"
                  data-ocid="services.tab"
                >
                  <svc.icon className="w-4 h-4 mr-2" />
                  {svc.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {SERVICE_DETAILS.map((svc) => (
              <TabsContent key={svc.id} value={svc.id}>
                <div className="bg-white rounded-2xl p-8 shadow-card grid md:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#0A3D62]/10 flex items-center justify-center mb-5">
                      <svc.icon className="w-7 h-7 text-[#0A3D62]" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0A3D62] mb-4">
                      {svc.headline}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{svc.body}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A3D62] mb-4 text-sm uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#1ABC9C] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-6 bg-[#1ABC9C] hover:bg-[#17a589] text-white font-semibold"
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      data-ocid="services.primary_button"
                    >
                      Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block text-[#1ABC9C] font-semibold text-sm uppercase tracking-widest mb-3">
            How We Work
          </span>
          <h2 className="text-4xl font-extrabold text-[#0A3D62] mb-4">
            Our Proven Process
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A structured, transparent methodology that delivers consistent
            results—every time.
          </p>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0A3D62] via-[#1ABC9C] to-[#0A3D62] opacity-20" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="fade-in-up relative flex flex-col items-center text-center p-6"
                style={{ transitionDelay: `${i * 0.12}s` }}
                data-ocid={`process.item.${i + 1}`}
              >
                <div className="w-20 h-20 rounded-full bg-[#0A3D62] flex items-center justify-center mb-4 shadow-lg relative z-10">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-bold text-[#1ABC9C] mb-1 tracking-widest">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#0A3D62] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-20" style={{ background: "#0A3D62" }}>
      <div className="max-w-4xl mx-auto px-4 text-center fade-in-up">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          Partner with Ekan Solutions and let us turn your IT challenges into
          strategic advantages.
        </p>
        <Button
          size="lg"
          className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-bold px-10 text-base"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          data-ocid="cta.primary_button"
        >
          Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}

function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in-up">
          <span className="inline-block text-[#1ABC9C] font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl font-extrabold text-[#0A3D62] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to discuss your project? Reach out and one of our consultants
            will get back to you within 24 hours.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="fade-in-up space-y-8">
            <div>
              <h3 className="font-bold text-[#0A3D62] text-xl mb-5">
                Office Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A3D62]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0A3D62]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Maryland Office
                    </div>
                    <div className="text-gray-500 text-sm">
                      Maryland, United States
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A3D62]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0A3D62]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Phone Numbers
                    </div>
                    <a
                      href="tel:8322950408"
                      className="block text-gray-500 text-sm hover:text-[#1ABC9C] transition-colors"
                    >
                      (832) 295-0408
                    </a>
                    <a
                      href="tel:4105968362"
                      className="block text-gray-500 text-sm hover:text-[#1ABC9C] transition-colors"
                    >
                      410-596-8362
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A3D62]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0A3D62]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <a
                      href="mailto:info@ekansolutions.com"
                      className="text-gray-500 text-sm hover:text-[#1ABC9C] transition-colors"
                    >
                      info@ekansolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Why contact card */}
            <div className="bg-[#0A3D62] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">What Happens Next?</h4>
              <ul className="space-y-2.5">
                {[
                  "We review your inquiry within 4 business hours",
                  "A senior consultant contacts you for a discovery call",
                  "We prepare a tailored proposal at no charge",
                  "Project kickoff within days of agreement",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#1ABC9C] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div
            className="fade-in-up bg-white rounded-2xl p-8 shadow-card"
            style={{ transitionDelay: "0.2s" }}
          >
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-12"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-16 h-16 text-[#1ABC9C] mb-4" />
                <h3 className="font-bold text-[#0A3D62] text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.panel"
              >
                <h3 className="font-bold text-[#0A3D62] text-xl mb-6">
                  Send Us a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="contact-name"
                      required
                      placeholder="John Smith"
                      className="border-gray-200 focus-visible:ring-[#1ABC9C]"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Email *
                    </label>
                    <Input
                      id="contact-email"
                      required
                      type="email"
                      placeholder="john@company.com"
                      className="border-gray-200 focus-visible:ring-[#1ABC9C]"
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="border-gray-200 focus-visible:ring-[#1ABC9C]"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us about your project or challenge..."
                    className="border-gray-200 focus-visible:ring-[#1ABC9C] resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#1ABC9C] hover:bg-[#17a589] text-white font-bold py-3"
                  data-ocid="contact.submit_button"
                >
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/generated/es-logo-icon-transparent.dim_200x200.png"
                alt="ES Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-bold text-lg text-white leading-none block">
                  Ekan Solutions
                </span>
                <span className="text-xs text-white/50 leading-none">Inc.</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Enterprise IT services built on 15+ years of expertise. Securing,
              scaling, and accelerating your business.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(
                ({
                  icon: Icon,
                  href,
                  label,
                }: {
                  icon: React.ElementType;
                  href: string;
                  label: string;
                }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1ABC9C] flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-[#1ABC9C]">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((svc) => (
                <li key={svc.title}>
                  <a
                    href="#services"
                    className="text-white/60 text-sm hover:text-[#1ABC9C] transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <ChevronRight className="w-3 h-3" /> {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-[#1ABC9C]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#1ABC9C] transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <ChevronRight className="w-3 h-3" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-[#1ABC9C]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1ABC9C]" />
                Maryland, United States
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#1ABC9C]" />
                <div>
                  <a
                    href="tel:8322950408"
                    className="text-white/60 hover:text-[#1ABC9C] text-sm block transition-colors"
                  >
                    (832) 295-0408
                  </a>
                  <a
                    href="tel:4105968362"
                    className="text-white/60 hover:text-[#1ABC9C] text-sm block transition-colors"
                  >
                    410-596-8362
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#1ABC9C]" />
                <a
                  href="mailto:info@ekansolutions.com"
                  className="hover:text-[#1ABC9C] transition-colors"
                >
                  info@ekansolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Ekan Solutions Inc. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1ABC9C] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────
// App
// ──────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<
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
    | "aiservices"
  >("home");
  useScrollAnimation();

  return (
    <div className="min-h-screen font-sans">
      <Header setPage={setPage} />
      <main>
        {page === "services" ? (
          <ServicesPage setPage={setPage} />
        ) : page === "about" ? (
          <AboutPage setPage={setPage} />
        ) : page === "solutions" ? (
          <SolutionsPage setPage={setPage} />
        ) : page === "cybersecurity" ? (
          <CybersecurityPage setPage={setPage} />
        ) : page === "projectmanagement" ? (
          <ProjectManagementPage setPage={setPage} />
        ) : page === "fullstack" ? (
          <FullStackPage setPage={setPage} />
        ) : page === "awscloud" ? (
          <AWSCloudPage setPage={setPage} />
        ) : page === "javadevelopment" ? (
          <JavaDevelopmentPage setPage={setPage} />
        ) : page === "qatesting" ? (
          <QATestingPage setPage={setPage} />
        ) : page === "aiservices" ? (
          <AIServicesPage setPage={setPage} />
        ) : (
          <>
            <HeroSection />
            <IntroCards />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUs />
            <ServiceDetails />
            <ProcessSection />
            <CTABanner />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
