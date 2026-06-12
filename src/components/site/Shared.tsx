import React, { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "./Icons";
import { useCountUp } from "@/hooks/useScrollAnimation";
import { FadeUpSm, FadeUp } from "./Animations";

// ─── Count-up stat cell ───────────────────────────────────────
function StatCell({ value, label, bordered }: { value: string; label: string; bordered: boolean }) {
  const { ref, display } = useCountUp(value);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`px-6 py-8 text-center ${bordered ? "md:border-l border-white/20" : ""}`}
    >
      <div className="text-[32px] font-black leading-none">{display}</div>
      <div className="text-[11px] font-bold uppercase tracking-[0.14em] mt-2">{label}</div>
    </div>
  );
}

export function StatsBar({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="bg-[#e5193a] text-white">
      <div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4">
        {items.map((s, i) => (
          <StatCell key={i} value={s.value} label={s.label} bordered={i > 0} />
        ))}
      </div>
    </section>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="text-[12px] text-[#bbb] mb-6">
      <Link to="/" className="hover:text-white">
        Home
      </Link>{" "}
      <span className="text-[#555] mx-1">›</span> <span className="text-[#e5193a]">{current}</span>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow mb-3">{children}</div>;
}

export function CTASection({
  title,
  accent,
  sub,
  primary = "Get a Free Quote",
  secondary,
}: {
  title: string;
  accent?: string;
  sub?: string;
  primary?: string;
  secondary?: string;
}) {
  return (
    <section className="bg-[#111] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <FadeUpSm>
          <div>
            <h2 className="text-[32px] md:text-[36px] font-black leading-tight">
              {title} {accent && <span className="text-[#e5193a]">{accent}</span>}
            </h2>
            {sub && <p className="body-copy !text-[#bbb] mt-4 max-w-xl">{sub}</p>}
          </div>
        </FadeUpSm>
        <FadeUp delay={200}>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact" className="btn-primary">
              {primary} <ArrowRight className="h-4 w-4" />
            </Link>
            {secondary && (
              <Link to="/services" className="btn-ghost">
                {secondary} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  accent,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center max-w-2xl mx-auto" : ""} mb-12`}>
      <FadeUpSm delay={0}>
        <div className="eyebrow mb-3">{eyebrow}</div>
      </FadeUpSm>
      <FadeUpSm delay={150}>
        <h2 className="section-title">
          {title} {accent && <span className="text-[#e5193a]">{accent}</span>}
        </h2>
        {sub && <p className="body-copy mt-4">{sub}</p>}
      </FadeUpSm>
    </div>
  );
}
