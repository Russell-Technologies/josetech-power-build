import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bolt } from "./Icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#111] text-white" style={{ height: 68 }}>
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5193a]">
            <Bolt className="h-5 w-5 text-white" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-extrabold tracking-wide">JOSETECH POWER CONSULTANT</span>
            <span className="text-[10px] text-[#bbb]">& APPLIANCES LIMITED · <span className="text-[#e5193a]">RC 8893411</span></span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#bbb]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-white"
              activeProps={{ className: "text-[#e5193a]" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5">Get a Quote</Link>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a0a] px-6 py-4 flex flex-col gap-3 text-[#bbb]">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1" activeProps={{ className: "text-[#e5193a]" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
