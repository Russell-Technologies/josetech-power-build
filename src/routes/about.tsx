import { createFileRoute } from "@tanstack/react-router";
import { Bolt, Check, Star, Shield, Tool, Users } from "@/components/site/Icons";
import { Breadcrumb, CTASection, SectionHeader, StatsBar } from "@/components/site/Shared";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Josetech — Nigeria's Trusted Electrical Experts" },
    { name: "description", content: "For over a decade, Josetech Power Consultant & Appliances Limited has delivered certified electrical solutions across Nigeria." },
  ]}),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-[#111] text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Breadcrumb current="About Us" />
            <div className="eyebrow mb-3">About Josetech</div>
            <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1]">
              Nigeria's Trusted<br />Electrical <span className="text-[#e5193a]">Experts.</span>
            </h1>
            <p className="body-copy !text-[#bbb] mt-5 max-w-lg">
              For over a decade, Josetech Power Consultant & Appliances Limited has delivered certified electrical installation, maintenance, and power appliance solutions to businesses across Nigeria — safely, reliably, and on time.
            </p>
          </div>
          <div className="relative">
            <BarChartSVG />
            <div className="absolute bottom-4 right-4 bg-white text-[#1a1a1a] p-4 rounded-md w-[260px]">
              <div className="font-extrabold text-[14px]">Your Trusted Partner<br />in <span className="text-[#e5193a]">Electrical Excellence</span></div>
              <p className="text-[12px] text-[#555] mt-2">We provide end-to-end electrical services tailored to your business needs with professionalism and precision.</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBar items={[
        { value: "10+", label: "Years of Experience" },
        { value: "250+", label: "Projects Completed" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support Available" },
      ]} />

      {/* Who We Are */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="bg-[#1a1a1a] rounded-md row-span-2 min-h-[380px] flex items-center justify-center">
              <Users className="h-16 w-16 text-[#e5193a]/40" />
            </div>
            <div className="bg-[#1a1a1a] rounded-md h-[180px] flex items-center justify-center">
              <Check className="h-12 w-12 text-[#e5193a]/40" />
            </div>
            <div className="bg-[#1a1a1a] rounded-md h-[180px] flex items-center justify-center relative">
              <Bolt className="h-12 w-12 text-[#e5193a]/40" />
              <div className="absolute -bottom-4 -right-4 bg-[#e5193a] text-white text-center px-4 py-3 rounded-md font-extrabold">
                <div className="text-xl">10+</div>
                <div className="text-[10px] uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow mb-3">Welcome to Josetech</div>
            <h2 className="section-title">Who We Are</h2>
            <p className="body-copy mt-5">Josetech Power Consultant & Appliances Limited is a duly registered, professionally run company specialising in electrical installation, maintenance services, and the supply of power appliances for industrial and commercial use.</p>
            <p className="body-copy mt-3">We are committed to delivering safe, efficient, high-quality solutions that ensure comfort, safety, and uninterrupted operations across your offices, branches, and project sites across Nigeria.</p>
            <ul className="mt-6 space-y-4">
              {[
                ["Registered & Certified", "Licensed under Nigerian regulatory standards with full RC compliance."],
                ["Industry Specialists", "Deep expertise across industrial, commercial, and office electrical systems."],
                ["Client-First Approach", "Every engagement is built around your specific operational needs and schedule."],
              ].map(([t,d])=>(
                <li key={t} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e5193a] mt-1"><Check className="h-3 w-3 text-white" /></span>
                  <div className="text-[14px]"><span className="font-extrabold">{t}</span> <span className="text-[#555]">— {d}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Our Foundation" title="Mission, Vision & Values" sub="The principles that shape every project we deliver and every relationship we build." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "Our Mission", desc: "To provide safe, reliable, and efficient electrical solutions that power Nigerian businesses forward — delivered with integrity, technical precision, and a commitment to zero compromise on safety." },
              { icon: Shield, title: "Our Vision", desc: "To become the leading electrical services company in Nigeria, recognised for excellence, innovation, and our role in powering a more productive and energy-efficient business environment." },
              { icon: Check, title: "Our Values", desc: "Safety First. Integrity in every engagement. Accountability to our clients, our team, and our work. Continuous improvement through learning, investment in our people, tools, and processes." },
            ].map((v) => (
              <div key={v.title} className="card border-t-[3px] border-t-[#e5193a]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fce7ec] text-[#e5193a] mb-5"><v.icon className="h-5 w-5" /></span>
                <h3 className="font-extrabold text-[18px] mb-3">{v.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - numbered */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3">Why Choose Josetech</div>
            <h2 className="section-title">Experience. Expertise.<br />Commitment to Excellence.</h2>
            <p className="body-copy mt-4">We combine skilled professionals, modern tools, and proven processes to deliver exceptional electrical services every time — on schedule and within budget.</p>
            <ol className="mt-6 space-y-5">
              {[
                ["Skilled & Certified Technicians","Our team holds recognised certifications and undergoes continuous training on the latest electrical technologies and safety standards."],
                ["Strict Safety & Quality Standards","Every installation and maintenance job is executed against international safety benchmarks — no shortcuts, no compromises."],
                ["Fast Response & On-Time Delivery","We understand downtime costs money. Our 24/7 emergency support and disciplined scheduling keep your operations running."],
                ["Customer Satisfaction Guaranteed","Our 98% satisfaction rate is built on transparent communication, quality workmanship, and standing behind every job we deliver."],
              ].map(([t,d],i)=>(
                <li key={t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#e5193a] text-[#e5193a] font-extrabold text-sm">0{i+1}</span>
                  <div>
                    <div className="font-extrabold text-[15px] mb-1">{t}</div>
                    <p className="text-[13px] text-[#555] leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative">
            <div className="bg-[#1a1a1a] rounded-md h-[440px] flex items-center justify-center"><Bolt className="h-16 w-16 text-[#e5193a]/40" /></div>
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-lg flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5193a]"><Bolt className="h-4 w-4 text-white" /></span>
              <div className="text-[12px]">
                <div className="font-extrabold">Your Trusted Partner</div>
                <div className="text-[#777]">in Electrical Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Our Team" title="The Experts Behind the Work" sub="Skilled, certified, and deeply committed to delivering safe electrical solutions for every client." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { initials: "JO", color: "#e5193a", name: "Joseph Okonkwo", role: "CEO / Lead Consultant", bio: "10+ years leading complex electrical installations across commercial and industrial facilities in Nigeria." },
              { initials: "EA", color: "#1f6b3f", name: "Emmanuel Adeyemi", role: "Senior Electrical Engineer", bio: "Specialist in high-voltage systems, panel design, and industrial power distribution projects." },
              { initials: "FA", color: "#7a2030", name: "Fatima Aliyu", role: "Project Manager", bio: "Ensures every project is delivered on time, within scope, and to the highest quality standards." },
              { initials: "CI", color: "#1f3b8a", name: "Chidi Ikenna", role: "Maintenance Technician", bio: "Expert in preventive maintenance programs that reduce downtime and extend equipment lifespan." },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-md overflow-hidden border border-[#eee]">
                <div className="bg-[#1a1a1a] h-44 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full text-white font-extrabold text-xl" style={{ background: m.color }}>{m.initials}</span>
                </div>
                <div className="p-5">
                  <div className="font-extrabold">{m.name}</div>
                  <div className="text-[#e5193a] font-semibold text-[13px] mb-2">{m.role}</div>
                  <p className="text-[13px] text-[#555] leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Standards & Compliance" title="Certified & Compliant" sub="Our operations meet Nigerian regulatory and international safety standards across all service categories." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, name: "CAC Registered", desc: "Duly registered with the Corporate Affairs Commission · RC 8893411." },
              { icon: Check, name: "COREN Compliance", desc: "Engineering practices aligned with the Council for the Regulation of Engineering in Nigeria." },
              { icon: Shield, name: "Safety First Certified", desc: "All technicians trained and assessed on Nigerian and IEC electrical safety standards." },
              { icon: Tool, name: "ISO-Aligned Quality", desc: "Quality management practices modelled on ISO 9001 standards for consistent service delivery." },
            ].map((c) => (
              <div key={c.name} className="card text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fce7ec] text-[#e5193a] mb-4"><c.icon className="h-5 w-5" /></span>
                <div className="font-extrabold mb-2">{c.name}</div>
                <p className="text-[13px] text-[#555] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Work with Nigeria's Best" accent="Electrical Team?" sub="Partner with Josetech for safe, efficient, and dependable electrical solutions delivered by certified professionals." secondary="Our Services" />
    </div>
  );
}

function BarChartSVG() {
  return (
    <div className="h-[340px] rounded-md bg-[#1a1a1a] relative overflow-hidden">
      <svg viewBox="0 0 400 340" className="absolute inset-0 w-full h-full">
        {[60,120,90,180,140,220,170,250,200,280,230,310].map((h,i)=>(
          <rect key={i} x={20+i*30} y={340-h} width="18" height={h} fill="#e5193a" opacity={0.3+i*0.05} />
        ))}
      </svg>
    </div>
  );
}
