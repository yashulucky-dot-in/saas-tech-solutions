import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Phone,
  Quote,
  Shield,
  Users,
} from "lucide-react";
import { useEffect } from "react";

interface AboutPageProps {
  setPage: (page: "home" | "about" | "services") => void;
}

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We build every client relationship on transparency, honesty, and trust. No shortcuts, ever.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    desc: "We treat every engagement as a learning opportunity — staying sharp so our clients stay ahead.",
  },
  {
    icon: CheckCircle2,
    title: "Commitment",
    desc: "We are dedicated to exceeding expectations on every project, every time.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We continually evolve our methods and technology stack to deliver the most effective solutions.",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "Collaboration — with our clients and within our team — is at the heart of how we work.",
  },
];

const INDUSTRIES = [
  "Healthcare",
  "Insurance",
  "Government",
  "Finance",
  "Manufacturing",
  "Transportation",
  "Legal",
  "Education",
];

const STATS = [
  { number: "500+", label: "Projects Delivered" },
  { number: "15+", label: "Years in Business" },
  { number: "35+", label: "Years Combined Expertise" },
  { number: "24/7", label: "Dedicated Support" },
];

function useAboutScrollAnimation() {
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
    const elements = document.querySelectorAll(".fade-in-up, .fade-in");
    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

export default function AboutPage({ setPage }: AboutPageProps) {
  useAboutScrollAnimation();

  const goHomeAndScroll = (id: string) => {
    setPage("home");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* 1. Hero */}
      <section
        className="relative pt-28 pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A3D62 0%, #0d5a8a 60%, #073350 100%)",
        }}
        data-ocid="about.section"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full opacity-5"
          style={{
            background: "linear-gradient(45deg, transparent 40%, #1ABC9C 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-white/60 text-sm mb-10"
            aria-label="Breadcrumb"
          >
            <button
              type="button"
              className="hover:text-white transition-colors"
              onClick={() => setPage("home")}
              data-ocid="about.link"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1ABC9C] font-medium">About Us</span>
          </nav>
          <div className="max-w-3xl fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-4">
              We Are Ekan Solutions
            </h1>
            <p className="text-xl font-semibold text-[#1ABC9C] mb-6">
              Maryland's Trusted IT Partner Since 2010
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl">
              We deliver enterprise-grade cybersecurity, cloud, development, and
              project management solutions — built on integrity, powered by
              innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-bold px-8 py-3 text-base rounded-xl"
                onClick={() => goHomeAndScroll("services")}
                data-ocid="about.primary_button"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A3D62] font-bold px-8 py-3 text-base rounded-xl bg-transparent"
                onClick={() => goHomeAndScroll("contact")}
                data-ocid="about.secondary_button"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <img
                src="/assets/generated/about-team.dim_1200x700.jpg"
                alt="Ekan Solutions team collaborating in a modern office"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
            </div>
            <div className="fade-in-up" style={{ transitionDelay: "0.15s" }}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1ABC9C] mb-3">
                Our Story
              </span>
              <h2 className="text-4xl font-extrabold text-[#0A3D62] leading-tight mb-6">
                From Vision to Enterprise Reality
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Founded in 2010, Ekan Solutions Inc. is a Maryland-based
                  software consulting and development firm. We blend strategic
                  thinking with deep technical expertise to solve the most
                  complex enterprise IT challenges.
                </p>
                <p>
                  Our team carries over 35 years of combined experience, backed
                  by a dedicated 24/7 offshore development center. We have
                  proudly served clients across healthcare, insurance,
                  government, finance, manufacturing, and transportation.
                </p>
                <p>
                  What sets us apart is our people — experts who bring
                  curiosity, commitment, and integrity to every engagement,
                  ensuring our clients stay ahead in a rapidly evolving
                  technology landscape.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#0A3D62]/[0.08] rounded-xl px-5 py-3">
                  <div className="w-2 h-2 rounded-full bg-[#1ABC9C]" />
                  <span className="text-sm font-bold text-[#0A3D62]">
                    Founded 2010
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#0A3D62]/[0.08] rounded-xl px-5 py-3">
                  <div className="w-2 h-2 rounded-full bg-[#1ABC9C]" />
                  <span className="text-sm font-bold text-[#0A3D62]">
                    HQ Maryland, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="py-16" style={{ background: "#071e31" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="fade-in-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`about.item.${i + 1}`}
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-[#1ABC9C] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-24" style={{ background: "#f4f6f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1ABC9C] mb-3">
              Our Direction
            </span>
            <h2 className="text-4xl font-extrabold text-[#0A3D62]">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up"
              data-ocid="about.panel"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1ABC9C]/15 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#1ABC9C]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0A3D62] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with cutting-edge technology solutions,
                expert services, and continuous education — enabling superior
                performance and lasting competitive advantage.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up"
              style={{ transitionDelay: "0.1s" }}
              data-ocid="about.card"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1ABC9C]/15 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-[#1ABC9C]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0A3D62] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted technology partner for enterprise clients
                — known for integrity, innovation, and delivering measurable
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1ABC9C] mb-3">
              What Drives Us
            </span>
            <h2 className="text-4xl font-extrabold text-[#0A3D62]">
              The Values We Live By
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, i) => (
              <div
                key={val.title}
                className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
                data-ocid={`about.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#1ABC9C]/15 flex items-center justify-center mb-5">
                  <val.icon className="w-6 h-6 text-[#1ABC9C]" />
                </div>
                <h4 className="text-lg font-extrabold text-[#0A3D62] mb-3">
                  {val.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-24" style={{ background: "#0A3D62" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1ABC9C] mb-3">
              Our Reach
            </span>
            <h2 className="text-4xl font-extrabold text-white">
              Industries We Serve
            </h2>
          </div>
          <div
            className="flex flex-wrap justify-center gap-4 fade-in-up"
            style={{ transitionDelay: "0.1s" }}
          >
            {INDUSTRIES.map((industry, i) => (
              <span
                key={industry}
                className="px-6 py-3 rounded-full border border-[#1ABC9C]/60 text-[#1ABC9C] text-sm font-semibold bg-[#1ABC9C]/10 hover:bg-[#1ABC9C] hover:text-white transition-all duration-300 cursor-default"
                data-ocid={`about.item.${i + 1}`}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Promise */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <Quote className="w-12 h-12 text-[#1ABC9C] mx-auto mb-8" />
          <blockquote className="text-2xl sm:text-3xl font-bold text-[#0A3D62] leading-snug mb-6">
            "To provide every client around the world with best-in-class
            solutions, dedicated service, and genuine care. We show up with
            respect, expertise, and a relentless commitment to your success."
          </blockquote>
          <p className="text-gray-400 font-medium">
            — Ekan Solutions Inc., Founded 2010
          </p>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #0A3D62 0%, #052e4a 100%)",
        }}
        data-ocid="about.panel"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Let's discuss how Ekan Solutions can help you achieve your
            technology goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <Button
              className="bg-[#1ABC9C] hover:bg-[#17a589] text-white font-bold px-10 py-4 text-base rounded-xl"
              onClick={() => goHomeAndScroll("contact")}
              data-ocid="about.primary_button"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
            <a
              href="tel:8322950408"
              className="flex items-center gap-2 hover:text-[#1ABC9C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (832) 295-0408
            </a>
            <a
              href="tel:4105968362"
              className="flex items-center gap-2 hover:text-[#1ABC9C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              410-596-8362
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
