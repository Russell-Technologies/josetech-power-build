import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bolt, Check, Shield, Star, Tool, Users, Zap } from "@/components/site/Icons";
import { Breadcrumb, CTASection, SectionHeader, StatsBar } from "@/components/site/Shared";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Josetech Power Consultant" },
    { name: "description", content: "Complete electrical solutions: installation, maintenance, power appliances, emergency support, consultation and solar." },
  ]}),
  component: Services,
});

const coreServices = [
  { icon: Bolt, title: "Electrical Installation", desc: "Professional installation of complex electrical systems for offices, commercial buildings, and industrial plants.",
    features: ["New building wiring & fit-out","Distribution board installation","Lighting & socket installation","Earthing & bonding systems","Cable trunking & conduit runs"] },
  { icon: Tool, title: "Electrical Maintenance", desc: "Preventive and corrective maintenance services to keep your electrical systems performing at peak efficiency.",
    features: ["Scheduled preventive maintenance","Fault diagnosis & rectification","Panel board & breaker servicing","Annual safety compliance checks"] },
  { icon: Zap, title: "Power Appliance Supply & Installation", desc: "Expert supply, installation, and commissioning of power appliances and electrical equipment for your facility.",
    features: ["Generator supply & installation","ATS & ACB systems","AVR (Auto Voltage Regulator) setup","Industrial motors & controls","Stabilisers & surge protectors"] },
  { icon: Shield, title: "Emergency Electrical Support", desc: "Rapid response to electrical faults, blackouts, and urgent technical issues — available around the clock to minimise your downtime.",
    features: ["24/7 emergency call-out response","Power outage & tripping faults","Short-circuit & overcurrent issues","Temporary power solutions"] },
  { icon: Users, title: "Technical Consultation", desc: "Expert electrical engineering advice and tailored solutions — helping you plan, optimise, and future-proof your power infrastructure.",
    features: ["Electrical load analysis","Energy efficiency audits","System & specification reviews","Regulatory compliance guidance"] },
];

function Services() {
  return (
    <div>
      <section className="bg-[#111] text-white relative overflow-hidden">
        <DotGrid />
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <Breadcrumb current="Services" />
            <div className="eyebrow mb-3">Our Services</div>
            <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1]">
              Complete Electrical Solutions Tailored <span className="text-[#e5193a]">to Your Needs.</span>
            </h1>
            <p className="body-copy !text-[#bbb] mt-5 max-w-lg">
              From first installation to ongoing maintenance and emergency support, we deliver end-to-end electrical services for commercial and industrial clients across Nigeria — safely and on time.
            </p>
          </div>
          <div className="bg-white text-[#1a1a1a] p-6 rounded-md md:ml-auto w-full md:w-[340px]">
            <div className="eyebrow mb-4">Our Core Services</div>
            <div className="grid grid-cols-2 gap-2">
              {["Installation","Maintenance","Appliances","Emergency","Consultation"].map(p=>(
                <span key={p} className="px-3 py-2 rounded-full bg-[#fce7ec] text-[#e5193a] text-[12px] font-bold text-center">{p}</span>
              ))}
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

      {/* Core services grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="What We Offer" title="Our Core Services" sub="Professional electrical services designed for the demands of modern Nigerian businesses — safe, efficient, and fully certified." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((s)=>(
              <div key={s.title} className="card">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#fce7ec] text-[#e5193a] mb-4"><s.icon className="h-5 w-5" /></span>
                <h3 className="font-extrabold text-[17px] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#555] leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2 mb-4">
                  {s.features.map(f=>(
                    <li key={f} className="flex items-center gap-2 text-[13px]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e5193a]"><Check className="h-2.5 w-2.5 text-white" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="text-[#e5193a] font-bold text-[13px] inline-flex items-center gap-1">Get a Quote <ArrowRight className="h-3 w-3" /></Link>
              </div>
            ))}
          </div>

          {/* Solar feature card */}
          <div className="mt-8 bg-[#111] text-white rounded-md p-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#e5193a] mb-4"><Star className="h-5 w-5 text-white" /></span>
              <h3 className="text-[24px] font-black mb-3">Solar & Alternative Energy Solutions</h3>
              <p className="text-[#bbb] text-[14px] leading-relaxed mb-5">
                Reduce your dependence on the national grid and generate fuel costs. We design, supply, and install hybrid solar energy systems tailored for Nigerian commercial environments.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {["Solar PV system design & installation","Hybrid inverter & battery storage setup","Grid-tie & off-grid configurations","Performance monitoring & support"].map(f=>(
                  <div key={f} className="flex items-center gap-2 text-[13px]">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e5193a]"><Check className="h-2.5 w-2.5 text-white" /></span>
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">Get a Solar Quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="bg-[#0a0a0a] rounded-md h-[260px] flex items-center justify-center">
              <SunSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Our Process" title="How We Deliver Every Project" sub="A clear, structured process that keeps you informed and in control from first contact to project sign-off." />
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] border-t-2 border-dashed border-[#e5193a]/40" />
            {[
              ["Initial Enquiry","You contact us by phone, email, or our quote form with your project details and requirements."],
              ["Site Assessment","Our engineers visit your site to assess the scope, identify challenges, and take measurements."],
              ["Proposal & Quote","We provide a detailed written proposal with clear pricing, timeline, and materials breakdown."],
              ["Execution","Our certified technicians deliver the work safely, on schedule, and to the highest quality standards."],
              ["Sign-off & Support","We complete sign-off documentation, and provide ongoing support whenever you need it."],
            ].map(([t,d],i)=>(
              <div key={i as number} className="relative text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e5193a] text-white font-extrabold text-sm relative z-10">0{i+1}</span>
                <div className="font-extrabold text-[14px] mt-4 mb-2">{t}</div>
                <p className="text-[12px] text-[#555] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Industries Served" title="We Work Across Key Sectors" sub="Our expertise spans multiple industries — each with its own unique electrical demands and safety requirements." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Corporate Offices","Full office electrical fit-outs, lighting & power systems"],
              ["Industrial Facilities","Heavy-duty wiring, motor controls & panel boards"],
              ["Hospitality & Hotels","Lighting design, backup power & guest comfort systems"],
              ["Healthcare Facilities","Critical power systems, UPS & emergency lighting"],
              ["Retail & Malls","Shop fit wiring, signage power & redundant backup"],
              ["Educational Institutions","Campus wiring, lab power & ICT infrastructure"],
            ].map(([t,d],i)=>(
              <div key={i as number} className="rounded-md overflow-hidden relative h-[180px] bg-[#1a1a1a] p-5 flex flex-col justify-end">
                <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[#e5193a] text-white text-[10px] font-bold uppercase">Sector</span>
                <Bolt className="absolute right-4 top-4 h-10 w-10 text-[#e5193a]/40" />
                <div className="text-white font-extrabold text-[18px]">{t}</div>
                <div className="text-[#bbb] text-[12px]">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Client Feedback" title="What Our Clients Say" sub="Real feedback from businesses we have served across Nigeria." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i:"AO", n:"Adaeze Okafor", r:"GM Executive, Finbridge Ltd · Lagos", q:"Josetech handled the complete electrical installation for our new office in Victoria Island. Their team was professional, punctual, and the quality of work was outstanding — we'd hire them again without hesitation." },
              { i:"BM", n:"Babatunde Musa", r:"Facilities Manager, Grandview Hotel · Ikeja", q:"We had a major generator fault during a critical period. Josetech responded within the hour and had us back online the same day. That level of emergency response is rare — they have earned our long-term maintenance contract." },
              { i:"CN", n:"Chinwe Eze", r:"Director, Greenpath Agro · Port Harcourt", q:"Their technical consultation on our solar hybrid project was invaluable. They did not oversell — they designed exactly what we needed. The system has been running flawlessly for over eight months." },
            ].map((t)=>(
              <div key={t.n} className="card">
                <div className="flex gap-1 text-[#e5193a] mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4" />)}</div>
                <p className="text-[14px] text-[#555] italic leading-relaxed mb-5">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5193a] text-white font-extrabold text-sm">{t.i}</span>
                  <div>
                    <div className="font-extrabold text-[13px]">{t.n}</div>
                    <div className="text-[12px] text-[#777]">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Common Questions" title="Frequently Asked Questions" sub="Answers to the questions we hear most from clients before opening a project." />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["How quickly can you respond to an emergency fault?","Our emergency response team is available 24/7. For clients in Lagos, we typically arrive on-site within 1–2 hours of an emergency call. Response times for other cities may vary — contact us directly for coverage in your area."],
              ["Are your technicians certified and insured?","Yes. All our technicians hold recognised electrical certifications and are covered under our company's professional liability insurance. We comply fully with COREN and Nigerian electrical safety standards on every job."],
              ["Do you provide a warranty on your work?","All our installations come with a minimum 12-month workmanship warranty. Supplied equipment carries the manufacturer's standard warranty, which we help you register and manage."],
              ["Can you handle large-scale industrial projects?","Yes. We have successfully delivered electrical projects for warehouses, manufacturing plants, multi-storey office buildings, and hotel complexes. Get in touch with your project scope and we will assign the right team and resources."],
              ["How is project pricing structured?","We provide detailed written quotations with breakdowns covering labour, materials, and timeline. There are no hidden charges. For maintenance retainers, we offer monthly and annual packages tailored to your facility size."],
              ["Do you work outside Lagos?","Yes. While our primary base is Lagos, we regularly complete projects in Abuja, Port Harcourt, Ibadan, and other major cities. Travel and logistics costs are itemised transparently in the project quote."],
            ].map(([q,a])=>(
              <div key={q} className="card">
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e5193a] text-white font-extrabold text-sm">?</span>
                  <div>
                    <div className="font-extrabold text-[15px] mb-2">{q}</div>
                    <p className="text-[13px] text-[#555] leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Get Reliable Electrical Support" accent="for Your Business?" sub="Talk to our team today. We will assess your needs, propose the right solution, and deliver it safely and on time." secondary="Contact Us" />
    </div>
  );
}

function DotGrid() {
  return (
    <svg className="absolute top-0 right-0 w-[300px] h-[200px] opacity-20" viewBox="0 0 300 200">
      {Array.from({length:10}).map((_,r)=>
        Array.from({length:15}).map((_,c)=>(
          <circle key={`${r}-${c}`} cx={c*20+10} cy={r*20+10} r="1.5" fill="#e5193a" />
        ))
      )}
    </svg>
  );
}

function SunSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-32 h-32">
      <circle cx="60" cy="60" r="20" fill="none" stroke="#e5193a" strokeWidth="2" />
      <circle cx="60" cy="60" r="6" fill="#e5193a" />
      {Array.from({length:8}).map((_,i)=>{
        const a = (i*Math.PI)/4;
        return <line key={i} x1={60+Math.cos(a)*28} y1={60+Math.sin(a)*28} x2={60+Math.cos(a)*40} y2={60+Math.sin(a)*40} stroke="#e5193a" strokeWidth="2" />;
      })}
    </svg>
  );
}
