import React from 'react';
import { Compass, CheckCircle2, Award, ShieldCheck, MapPin, Sparkles, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tastaData';

export const AboutTasta: React.FC = () => {
  const commitments = [
    {
      title: "100% Factory Pre-Fabrication",
      desc: "Our modular elements are cut and edge-banded with German CNC precision, cutting on-site noise, dust, and assembly time by 70%."
    },
    {
      title: "Transparent & Itemized Pricing",
      desc: "Zero hidden costs or sudden mid-project escalations. Every hinge, board, and square foot of veneer is detailed in advance."
    },
    {
      title: "Photorealistic 3D Before You Commit",
      desc: "Experience virtual 3D walkthroughs with exact laminate shades, lighting temps, and clearances before fabrication commences."
    },
    {
      title: "Daily WhatsApp Site Progress Updates",
      desc: "A dedicated Tasta project architect sends you daily visual logs, milestone reports, and quality inspection sign-offs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#090b0e] border-y border-[#181e28] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#c6a87d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#262f3f] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="Tasta Interior Studio Architectural Standards"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-black/30" />

              {/* Floating studio badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded bg-[#10141a]/95 border border-[#293242] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#c6a87d]/10 border border-[#c6a87d]/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#c6a87d]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#c6a87d] font-semibold">
                      Sindhi Colony Studio, Jalgaon
                    </div>
                    <div className="text-sm font-semibold text-[#f1ebe1]">
                      Where Design Meets Engineering
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#c6a87d] to-[#987b4f] p-4 rounded text-[#0c0e12] shadow-xl text-center hidden sm:block">
              <div className="font-cinzel text-2xl font-bold">150+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider">Dream Homes Delivered</div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
                <Compass className="w-3.5 h-3.5" />
                <span>About Tasta Interior & Architecture</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#f5efe4] tracking-tight">
                Crafting Spaces that Reflect Your Legacy & Comfort
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#a9a295] leading-relaxed">
              Founded in the heart of Jalgaon at New Joshi Colony, <strong className="text-[#e2dacb]">Tasta Interior</strong> was born to bridge the gap between aspirational luxury design and uncompromising structural execution. We eliminate the chaos of dealing with disjointed local carpenters, electricians, and painters by delivering a unified, turnkey architectural experience.
            </p>

            <p className="text-sm sm:text-base text-[#a9a295] leading-relaxed">
              Whether curating a quiet, minimal Japandi apartment on Ring Road, a high-traffic modular kitchen in Sindhi Colony, or a corporate executive suite in MIDC Jalgaon, our team orchestrates every millimeter with precision, premium European fittings, and genuine waterproof woods.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {commitments.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#11151c] border border-[#1f2633] space-y-1.5 hover:border-[#c6a87d]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#c6a87d] text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#c6a87d] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#959085] leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Jalgaon Proof & Address link */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 p-4 rounded bg-[#12161e] border border-[#212837]">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#c6a87d] shrink-0" />
                <div className="text-xs text-[#bcb5a7]">
                  <div className="font-semibold text-[#ede6db]">Studio Address in Jalgaon</div>
                  <div>Plot No. 3, New Joshi Colony, Near Sindhi Colony, Jalgaon 425001</div>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded text-xs font-semibold text-[#0e1117] bg-[#c6a87d] hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
