import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bolt, Check, Shield, Tool, Users, Zap } from "@/components/site/Icons";
import { CTASection } from "@/components/site/Shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josetech Power Consultant — Electrical Solutions for Nigerian Businesses" },
      { name: "description", content: "Safe, reliable and efficient electrical installation, maintenance and power appliance solutions across Nigeria." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Bolt, title: "Electrical Installation", desc: "Professional installation of electrical systems for offices, commercial and industrial facilities." },
  { icon: Tool, title: "Electrical Maintenance", desc: "Preventive and corrective maintenance to ensure optimal performance and reliability." },
  { icon: Zap, title: "Power Appliance Installation", desc: "Expert installation and mounting of power appliances and electrical equipment." },
  { icon: Shield, title: "Emergency Support", desc: "Rapid response to electrical faults and urgent technical issues." },
  { icon: Users, title: "Technical Consultation", desc: "Professional advice and solutions tailored to your electrical system requirements." },
];

const badges = [
  { icon: Shield, label: "Safety First" },
  { icon: Zap, label: "Fast Response" },
  { icon: Check, label: "Quality Service" },
  { icon: Users, label: "Expert Team" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111] text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 py-16 grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="relative z-10">
            <div className="eyebrow mb-4">Electrical Installation & Maintenance Experts</div>
            <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1]">
              Powering Your Business with Safe, Reliable & Efficient Electrical <span className="text-[#e5193a]">Solutions.</span>
            </h1>
            <p className="body-copy !text-[#bbb] mt-5 max-w-lg">
              We deliver professional electrical installation, maintenance, and power appliance solutions that keep your business running safely and without interruption.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/services" className="btn-primary">Request a Service <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-ghost">Contact Us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <HeroPanelSVG />
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:w-[320px] bg-[#1a1a1a]/95 backdrop-blur border border-white/10 p-5 rounded-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-white font-extrabold">Your Trusted Partner<br />in Electrical Excellence</div>
                  <p className="text-[#bbb] text-[13px] mt-2 leading-relaxed">
                    We provide end-to-end electrical services tailored to your business needs with professionalism and precision.
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5193a]">
                  <ArrowRight className="h-4 w-4 text-white -rotate-45" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-white">
              {[["10+","Years of Experience"],["250+","Projects Completed"],["98%","Client Satisfaction"],["24/7","Support Available"]].map(([v,l],i)=>(
                <div key={i} className={`pr-8 ${i<3?"border-r border-white/15":""}`}>
                  <div className="text-[24px] font-black leading-none">{v}</div>
                  <div className="text-[11px] text-[#aaa] mt-1">{l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-5">
              {badges.map((b,i)=>(
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

      {/* Welcome */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3">Welcome to Josetech</div>
            <h2 className="section-title">Reliable Electrical Solutions for Modern Businesses</h2>
            <p className="body-copy mt-5">
              Josetech Power Consultant & Appliances Limited is a duly registered company specializing in electrical installation, maintenance services, and the supply of power appliances for industrial and commercial use.
            </p>
            <p className="body-copy mt-3">
              We are committed to delivering safe, efficient, and high-quality solutions that ensure comfort, safety, and uninterrupted operations across your offices, branches, and project sites.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/about" className="btn-primary">Learn More About Us <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="btn-ghost-light">Our Services <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <DarkTile className="row-span-2 h-full min-h-[360px]" />
            <DarkTile className="h-[170px]" />
            <DarkTile className="h-[170px]" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-[#e5193a] border-4 border-white">
              <Bolt className="h-6 w-6 text-white" />
            </span>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Our Core Services</div>
            <h2 className="section-title">Complete Electrical Solutions<br />Tailored to Your Needs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <div key={i} className="card">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#e5193a] text-white mb-5">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-extrabold text-[16px] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#555] leading-relaxed">{s.desc}</p>
              </div>
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
            {["LOGOIPSUM","LOGO IPSUM","logoipsum","LOGOIPSUM","logoipsum"].map((l,i)=>(
              <div key={i} className="text-center font-extrabold text-[#888] text-lg">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3">Why Choose Josetech</div>
            <h2 className="text-[32px] md:text-[36px] font-black leading-tight">
              Experience. Expertise.<br />Commitment to Excellence.
            </h2>
            <p className="body-copy !text-[#bbb] mt-4 max-w-lg">
              We combine skilled professionals, modern tools, and proven processes to deliver exceptional electrical services every time.
            </p>
            <ul className="mt-6 space-y-3">
              {["Skilled & Certified Technicians","Strict Safety & Quality Standards","Fast Response & On-time Delivery","Customer Satisfaction Guaranteed"].map(t=>(
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e5193a]"><Check className="h-3 w-3 text-white" /></span>
                  <span className="text-[14px] font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <DarkTile className="h-[420px]" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white text-[#1a1a1a] p-6 rounded-md shadow-2xl w-[200px]">
              {[["10+","Years of Experience"],["250+","Projects Completed"],["98%","Client Satisfaction"],["24/7","Support Available"]].map(([v,l])=>(
                <div key={l} className="py-2 border-b last:border-0 border-[#eee]">
                  <div className="text-[#e5193a] font-black text-[20px]">{v}</div>
                  <div className="text-[11px] text-[#555] font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="eyebrow mb-3">Let's Power Your Business</div>
            <h2 className="section-title">Ready to Get Reliable<br />Electrical Support?</h2>
            <p className="body-copy mt-4 max-w-lg">
              Partner with Josetech Power Consultant & Appliances Limited for safe, efficient, and dependable electrical solutions.
            </p>
            <Link to="/contact" className="btn-primary mt-6">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div><DarkTile className="h-[260px]" /></div>
        </div>
      </section>

      <CTASection title="Ready to Work with Nigeria's Best" accent="Electrical Team?" sub="Partner with Josetech for safe, efficient, and dependable electrical solutions delivered by certified professionals." secondary="Our Services" />
    </div>
  );
}

function DarkTile({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-md bg-[#1a1a1a] relative overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5193a" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#grid)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Bolt className="h-12 w-12 text-[#e5193a]/40" />
      </div>
    </div>
  );
}

function HeroPanelSVG() {
  return (
    <div className="relative h-[440px] rounded-md bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] overflow-hidden border border-white/5">
      <svg viewBox="0 0 400 440" className="absolute inset-0 w-full h-full">
        {/* breaker rows */}
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={40 + c * 40} y={60 + r * 50} width="32" height="38" rx="3" fill="#222" stroke="#333" />
          ))
        )}
        {/* indicator lights */}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx={50 + (i % 6) * 55} cy={380 + Math.floor(i / 6) * 20} r="3" fill={i % 3 === 0 ? "#e5193a" : "#444"} />
        ))}
        {/* technician silhouette */}
        <g transform="translate(260,140)" fill="#0d0d0d" stroke="#e5193a" strokeWidth="1">
          <circle cx="40" cy="40" r="28" fill="#e5193a" />
          <rect x="20" y="68" width="40" height="80" rx="6" fill="#1a1a1a" stroke="#e5193a" />
        </g>
      </svg>
    </div>
  );
}
