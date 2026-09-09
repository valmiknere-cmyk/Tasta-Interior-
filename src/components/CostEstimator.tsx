import React, { useState } from 'react';
import { Calculator, Check, Sparkles, Send, CalendarCheck, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tastaData';

interface CostEstimatorProps {
  onOpenConsultationWithData: (data: { bhk: string; scope: string; tier: string; estimate: string }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenConsultationWithData }) => {
  const [bhk, setBhk] = useState<'1bhk' | '2bhk' | '3bhk' | '4bhk' | 'commercial'>('2bhk');
  const [scope, setScope] = useState<'turnkey' | 'kitchen_wardrobe' | 'living_ceiling'>('turnkey');
  const [tier, setTier] = useState<'standard' | 'premium' | 'ultra'>('premium');

  // Calculation parameters based on Indian / Jalgaon interior pricing averages
  const baseCostMultiplier: Record<string, number> = {
    '1bhk': 3.8,
    '2bhk': 6.2,
    '3bhk': 9.5,
    '4bhk': 15.0,
    'commercial': 7.5,
  };

  const scopeMultiplier: Record<string, number> = {
    'turnkey': 1.0,
    'kitchen_wardrobe': 0.65,
    'living_ceiling': 0.45,
  };

  const tierMultiplier: Record<string, number> = {
    'standard': 0.85,
    'premium': 1.15,
    'ultra': 1.65,
  };

  const calculateEstimate = () => {
    const raw = baseCostMultiplier[bhk] * scopeMultiplier[scope] * tierMultiplier[tier];
    const low = Math.round(raw * 0.9 * 10) / 10;
    const high = Math.round(raw * 1.15 * 10) / 10;
    return { low, high, string: `₹${low}L - ₹${high} Lakhs` };
  };

  const getTimeline = () => {
    if (scope === 'living_ceiling') return '20 - 25 Days';
    if (scope === 'kitchen_wardrobe') return '25 - 35 Days';
    if (bhk === '1bhk' || bhk === '2bhk') return '35 - 45 Days';
    if (bhk === '3bhk') return '45 - 55 Days';
    return '55 - 65 Days';
  };

  const currentEstimate = calculateEstimate();
  const timeline = getTimeline();

  const handleWhatsAppSend = () => {
    const msg = `Hi Tasta Interior! I used your online cost estimator for Jalgaon:
- Property: ${bhk.toUpperCase()}
- Scope: ${scope}
- Tier: ${tier.toUpperCase()}
- Estimated Range: ${currentEstimate.string}
- Expected Timeline: ${timeline}
Please share an itemized floor plan quotation.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 bg-[#090c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Jalgaon Price Calculator</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#fbf7f1]">
            Estimate Your Interior Budget in 30 Seconds
          </h2>
          <p className="text-sm sm:text-base text-[#9f988b]">
            Get an instant, itemized estimate based on actual factory rates, authentic BWP marine plywood, and German hardware in Jalgaon.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 bg-[#11141b] rounded-xl p-6 sm:p-8 border border-[#212836] shadow-xl space-y-8">
            
            {/* Step 1: BHK / Property Type */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-[#c6a87d] font-semibold flex items-center gap-2">
                <span>01. Select Property Configuration</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: '1bhk', label: '1 BHK', desc: '~600 sqft' },
                  { id: '2bhk', label: '2 BHK', desc: '~950 sqft' },
                  { id: '3bhk', label: '3 BHK', desc: '~1,400 sqft' },
                  { id: '4bhk', label: '4 BHK / Villa', desc: '~2,500+ sqft' },
                  { id: 'commercial', label: 'Commercial', desc: 'Retail / Office' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBhk(item.id as any)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      bhk === item.id
                        ? 'border-[#c6a87d] bg-[#1a202c] text-[#f4eee4] shadow-md shadow-[#c6a87d]/10 ring-1 ring-[#c6a87d]'
                        : 'border-[#222938] bg-[#141820] text-[#9f998d] hover:border-[#333d52] hover:text-[#d9d3c7]'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                    <div className="text-[10px] text-[#787267]">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Interior Scope */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-[#c6a87d] font-semibold flex items-center gap-2">
                <span>02. Select Scope of Work</span>
              </label>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'turnkey',
                    title: 'Full Home Turnkey',
                    subtitle: 'Kitchen, wardrobes, ceiling, paint, electricals & styling',
                  },
                  {
                    id: 'kitchen_wardrobe',
                    title: 'Modular Kitchen & Storage',
                    subtitle: 'Kitchen + bedroom wardrobes + vanity units',
                  },
                  {
                    id: 'living_ceiling',
                    title: 'Living & False Ceiling',
                    subtitle: 'TV unit, ambient lighting, fluted panels & sofa wall',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScope(item.id as any)}
                    className={`p-3.5 rounded-lg border text-left transition-all ${
                      scope === item.id
                        ? 'border-[#c6a87d] bg-[#1a202c] text-[#f4eee4] shadow-md ring-1 ring-[#c6a87d]'
                        : 'border-[#222938] bg-[#141820] text-[#9f998d] hover:border-[#333d52] hover:text-[#d9d3c7]'
                    }`}
                  >
                    <div className="font-semibold text-xs text-[#ece5d9]">{item.title}</div>
                    <div className="text-[11px] text-[#868074] mt-1 leading-snug">{item.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Grade & Finish */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-[#c6a87d] font-semibold flex items-center gap-2">
                <span>03. Material & Hardware Specification</span>
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'standard',
                    title: 'Classic Contemporary',
                    badge: 'Value & Durable',
                    desc: 'MR Grade Ply, anti-scratch 1mm matte laminates, standard soft-close hardware.',
                  },
                  {
                    id: 'premium',
                    title: 'Premium Luxury (Recommended)',
                    badge: 'Most Popular in Jalgaon',
                    desc: 'IS:710 Marine Grade BWP Plywood, Hafele/Hettich fittings, acrylic kitchen & quartz tops.',
                  },
                  {
                    id: 'ultra',
                    title: 'Ultra Architectural Signature',
                    badge: 'Penthouse Grade',
                    desc: 'HDHMR core, natural wood veneers with PU polish, Italian Statuario marble & motorized Blum Servo-Drive.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id as any)}
                    className={`p-3.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                      tier === item.id
                        ? 'border-[#c6a87d] bg-[#1c222e] text-[#f4eee4] shadow-lg ring-1 ring-[#c6a87d]'
                        : 'border-[#222938] bg-[#141820] text-[#9f998d] hover:border-[#333d52] hover:text-[#d9d3c7]'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#c6a87d] bg-[#272017] px-2 py-0.5 rounded border border-[#c6a87d]/30">
                        {item.badge}
                      </span>
                      <div className="font-bold text-xs text-[#ece5d9] mt-2">{item.title}</div>
                      <div className="text-[11px] text-[#8a8478] mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Estimated Summary Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#12161f] rounded-xl border border-[#2c3648] p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#c6a87d]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-[#202735]">
                <span className="text-xs uppercase tracking-wider text-[#c6a87d] font-bold">
                  Estimated Project Investment
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#1c222e] text-[#a49f92] border border-[#283142]">
                  Jalgaon Region
                </span>
              </div>

              {/* Big Price Tag */}
              <div className="space-y-1">
                <div className="font-cinzel text-3xl sm:text-4xl font-bold text-[#fbf7f1]">
                  {currentEstimate.string}
                </div>
                <p className="text-xs text-[#9c9689]">
                  Estimated ballpark for complete execution including materials, factory fabrication, hardware & labor.
                </p>
              </div>

              {/* Handover & Timeline info */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-[#161a24] border border-[#222938] text-xs">
                <div>
                  <div className="text-[#7d776c] text-[10px] uppercase font-medium">Estimated Timeline</div>
                  <div className="text-[#f1ece1] font-bold mt-0.5">{timeline}</div>
                </div>
                <div>
                  <div className="text-[#7d776c] text-[10px] uppercase font-medium">Warranty Coverage</div>
                  <div className="text-[#c6a87d] font-bold mt-0.5">10-Year Guarantee</div>
                </div>
              </div>

              {/* Cost Composition Breakdown */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-[#ddd7cb] flex items-center justify-between">
                  <span>Estimated Budget Allocation</span>
                  <span className="text-[10px] text-[#8e897d]">Factory Direct Rates</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#9f998d]">
                  <div className="flex justify-between text-[11px]">
                    <span>Custom Woodwork & Modular Cabinets</span>
                    <span className="font-semibold text-[#ddd6c8]">55%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#1b212c] overflow-hidden">
                    <div className="h-full bg-[#c6a87d] rounded-full" style={{ width: '55%' }} />
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <span>Modular Kitchen Stone, Chimney & Hardware</span>
                    <span className="font-semibold text-[#ddd6c8]">20%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#1b212c] overflow-hidden">
                    <div className="h-full bg-[#b59567] rounded-full" style={{ width: '20%' }} />
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <span>False Ceiling, Track Lights & Wiring</span>
                    <span className="font-semibold text-[#ddd6c8]">15%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#1b212c] overflow-hidden">
                    <div className="h-full bg-[#8c7450] rounded-full" style={{ width: '15%' }} />
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <span>Premium Wall Emulsion & PU Polishing</span>
                    <span className="font-semibold text-[#ddd6c8]">10%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#1b212c] overflow-hidden">
                    <div className="h-full bg-[#5f4d34] rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenConsultationWithData({
                    bhk: bhk.toUpperCase(),
                    scope,
                    tier: tier.toUpperCase(),
                    estimate: currentEstimate.string
                  })}
                  className="w-full py-3.5 rounded bg-gradient-to-r from-[#c6a87d] via-[#bfa072] to-[#aa895c] text-[#0d0f13] font-bold text-xs hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6a87d]/20"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Lock In This Estimate & Book Site Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 rounded bg-[#161b23] hover:bg-[#1e2430] border border-[#2f394d] hover:border-[#c6a87d]/60 text-[#c6a87d] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Share Floor Plan on WhatsApp for Exact Quote</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#7d786e] pt-1">
                <Info className="w-3.5 h-3.5 text-[#c6a87d] shrink-0" />
                <span>Estimate includes complimentary 3D photorealistic design renders upon booking.</span>
              </div>

            </div>

            {/* Zero Escalation Guarantee Badge */}
            <div className="p-4 rounded-lg bg-[#10131a] border border-[#1f2633] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c6a87d] shrink-0" />
              <div className="text-xs text-[#a9a397]">
                <strong className="text-[#f1ece1]">Tasta Zero-Escalation Contract:</strong> Once the final quotation is signed after 3D approvals, your price is locked. Zero surprises.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
