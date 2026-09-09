import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/tasta_luxury_hero_1788965846108.jpg';
import kitchenImg from '../assets/images/tasta_kitchen_mod_1788965871744.jpg';
import bedroomImg from '../assets/images/tasta_bedroom_suite_1788965891587.jpg';

interface TransformationCase {
  id: string;
  title: string;
  location: string;
  scope: string;
  beforeImg: string;
  afterImg: string;
  transformationNotes: string[];
}

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cases: TransformationCase[] = [
    {
      id: 'living',
      title: 'Bare Cement Shell to Contemporary Luxury Suite',
      location: 'Ring Road, Jalgaon',
      scope: 'Living, Dining & Acoustic Wall Architecture',
      beforeImg: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', // Unfinished bare concrete apartment shell
      afterImg: heroImg,
      transformationNotes: [
        'Concealed all exposed conduit wiring with a floating acoustic false ceiling',
        'Custom fluted ash panelling concealing the structural pillar & powder room',
        'Direct and indirect 3000K recessed lighting circuits with mood controls'
      ]
    },
    {
      id: 'kitchen',
      title: 'Old Damp Masonry to German Modular Kitchen',
      location: 'Sindhi Colony, Jalgaon',
      scope: 'Kitchen Layout Re-engineering & Waterproof HDHMR',
      beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', // Old run-down kitchen structure
      afterImg: kitchenImg,
      transformationNotes: [
        'Demolished fixed granite otta to create an ergonomic modular work triangle',
        'Integrated Hafele soft-close tandem drawers with 60kg load capacity',
        'Seamless Calacatta waterfall quartz island with anti-stain nano seal'
      ]
    },
    {
      id: 'bedroom',
      title: 'Dull Bedroom to Five-Star Hotel Master Sanctuary',
      location: 'New Joshi Colony, Jalgaon',
      scope: 'Master Bedroom, Acoustic Headboard & Fluted Wardrobes',
      beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', // Bare empty room
      afterImg: bedroomImg,
      transformationNotes: [
        'Acoustic slatted wood panels reduce exterior street noise significantly',
        'Bronze tinted fluted glass floor-to-ceiling wardrobes with sensor lighting',
        'Built-in floating side tables with integrated touch dimmer switches'
      ]
    }
  ];

  const currentCase = cases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="before-after" className="py-20 bg-[#0e1117] border-y border-[#1c222e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Transformations</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#f8f4ee]">
            Witness the Power of Architectural Execution
          </h2>
          <p className="text-sm sm:text-base text-[#9f988b]">
            Drag the slider horizontally to compare the raw unpolished site condition with our finalized handover.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded text-xs font-semibold transition-all ${
                activeCaseIndex === idx
                  ? 'bg-[#c6a87d] text-[#0c0e12] shadow-lg shadow-[#c6a87d]/20'
                  : 'bg-[#151922] text-[#ada699] hover:bg-[#1d232e] border border-[#232a38]'
              }`}
            >
              Case 0{idx + 1}: {c.scope}
            </button>
          ))}
        </div>

        {/* The Interactive Before/After Stage */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className="relative h-[340px] sm:h-[480px] lg:h-[520px] rounded-xl overflow-hidden border border-[#2c3547] shadow-2xl select-none cursor-ew-resize group"
          >
            {/* AFTER Image (Full background) */}
            <img
              src={currentCase.afterImg}
              alt={`${currentCase.title} - After`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded bg-[#0d0f14]/85 border border-[#2e3748] text-[11px] font-bold tracking-wider text-[#c6a87d] uppercase backdrop-blur-md">
              AFTER: Tasta Handover
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw'
                }}
              >
                <img
                  src={currentCase.beforeImg}
                  alt={`${currentCase.title} - Before`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 pointer-events-none"
                />
              </div>
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded bg-[#0d0f14]/85 border border-[#2e3748] text-[11px] font-bold tracking-wider text-[#989285] uppercase backdrop-blur-md">
                BEFORE: Raw Site
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute inset-y-0 z-20 w-[2px] bg-gradient-to-b from-[#c6a87d] via-white to-[#c6a87d] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d0f14] border-2 border-[#c6a87d] text-[#c6a87d] flex items-center justify-center shadow-xl shadow-black/80">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="absolute bottom-4 left-4 right-4 z-10 hidden sm:flex items-center justify-between p-3 rounded-lg bg-[#0c0e13]/85 border border-[#252d3c] backdrop-blur-md text-xs">
              <div className="text-[#f1ebe0] font-medium">
                <span className="text-[#c6a87d] font-bold">{currentCase.title}</span> • {currentCase.location}
              </div>
              <div className="text-[#8e887d] text-[11px]">
                Drag handle left & right
              </div>
            </div>

          </div>

          {/* Key Transformation Takeaways */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {currentCase.transformationNotes.map((note, idx) => (
              <div key={idx} className="p-3.5 rounded bg-[#131720] border border-[#202736] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#c6a87d] shrink-0 mt-0.5" />
                <span className="text-xs text-[#a9a397] leading-relaxed">{note}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
