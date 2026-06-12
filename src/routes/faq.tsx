import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Star, Shield, Tool, Users } from "@/components/site/Icons";
import { Breadcrumb, CTASection, SectionHeader, StatsBar } from "@/components/site/Shared";
import { FadeUp, FadeUpSm } from "@/components/site/Animations";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Josetech Power Consultant & Appliances" },
      {
        name: "description",
        content:
          "Find answers to frequently asked questions about Josetech's electrical installation, maintenance, solar, and emergency services.",
      },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    category: "General",
    q: "How quickly can you respond to an emergency fault?",
    a: "Our emergency response team is available 24/7. For clients in Lagos, we typically arrive on-site within 1–2 hours of an emergency call. Response times for other cities may vary — contact us directly for coverage in your area.",
  },
  {
    category: "Certifications",
    q: "Are your technicians certified and insured?",
    a: "Yes. All our technicians hold recognised electrical certifications and are covered under our company's professional liability insurance. We comply fully with COREN and Nigerian electrical safety standards on every job.",
  },
  {
    category: "Warranty",
    q: "Do you provide a warranty on your work?",
    a: "All our installations come with a minimum 12-month workmanship warranty. Supplied equipment carries the manufacturer's standard warranty, which we help you register and manage.",
  },
  {
    category: "Industrial",
    q: "Can you handle large-scale industrial projects?",
    a: "Yes. We have successfully delivered electrical projects for warehouses, manufacturing plants, multi-storey office buildings, and hotel complexes. Get in touch with your project scope and we will assign the right team and resources.",
  },
  {
    category: "Pricing",
    q: "How is project pricing structured?",
    a: "We provide detailed written quotations with breakdowns covering labour, materials, and timeline. There are no hidden charges. For maintenance retainers, we offer monthly and annual packages tailored to your facility size.",
  },
  {
    category: "Location",
    q: "Do you work outside Lagos?",
    a: "Yes. While our primary base is Lagos, we regularly complete projects in Abuja, Port Harcourt, Ibadan, and other major cities. Travel and logistics costs are itemised transparently in the project quote.",
  },
  {
    category: "General",
    q: "Do you offer residential electrical services?",
    a: "While our main focus is on commercial, corporate, and industrial systems, we also handle premium residential installations and large-scale estate electrification projects.",
  },
  {
    category: "General",
    q: "How do I request a quote or project assessment?",
    a: "You can easily request a quote by filling out our online contact form, sending us an email at projects@josetech.ng, or calling our customer line at +234 803 000 0000.",
  },
];

const categories = [
  "All",
  "General",
  "Certifications",
  "Warranty",
  "Industrial",
  "Pricing",
  "Location",
];

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* FAQ Hero */}
      <section className="bg-[#111] text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-20 relative z-10">
          <Breadcrumb current="FAQ" />
          <div className="eyebrow mb-3">Help Center</div>
          <h1 className="text-[44px] md:text-[48px] font-black leading-[1.1]">
            Frequently Asked <span className="text-[#e5193a]">Questions.</span>
          </h1>
          <p className="body-copy !text-[#bbb] mt-5 max-w-lg">
            Find quick answers to common questions about our electrical installations, maintenance,
            warranties, and support options.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="bg-[#f7f7f7] border-b border-[#eee] sticky top-0 z-20 shadow-sm">
        <div className="mx-auto max-w-[1280px] px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-bold text-[#777] uppercase tracking-wider mr-2">
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[12px] font-bold transition-colors ${
                  activeCategory === cat
                    ? "bg-[#e5193a] text-white"
                    : "bg-white border border-[#eee] text-[#555] hover:border-[#ddd]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-[280px]">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-[#eee] rounded text-[13px] focus:outline-none focus:border-[#e5193a]"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          {filteredFaqs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredFaqs.map((faq, i) => (
                <FadeUp key={faq.q} delay={i * 50}>
                  <div className="card h-full hover:border-[#ccc] transition-all duration-200">
                    <div className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e5193a] text-white font-extrabold text-sm">
                        ?
                      </span>
                      <div>
                        <div className="font-extrabold text-[15px] mb-2">{faq.q}</div>
                        <p className="text-[13px] text-[#555] leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#777] text-[15px] font-semibold">
                No FAQs found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-[#e5193a] font-bold text-[13px] underline"
              >
                Reset filters & search
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        accent="Get in Touch."
        sub="Our team is available 24/7 to answer any technical questions or discuss your project specifications."
        secondary="Contact Us"
      />
    </div>
  );
}
