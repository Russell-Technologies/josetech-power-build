import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from "react";

type AnimProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number; // ms
  as?: ElementType;
};

function makeAnimComp(animClass: string) {
  return function AnimComp({
    children,
    className = "",
    style,
    delay = 0,
    as: Tag = "div",
  }: AnimProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);

    useEffect(() => {
      const el = ref.current as HTMLElement | null;
      if (!el) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        el.classList.add("anim-visible");
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const t = setTimeout(() => el.classList.add("anim-visible"), delay);
            observer.disconnect();
            // Return cleanup inside effect cleanup below
            void t;
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, [delay]);

    return (
      <Tag ref={ref} className={`${animClass} ${className}`} style={style}>
        {children}
      </Tag>
    );
  };
}

export const FadeUp = makeAnimComp("anim-fade-up");
export const FadeUpSm = makeAnimComp("anim-fade-up-sm");
export const SlideLeft = makeAnimComp("anim-slide-left");
export const SlideRight = makeAnimComp("anim-slide-right");
export const FadeUpText = makeAnimComp("anim-fade-up-text");

/** Section heading that animates eyebrow first, then h2 150ms later */
export function AnimatedSectionHeader({
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
