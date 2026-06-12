import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Bolt, Check, Shield, Star, Tool, Users, Zap } from "@/components/site/Icons";
import { Breadcrumb, CTASection, SectionHeader, StatsBar } from "@/components/site/Shared";
import { FadeUp, FadeUpSm, FadeUpText } from "@/components/site/Animations";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Josetech Power Consultant" },
      {
        name: "description",
        content:
          "Complete electrical solutions: installation, maintenance, power appliances, emergency support, consultation and solar.",
      },
    ],
  }),
  component: Services,
});

const coreServices = [
  {
    icon: Bolt,
    title: "Electrical Installation",
    desc: "Professional installation of complex electrical systems for offices, commercial buildings, and industrial plants.",
    features: [
      "New building wiring & fit-out",
      "Distribution board installation",
      "Lighting & socket installation",
      "Earthing & bonding systems",
      "Cable trunking & conduit runs",
    ],
  },
  {
    icon: Tool,
    title: "Electrical Maintenance",
    desc: "Preventive and corrective maintenance services to keep your electrical systems performing at peak efficiency.",
    features: [
      "Scheduled preventive maintenance",
      "Fault diagnosis & rectification",
      "Panel board & breaker servicing",
      "Annual safety compliance checks",
    ],
  },
  {
    icon: Zap,
    title: "Power Appliance Supply & Installation",
    desc: "Expert supply, installation, and commissioning of power appliances and electrical equipment for your facility.",
    features: [
      "Generator supply & installation",
      "ATS & ACB systems",
      "AVR (Auto Voltage Regulator) setup",
      "Industrial motors & controls",
      "Stabilisers & surge protectors",
    ],
  },
  {
    icon: Shield,
    title: "Emergency Electrical Support",
    desc: "Rapid response to electrical faults, blackouts, and urgent technical issues — available around the clock to minimise your downtime.",
    features: [
      "24/7 emergency call-out response",
      "Power outage & tripping faults",
      "Short-circuit & overcurrent issues",
      "Temporary power solutions",
    ],
  },
  {
    icon: Users,
    title: "Technical Consultation",
    desc: "Expert electrical engineering advice and tailored solutions — helping you plan, optimise, and future-proof your power infrastructure.",
    features: [
      "Electrical load analysis",
      "Energy efficiency audits",
      "System & specification reviews",
      "Regulatory compliance guidance",
    ],
  },
];

/** Animated process line — draws the dashed connector after steps appear */
function ProcessSection() {
  const lineRef = useRef<SVGLineElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStepsVisible(true);
      setLineVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsVisible(true);
          setTimeout(() => setLineVisible(true), 5 * 150 + 300);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const line = lineRef.current;
    if (!line || !lineVisible) return;
    const length = line.getTotalLength ? line.getTotalLength() : 800;
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;
    line.style.transition = "stroke-dashoffset 1s ease-out";
    requestAnimationFrame(() => {
      line.style.strokeDashoffset = "0";
    });
  }, [lineVisible]);

  const steps = [
    [
      "Initial Enquiry",
      "You contact us by phone, email, or our quote form with your project details and requirements.",
    ],
    [
      "Site Assessment",
      "Our engineers visit your site to assess the scope, identify challenges, and take measurements.",
    ],
    [
      "Proposal & Quote",
      "We provide a detailed written proposal with clear pricing, timeline, and materials breakdown.",
    ],
    [
      "Execution",
      "Our certified technicians deliver the work safely, on schedule, and to the highest quality standards.",
    ],
    [
      "Sign-off & Support",
      "We complete sign-off documentation, and provide ongoing support whenever you need it.",
    ],
  ];

  return (
    <div ref={stepsRef} className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
      {/* Animated dashed connector line */}
      <svg
        className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px overflow-visible"
        style={{ width: "80%", pointerEvents: "none" }}
      >
        <line
          ref={lineRef}
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#e5193a"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.4"
        />
      </svg>
      {steps.map(([t, d], i) => (
        <div
          key={i}
          className={`relative text-center anim-fade-up ${stepsVisible ? "anim-visible" : ""}`}
          style={{
            transitionDelay: `${i * 150}ms`,
          }}
        >
          <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e5193a] text-white font-extrabold text-sm relative z-10">
            0{i + 1}
          </span>
          <div className="font-extrabold text-[14px] mt-4 mb-2">{t}</div>
          <p className="text-[12px] text-[#555] leading-relaxed">{d}</p>
        </div>
      ))}
    </div>
  );
}

function Services() {
  return (
    <div>
      {/* Header with full background image */}
      <section className="bg-[#111] text-white relative overflow-hidden min-h-[420px]">
        <img
          src="/images/services-header.png"
          alt="Nigerian electrician installing industrial electrical distribution board"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/75 to-[#111]/30" />
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-24 grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <Breadcrumb current="Services" />
            <div className="eyebrow mb-3">Our Services</div>
            <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1]">
              Complete Electrical Solutions Tailored{" "}
              <span className="text-[#e5193a]">to Your Needs.</span>
            </h1>
            <p className="body-copy !text-[#bbb] mt-5 max-w-lg">
              From first installation to ongoing maintenance and emergency support, we deliver
              end-to-end electrical services for commercial and industrial clients across Nigeria —
              safely and on time.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Installation", "Maintenance", "Appliances", "Emergency", "Consultation"].map(
                (p) => (
                  <span
                    key={p}
                    className="px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[12px] font-bold"
                  >
                    {p}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      <StatsBar
        items={[
          { value: "10+", label: "Years of Experience" },
          { value: "250+", label: "Projects Completed" },
          { value: "98%", label: "Client Satisfaction" },
          { value: "24/7", label: "Support Available" },
        ]}
      />

      {/* Core services grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Core Services"
            sub="Professional electrical services designed for the demands of modern Nigerian businesses — safe, efficient, and fully certified."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((s, i) => (
              <FadeUp key={s.title} delay={i * 100}>
                <div className="card h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#fce7ec] text-[#e5193a] mb-4">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-extrabold text-[17px] mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#555] leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px]">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e5193a]">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="text-[#e5193a] font-bold text-[13px] inline-flex items-center gap-1"
                  >
                    Get a Quote <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Solar feature card */}
          <FadeUp delay={0}>
            <div className="mt-8 bg-[#111] text-white rounded-md p-8 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#e5193a] mb-4">
                  <Star className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-[24px] font-black mb-3">
                  Solar &amp; Alternative Energy Solutions
                </h3>
                <p className="text-[#bbb] text-[14px] leading-relaxed mb-5">
                  Reduce your dependence on the national grid and generate fuel costs. We design,
                  supply, and install hybrid solar energy systems tailored for Nigerian commercial
                  environments.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    "Solar PV system design & installation",
                    "Hybrid inverter & battery storage setup",
                    "Grid-tie & off-grid configurations",
                    "Performance monitoring & support",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[13px]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e5193a]">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary">
                  Get a Solar Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-md h-[260px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                  alt="Commercial rooftop solar panel array installation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Deliver Every Project"
            sub="A clear, structured process that keeps you informed and in control from first contact to project sign-off."
          />
          <ProcessSection />
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader
            eyebrow="Industries Served"
            title="We Work Across Key Sectors"
            sub="Our expertise spans multiple industries — each with its own unique electrical demands and safety requirements."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Corporate Offices",
                desc: "Full office electrical fit-outs, lighting & power systems",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
                alt: "Modern corporate office interior with LED lighting",
              },
              {
                title: "Industrial Facilities",
                desc: "Heavy-duty wiring, motor controls & panel boards",
                img: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80",
                alt: "Large industrial factory floor with overhead electrical installations",
              },
              {
                title: "Hospitality & Hotels",
                desc: "Lighting design, backup power & guest comfort systems",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
                alt: "Luxury hotel lobby with modern LED lighting",
              },
              {
                title: "Healthcare Facilities",
                desc: "Critical power systems, UPS & emergency lighting",
                img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
                alt: "Modern hospital corridor with clean overhead lighting",
              },
              {
                title: "Retail & Malls",
                desc: "Shop fit wiring, signage power & redundant backup",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
                alt: "Bright modern retail store with commercial lighting",
              },
              {
                title: "Educational Institutions",
                desc: "Campus wiring, lab power & ICT infrastructure",
                img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
                alt: "University campus building with modern electrical infrastructure",
              },
            ].map((sector, i) => (
              <FadeUp key={sector.title} delay={i * 80}>
                <div className="rounded-md overflow-hidden relative h-[220px] flex flex-col justify-end">
                  <img
                    src={sector.img}
                    alt={sector.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-[#111]/40 to-transparent" />
                  <div className="relative z-10 p-5">
                    <span className="inline-block mb-2 px-3 py-1 rounded bg-[#e5193a] text-white text-[10px] font-bold uppercase">
                      Sector
                    </span>
                    <div className="text-white font-extrabold text-[18px]">{sector.title}</div>
                    <div className="text-[#ddd] text-[12px] mt-1">{sector.desc}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            sub="Real feedback from businesses we have served across Nigeria."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                i: "AO",
                n: "Adaeze Okafor",
                r: "GM Executive, Finbridge Ltd · Lagos",
                q: "Josetech handled the complete electrical installation for our new office in Victoria Island. Their team was professional, punctual, and the quality of work was outstanding — we'd hire them again without hesitation.",
              },
              {
                i: "BM",
                n: "Babatunde Musa",
                r: "Facilities Manager, Grandview Hotel · Ikeja",
                q: "We had a major generator fault during a critical period. Josetech responded within the hour and had us back online the same day. That level of emergency response is rare — they have earned our long-term maintenance contract.",
              },
              {
                i: "CN",
                n: "Chinwe Eze",
                r: "Director, Greenpath Agro · Port Harcourt",
                q: "Their technical consultation on our solar hybrid project was invaluable. They did not oversell — they designed exactly what we needed. The system has been running flawlessly for over eight months.",
              },
            ].map((t, i) => (
              <FadeUp key={t.n} delay={i * 120}>
                <div className="card h-full">
                  <div className="flex gap-1 text-[#e5193a] mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="text-[14px] text-[#555] italic leading-relaxed mb-5">"{t.q}"</p>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5193a] text-white font-extrabold text-sm">
                      {t.i}
                    </span>
                    <div>
                      <div className="font-extrabold text-[13px]">{t.n}</div>
                      <div className="text-[12px] text-[#777]">{t.r}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Reliable Electrical Support"
        accent="for Your Business?"
        sub="Talk to our team today. We will assess your needs, propose the right solution, and deliver it safely and on time."
        secondary="Contact Us"
      />
    </div>
  );
}

function DotGrid() {
  return (
    <svg className="absolute top-0 right-0 w-[300px] h-[200px] opacity-20" viewBox="0 0 300 200">
      {Array.from({ length: 10 }).map((_, r) =>
        Array.from({ length: 15 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="1.5" fill="#e5193a" />
        )),
      )}
    </svg>
  );
}
