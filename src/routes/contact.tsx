import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bolt, Clock, Mail, MapPin, Phone, Shield, Star, Tool, Zap } from "@/components/site/Icons";
import { Breadcrumb, SectionHeader } from "@/components/site/Shared";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Josetech Power Consultant" },
    { name: "description", content: "Get in touch with our team for electrical installation, maintenance, and 24/7 emergency support." },
  ]}),
  component: Contact,
});

function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#111] text-white overflow-hidden">
        <PanelSceneSVG />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/70 to-[#111]/30" />
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-20 relative">
          <Breadcrumb current="Contact" />
          <div className="eyebrow mb-3">Contact Us</div>
          <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1] max-w-lg">
            Get in Touch<br />With Our <span className="text-[#e5193a]">Team.</span>
          </h1>
          <p className="body-copy !text-[#bbb] mt-5 max-w-md">
            Have a project in mind or need expert advice? Our team is ready to respond — fast, professional, and committed to getting things right.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/15 rounded text-[13px]"><Phone className="h-4 w-4 text-[#e5193a]" /> +234 803 000 0000</span>
            <span className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/15 rounded text-[13px]"><Mail className="h-4 w-4 text-[#e5193a]" /> info@josetech.ng</span>
            <span className="flex items-center gap-2 px-4 py-2.5 bg-[#e5193a]/20 border border-[#e5193a]/40 rounded text-[13px]"><Zap className="h-4 w-4 text-[#e5193a]" /> Emergency: 24/7</span>
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="bg-[#e5193a] text-white">
        <div className="mx-auto max-w-[1280px] grid md:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "info@josetech.ng" },
            { icon: Phone, label: "Phone / WhatsApp", value: "+234 803 000 0000" },
            { icon: Clock, label: "Emergency Line", value: "Available 24 / 7" },
          ].map((q,i)=>(
            <div key={i} className={`px-6 py-6 flex items-center gap-4 ${i>0?"md:border-l border-white/20":""}`}>
              <span className="flex h-10 w-10 items-center justify-center rounded bg-white/15"><q.icon className="h-5 w-5" /></span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider">{q.label}</div>
                <div className="font-extrabold">{q.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="eyebrow mb-3">Start a Conversation</div>
            <h2 className="section-title">Let's Talk About<br />Your <span className="text-[#e5193a]">Next Project.</span></h2>
            <p className="body-copy mt-4 max-w-md">Whether it's a new electrical installation, a maintenance contract, an emergency fault, or a technical consultation — fill in the form and our team will respond within 2 hours during business hours.</p>
            <ul className="mt-6 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "info@josetech.ng · projects@josetech.ng" },
                { icon: Phone, label: "Phone / WhatsApp", value: "+234 803 000 0000 · +234 802 000 0000" },
                { icon: MapPin, label: "Office Address", value: "14 Adeyemi Lawson Street, Victoria Island, Lagos" },
                { icon: Clock, label: "Working Hours", value: "Mon–Fri: 8am–6pm · Sat: 9am–2pm", note: "Emergency support: 24/7" },
              ].map((c,i)=>(
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white border border-[#eee] text-[#e5193a]"><c.icon className="h-4 w-4" /></span>
                  <div>
                    <div className="eyebrow !text-[#e5193a] mb-1">{c.label}</div>
                    <div className="text-[14px] font-semibold">{c.value}</div>
                    {c.note && <div className="text-[#e5193a] text-[12px] font-bold">{c.note}</div>}
                  </div>
                </li>
              ))}
            </ul>
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-[#ddd]" />
              <span className="text-[11px] text-[#777] uppercase tracking-wider">Or find us on</span>
              <div className="flex-1 h-px bg-[#ddd]" />
            </div>
            <div className="flex gap-2">
              {[["Facebook","#1877f2"],["Instagram","#e1306c"],["LinkedIn","#0a66c2"]].map(([n,c])=>(
                <button key={n} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#eee] rounded text-[13px] font-bold">
                  <span className="h-5 w-5 rounded" style={{background:c}} />{n}
                </button>
              ))}
            </div>
          </div>

          <form className="bg-white rounded-md p-8 shadow-xl border border-[#eee]" onSubmit={(e)=>e.preventDefault()}>
            <h3 className="font-extrabold text-[20px]">Send Us a Message</h3>
            <p className="text-[13px] text-[#777] mt-1 mb-6">We typically respond within 2 business hours.</p>
            <div className="grid grid-cols-2 gap-4">
              <Field label="First Name" placeholder="John" />
              <Field label="Last Name" placeholder="Okafor" />
              <Field label="Email Address" placeholder="john@company.com" />
              <Field label="Phone Number" placeholder="+234 000 000 0000" />
              <div className="col-span-2"><Field label="Company / Organisation" placeholder="Your company name" /></div>
              <SelectField label="Service Needed" />
              <Field label="Project Location" placeholder="City / State" />
              <div className="col-span-2">
                <Label>Message</Label>
                <textarea className="w-full mt-2 px-3 py-2.5 border border-[#eee] rounded text-[14px] min-h-[110px]" placeholder="Describe your project or enquiry in detail..." />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full btn-primary justify-center">Send Message <ArrowRight className="h-4 w-4" /></button>
            <p className="text-[11px] text-[#888] mt-3 flex items-center gap-2"><Shield className="h-3 w-3" /> Your information is kept confidential and never shared with third parties.</p>
          </form>
        </div>
      </section>

      {/* Office Location */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Our Location" title="Find Our Office" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="rounded-md overflow-hidden border border-[#eee]">
                <div className="bg-[#111] text-white px-5 py-4 flex items-center gap-3">
                  <span className="px-2 py-1 bg-[#e5193a] text-[10px] font-bold uppercase rounded">Head Office</span>
                  <div className="font-extrabold">Lagos – Victoria Island</div>
                </div>
                <div className="p-5 space-y-4">
                  {[
                    { icon: MapPin, label: "Address", value: "14 Adeyemi Lawson Street, Victoria Island, Lagos State, Nigeria" },
                    { icon: Mail, label: "Email", value: "info@josetech.ng · projects@josetech.ng" },
                    { icon: Phone, label: "Phone", value: "+234 803 000 0000 · +234 802 000 0000" },
                    { icon: Clock, label: "Working Hours", value: "Mon–Fri: 8:00am – 6:00pm\nSat: 9:00am – 2:00pm · Sun: Closed", note: "Emergency support: 24/7" },
                  ].map((c,i)=>(
                    <div key={i} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#fce7ec] text-[#e5193a]"><c.icon className="h-4 w-4" /></span>
                      <div>
                        <div className="eyebrow mb-1">{c.label}</div>
                        <div className="text-[13px] whitespace-pre-line">{c.value}</div>
                        {c.note && <div className="text-[#e5193a] text-[12px] font-bold mt-1">{c.note}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 bg-[#f7f7f7] rounded-md p-5">
                <div className="font-extrabold mb-3 text-[14px]">Getting Here</div>
                <ul className="space-y-2 text-[13px] text-[#555]">
                  <li>🚗 From Lagos Mainland: Cross Third Mainland Bridge → Onikan/Marina Avenue → turn right at Adeyemi Lawson Street.</li>
                  <li>🚌 By BRT: Alight at CMS bus stop and take a short taxi or keke to Victoria Island.</li>
                  <li>🅿️ Free client parking available on site.</li>
                </ul>
              </div>
            </div>
            <div className="relative bg-[#1a1a1a] rounded-md min-h-[420px] overflow-hidden">
              <MapSVG />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="h-4 w-4 rounded-full bg-[#e5193a] ring-4 ring-[#e5193a]/30" />
                <div className="mt-2 bg-white text-[#1a1a1a] px-3 py-1.5 rounded text-[12px] font-bold flex items-center gap-1">
                  <Bolt className="h-3 w-3 text-[#e5193a]" /> Josetech Power Consultant
                </div>
              </div>
              <button className="absolute bottom-4 left-4 bg-white text-[#1a1a1a] px-3 py-2 rounded text-[12px] font-bold flex items-center gap-1"><MapPin className="h-3 w-3 text-[#e5193a]" /> Open in Google Maps</button>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Departments" title="Who Should You Contact?" sub="Reach the right team directly to get a faster, more focused response to your enquiry." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Tool, name: "New Projects & Quotes", desc: "For new installation requests, project quotes, tender submissions, or discussing a new electrical job.", email: "projects@josetech.ng", phone: "+234 803 000 0001" },
              { icon: Shield, name: "Maintenance Contracts", desc: "For ongoing maintenance retainers, annual service agreements, or scheduling a routine inspection.", email: "maintenance@josetech.ng", phone: "+234 803 000 0002" },
              { icon: Zap, name: "Emergency Support", desc: "For urgent electrical faults, power failures, or any emergency requiring immediate on-site attendance.", email: "+234 803 000 0000 (24/7)", phone: "WhatsApp same number" },
            ].map((d) => (
              <div key={d.name} className="card">
                <span className="flex h-11 w-11 items-center justify-center rounded bg-[#fce7ec] text-[#e5193a] mb-4"><d.icon className="h-5 w-5" /></span>
                <h3 className="font-extrabold text-[16px] mb-2">{d.name}</h3>
                <p className="text-[13px] text-[#555] leading-relaxed mb-4">{d.desc}</p>
                <div className="space-y-2 text-[13px]">
                  <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#e5193a]" /> {d.email}</div>
                  <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#e5193a]" /> {d.phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Commitments */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader eyebrow="Response Commitments" title="We Get Back to You Fast" sub="Our response time commitments — so you always know when to expect to hear from us." />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Mail, time: "<2hrs", label: "Email Enquiries", desc: "All emails received during business hours responded to within 2 hours." },
              { icon: Phone, time: "<1hr", label: "Phone & WhatsApp", desc: "Calls and WhatsApp messages answered or returned within the hour." },
              { icon: Zap, time: "45min", label: "Emergency Call-Out", desc: "Emergency teams dispatched within 45 minutes for Lagos Island calls." },
              { icon: Clock, time: "24hrs", label: "Site Visit & Quote", desc: "Site assessments scheduled within 24 hours of initial project enquiry." },
            ].map((r)=>(
              <div key={r.label} className="card text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fce7ec] text-[#e5193a] mb-4"><r.icon className="h-5 w-5" /></span>
                <div className="text-[#e5193a] font-black text-[28px]">{r.time}</div>
                <div className="font-extrabold mb-2">{r.label}</div>
                <p className="text-[13px] text-[#555] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social + Emergency */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-extrabold text-[18px] mb-2">Connect With Us Online</h3>
            <p className="text-[13px] text-[#555] mb-5">Follow us for project updates, electrical safety tips, and industry news. We are also available via direct message on all platforms.</p>
            <div className="flex flex-wrap gap-2">
              {[["Facebook","#1877f2"],["Instagram","#e1306c"],["LinkedIn","#0a66c2"],["WhatsApp","#25d366"]].map(([n,c])=>(
                <button key={n} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#eee] rounded text-[13px] font-bold">
                  <span className="h-5 w-5 rounded" style={{background:c}} />{n}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-[#e5193a] text-white p-8 rounded-md">
            <div className="flex items-center gap-2 mb-3 text-[12px] font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4" /> Electrical Emergency?
            </div>
            <p className="text-[14px] leading-relaxed mb-5">Power failure, electrical fault, or any urgent issue requiring immediate attention? Call our 24/7 emergency line right now — we dispatch within 45 minutes.</p>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15"><Phone className="h-5 w-5 text-white" /></span>
              <div className="text-[26px] font-black">+234 803 000 0000</div>
            </div>
            <p className="text-[12px] mt-3 opacity-90">Available 24 hours, 7 days a week including public holidays. WhatsApp also accepted on this number.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="eyebrow !text-[#777]">{children}</label>;
}
function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input className="w-full mt-2 px-3 py-2.5 border border-[#eee] rounded text-[14px]" placeholder={placeholder} />
    </div>
  );
}
function SelectField({ label }: { label: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <select className="w-full mt-2 px-3 py-2.5 border border-[#eee] rounded text-[14px] bg-white">
        <option>Select a service...</option>
        <option>Electrical Installation</option>
        <option>Electrical Maintenance</option>
        <option>Power Appliance Supply</option>
        <option>Emergency Support</option>
        <option>Technical Consultation</option>
        <option>Solar & Energy</option>
      </select>
    </div>
  );
}

function PanelSceneSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1280 600" preserveAspectRatio="xMidYMid slice">
      <rect width="1280" height="600" fill="#0a0a0a" />
      {/* breaker rows */}
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 12 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={500 + c * 50} y={80 + r * 60} width="40" height="48" rx="3" fill="#1a1a1a" stroke="#333" />
        ))
      )}
      {/* indicator lights */}
      {Array.from({ length: 24 }).map((_, i) => (
        <circle key={i} cx={520 + (i % 12) * 50} cy={420 + Math.floor(i / 12) * 20} r="4" fill={i % 3 === 0 ? "#e5193a" : "#2a8a3a"} />
      ))}
      {/* technician */}
      <g transform="translate(820,280)">
        <ellipse cx="0" cy="-60" rx="22" ry="20" fill="#e5193a" />
        <rect x="-25" y="-40" width="50" height="80" rx="6" fill="#e5193a" />
        <rect x="-30" y="-15" width="60" height="20" fill="#fff" opacity="0.3" />
      </g>
      {/* conduit pipes */}
      <line x1="1200" y1="50" x2="1200" y2="600" stroke="#2a2a2a" strokeWidth="14" />
      <line x1="1230" y1="50" x2="1230" y2="600" stroke="#2a2a2a" strokeWidth="14" />
    </svg>
  );
}

function MapSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
      <rect width="400" height="400" fill="#1a1a1a" />
      {Array.from({length:20}).map((_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*20} x2="400" y2={i*20} stroke="#333" strokeWidth="0.5" />
      ))}
      {Array.from({length:20}).map((_,i)=>(
        <line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="400" stroke="#333" strokeWidth="0.5" />
      ))}
      <path d="M0 180 L400 180" stroke="#444" strokeWidth="6" />
      <path d="M220 0 L220 400" stroke="#444" strokeWidth="6" />
      <path d="M60 60 L340 340" stroke="#3a3a3a" strokeWidth="3" />
    </svg>
  );
}
