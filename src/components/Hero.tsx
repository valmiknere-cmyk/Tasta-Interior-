import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock, Sparkles, MapPin, Calculator } from 'lucide-react';
import heroImg from '../assets/images/tasta_luxury_hero_1788965846108.jpg';
import { BUSINESS_INFO } from '../data/tastaData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-24">
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Tasta Interior Luxury Living Room Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic dark luxury gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f]/95 via-[#0c0e13]/85 to-[#0b0e14]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-[#0a0c0f]/80" />
        {/* Subtle warm architectural glow */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#c6a87d]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Top Location & Rating Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171b23]/90 border border-[#2b3444] text-xs font-medium text-[#d9d2c5] backdrop-blur-md shadow-lg shadow-black/40">
              <span className="flex items-center gap-1 text-[#f39c12]">
                <Star className="w-3.5 h-3.5 fill-[#f39c12]" />
                <span className="font-bold text-[#f5ebd7]">{BUSINESS_INFO.rating}</span>
              </span>
              <span className="text-[#495469]">|</span>
              <span className="flex items-center gap-1.5 text-[#c6a87d]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sindhi Colony, Jalgaon</span>
              </span>
              <span className="text-[#495469]">|</span>
              <span className="text-[#9ea3ae] hidden sm:inline">Premier Architectural Studio</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fbf8f3] leading-[1.15]">
                Bespoke Interiors <br />
                <span className="bg-gradient-to-r from-[#f1e6d4] via-[#c6a87d] to-[#deb887] bg-clip-text text-transparent">
                  Crafted for Distinction
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#b8b2a5] max-w-2xl font-light leading-relaxed">
                Transforming residential flats, penthouses, German modular kitchens, and commercial showrooms across Jalgaon and Khandesh with turnkey architectural precision.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded bg-gradient-to-r from-[#c6a87d] via-[#be9d70] to-[#aa895c] text-[#0d0f13] font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-[#c6a87d]/20"
              >
                <Sparkles className="w-4 h-4 text-[#0d0f13]" />
                <span>Book Free Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="px-6 py-3.5 rounded bg-[#151921]/90 hover:bg-[#1c222d] border border-[#2d3646] hover:border-[#c6a87d]/50 text-[#e0d8cc] text-sm font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Calculator className="w-4 h-4 text-[#c6a87d]" />
                <span>Calculate Interior Budget</span>
              </a>

              <a
                href="#projects"
                className="px-4 py-3.5 text-xs text-[#a9a296] hover:text-[#c6a87d] transition-colors text-center font-medium"
              >
                View 150+ Projects →
              </a>
            </div>

            {/* Value pillars */}
            <div className="pt-6 border-t border-[#1d232e] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-cinzel text-[#f4efe6]">150+</div>
                <div className="text-xs text-[#8f897d] uppercase tracking-wider">Luxury Homes Handed Over</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-cinzel text-[#c6a87d]">45 Days</div>
                <div className="text-xs text-[#8f897d] uppercase tracking-wider">Guaranteed Handover</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-cinzel text-[#f4efe6]">10 Years</div>
                <div className="text-xs text-[#8f897d] uppercase tracking-wider">Modular Woodwork Warranty</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-cinzel text-[#c6a87d]">100%</div>
                <div className="text-xs text-[#8f897d] uppercase tracking-wider">3D Photorealistic Previews</div>
              </div>
            </div>
          </div>

          {/* Right Floating Architectural Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#11141b]/90 border border-[#262f3f] rounded-lg p-5 backdrop-blur-xl shadow-2xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#c6a87d]/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#1f2633]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#c7bfae] font-medium">Active Studio in Jalgaon</span>
                </div>
                <span className="text-[#888275]">Jalgaon, MH</span>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-[#c6a87d] uppercase tracking-widest font-semibold">
                  Featured Case Study
                </div>
                <h3 className="font-cinzel text-lg font-bold text-[#ede7db]">
                  The Solitaire Penthouse
                </h3>
                <p className="text-xs text-[#9d978a] leading-relaxed">
                  Turnkey residential design featuring fluted Italian marble, smart home automation, and German modular cabinetry.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-[#161a22] border border-[#222936]">
                  <div className="text-[#7f7a70] text-[10px] uppercase">Location</div>
                  <div className="text-[#e2dbce] font-medium mt-0.5">Ring Road, Jalgaon</div>
                </div>
                <div className="p-2.5 rounded bg-[#161a22] border border-[#222936]">
                  <div className="text-[#7f7a70] text-[10px] uppercase">Timeline</div>
                  <div className="text-[#c6a87d] font-semibold mt-0.5">65 Days Execution</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#projects"
                  className="w-full py-2 text-xs font-semibold text-center text-[#c6a87d] bg-[#1a202a] hover:bg-[#222a38] border border-[#c6a87d]/30 rounded block transition-colors"
                >
                  Inspect Full Case Study & Materials
                </a>
              </div>
            </div>

            {/* Quick Guarantees Badge */}
            <div className="mt-3 flex items-center justify-between px-4 py-2.5 rounded bg-[#101319]/80 border border-[#212734] text-[11px] text-[#a49e91]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c6a87d]" />
                Zero Cost Escalation
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c6a87d]" />
                On-Time Handover
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
