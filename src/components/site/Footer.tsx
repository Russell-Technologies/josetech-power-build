import { Link } from "@tanstack/react-router";
import { Bolt } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#bbb]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5193a]">
              <Bolt className="h-5 w-5 text-white" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-extrabold text-white">JOSETECH POWER CONSULTANT</div>
              <div className="text-[10px]">& APPLIANCES LIMITED · <span className="text-[#e5193a]">RC 8893411</span></div>
            </div>
          </div>
          <p className="text-[13px] leading-relaxed">
            Safe, reliable, and efficient electrical solutions for businesses across Nigeria. Certified. Trusted. On time.
          </p>
          <div className="flex gap-2 mt-5">
            {["F", "in", "IG", "X"].map((s) => (
              <span key={s} className="flex h-9 w-9 items-center justify-center bg-[#1a1a1a] text-white text-xs font-bold rounded">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-extrabold mb-4 text-[14px]">QUICK LINKS</h4>
          <ul className="space-y-2 text-[13px]">
            {[["/","Home"],["/about","About Us"],["/services","Our Services"],["/portfolio","Portfolio"],["/contact","Contact"],["/contact","Get a Quote"]].map(([to,l]) => (
              <li key={l}><Link to={to} className="hover:text-white">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold mb-4 text-[14px]">OUR SERVICES</h4>
          <ul className="space-y-2 text-[13px]">
            {["Electrical Installation","Electrical Maintenance","Power Appliance Supply","Emergency Support","Technical Consultation","Solar & Energy"].map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold mb-4 text-[14px]">CONTACT INFO</h4>
          <ul className="space-y-3 text-[13px]">
            <li className="flex gap-2"><span className="text-[#e5193a]">•</span>14 Adeyemi Lawson Street, Victoria Island, Lagos</li>
            <li className="flex gap-2"><span className="text-[#e5193a]">•</span>info@josetech.ng</li>
            <li className="flex gap-2"><span className="text-[#e5193a]">•</span>+234 803 000 0000</li>
            <li className="flex gap-2"><span className="text-[#e5193a]">•</span>Mon–Fri: 8am–6pm · Sat: 9am–2pm</li>
            <li className="text-[#e5193a] font-semibold">Emergency: 24/7</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#0a0a0a] text-[#888]">
        <div className="mx-auto max-w-[1280px] px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-[12px]">
          <div>© 2026 Josetech Power Consultant & Appliances Limited. All rights reserved. RC 8893411</div>
          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
