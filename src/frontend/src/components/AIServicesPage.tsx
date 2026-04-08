import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Brain,
  ChevronRight,
  Database,
  Home,
  MessageSquare,
  Phone,
  Plug,
  Repeat,
  TrendingUp,
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
    icon: Brain,
    title: "AI Consulting & Strategy",
    desc: "Roadmap and framework design to integrate AI across your enterprise for maximum ROI, tailored to your business objectives.",
  },
  {
    icon: Database,
    title: "Machine Learning Development",
    desc: "Custom ML models trained on your data for predictions, classification, and intelligent automation of complex business processes.",
  },
  {
    icon: MessageSquare,
    title: "NLP & Conversational AI",
    desc: "Chatbots, virtual assistants, and text analytics powered by large language models to enhance customer and employee experiences.",
  },
  {
    icon: Repeat,
    title: "Process Automation (RPA)",
    desc: "Eliminate repetitive tasks with intelligent robotic process automation workflows that integrate seamlessly into your existing systems.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    desc: "Data-driven forecasting models that surface actionable insights from complex datasets, enabling smarter, faster business decisions.",
  },
  {
    icon: Plug,
    title: "AI Integration & APIs",
    desc: "Seamlessly connect AI services (OpenAI, Azure AI, AWS AI) into your existing systems for an accelerated innovation pipeline.",
  },
];

const TECH = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenAI",
  "LangChain",
  "Hugging Face",
  "Azure AI",
  "AWS SageMaker",
  "Apache Spark",
  "Power BI",
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Assessment",
    desc: "Understand your business goals, data landscape, and identify high-impact AI opportunities across your organization.",
  },
  {
    step: "02",
    title: "AI Strategy & Roadmap",
    desc: "Define use cases, data requirements, and success metrics to chart a clear path toward AI-driven transformation.",
  },
  {
    step: "03",
    title: "Model Development",
    desc: "Build, train, and rigorously validate custom AI models designed for your specific data and business requirements.",
  },
  {
    step: "04",
    title: "Integration & Testing",
    desc: "Deploy models into your systems with comprehensive testing, ensuring reliability, accuracy, and seamless user adoption.",
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    desc: "Ongoing performance tracking, model retraining, and continuous improvement to keep your AI solutions operating at peak efficiency.",
  },
];

const WHY = [
  {
    title: "Proven AI Expertise",
    desc: "Our data scientists and AI engineers bring deep expertise in ML, NLP, and automation—delivering solutions that produce measurable ROI.",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Every AI solution we build is designed with data privacy, compliance, and enterprise security best practices at the core.",
  },
  {
    title: "End-to-End Delivery",
    desc: "From strategy through deployment and monitoring, we own the full AI lifecycle so your team can focus on business outcomes.",
  },
];

const STATS = [
  { value: "50+", label: "AI Projects Delivered" },
  { value: "10x", label: "Avg. Efficiency Gain" },
  { value: "Fortune 500", label: "Enterprise Ready" },
  { value: "24/7", label: "Model Monitoring" },
];

export default function AIServicesPage({ setPage }: Props) {
  useScrollAnimation();

  return (
    <div className="min-h-screen font-sans">
      {/* Hero */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A3D62 0%, #0d4f7c 60%, #0a5c4a 100%)",
        }}
      >
        {/* Neural network SVG pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="neural-grid"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="40" cy="40" r="2" fill="#1ABC9C" />
                <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                <circle cx="80" cy="0" r="1.5" fill="#ffffff" />
                <circle cx="0" cy="80" r="1.5" fill="#ffffff" />
                <circle cx="80" cy="80" r="1.5" fill="#ffffff" />
                <line
                  x1="0"
                  y1="0"
                  x2="40"
                  y2="40"
                  stroke="#1ABC9C"
                  strokeWidth="0.5"
                />
                <line
                  x1="80"
                  y1="0"
                  x2="40"
                  y2="40"
                  stroke="#1ABC9C"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="40"
                  y2="40"
                  stroke="#1ABC9C"
                  strokeWidth="0.5"
                />
                <line
                  x1="80"
                  y1="80"
                  x2="40"
                  y2="40"
                  stroke="#1ABC9C"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 55%, #1ABC9C 0%, transparent 45%), radial-gradient(circle at 85% 20%, #ffffff 0%, transparent 35%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <button
              type="button"
              onClick={() => setPage("home")}
              className="hover:text-white transition-colors flex items-center gap-1"
              data-ocid="ai.home.link"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              type="button"
              onClick={() => setPage("services")}
              className="hover:text-white transition-colors"
              data-ocid="ai.services.link"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">AI &amp; Automation</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <Bot className="w-4 h-4 text-[#1ABC9C]" />
              <span className="text-white/90 text-sm font-medium">
                AI &amp; Automation Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Intelligent Automation <br />
              <span style={{ color: "#1ABC9C" }}>
                for the Modern Enterprise
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Harness the power of AI, machine learning, and intelligent
              automation to accelerate your business outcomes and stay ahead of
              the competition.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                onClick={() => setPage("home")}
                className="px-8 py-3 text-base font-semibold rounded-xl"
                style={{ backgroundColor: "#1ABC9C", color: "white" }}
                data-ocid="ai.hero.primary_button"
              >
                Get AI Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setPage("services")}
                className="px-8 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
                data-ocid="ai.hero.secondary_button"
              >
                View AI Solutions
              </Button>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                "Fortune 500 Ready",
                "Enterprise-Grade AI",
                "Secure & Scalable",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <Bot className="w-4 h-4 text-[#1ABC9C]" />
                  <span>{badge}</span>
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
                data-ocid={`ai.stats.item.${i + 1}`}
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
              Full-Spectrum AI Capabilities
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From strategy and consulting to custom model development and
              deployment—we cover every dimension of enterprise AI.
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
                  data-ocid={`ai.capability.item.${i + 1}`}
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
              Industry-Leading AI Tools &amp; Frameworks
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
              How We Deliver AI Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="fade-in-up text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`ai.process.item.${i + 1}`}
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
              Why Choose Ekan for AI &amp; Automation
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
                data-ocid={`ai.why.item.${i + 1}`}
              >
                <Brain className="w-8 h-8 mb-4" style={{ color: "#1ABC9C" }} />
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
            Ready to Transform with AI?
          </h2>
          <p className="text-white/70 text-xl mb-10">
            Schedule a free AI consultation with our experts today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setPage("home")}
              className="px-10 py-3 text-base font-semibold rounded-xl"
              style={{ backgroundColor: "#1ABC9C", color: "white" }}
              data-ocid="ai.cta.primary_button"
            >
              Schedule a Free AI Consultation{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <a href="tel:8322950408">
              <Button
                variant="outline"
                className="px-10 py-3 text-base font-semibold rounded-xl border-white/30 text-white hover:bg-white/10"
                data-ocid="ai.cta.secondary_button"
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
