import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tastaData';

interface ContactAndLocationProps {
  prefilledScope?: string;
}

export const ContactAndLocation: React.FC<ContactAndLocationProps> = ({ prefilledScope }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: '2 BHK',
    scope: prefilledScope || 'Turnkey Full Home Interior',
    cityArea: 'Jalgaon (City / Ring Road)',
    preferredDate: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-touch studio reservation handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Tasta Interior! I would like to book a design consultation.
Name: ${formData.fullName || 'Prospective Client'}
Phone: ${formData.phone || 'N/A'}
Property: ${formData.propertyType}
Scope: ${formData.scope}
Area: ${formData.cityArea}
Preferred Date: ${formData.preferredDate || 'Earliest available'}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Headquarters & Consultation</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#fbf8f2]">
            Visit Our Jalgaon Design Experience Studio
          </h2>
          <p className="text-sm sm:text-base text-[#9d9689]">
            Touch real material samples, review 3D layouts over coffee, or schedule a free site measurement anywhere in Jalgaon.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#11141c] rounded-xl p-6 sm:p-8 border border-[#232b3a] shadow-2xl space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#c6a87d] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary Design Session</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#f5efe4]">
                Schedule Your Project Consultation
              </h3>
              <p className="text-xs text-[#9d978a]">
                Receive a customized floor plan evaluation and initial 3D design estimate within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-lg bg-[#141d1a] border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-cinzel text-lg font-bold text-[#e6f4ea]">
                    Consultation Request Confirmed!
                  </h4>
                  <p className="text-xs text-[#a3c9b1] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior architect from Sindhi Colony Studio will contact you at <strong className="text-white">{formData.phone}</strong> to confirm your slot.
                  </p>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ping on WhatsApp Directly</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded bg-[#181d27] border border-[#2b3547] text-xs text-[#c9c2b4] hover:text-white transition-colors"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#bcb5a7] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nilesh Patil"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#161a24] border border-[#252d3d] text-sm text-[#f5efe4] focus:outline-none focus:border-[#c6a87d] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#bcb5a7] mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#161a24] border border-[#252d3d] text-sm text-[#f5efe4] focus:outline-none focus:border-[#c6a87d] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#bcb5a7] mb-1">
                      Property Configuration
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#161a24] border border-[#252d3d] text-sm text-[#f5efe4] focus:outline-none focus:border-[#c6a87d] transition-colors"
                    >
                      <option value="1 BHK Flat">1 BHK Apartment</option>
                      <option value="2 BHK Flat">2 BHK Apartment</option>
                      <option value="3 BHK Flat">3 BHK Apartment</option>
                      <option value="4 BHK / Penthouse">4 BHK / Penthouse</option>
                      <option value="Independent Bungalow">Independent Bungalow / Villa</option>
                      <option value="Commercial Office / Showroom">Commercial Office / Showroom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#bcb5a7] mb-1">
                      Scope of Interior
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#161a24] border border-[#252d3d] text-sm text-[#f5efe4] focus:outline-none focus:border-[#c6a87d] transition-colors"
                    >
                      <option value="Turnkey Full Home Interior">Turnkey Full Home Interior</option>
                      <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                      <option value="Living Room & False Ceiling">Living Room & False Ceiling</option>
                      <option value="Commercial Showroom / Office">Commercial Showroom / Office</option>
                      <option value="Civil Renovation & Alteration">Civil Renovation & Alteration</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#bcb5a7] mb-1">
                      Location / Area in Jalgaon
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ring Road, Sindhi Colony, Pimprala"
                      value={formData.cityArea}
                      onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#161a24] border border-[#252d3d] text-sm text-[#f5efe4] focus:outline-none focus:border-[#c6a87d] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#bcb5a7] mb-1">
                      Preferred Date for Studio / Site Visit
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#161a24] border border-[#252d3d] text-sm text-[#f5efe4] focus:outline-none focus:border-[#c6a87d] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#bcb5a7] mb-1">
                    Special Requirements or Floor Plan Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your possession date, preferred color themes, or specific storage needs..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#161a24] border border-[#252d3d] text-sm text-[#f5efe4] focus:outline-none focus:border-[#c6a87d] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 rounded bg-gradient-to-r from-[#c6a87d] to-[#ad8f5e] text-[#0d0f13] font-bold text-xs sm:text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6a87d]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Confirming Appointment...' : 'Confirm Free Studio Consultation'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-3.5 rounded bg-[#18201a] hover:bg-[#1f2c23] border border-emerald-500/40 text-emerald-400 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quick WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Google Maps Location Card & Studio Details */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Studio Address Card */}
            <div className="bg-[#12161f] rounded-xl border border-[#242c3d] p-6 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#1f2635]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c6a87d] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Studio Location</span>
                </div>
                <span className="text-[10px] text-[#868074]">Jalgaon, Maharashtra</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#181d27] border border-[#283244] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#c6a87d]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#f1ece1]">Tasta Interior & Design Studio</div>
                    <div className="text-[#a49e91] mt-0.5 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#181d27] border border-[#283244] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#c6a87d]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#f1ece1]">Direct Call / WhatsApp</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-[#c6a87d] hover:underline mt-0.5 block font-medium"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#181d27] border border-[#283244] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#c6a87d]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#f1ece1]">Visiting Hours</div>
                    <div className="text-[#a49e91] mt-0.5">
                      {BUSINESS_INFO.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Maps Action Button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded bg-gradient-to-r from-[#1c222e] to-[#171c26] hover:from-[#242b3b] hover:to-[#1e2432] border border-[#c6a87d]/50 text-[#c6a87d] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Visual Map Representation / Directions Teaser */}
            <div className="bg-[#12161f] rounded-xl border border-[#242c3d] p-5 space-y-3">
              <div className="text-xs font-semibold text-[#ded8cb] flex items-center justify-between">
                <span>Serving Across Jalgaon & Khandesh</span>
                <span className="text-[10px] text-[#c6a87d]">Free Site Visits</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#181d27] border border-[#273041] text-[11px] text-[#bcb5a7]"
                  >
                    • {area}
                  </span>
                ))}
              </div>

              <p className="text-[11px] text-[#7f796f] pt-1">
                Located right by New Joshi Colony and Sindhi Colony with ample client parking available at the studio.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
