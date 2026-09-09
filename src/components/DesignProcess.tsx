import React from 'react';
import { Compass, Sparkles, Box, ShieldCheck, KeyRound, ArrowRight } from 'lucide-react';

interface DesignProcessProps {
  onOpenConsultation: () => void;
}

export const DesignProcess: React.FC<DesignProcessProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      num: "01",
      title: "Site Discovery & Consultation",
      tag: "Day 1 - 3",
      icon: <Compass className="w-5 h-5 text-[#c6a87d]" />,
      desc: "Our senior architect visits your flat or site in Jalgaon to take laser-accurate measurements, study natural sunlight vectors, and catalog your family's functional storage priorities."
    },
    {
      num: "02",
      title: "3D Photorealistic Modeling",
      tag: "Day 4 - 8",
      icon: <Sparkles className="w-5 h-5 text-[#c6a87d]" />,
      desc: "You receive high-resolution 4K 3D renders showing true material finishes, false ceiling shadow gaps, electrical switch positions, and bespoke furniture proportions."
    },
    {
      num: "03",
      title: "Material & Hardware Curation",
      tag: "Day 9 - 12",
      icon: <Box className="w-5 h-5 text-[#c6a87d]" />,
      desc: "Visit our studio in Sindhi Colony, Jalgaon to experience full-scale sample finishes: genuine BWP marine plywood, Calacatta quartz, anti-fingerprint acrylics, and Hafele German soft-close fittings."
    },
    {
      num: "04",
      title: "Factory Fabrication & Civil Execution",
      tag: "Day 13 - 38",
      icon: <ShieldCheck className="w-5 h-5 text-[#c6a87d]" />,
      desc: "All cabinetry is manufactured off-site with German CNC precision, avoiding messy cutting in your house. Concurrently, civil, plumbing, electrical, and false ceiling works proceed under daily supervision."
    },
    {
      num: "05",
      title: "Deep Clean & 45-Day Handover",
      tag: "Day 40 - 45",
      icon: <KeyRound className="w-5 h-5 text-[#c6a87d]" />,
      desc: "Following a rigorous 72-point quality inspection and comprehensive site deep clean, we hand over your keys alongside your 10-Year Modular Woodwork Warranty certificate."
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#0c0e13] border-b border-[#1b212c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
            <Compass className="w-3.5 h-3.5" />
            <span>The Tasta Methodology</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#f9f5ed]">
            A Seamless 5-Stage Journey from Blueprint to Reality
          </h2>
          <p className="text-sm sm:text-base text-[#9d9688]">
            We replace carpenter delays and uncertainty with German engineering, daily WhatsApp updates, and strict timeline adherence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#11141c] rounded-xl p-5 border border-[#212836] hover:border-[#c6a87d]/50 transition-all flex flex-col justify-between space-y-4 relative group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-2xl font-bold text-[#c6a87d]">
                    {step.num}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#171b25] text-[#b3ab9d] border border-[#242b39]">
                    {step.tag}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-lg bg-[#181d27] border border-[#273041] flex items-center justify-center group-hover:border-[#c6a87d]/40 transition-colors">
                  {step.icon}
                </div>

                <h3 className="font-cinzel font-bold text-sm text-[#f1ece1] group-hover:text-[#c6a87d] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#9a9386] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1a202c] text-[10px] font-semibold text-[#c6a87d]">
                Milestone Guaranteed
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#141822] via-[#12161f] to-[#161a24] border border-[#273042] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#f5efe4]">
              Ready to begin your architectural transformation?
            </h4>
            <p className="text-xs sm:text-sm text-[#9f988b]">
              Schedule a complimentary site measurement and floor plan assessment in Jalgaon.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded bg-[#c6a87d] text-[#0c0e13] font-bold text-xs hover:brightness-110 active:scale-[0.98] transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-[#c6a87d]/20"
          >
            <span>Schedule Site Visit in Jalgaon</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
