import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bolt,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Tool,
  Zap,
} from "@/components/site/Icons";
import { Breadcrumb, SectionHeader } from "@/components/site/Shared";
import { FadeUp, FadeUpSm, FadeUpText } from "@/components/site/Animations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Josetech Power Consultant" },
      {
        name: "description",
        content:
          "Get in touch with our team for electrical installation, maintenance, and 24/7 emergency support.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      {/* Hero — professional office background distinct from homepage */}
      <section className="relative bg-[#111] text-white overflow-hidden">
        <img
          src="/images/hero-slide2.png"
          alt="Clean modern commercial office with professionally installed LED ceiling grid"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/75 to-[#111]/40" />
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-20 relative">
          <Breadcrumb current="Contact" />
          <div className="eyebrow mb-3">Contact Us</div>
          <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1] max-w-lg">
            Get in Touch
            <br />
            With Our <span className="text-[#e5193a]">Team.</span>
          </h1>
          <p className="body-copy !text-[#bbb] mt-5 max-w-md">
            Have a project in mind or need expert advice? Our team is ready to respond — fast,
            professional, and committed to getting things right.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/15 rounded text-[13px]">
              <Phone className="h-4 w-4 text-[#e5193a]" /> +234 803 000 0000
            </span>
            <span className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/15 rounded text-[13px]">
              <Mail className="h-4 w-4 text-[#e5193a]" /> info@josetech.ng
            </span>
            <span className="flex items-center gap-2 px-4 py-2.5 bg-[#e5193a]/20 border border-[#e5193a]/40 rounded text-[13px]">
              <Zap className="h-4 w-4 text-[#e5193a]" /> Emergency: 24/7
            </span>
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
          ].map((q, i) => (
            <div
              key={i}
              className={`px-6 py-6 flex items-center gap-4 ${i > 0 ? "md:border-l border-white/20" : ""}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded bg-white/15">
                <q.icon className="h-5 w-5" />
              </span>
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
          <FadeUpText>
            <div>
              <div className="eyebrow mb-3">Start a Conversation</div>
              <h2 className="section-title">
                Let's Talk About
                <br />
                Your <span className="text-[#e5193a]">Next Project.</span>
              </h2>
              <p className="body-copy mt-4 max-w-md">
                Whether it's a new electrical installation, a maintenance contract, an emergency
                fault, or a technical consultation — fill in the form and our team will respond
                within 2 hours during business hours.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "info@josetech.ng · projects@josetech.ng" },
                  {
                    icon: Phone,
                    label: "Phone / WhatsApp",
                    value: "+234 803 000 0000 · +234 802 000 0000",
                  },
                  {
                    icon: MapPin,
                    label: "Office Address",
                    value: "14 Adeyemi Lawson Street, Victoria Island, Lagos",
                  },
                  {
                    icon: Clock,
                    label: "Working Hours",
                    value: "Mon–Fri: 8am–6pm · Sat: 9am–2pm",
                    note: "Emergency support: 24/7",
                  },
                ].map((c, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white border border-[#eee] text-[#e5193a]">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="eyebrow !text-[#e5193a] mb-1">{c.label}</div>
                      <div className="text-[14px] font-semibold">{c.value}</div>
                      {c.note && (
                        <div className="text-[#e5193a] text-[12px] font-bold">{c.note}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="my-6 flex items-center gap-3">
                <div className="flex-1 h-px bg-[#ddd]" />
                <span className="text-[11px] text-[#777] uppercase tracking-wider">
                  Or find us on
                </span>
                <div className="flex-1 h-px bg-[#ddd]" />
              </div>
              <div className="flex gap-2">
                {[
                  ["Facebook", "#1877f2"],
                  ["Instagram", "#e1306c"],
                  ["LinkedIn", "#0a66c2"],
                ].map(([n, c]) => (
                  <button
                    key={n}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[#eee] rounded text-[13px] font-bold"
                  >
                    <span className="h-5 w-5 rounded" style={{ background: c }} />
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </FadeUpText>

          <FadeUp delay={150}>
            <form
              className="bg-white rounded-md p-8 shadow-xl border border-[#eee]"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-extrabold text-[20px]">Send Us a Message</h3>
              <p className="text-[13px] text-[#777] mt-1 mb-6">
                We typically respond within 2 business hours.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Field label="First Name" placeholder="John" />
                <Field label="Last Name" placeholder="Okafor" />
                <Field label="Email Address" placeholder="john@company.com" />
                <Field label="Phone Number" placeholder="+234 000 000 0000" />
                <div className="col-span-2">
                  <Field label="Company / Organisation" placeholder="Your company name" />
                </div>
                <SelectField label="Service Needed" />
                <Field label="Project Location" placeholder="City / State" />
                <div className="col-span-2">
                  <Label>Message</Label>
                  <textarea
                    className="w-full mt-2 px-3 py-2.5 border border-[#eee] rounded text-[14px] min-h-[110px]"
                    placeholder="Describe your project or enquiry in detail..."
                  />
                </div>
              </div>
              <button type="submit" className="mt-6 w-full btn-primary justify-center">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-[11px] text-[#888] mt-3 flex items-center gap-2">
                <Shield className="h-3 w-3" /> Your information is kept confidential and never
                shared with third parties.
              </p>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeader
            eyebrow="Departments"
            title="Who Should You Contact?"
            sub="Reach the right team directly to get a faster, more focused response to your enquiry."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Tool,
                name: "New Projects & Quotes",
                desc: "For new installation requests, project quotes, tender submissions, or discussing a new electrical job.",
                email: "projects@josetech.ng",
                phone: "+234 803 000 0001",
              },
              {
                icon: Shield,
                name: "Maintenance Contracts",
                desc: "For ongoing maintenance retainers, annual service agreements, or scheduling a routine inspection.",
                email: "maintenance@josetech.ng",
                phone: "+234 803 000 0002",
              },
              {
                icon: Zap,
                name: "Emergency Support",
                desc: "For urgent electrical faults, power failures, or any emergency requiring immediate on-site attendance.",
                email: "+234 803 000 0000 (24/7)",
                phone: "WhatsApp same number",
              },
            ].map((d, i) => (
              <FadeUp key={d.name} delay={i * 100}>
                <div className="card h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded bg-[#fce7ec] text-[#e5193a] mb-4">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-extrabold text-[16px] mb-2">{d.name}</h3>
                  <p className="text-[13px] text-[#555] leading-relaxed mb-4">{d.desc}</p>
                  <div className="space-y-2 text-[13px]">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-[#e5193a]" /> {d.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-[#e5193a]" /> {d.phone}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <FadeUp delay={0}>
            <div className="bg-[#e5193a] text-white p-8 rounded-md max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-3 text-[12px] font-bold uppercase tracking-wider">
                <Zap className="h-4 w-4 animate-pulse" /> Electrical Emergency?
              </div>
              <h3 className="text-[24px] font-black mb-3">
                Urgent Electrical Issues? We dispatch within 45 minutes.
              </h3>
              <p className="text-[14px] leading-relaxed mb-6 max-w-xl mx-auto">
                Power failure, electrical fault, or any urgent issue requiring immediate attention?
                Call our 24/7 emergency line right now for rapid response on Lagos Island and
                surroundings.
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <Phone className="h-5 w-5 text-white" />
                </span>
                <div className="text-[26px] font-black">+234 803 000 0000</div>
              </div>
              <p className="text-[12px] mt-4 opacity-90">
                Available 24 hours, 7 days a week including public holidays. WhatsApp also accepted
                on this number.
              </p>
            </div>
          </FadeUp>
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
      <input
        className="w-full mt-2 px-3 py-2.5 border border-[#eee] rounded text-[14px]"
        placeholder={placeholder}
      />
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
        <option>Solar &amp; Energy</option>
      </select>
    </div>
  );
}
