import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Eye,
  Home,
  Lock,
  Phone,
  Shield,
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
    icon: Shield,
    title: "Threat Assessment & Penetration Testing",
    desc: "Identify vulnerabilities before attackers do. Our certified ethical hackers simulate real-world attacks to expose gaps in your defenses.",
  },
  {
    icon: Lock,
    title: "Security Architecture Design",
    desc: "Build security into the foundation of your systems with zero-trust architecture, network segmentation, and defense-in-depth strategies.",
  },
  {
    icon: AlertTriangle,
    title: "Compliance & Risk Management",
    desc: "Navigate HIPAA, SOC 2, PCI-DSS, and NIST frameworks with confidence. We simplify compliance so you can focus on your business.",
  },
  {
    icon: Eye,
    title: "Incident Response & Recovery",
    desc: "When breaches occur, every minute counts. Our IR team contains threats, preserves evidence, and restores operations rapidly.",
  },
  {
    icon: Lock,
    title: "Identity & Access Management",
    desc: "Implement MFA, SSO, PAM, and least-privilege policies to ensure only the right people access the right resources.",
  },
  {
    icon: Eye,
    title: "Security Monitoring & SIEM",
    desc: "24/7 SOC operations powered by AI-driven SIEM platforms. Detect, correlate, and respond to threats in real time.",
  },
];

const TECH = [
  "Splunk",
  "CrowdStrike",
  "Palo Alto",
  "AWS Security Hub",
  "Azure Sentinel",
  "Nessus",
  "Metasploit",
  "Qualys",
  "Tenable",
];

const PROCESS = [
  {
    step: "01",
    title: "Assess",
    desc: "Comprehensive security audit of your infrastructure, applications, and processes to establish baseline risk posture.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Develop a tailored security architecture and remediation roadmap aligned to your business objectives and risk tolerance.",
  },
  {
    step: "03",
    title: "Implement",
    desc: "Deploy controls, tools, and processes with minimal disruption using phased rollout and change management best practices.",
  },
  {
    step: "04",
    title: "Monitor",
    desc: "Continuous 24/7 threat monitoring, anomaly detection, and vulnerability scanning to maintain your security posture.",
  },
  {
    step: "05",
    title: "Respond",
    desc: "Rapid incident response playbooks activated on alert—contain, investigate, remediate, and document every event.",
  },
];

const WHY = [
  {
    title: "Certified Expertise",
    desc: "Our team holds CISSP, CEH, OSCP, and AWS Security certifications—battle-tested professionals who understand the threat landscape.",
  },
  {
    title: "Proactive Defense",
    desc: "We don't wait for attacks to happen. Continuous threat intelligence and red team exercises keep your defenses one step ahead.",
  },
  {
    title: "Compliance-Ready",
    desc: "From healthcare to finance, we understand industry regulations and deliver audit-ready documentation and controls.",
  },
];

export default function CybersecurityPage({ setPage }: Props) {
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
              data-ocid="cyber.home.link"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              type="button"
              onClick={() => setPage("services")}
              className="hover:text-white transition-colors"
              data-ocid="cyber.services.link"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Cybersecurity</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#1ABC9C]" />
              <span className="text-white/90 text-sm font-medium">
                Cybersecurity Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Protect What <br />
              <span style={{ color: "#1ABC9C" }}>Matters Most</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Enterprise-grade cybersecurity solutions that shield your
              organization from evolving threats—while keeping you compliant and
              your operations running.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setPage("home")}
                className="px-8 py-3 text-base font-semibold rounded-xl"
                style={{ backgroundColor: "#1ABC9C", color: "white" }}
                data-ocid="cyber.hero.primary_button"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setPage("home")}
                className="px-8 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
                data-ocid="cyber.hero.secondary_button"
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
              Security Is Not Optional
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Cyber threats cost organizations billions annually. Our proactive
              approach minimizes risk, ensures continuity, and builds lasting
              trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "500+ Security Audits",
                desc: "Across healthcare, finance, and government sectors with zero repeat incidents.",
              },
              {
                icon: Eye,
                title: "24/7 SOC Coverage",
                desc: "Round-the-clock monitoring with sub-15-minute mean time to detect.",
              },
              {
                icon: Lock,
                title: "100% Compliance Rate",
                desc: "Every client we've guided achieved and maintained their target compliance framework.",
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
              Full-Spectrum Security Capabilities
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From proactive threat hunting to regulatory compliance—we cover
              every dimension of enterprise security.
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
                  data-ocid={`cyber.capability.item.${i + 1}`}
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
              Industry-Leading Security Tools
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
              How We Secure Your Organization
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="fade-in-up text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`cyber.process.item.${i + 1}`}
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
              Why Choose Ekan for Cybersecurity
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
                data-ocid={`cyber.why.item.${i + 1}`}
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
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-white/70 text-xl mb-10">
            Talk to our security experts today. Free initial consultation—no
            commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setPage("home")}
              className="px-10 py-3 text-base font-semibold rounded-xl"
              style={{ backgroundColor: "#1ABC9C", color: "white" }}
              data-ocid="cyber.cta.primary_button"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage("services")}
              className="px-10 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
              data-ocid="cyber.cta.secondary_button"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
