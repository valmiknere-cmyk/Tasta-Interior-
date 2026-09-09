import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronDown, MessageSquare, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { REVIEWS_DATA, FAQS_DATA, BUSINESS_INFO } from '../data/tastaData';

export const TestimonialsAndRating: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="reviews" className="py-20 bg-[#090c10] border-b border-[#1b212c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header with Google Maps Anchor */}
        <div className="bg-[#11151d] rounded-2xl border border-[#262f3f] p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#c6a87d]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Client Endorsements & Google Reviews</span>
              </div>
              
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#fbf7f1]">
                Trusted by Homeowners Across Jalgaon
              </h2>
              
              <p className="text-sm sm:text-base text-[#a29b8e] max-w-2xl leading-relaxed">
                From high-rise apartments on Ring Road to heritage homes near Sindhi Colony, discover why our clients trust Tasta Interior for honest pricing, superior factory finishes, and dependable delivery.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#f39c12]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#f39c12]" />
                    ))}
                  </div>
                  <span className="font-bold text-lg text-[#f4eee4]">{BUSINESS_INFO.rating}</span>
                  <span className="text-xs text-[#898377]">/ 5.0 Rating</span>
                </div>

                <div className="h-4 w-px bg-[#262e3d] hidden sm:block" />

                <div className="text-xs text-[#9d978a]">
                  <strong className="text-[#f1ebe0]">100% Verified Reviews</strong> on Google Maps & Justdial
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="p-4 rounded-xl bg-[#161a24] border border-[#273041] w-full max-w-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#ea4335]/10 border border-[#ea4335]/30 flex items-center justify-center font-bold text-sm text-[#ea4335]">
                    G
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#e6dfd2]">Google Business Profile</div>
                    <div className="text-[10px] text-[#7e786e]">Tasta Interior, Jalgaon</div>
                  </div>
                </div>

                <p className="text-[11px] text-[#9b9487]">
                  View real photos uploaded by clients, ratings, and business location in Sindhi Colony.
                </p>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded bg-[#1f2633] hover:bg-[#283244] border border-[#c6a87d]/40 text-[#c6a87d] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Check Reviews on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-[#12161f] rounded-xl p-6 border border-[#212836] hover:border-[#c6a87d]/40 transition-all flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f39c12]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating)
                            ? 'fill-[#f39c12] text-[#f39c12]'
                            : 'text-[#524939]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#807a6f]">{review.date}</span>
                </div>

                <p className="text-sm text-[#cac3b5] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1d232f] flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[#f1ebe0] flex items-center gap-1.5">
                    <span>{review.author}</span>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <div className="text-[11px] text-[#7d776c] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#c6a87d]" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <span className="text-[10px] px-2.5 py-1 rounded bg-[#181d28] text-[#c6a87d] border border-[#273041] font-medium">
                  {review.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions (Accordion) */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#fbf7f1]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#9f988b]">
              Everything you need to know about working with Tasta Interior in Jalgaon.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#11141c] rounded-lg border border-[#212836] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-[#eee7db] hover:text-[#c6a87d] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#c6a87d] transition-transform duration-300 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#a39c90] leading-relaxed border-t border-[#1a202c]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
