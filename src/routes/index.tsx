import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Bolt, Check, Shield, Tool, Users, Zap } from "@/components/site/Icons";
import { CTASection } from "@/components/site/Shared";
import { FadeUp, FadeUpSm, SlideLeft, SlideRight, FadeUpText } from "@/components/site/Animations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josetech Power Consultant — Electrical Solutions for Nigerian Businesses" },
      {
        name: "description",
        content:
          "Safe, reliable and efficient electrical installation, maintenance and power appliance solutions across Nigeria.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Bolt,
    title: "Electrical Installation",
    desc: "Professional installation of electrical systems for offices, commercial and industrial facilities.",
  },
  {
    icon: Tool,
    title: "Electrical Maintenance",
    desc: "Preventive and corrective maintenance to ensure optimal performance and reliability.",
  },
  {
    icon: Zap,
    title: "Power Appliance Installation",
    desc: "Expert installation and mounting of power appliances and electrical equipment.",
  },
  {
    icon: Shield,
    title: "Emergency Support",
    desc: "Rapid response to electrical faults and urgent technical issues.",
  },
  {
    icon: Users,
    title: "Technical Consultation",
    desc: "Professional advice and solutions tailored to your electrical system requirements.",
  },
];

const badges = [
  { icon: Shield, label: "Safety First" },
  { icon: Zap, label: "Fast Response" },
  { icon: Check, label: "Quality Service" },
  { icon: Users, label: "Expert Team" },
];

const SLIDES = [
  {
    src: "/images/hero-slide1.png",
    alt: "Nigerian electrician working on industrial distribution panel",
  },
  {
    src: "/images/hero-slide2.png",
    alt: "Modern commercial office interior with LED electrical grid",
  },
  {
    src: "/images/hero-slide3.png",
    alt: "Solar panel installation on commercial rooftop in Lagos",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => setCurrent((idx + SLIDES.length) % SLIDES.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, current]);

  return (
    <section
      className="bg-[#111] text-white relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide images with crossfade */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`hero-slider-img${i === current ? " active" : ""}`}
            fetchPriority={i === 0 ? "high" : undefined}
          />
        ))}
        {/* Dark gradient overlay: heavier left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/70 to-[#111]/30" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1280px] px-6 py-16 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="relative z-10">
          <div className="eyebrow mb-4">Electrical Installation &amp; Maintenance Experts</div>
          <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1]">
            Powering Your Business with Safe, Reliable &amp; Efficient Electrical{" "}
            <span className="text-[#e5193a]">Solutions.</span>
          </h1>
          <p className="body-copy !text-[#bbb] mt-5 max-w-lg">
            We deliver professional electrical installation, maintenance, and power appliance
            solutions that keep your business running safely and without interruption.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to="/services" className="btn-primary">
              Request a Service <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Trusted partner card (bottom-right of visual area) */}
        <div className="relative hidden lg:block">
          <div className="h-[440px]" />
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:w-[320px] bg-[#1a1a1a]/95 backdrop-blur border border-white/10 p-5 rounded-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-white font-extrabold">
                  Your Trusted Partner
                  <br />
                  in Electrical Excellence
                </div>
                <p className="text-[#bbb] text-[13px] mt-2 leading-relaxed">
                  We provide end-to-end electrical services tailored to your business needs with
                  professionalism and precision.
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5193a]">
                <ArrowRight className="h-4 w-4 text-white -rotate-45" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted partner card — mobile (below content) */}
      <div className="lg:hidden mx-6 mb-4 bg-[#1a1a1a]/95 backdrop-blur border border-white/10 p-5 rounded-md relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-white font-extrabold">
              Your Trusted Partner
              <br />
              in Electrical Excellence
            </div>
            <p className="text-[#bbb] text-[13px] mt-2 leading-relaxed">
              We provide end-to-end electrical services tailored to your business needs with
              professionalism and precision.
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5193a]">
            <ArrowRight className="h-4 w-4 text-white -rotate-45" />
          </span>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 border border-white/20 text-white opacity-0 hover:opacity-100 transition-opacity duration-200 group-hover:opacity-100"
        style={{ opacity: undefined }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "")}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 border border-white/20 text-white opacity-0 hover:opacity-100 transition-opacity duration-200"
        onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "")}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2.5 w-2.5 rounded-full border border-white transition-all duration-300"
            style={{
              background: i === current ? "#E5193A" : "transparent",
              borderColor: i === current ? "#E5193A" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-white">
            {[
              ["10+", "Years of Experience"],
              ["250+", "Projects Completed"],
              ["98%", "Client Satisfaction"],
              ["24/7", "Support Available"],
            ].map(([v, l], i) => (
              <div key={i} className={`pr-8 ${i < 3 ? "border-r border-white/15" : ""}`}>
                <div className="text-[24px] font-black leading-none">{v}</div>
                <div className="text-[11px] text-[#aaa] mt-1">{l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {badges.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-[#bbb] text-[11px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5193a]/40 text-[#e5193a]">
                  <b.icon className="h-4 w-4" />
                </span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <HeroSlider />

      {/* Welcome */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <FadeUpText>
            <div>
              <div className="eyebrow mb-3">Welcome to Josetech</div>
              <h2 className="section-title">Reliable Electrical Solutions for Modern Businesses</h2>
              <p className="body-copy mt-5">
                Josetech Power Consultant &amp; Appliances Limited is a duly registered company
                specializing in electrical installation, maintenance services, and the supply of
                power appliances for industrial and commercial use.
              </p>
              <p className="body-copy mt-3">
                We are committed to delivering safe, efficient, and high-quality solutions that
                ensure comfort, safety, and uninterrupted operations across your offices, branches,
                and project sites.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/about" className="btn-primary">
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="btn-ghost-light">
                  Our Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeUpText>
          <SlideRight>
            <div className="relative grid grid-cols-2 gap-4">
              {/* Tall left — AI-generated Black/African Nigerian electrician */}
              <img
                src="/images/welcome-electrician.png"
                alt="Nigerian electrician working on industrial electrical panel"
                className="row-span-2 h-full min-h-[360px] w-full object-cover rounded-md"
                loading="lazy"
              />
              {/* Top-right — AI-generated solar rooftop hero, no race issue */}
              <img
                src="/images/hero-slide3.png"
                alt="Solar panel array installed on a commercial rooftop in Lagos"
                className="h-[170px] w-full object-cover rounded-md"
                loading="lazy"
              />
              {/* Bottom-right — AI-generated Black/African Nigerian female engineer */}
              <img
                src="/images/welcome-engineer.png"
                alt="Nigerian female electrical engineer at substation site"
                className="h-[170px] w-full object-cover rounded-md object-top"
                loading="lazy"
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-[#e5193a] border-4 border-white">
                <Bolt className="h-6 w-6 text-white" />
              </span>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeUpSm delay={0}>
              <div className="eyebrow mb-3">Our Core Services</div>
            </FadeUpSm>
            <FadeUpSm delay={150}>
              <h2 className="section-title">
                Complete Electrical Solutions
                <br />
                Tailored to Your Needs
              </h2>
            </FadeUpSm>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="card h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#e5193a] text-white mb-5">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-extrabold text-[16px] mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#555] leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-14">
          <div className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#777] mb-8">
            Trusted by Businesses Across Industries
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {["LOGOIPSUM", "LOGO IPSUM", "logoipsum", "LOGOIPSUM", "logoipsum"].map((l, i) => (
              <div key={i} className="text-center font-extrabold text-[#888] text-lg">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <FadeUpText>
            <div>
              <div className="eyebrow mb-3">Why Choose Josetech</div>
              <h2 className="text-[32px] md:text-[36px] font-black leading-tight">
                Experience. Expertise.
                <br />
                Commitment to Excellence.
              </h2>
              <p className="body-copy !text-[#bbb] mt-4 max-w-lg">
                We combine skilled professionals, modern tools, and proven processes to deliver
                exceptional electrical services every time.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Skilled & Certified Technicians",
                  "Strict Safety & Quality Standards",
                  "Fast Response & On-time Delivery",
                  "Customer Satisfaction Guaranteed",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e5193a]">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span className="text-[14px] font-semibold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUpText>
          <SlideRight>
            <div className="relative">
              {/* AI-generated Nigerian engineer portrait — VERIFIED African/Nigerian */}
              <img
                src="/images/team-engineer.png"
                alt="Senior Nigerian electrical engineer in hard hat on site"
                className="w-full h-[420px] object-cover object-top rounded-md"
                loading="lazy"
              />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white text-[#1a1a1a] p-6 rounded-md shadow-2xl w-[200px]">
                {[
                  ["10+", "Years of Experience"],
                  ["250+", "Projects Completed"],
                  ["98%", "Client Satisfaction"],
                  ["24/7", "Support Available"],
                ].map(([v, l]) => (
                  <div key={l} className="py-2 border-b last:border-0 border-[#eee]">
                    <div className="text-[#e5193a] font-black text-[20px]">{v}</div>
                    <div className="text-[11px] text-[#555] font-semibold">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <FadeUpText>
            <div>
              <div className="eyebrow mb-3">Let's Power Your Business</div>
              <h2 className="section-title">
                Ready to Get Reliable
                <br />
                Electrical Support?
              </h2>
              <p className="body-copy mt-4 max-w-lg">
                Partner with Josetech Power Consultant &amp; Appliances Limited for safe, efficient,
                and dependable electrical solutions.
              </p>
              <Link to="/contact" className="btn-primary mt-6">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUpText>
          <SlideRight>
            {/* AI-generated Nigerian electrician at industrial distribution panel — VERIFIED */}
            <img
              src="/images/hero-slide1.png"
              alt="Nigerian electrician in hard hat working on large industrial distribution panel"
              className="w-full h-[260px] object-cover rounded-md object-top"
              loading="lazy"
            />
          </SlideRight>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Nigeria's Best"
        accent="Electrical Team?"
        sub="Partner with Josetech for safe, efficient, and dependable electrical solutions delivered by certified professionals."
        secondary="Our Services"
      />
    </div>
  );
}
