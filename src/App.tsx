import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTasta } from './components/AboutTasta';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CostEstimator } from './components/CostEstimator';
import { ServicesSection } from './components/ServicesSection';
import { StyleVisualizer } from './components/StyleVisualizer';
import { DesignProcess } from './components/DesignProcess';
import { TestimonialsAndRating } from './components/TestimonialsAndRating';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { BUSINESS_INFO } from './data/tastaData';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<{
    bhk?: string;
    scope?: string;
    tier?: string;
    estimate?: string;
    serviceTitle?: string;
  } | undefined>(undefined);

  const handleOpenConsultation = () => {
    setModalInitialData(undefined);
    setIsConsultationModalOpen(true);
  };

  const handleOpenWithEstimatorData = (data: {
    bhk: string;
    scope: string;
    tier: string;
    estimate: string;
  }) => {
    setModalInitialData(data);
    setIsConsultationModalOpen(true);
  };

  const handleOpenWithService = (serviceTitle: string) => {
    setModalInitialData({ serviceTitle });
    setIsConsultationModalOpen(true);
  };

  const handleSelectStyle = (styleName: string) => {
    setModalInitialData({ scope: `Design in ${styleName} Theme` });
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f1ede6] selection:bg-[#c6a87d]/30 selection:text-[#faebd7]">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Key Guarantees */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. Studio Story & Values */}
        <AboutTasta />

        {/* 3. Executed Architectural Portfolios */}
        <PortfolioGallery onOpenConsultation={handleOpenConsultation} />

        {/* 4. Interactive Before & After Slider */}
        <BeforeAfterSlider />

        {/* 5. Smart Budget & Cost Estimator */}
        <CostEstimator onOpenConsultationWithData={handleOpenWithEstimatorData} />

        {/* 6. Specialized Services Breakdown */}
        <ServicesSection onOpenConsultationWithService={handleOpenWithService} />

        {/* 7. Style & Moodboard Visualizer */}
        <StyleVisualizer onSelectStyle={handleSelectStyle} />

        {/* 8. The 5-Step Process */}
        <DesignProcess onOpenConsultation={handleOpenConsultation} />

        {/* 9. Verified Reviews & FAQs */}
        <TestimonialsAndRating />

        {/* 10. Studio Location & Interactive Booking */}
        <ContactAndLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialData={modalInitialData}
      />

      {/* Floating Action for Quick WhatsApp Inquiries */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=Hi%20Tasta%20Interior,%20I%20am%20interested%20in%20an%20interior%20consultation%20in%20Jalgaon.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-3.5 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-[#0d0f13] font-bold text-xs shadow-2xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-semibold">
            WhatsApp Studio
          </span>
        </a>
      </div>
    </div>
  );
}
