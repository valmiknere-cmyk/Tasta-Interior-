import React, { useState } from 'react';
import { Palette, Sun, Layers, Sparkles, Check, ArrowRight } from 'lucide-react';
import { STYLES_DATA } from '../data/tastaData';
import { StyleOption } from '../types';

interface StyleVisualizerProps {
  onSelectStyle: (styleName: string) => void;
}

export const StyleVisualizer: React.FC<StyleVisualizerProps> = ({ onSelectStyle }) => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>(STYLES_DATA[0].id);

  const activeStyle = STYLES_DATA.find((s) => s.id === selectedStyleId) || STYLES_DATA[0];

  return (
    <section id="styles" className="py-20 bg-[#090b0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a87d]">
            <Palette className="w-3.5 h-3.5" />
            <span>Curated Design Dialects</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#fcf9f2]">
            Discover Your Architectural Identity
          </h2>
          <p className="text-sm sm:text-base text-[#9d978a]">
            Which interior aesthetic resonates with your lifestyle? Explore our curated palettes, lighting atmospheres, and surface materials.
          </p>
        </div>

        {/* Style Selector Buttons */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {STYLES_DATA.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyleId(style.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedStyleId === style.id
                  ? 'border-[#c6a87d] bg-[#141822] shadow-xl shadow-[#c6a87d]/10 ring-1 ring-[#c6a87d]'
                  : 'border-[#212837] bg-[#0f1218] hover:border-[#313b4e] hover:bg-[#131720]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-cinzel font-bold text-sm text-[#f1ebe0]">
                  {style.name}
                </span>
                {selectedStyleId === style.id && (
                  <span className="w-5 h-5 rounded-full bg-[#c6a87d] text-[#0d0f13] flex items-center justify-center text-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}
              </div>
              <p className="text-xs text-[#8c867a] mt-1.5 line-clamp-1">
                {style.tagline}
              </p>
            </button>
          ))}
        </div>

        {/* Visualizer Interactive Card */}
        <div className="bg-[#11141c] rounded-xl border border-[#242c3d] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Visual Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden border border-[#273142] shadow-xl">
                <img
                  src={activeStyle.image}
                  alt={activeStyle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-[#0d0f14]/85 border border-[#283244] backdrop-blur-md flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#c6a87d] font-semibold">
                    <Sun className="w-4 h-4 text-[#c6a87d]" />
                    <span>{activeStyle.lightingTemp}</span>
                  </div>
                  <span className="text-[10px] text-[#938e83]">Color Temp</span>
                </div>
              </div>
            </div>

            {/* Style Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c6a87d] font-bold">
                  Design Philosophy
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#fbf7f1] mt-1">
                  {activeStyle.name}
                </h3>
                <p className="text-sm text-[#ada79a] mt-2 leading-relaxed">
                  {activeStyle.description}
                </p>
              </div>

              {/* Color Swatches */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#8b8579] font-medium flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#c6a87d]" />
                  <span>Curated Swatch Palette</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {activeStyle.palette.map((color, idx) => (
                    <div key={idx} className="space-y-1.5 text-center">
                      <div
                        className="h-10 rounded border border-white/10 shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-[10px] text-[#e2dacb] font-medium truncate">{color.name}</div>
                      <div className="text-[9px] text-[#7d786f] font-mono">{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Elements */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#8b8579] font-medium flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#c6a87d]" />
                  <span>Specified Materials</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStyle.materials.map((mat, idx) => (
                    <span key={idx} className="px-3 py-1 rounded bg-[#181d28] border border-[#273142] text-xs font-medium text-[#ded8ca]">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectStyle(activeStyle.name)}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-[#1c222e] hover:bg-[#252c3b] border border-[#c6a87d]/50 text-[#c6a87d] text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Design My Space in {activeStyle.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
