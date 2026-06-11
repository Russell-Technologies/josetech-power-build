import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bolt, Check } from "@/components/site/Icons";
import { Breadcrumb, CTASection, SectionHeader, StatsBar } from "@/components/site/Shared";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfolio — Josetech Power Consultant" },
    { name: "description", content: "Over 250 completed electrical projects across Lagos, Abuja, Port Harcourt and beyond." },
  ]}),
  component: Portfolio,
});

const filters = ["All Projects","Installation","Maintenance","Power Appliances","Solar & Energy","Emergency"];

const projects = [
  { cat:"Commercial Installation", year:"2024", color:"#1f5a3a", title:"Grandview Hotel – Electrical Upgrade", desc:"Full rewiring and panel upgrade for a 120-room hotel in Ikeja, including new distribution boards, energy-efficient LED lighting throughout, and a 500KVA generator changeover panel.", loc:"Ikeja, Lagos", dur:"10 Weeks" },
  { cat:"Solar & Energy", year:"2024", color:"#3a1f5a", title:"Greenpath Agro – Solar Hybrid System", desc:"Design and installation of a 60KW solar hybrid system with lithium battery storage for an agricultural processing facility in Port Harcourt. Reduced generator runtime by 65%.", loc:"Port Harcourt", dur:"6 Weeks" },
  { cat:"Preventive Maintenance", year:"2023", color:"#5a1f1f", title:"Medicore Hospital – Electrical Audit & Maintenance", desc:"Comprehensive 12-month preventive maintenance contract for a 5-floor private hospital in Ikeja. Covered all critical power systems, UPS units, emergency lighting, and generator servicing.", loc:"Ikeja, Lagos", dur:"12 Months" },
  { cat:"Industrial Installation", year:"2023", color:"#1a3a5a", title:"Nexus Manufacturing – Factory Power Setup", desc:"End-to-end electrical installation for a new manufacturing plant in Apapa, Lagos. Covered 11KV substation termination, 500KVA transformer skid, motor control centres, and factory floor wiring.", loc:"Apapa, Lagos", dur:"14 Weeks" },
  { cat:"Power Appliance Supply & Install", year:"2023", color:"#5a3a1a", title:"Silverbridge Mall – Generator & ATS Installation", desc:"Supply, installation, and commissioning of two 1500KvA three-phase generators with synchronisation panel and automated transfer switch for a shopping mall in Lekki Phase 1.", loc:"Lekki, Lagos", dur:"5 Weeks" },
  { cat:"Educational Installation", year:"2022", color:"#1a5a4a", title:"Brightfield Academy – Campus Electrical Overhaul", desc:"Full electrical overhaul of a secondary school campus in Ibadan covering 18 classrooms, 2 computer labs, science labs, staff offices, and a new 60KVA solar-hybrid backup system.", loc:"Ibadan", dur:"9 Weeks" },
  { cat:"Emergency Support", year:"2024", color:"#2a2a4a", title:"Okonkwo & Partners Law Firm – Emergency Fault Response", desc:"24-hour emergency call-out following a major electrical fault in a corporate power core. In 4-hour shifts, our team restored power, replaced damaged cables, and certified the system safe.", loc:"Victoria Island", dur:"48 Hours" },
  { cat:"Scheduled Maintenance", year:"2023", color:"#5a2a1a", title:"ProLogis Warehouse Complex – Annual Maintenance Contract", desc:"Ongoing annual maintenance contract for 5 warehouse complex operations covering 1.2 million sq ft. Includes thermal imaging, panel servicing, cable integrity checks, and 24/7 emergency support.", loc:"Ogun, Lagos", dur:"Annual" },
  { cat:"Solar & Energy", year:"2023", color:"#1a3a3a", title:"TechHub Coworking – Off-Grid Solar Installation", desc:"45KW off-grid solar system with 90KWh lithium-ion storage and full automation for a co-working space in Lekki. Delivers energy independence from the municipal grid.", loc:"Lekki, Lagos", dur:"8 Weeks" },
];

function Portfolio() {
  return (
    <div>
      <section className="bg-[#111] text-white relative overflow-hidden">
        <CircuitSVG />
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <Breadcrumb current="Portfolio" />
            <div className="eyebrow mb-3">Our Portfolio</div>
            <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1]">
              Proven Projects.<br />Measurable <span className="text-[#e5193a]">Results.</span>
            </h1>
            <p className="body-copy !text-[#bbb] mt-5 max-w-lg">
              Over 250 completed electrical projects across Lagos, Abuja, Port Harcourt, and beyond — every project is a testament to our commitment to safety, quality, and on-time delivery.
            </p>
          </div>
          <div className="bg-white text-[#1a1a1a] p-5 rounded-md md:ml-auto w-full md:w-[320px]">
            <div className="eyebrow mb-4">Projects by Sector</div>
            <ul className="space-y-3 text-[13px]">
              {[
                ["#e5193a","Commercial & Office","38%"],
                ["#1f6b8a","Industrial","26%"],
                ["#7a5a1f","Hospitality & Retail","22%"],
                ["#1f7a4a","Healthcare & Education","14%"],
              ].map(([c,l,p])=>(
                <li key={l} className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{background:c}} />{l}</span>
                  <span className="font-extrabold">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StatsBar items={[
        { value: "250+", label: "Projects Completed" },
        { value: "6", label: "States Covered" },
        { value: "40+", label: "Repeat Clients" },
        { value: "10+", label: "Years Delivering" },
      ]} />

      {/* Filter bar */}
      <div className="bg-[#f7f7f7] border-b border-[#eee]">
        <div className="mx-auto max-w-[1280px] px-6 py-4 flex flex-wrap items-center gap-3">
          <span className="text-[12px] font-bold text-[#777] uppercase tracking-wider mr-2">Filter:</span>
          {filters.map((f,i)=>(
            <button key={f} className={`px-4 py-2 rounded-full text-[12px] font-bold ${i===0?"bg-[#e5193a] text-white":"bg-white border border-[#eee] text-[#555]"}`}>{f}</button>
          ))}
        </div>
      </div>

      {/* Spotlight */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <div className="eyebrow mb-3">Featured Project</div>
          <h2 className="section-title mb-8">Project Spotlight</h2>
          <div className="bg-[#1a1a1a] text-white rounded-md grid md:grid-cols-2 overflow-hidden">
            <div className="relative h-[320px] md:h-auto flex items-center justify-center bg-[#0a0a0a]">
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#e5193a] text-white text-[10px] font-bold uppercase rounded">Featured</span>
              <BuildingSVG />
            </div>
            <div className="p-8">
              <div className="eyebrow mb-3">Commercial Installation · Lagos Island</div>
              <h3 className="text-[24px] font-black leading-tight mb-3">Finbridge Financial Services Head Office – Full Electrical Fit-Out</h3>
              <p className="text-[#bbb] text-[14px] leading-relaxed mb-5">
                Complete electrical installation for a 14-floor commercial office building in Victoria Island. The project covered 4,700 sqm of office space including distribution boards, lighting systems, structured cabling conduits, emergency lighting, and a 750KVA generator installation with ATS.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 text-[12px]">
                {[["Client","Finbridge Ltd"],["Location","Victoria Island, Lagos"],["Duration","8 Weeks"],["Year","2023"]].map(([l,v])=>(
                  <div key={l}>
                    <div className="text-[#777] uppercase text-[10px] font-bold">{l}</div>
                    <div className="font-extrabold mt-1">{v}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Commercial Installation","Generator Supply","Emergency Lighting","Cabling"].map(t=>(
                  <span key={t} className="px-3 py-1 bg-white/10 text-white text-[11px] rounded-full">{t}</span>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">View Case Study <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Completed Projects" title="Our Project Portfolio" sub="A selection of the electrical projects we have delivered for clients across Nigeria — commercial, industrial, and specialised." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p,i)=>(
              <div key={i} className="bg-white rounded-md overflow-hidden border border-[#eee] flex flex-col">
                <div className="relative h-44 flex items-center justify-center" style={{background:p.color}}>
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#e5193a] text-white text-[10px] font-bold uppercase rounded">{p.cat.split(" ")[0]}</span>
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/50 text-white text-[10px] font-bold rounded">{p.year}</span>
                  <Bolt className="h-12 w-12 text-white/30" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="eyebrow mb-2">{p.cat}</div>
                  <h3 className="font-extrabold text-[15px] mb-2">{p.title}</h3>
                  <p className="text-[12px] text-[#555] leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#eee] text-[11px]">
                    <div>
                      <div className="text-[#777]">Location · Duration</div>
                      <div className="font-bold">{p.loc} · {p.dur}</div>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fce7ec] text-[#e5193a]"><ArrowRight className="h-3 w-3" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="eyebrow mb-3">Case Study</div>
          <h2 className="section-title mb-10">Behind the Project: Nexus Manufacturing</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="relative">
              <div className="bg-[#1a1a1a] rounded-md h-[360px] flex items-center justify-center"><Bolt className="h-16 w-16 text-[#e5193a]/40" /></div>
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-md shadow-lg">
                <div className="text-[28px] font-black text-[#e5193a]">14</div>
                <div className="text-[11px] font-bold text-[#555] uppercase">Weeks Delivered</div>
              </div>
            </div>
            <div>
              <p className="body-copy mb-6">Nexus Manufacturing approached us to deliver the complete electrical infrastructure for their new 5,000 sqm factory in Apapa. The scope included high-voltage substation work, motor control centres for heavy machinery, and full factory floor wiring — all while meeting tight construction handover deadlines.</p>
              <ol className="space-y-5">
                {[
                  ["Site Survey & Engineering Design","Our engineers produced full single-line diagrams, load schedules, and cable routing plans within a six-day site survey period."],
                  ["11KV Substation & Transformer Works","Coordinated with PHCN for the 11KV switching and tapping, installed the 11KV ring main unit, 500KVA transformer, and LV main switch board."],
                  ["Motor Control Centres & Factory Wiring","Installed 4 MCC panels for production line motors, and fixed cable trays and complete socket and lighting infrastructure."],
                  ["Testing, Commissioning & Handover","Earth resistance testing, insulation resistance testing, and power-on commissioning completed 5 days ahead of the construction handover date."],
                ].map(([t,d],i)=>(
                  <li key={i as number} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5193a] text-white font-extrabold text-sm">{i+1}</span>
                    <div>
                      <div className="font-extrabold text-[15px] mb-1">{t}</div>
                      <p className="text-[13px] text-[#555] leading-relaxed">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="grid grid-cols-4 gap-3 mt-8">
                {[["14wks","Delivered in"],["0","Safety incidents"],["500KVA","Transformer installed"],["4","MCC panels installed"]].map(([v,l])=>(
                  <div key={l as string} className="bg-[#f7f7f7] p-4 rounded">
                    <div className="text-[#e5193a] font-black text-[18px]">{v}</div>
                    <div className="text-[11px] text-[#555] font-semibold">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Our Track Record" title="The Numbers Behind the Work" sub="Across 10+ years and 250+ projects, these are the outcomes that define our performance." />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["250+","Projects Completed","Commercial, industrial, and specialised electrical projects delivered since 2014."],
              ["98%","On-Time Delivery","Percentage of projects handed over on or before the agreed completion date."],
              ["0","Major Safety Incidents","Zero lost-time safety incidents recorded across all project sites to date."],
              ["40+","Repeat Clients","Clients who have returned to us for more than one project or maintenance contract."],
            ].map(([v,l,d])=>(
              <div key={l} className="bg-white rounded-md p-6 border border-[#eee]">
                <div className="text-[#e5193a] font-black text-[32px] mb-2">{v}</div>
                <div className="font-extrabold mb-2">{l}</div>
                <p className="text-[13px] text-[#555] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <div className="text-center mb-8">
            <div className="eyebrow mb-3">Trusted By</div>
            <h2 className="section-title">Businesses That Trust Josetech</h2>
            <p className="body-copy mt-3">We are proud to have served clients across banking, healthcare, manufacturing, retail, and hospitality.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-50">
            {["FINBRIDGE LTD","NEXUS MFG","GRANDVIEW HOTELS","GREENPATH AGRO","MEDICORE HEALTH","TECHHUB"].map(l=>(
              <div key={l} className="text-center font-extrabold text-[#888] text-sm border border-[#eee] py-4 rounded">{l}</div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's Add Your Project" accent="to Our Portfolio." sub="Ready to work with a team that delivers on time, to spec, and without compromising on safety? Get in touch and let's talk about your project." secondary="View Our Services" />
    </div>
  );
}

function CircuitSVG() {
  return (
    <svg className="absolute right-0 top-0 h-full w-1/2 opacity-30 hidden md:block" viewBox="0 0 600 500">
      <g stroke="#e5193a" strokeWidth="1" fill="none">
        <path d="M50 100 L200 100 L200 200 L400 200" />
        <path d="M100 250 L300 250 L300 400 L500 400" />
        <path d="M50 350 L150 350 L150 450" />
        <circle cx="200" cy="100" r="4" fill="#e5193a" />
        <circle cx="400" cy="200" r="4" fill="#e5193a" />
        <circle cx="500" cy="400" r="4" fill="#e5193a" />
        <rect x="250" y="180" width="40" height="40" />
        <rect x="350" y="380" width="40" height="40" />
      </g>
    </svg>
  );
}

function BuildingSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-32 h-32">
      <g fill="none" stroke="#e5193a" strokeWidth="2">
        <rect x="30" y="20" width="60" height="80" />
        {Array.from({length:3}).map((_,r)=>
          Array.from({length:3}).map((_,c)=>(
            <rect key={`${r}-${c}`} x={40+c*15} y={30+r*20} width="10" height="12" fill="#e5193a" fillOpacity="0.6" />
          ))
        )}
      </g>
    </svg>
  );
}
