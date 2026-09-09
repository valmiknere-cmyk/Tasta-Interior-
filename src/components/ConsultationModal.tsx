import React, { useState, useEffect } from 'react';
import { X, CalendarCheck, CheckCircle2, MessageCircle, Send, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tastaData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    bhk?: string;
    scope?: string;
    tier?: string;
    estimate?: string;
    serviceTitle?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: initialData?.bhk || '2 BHK Flat',
    scope: initialData?.serviceTitle || initialData?.scope || 'Turnkey Full Home Interior',
    cityArea: 'Jalgaon',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: initialData?.estimate ? `Online Estimate: ${initialData.estimate}` : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        propertyType: initialData.bhk || prev.propertyType,
        scope: initialData.serviceTitle || initialData.scope || prev.scope,
        notes: initialData.estimate ? `Estimated Range: ${initialData.estimate}` : prev.notes
      }));
    }
  }, [initialData]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsApp = () => {
    const text = `Hi Tasta Interior! I would like to book a design consultation.
Name: ${formData.fullName}
Phone: ${formData.phone}
Property: ${formData.propertyType}
Scope: ${formData.scope}
Preferred Time: ${formData.preferredTime}
${formData.notes ? `Notes: ${formData.notes}` : ''}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#11141c] border border-[#2b3548] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#181d28] border border-[#2b3447] text-[#ded7ca] hover:text-[#c6a87d] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-cinzel text-xl font-bold text-white">
                Consultation Reserved!
              </h3>
              <p className="text-xs text-[#a6a094] max-w-xs mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Our lead designer will call you shortly to confirm the appointment.
              </p>
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Details via WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded bg-[#191e29] text-xs text-[#ded8cb] hover:bg-[#222938]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#c6a87d] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sindhi Colony Studio, Jalgaon</span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#f5efe4]">
                Book Free Design Consultation
              </h3>
              <p className="text-xs text-[#9c9689]">
                Meet our architects, review 3D layouts, and touch premium European materials.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs text-[#b8b1a3] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Deshmukh"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-[#161a23] border border-[#242c3d] text-xs sm:text-sm text-[#f4efe5] focus:outline-none focus:border-[#c6a87d]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-[#b8b1a3] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#161a23] border border-[#242c3d] text-xs sm:text-sm text-[#f4efe5] focus:outline-none focus:border-[#c6a87d]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#b8b1a3] mb-1">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#161a23] border border-[#242c3d] text-xs sm:text-sm text-[#f4efe5] focus:outline-none focus:border-[#c6a87d]"
                  >
                    <option value="1 BHK Flat">1 BHK Flat</option>
                    <option value="2 BHK Flat">2 BHK Flat</option>
                    <option value="3 BHK Flat">3 BHK Flat</option>
                    <option value="4 BHK / Penthouse">4 BHK / Penthouse</option>
                    <option value="Independent Bungalow">Independent Bungalow</option>
                    <option value="Commercial Space">Commercial Space</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#b8b1a3] mb-1">Scope of Interest</label>
                <input
                  type="text"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-[#161a23] border border-[#242c3d] text-xs sm:text-sm text-[#f4efe5] focus:outline-none focus:border-[#c6a87d]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-[#b8b1a3] mb-1">Location in Jalgaon</label>
                  <input
                    type="text"
                    value={formData.cityArea}
                    onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#161a23] border border-[#242c3d] text-xs sm:text-sm text-[#f4efe5] focus:outline-none focus:border-[#c6a87d]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#b8b1a3] mb-1">Preferred Time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#161a23] border border-[#242c3d] text-xs sm:text-sm text-[#f4efe5] focus:outline-none focus:border-[#c6a87d]"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8:30 PM)">Evening (5 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {formData.notes && (
                <div>
                  <label className="block text-xs text-[#b8b1a3] mb-1">Estimate / Details</label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#161a23] border border-[#242c3d] text-xs text-[#c6a87d]"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded bg-gradient-to-r from-[#c6a87d] to-[#aa895c] text-[#0d0f13] text-xs sm:text-sm font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6a87d]/20"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>{isSubmitting ? 'Reserving...' : 'Confirm Studio Appointment'}</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="text-xs text-[#c6a87d] hover:underline inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Prefer to chat on WhatsApp? Click here</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
