import React, { useState, useEffect } from 'react';
import { Phone, Compass, Menu, X, CalendarCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tastaData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Transformations', href: '#before-after' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Styles', href: '#styles' },
    { name: 'Our Process', href: '#process' },
    { name: 'Studio & Location', href: '#location' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#14171d] border-b border-[#232934] text-xs text-[#a39e93] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#c6a87d]" />
            <span>Sindhi Colony, New Joshi Colony, Jalgaon (Maharashtra)</span>
            <span className="text-[#495366]">|</span>
            <span className="text-[#c6a87d] font-medium">★ 4.5 Rated on Google Maps</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#8e897d]">Consultation Hours: 10 AM - 8:30 PM</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-[#e2dacb] hover:text-[#c6a87d] transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-[#c6a87d]" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0e12]/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-[#222733] py-3'
            : 'bg-[#0c0e12]/80 backdrop-blur-sm border-b border-[#1c212a] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#c6a87d] via-[#b59567] to-[#8d714b] p-[1px] shadow-lg shadow-[#c6a87d]/10 flex items-center justify-center">
              <div className="w-full h-full bg-[#0d0f13] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#c6a87d] group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#f4efe6] group-hover:text-[#c6a87d] transition-colors">
                TASTA
              </div>
              <div className="text-[9px] tracking-[0.25em] text-[#a49f93] uppercase font-medium">
                Interior & Architecture
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#c0b8ac] hover:text-[#c6a87d] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#c6a87d] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=Hi%20Tasta%20Interior,%20I%20would%20like%20to%20discuss%20an%20interior%20project%20in%20Jalgaon.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold rounded text-[#c6a87d] border border-[#c6a87d]/30 hover:border-[#c6a87d] hover:bg-[#c6a87d]/10 transition-all flex items-center gap-1.5"
            >
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs font-semibold rounded bg-gradient-to-r from-[#c6a87d] to-[#a88a5d] text-[#0d0f13] hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-md shadow-[#c6a87d]/20"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#d2cbbe] hover:text-[#c6a87d] lg:hidden rounded border border-[#232934]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#101318] border-b border-[#232934] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-[#ded6c9] hover:bg-[#191e27] hover:text-[#c6a87d] rounded transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#222834] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold rounded bg-[#c6a87d] text-[#0d0f13] flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Free Consultation
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-2.5 text-center text-sm font-medium rounded border border-[#2b3342] text-[#d6cec1] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c6a87d]" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
