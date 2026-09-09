import React, { useState } from 'react';
import { Sparkles, MapPin, Clock, Maximize2, X, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, BUSINESS_INFO } from '../data/tastaData';
import { Project } from '../types';

interface PortfolioGalleryProps {
  onOpenConsultation: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'residential', label: 'Luxury Residences' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'bedroom', label: 'Master Suites' },
    { id: 'commercial', label: 'Commercial & Retail' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#0b0d11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executed Architectural Portfolio</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#fbf7f0] tracking-tight">
              A Selection of Finished Spaces Across Jalgaon
            </h2>
            <p className="text-sm sm:text-base text-[#a39c90]">
              Explore our realized transformations, from penthouse living suites to space-optimized modular kitchens engineered for modern families.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#c6a87d] text-[#0d0f13] shadow-md shadow-[#c6a87d]/20 font-semibold'
                    : 'bg-[#141820] text-[#aba498] hover:text-[#f3ede3] hover:bg-[#1b212c] border border-[#212837]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="group bg-[#11141b] rounded-lg overflow-hidden border border-[#212836] hover:border-[#c6a87d]/60 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Card Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#161a22]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141b] via-transparent to-black/20" />
                
                {/* Top badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#0d0f14]/85 border border-[#2a3344] backdrop-blur-md text-[11px] font-semibold text-[#c6a87d] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Inspect Overlay Trigger */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#0c0e12]/80 border border-[#2c3547] text-[#e8e2d5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4 text-[#c6a87d]" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8f887b]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#c6a87d]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c6a87d]" />
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#f5efe4] group-hover:text-[#c6a87d] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#a09a8e] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Materials & Footer */}
                <div className="pt-3 border-t border-[#1d232f] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.slice(0, 2).map((mat, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#161a23] text-[#b0a99c] border border-[#232a38]">
                        {mat}
                      </span>
                    ))}
                    {project.materials.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-[#7e7970]">
                        +{project.materials.length - 2} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-[#c6a87d] flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8c867b]">
            Have a custom floor plan in Jalgaon? We convert your 2D blue-print into realistic 3D renderings within 4 business days.
          </p>
          <div className="mt-4">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded text-xs font-semibold bg-[#1a202a] hover:bg-[#232b38] text-[#c6a87d] border border-[#c6a87d]/40 transition-colors inline-flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Request Site Measurement in Jalgaon
            </button>
          </div>
        </div>

      </div>

      {/* Full Project Details Lightbox Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#11141c] border border-[#2d374a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#181d28]/90 border border-[#2e3749] text-[#e0d8cc] hover:text-[#c6a87d] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-80 sm:h-96 w-full bg-black">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11141c] via-transparent to-black/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded bg-[#c6a87d] text-[#0d0f13] text-xs font-bold uppercase tracking-wider">
                  {activeProjectModal.category}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-2">
                  {activeProjectModal.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#ddd6c8] mt-1.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c6a87d]" />
                    {activeProjectModal.location}
                  </span>
                  <span>•</span>
                  <span>{activeProjectModal.area}</span>
                  <span>•</span>
                  <span>Execution: {activeProjectModal.duration}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c6a87d] font-semibold mb-2">
                  Architectural Narrative
                </h4>
                <p className="text-sm text-[#b8b0a2] leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c6a87d] font-semibold mb-3">
                  Key Design Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeProjectModal.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#d6cec1] p-2.5 rounded bg-[#161a24] border border-[#212836]">
                      <CheckCircle2 className="w-4 h-4 text-[#c6a87d] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Palette */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c6a87d] font-semibold mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Materials & Finishes Specified</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.materials.map((mat, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded bg-[#181d27] border border-[#293244] text-xs font-medium text-[#ded8cb]">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-[#202734] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#8f897e]">
                  Want something similar for your flat or home in Jalgaon?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=Hi%20Tasta%20Interior,%20I%20love%20the%20design%20of%20"${encodeURIComponent(activeProjectModal.title)}"%20and%20want%20to%20know%20more%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded bg-[#1c222d] border border-[#c6a87d]/40 text-[#c6a87d] hover:bg-[#252c3a] text-xs font-semibold text-center"
                  >
                    WhatsApp Inquire
                  </a>
                  <button
                    onClick={() => {
                      setActiveProjectModal(null);
                      onOpenConsultation();
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded bg-gradient-to-r from-[#c6a87d] to-[#ad8f5e] text-[#0d0f13] text-xs font-bold hover:brightness-110 text-center"
                  >
                    Book Site Consultation
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
