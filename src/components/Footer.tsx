import React from 'react';
import { Compass, MapPin, Phone, Mail, Clock, ExternalLink, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tastaData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] text-[#a9a295] border-t border-[#181d27] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#c6a87d]/10 border border-[#c6a87d]/40 flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#c6a87d]" />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.18em] text-[#f4efe5]">
                  TASTA
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-[#8e887d] uppercase font-medium">
                  Interior & Architecture
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8f887b] leading-relaxed">
              Jalgaon’s premier turnkey interior architecture studio. We unite refined European aesthetics with factory-engineered precision, genuine waterproof marine woods, and transparent pricing.
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#13161f] border border-[#232a39] text-xs text-[#c6a87d] hover:border-[#c6a87d] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>★ 4.5 Rated on Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Col 2: Architectural Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-[#f0eade] font-bold">
              Design & Execution
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#c6a87d] transition-colors">
                  Turnkey Full Home Interiors (2BHK, 3BHK, 4BHK)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c6a87d] transition-colors">
                  German Modular Kitchens with Quartz Islands
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c6a87d] transition-colors">
                  Acoustic Master Suites & Fluted Wardrobes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c6a87d] transition-colors">
                  Commercial Offices & Retail Showrooms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c6a87d] transition-colors">
                  4K Photorealistic 3D Architectural Visualization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c6a87d] transition-colors">
                  Structural Civil Alterations & Renovations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-[#f0eade] font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-[#c6a87d] transition-colors">
                  Finished Portfolios
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-[#c6a87d] transition-colors">
                  Before & After Transformations
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#c6a87d] transition-colors">
                  Cost & Budget Estimator
                </a>
              </li>
              <li>
                <a href="#styles" className="hover:text-[#c6a87d] transition-colors">
                  Style Visualizer
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#c6a87d] transition-colors">
                  The 5-Step Process
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#c6a87d] transition-colors">
                  Client Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-[#f0eade] font-bold">
              Studio & Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c6a87d] shrink-0 mt-0.5" />
                <span className="leading-snug text-[#9d9689]">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c6a87d] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#f1ebe0] hover:text-[#c6a87d]">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c6a87d] shrink-0" />
                <span className="text-[#9d9689]">{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#181e28] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736e64]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All Rights Reserved. Serving Jalgaon & Khandesh.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c6a87d] transition-colors"
            >
              Google Maps Listing
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#c6a87d] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
