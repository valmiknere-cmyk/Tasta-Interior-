import React, { useState } from 'react';
import { Home, ChefHat, Bed, Briefcase, Layers, Wrench, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/tastaData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultationWithService }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-5 h-5 text-[#c6a87d]" />,
    ChefHat: <ChefHat className="w-5 h-5 text-[#c6a87d]" />,
    Bed: <Bed className="w-5 h-5 text-[#c6a87d]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#c6a87d]" />,
    Layers: <Layers className="w-5 h-5 text-[#c6a87d]" />,
    Wrench: <Wrench className="w-5 h-5 text-[#c6a87d]" />,
  };

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 bg-[#0b0e13] border-b border-[#1b212c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Architectural Solutions</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#fbf7f0] tracking-tight">
            End-to-End Interior Services in Jalgaon
          </h2>
          <p className="text-sm sm:text-base text-[#9d978a]">
            From conceptual floor blueprints to factory fabrication and on-site handover, we take full accountability for your space.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-8 gap-2 scrollbar-none border-b border-[#1f2633]">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-lg whitespace-nowrap transition-all flex items-center gap-2.5 border-b-2 ${
                activeTab === service.id
                  ? 'border-[#c6a87d] bg-[#141822] text-[#f4efe5]'
                  : 'border-transparent text-[#979184] hover:text-[#dcd5c7] hover:bg-[#101319]'
              }`}
            >
              {iconMap[service.icon]}
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-[#12161f] rounded-xl border border-[#232b3a] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c6a87d] uppercase tracking-wider">
                  <span>Specialized Execution Service</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#f8f4ee]">
                  {currentService.title}
                </h3>
                <p className="text-sm text-[#b8b1a3] font-light leading-relaxed">
                  {currentService.subtitle}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-[#c6a87d] font-semibold">
                  Engineering Standards & Warranties
                </div>
                <div className="grid gap-2.5">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d5cebf]">
                      <CheckCircle2 className="w-4 h-4 text-[#c6a87d] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Chips */}
              <div className="pt-2 space-y-2">
                <div className="text-xs uppercase tracking-widest text-[#7f796d] font-medium">
                  What You Receive
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentService.deliverables.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded bg-[#181d28] border border-[#273041] text-xs text-[#ded8ca]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultationWithService(currentService.title)}
                  className="px-6 py-3 rounded bg-gradient-to-r from-[#c6a87d] to-[#aa895c] text-[#0d0f13] text-xs sm:text-sm font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg shadow-[#c6a87d]/20"
                >
                  <span>Book Consultation for {currentService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#projects"
                  className="px-4 py-3 rounded border border-[#283244] hover:border-[#c6a87d]/50 text-xs text-[#a9a294] hover:text-[#f4efe5] transition-colors"
                >
                  View Related Projects →
                </a>
              </div>

            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border border-[#283244] shadow-2xl group h-80 sm:h-[400px]">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161f]/90 via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-[#0d1015]/85 border border-[#263040] backdrop-blur-md">
                  <div className="text-[11px] text-[#c6a87d] font-bold uppercase tracking-wider">
                    Jalgaon & Khandesh Region
                  </div>
                  <div className="text-xs text-[#ddd7cb] mt-0.5">
                    100% Quality Inspected & Certified Hardware
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
