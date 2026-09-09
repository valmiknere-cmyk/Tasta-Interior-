import heroImg from '../assets/images/tasta_luxury_hero_1788965846108.jpg';
import kitchenImg from '../assets/images/tasta_kitchen_mod_1788965871744.jpg';
import bedroomImg from '../assets/images/tasta_bedroom_suite_1788965891587.jpg';
import { Project, ServiceItem, StyleOption, Review } from '../types';

export const BUSINESS_INFO = {
  name: "Tasta Interior",
  legalName: "Tasta Interior & Design Studio",
  tagline: "Bespoke Interiors Crafted with Architectural Precision",
  rating: 4.5,
  reviewCount: 48,
  establishedYear: 2018,
  address: "Plot No. 3, Laxmi Nagar, New Joshi Colony, Near Sindhi Colony, Jalgaon - 425001, Maharashtra, India",
  googleMapsUrl: "https://maps.app.goo.gl/KEZ3jXdZoHLBfDdf7",
  phone: "+91 84212 77492",
  whatsappPhone: "918421277492",
  email: "info@tastainterior.com",
  workingHours: "Mon - Sat: 10:00 AM – 8:30 PM | Sunday by Appointment",
  serviceAreas: ["Jalgaon City", "Sindhi Colony", "New Joshi Colony", "Ring Road", "MIDC Jalgaon", "Bhusawal", "Chalisgaon"]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "The Solitaire Penthouse",
    category: "residential",
    location: "Ring Road, Jalgaon",
    area: "3,400 sq.ft.",
    duration: "65 Days",
    image: heroImg,
    description: "A masterclass in contemporary opulence featuring custom fluted ash woodwork, Italian Statuario marble accents, and invisible acoustic wall treatments.",
    highlights: ["Custom false ceiling with magnetic track spotlights", "Seamless fluted wall concealing hidden powder room door", "Automated motorized curtains & ambient scene dimmers"],
    materials: ["Italian Marble", "Natural Teak Veneer", "Brushed Champagne Gold Hardware", "Acoustic Slats"]
  },
  {
    id: "proj-2",
    title: "Aura Minimalist Modular Kitchen",
    category: "kitchen",
    location: "Sindhi Colony, Jalgaon",
    area: "240 sq.ft.",
    duration: "25 Days",
    image: kitchenImg,
    description: "German-engineered modular culinary space with handleless matte acrylic push-to-open cabinets, quartz waterfall island, and integrated concealed appliances.",
    highlights: ["Soft-closing Hafele tandem drawer runners", "Integrated pantry tower with pull-out spice racks", "Built-in induction cooktop with smart sensor chimney"],
    materials: ["Calacatta Quartz", "Anti-fingerprint Matte Charcoal Laminate", "Natural Oak Shelving", "3000K Under-cabinet LED"]
  },
  {
    id: "proj-3",
    title: "The Haven Master Bedroom Suite",
    category: "bedroom",
    location: "New Joshi Colony, Jalgaon",
    area: "420 sq.ft.",
    duration: "30 Days",
    image: bedroomImg,
    description: "A tranquil sanctuary balancing fluted acoustic oak slats, warm backlit ambient glow, velvet upholstered bed frame, and a walk-in wardrobe with bronze-tinted fluted glass.",
    highlights: ["Floating nightstands with wireless charging docks", "Walk-in wardrobe with internal sensor LED illumination", "Bespoke acoustic headboard wall with brushed brass details"],
    materials: ["Smoked Oak Veneer", "Acoustic Felt & Slats", "Bronze Fluted Glass", "Belgian Linen Upholstery"]
  },
  {
    id: "proj-4",
    title: "The Emerald Living & Dining Grand Suite",
    category: "residential",
    location: "Prabhat Colony, Jalgaon",
    area: "1,850 sq.ft.",
    duration: "45 Days",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "An open-concept living and dining lounge designed for grand family gatherings, blending warm travertine textures with fluted wooden room dividers.",
    highlights: ["Double-height architectural statement chandelier", "Custom 8-seater live-edge dining table with brass inlays", "Integrated bar console with mirror backlighting"],
    materials: ["Travertine Stone", "Walnut Veneer", "St. Laurent Dark Marble", "Gold Leafing"]
  },
  {
    id: "proj-5",
    title: "Apex Corporate Executive Chambers",
    category: "commercial",
    location: "MIDC Industrial Area, Jalgaon",
    area: "2,200 sq.ft.",
    duration: "35 Days",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "A commanding corporate headquarter office for a leading agricultural processing firm in Jalgaon, balancing ergonomic performance with prestigious boardrooms.",
    highlights: ["Acoustic double-glazed glass partitions", "Bespoke walnut conference table with recessed AV ports", "Biophilic green wall in reception foyer"],
    materials: ["Tempered Acoustic Glass", "Matte Black Steel", "American Walnut", "Preserved Scandinavian Moss"]
  },
  {
    id: "proj-6",
    title: "Opulent Villa Zen Sanctuary",
    category: "residential",
    location: "Near Girna Pumping, Jalgaon",
    area: "4,600 sq.ft.",
    duration: "80 Days",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "An expansive private bungalow designed around Japanese-Scandinavian harmony (Japandi) with courtyard skylights and indoor dry zen rock gardens.",
    highlights: ["Central internal courtyard with natural sunlight funnel", "Hand-crafted louvers for climate control", "Japanese tatami-inspired low seating lounge"],
    materials: ["Teak Wood", "Limewash Plaster", "Black Slate Stone", "Woven Cane Panels"]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-turnkey",
    title: "Turnkey Home Interiors",
    subtitle: "Complete End-to-End Execution for 2BHK, 3BHK, 4BHK & Villas",
    icon: "Home",
    image: heroImg,
    features: [
      "Custom 3D CAD modeling & VR walkthrough before any site work",
      "Factory-pressed precision modular woodwork with waterproof BWR plywood",
      "Comprehensive civil, false ceiling, painting & electrical supervision",
      "Strict 45-day guaranteed handover with zero cost overrun promise"
    ],
    deliverables: ["Full Space Planning", "Modular Furniture", "False Ceiling & Electricals", "Designer Lighting", "Civil Supervision"]
  },
  {
    id: "serv-kitchen",
    title: "Modular German Kitchens",
    subtitle: "Ergonomic, Damp-Resistant, High-Capacity Culinary Spaces",
    icon: "ChefHat",
    image: kitchenImg,
    features: [
      "Hardware by Blum & Hafele with lifetime soft-close warranty",
      "Marine-grade 710 BWP plywood & HDHMR core engineered for Indian cooking",
      "Quartz, granite, and sintered stone countertops with seamless edge profiles",
      "Smart pull-outs, corner carousels, rolling shutters & tall pantry units"
    ],
    deliverables: ["Ergonomic Work Triangle Layout", "Custom Acrylic/Veneer Finishes", "Chimney & Hob Integration", "Cutlery & Pantry Organizers"]
  },
  {
    id: "serv-bedroom",
    title: "Bespoke Wardrobes & Master Suites",
    subtitle: "Sanctuary Spaces with Acoustic Comfort & Ambient Layering",
    icon: "Bed",
    image: bedroomImg,
    features: [
      "Floor-to-ceiling floor sliding & openable wardrobe systems",
      "Fluted glass shutters with profile aluminum frames and warm sensor lights",
      "Acoustic paneling and upholstered accent headboard walls",
      "Integrated dresser mirrors with touch sensor illumination"
    ],
    deliverables: ["Walk-in Closets", "Acoustic Wall Paneling", "Platform Bedframes", "Vanity Units & Work Desks"]
  },
  {
    id: "serv-commercial",
    title: "Commercial, Store & Office Interiors",
    subtitle: "Brand-Centric Retail Stores, Executive Cabins & Clinics",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Retail display architecture optimized for footfall conversion",
      "Acoustic cabins & soundproof meeting rooms for private discussions",
      "Bespoke reception desks with 3D logo backsplashes and signage",
      "Heavy-duty commercial grade flooring and low-energy LED planning"
    ],
    deliverables: ["Corporate Cabins", "Retail Showroom Fixtures", "Clinic / Reception Waiting", "Branding & Signage Elements"]
  },
  {
    id: "serv-3d",
    title: "3D Photorealistic Visualization",
    subtitle: "See Every Texture, Shadow & Light Fixture Before Spending a Rupee",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    features: [
      "High-resolution 4K render views from multiple camera perspectives",
      "Accurate material simulation matching real market laminates, veneers & stones",
      "Daytime vs Nighttime ambient lighting balance simulations",
      "Detailed 2D execution drawings with millimeter precision for carpenters"
    ],
    deliverables: ["4K 3D Render Renders", "Material Moodboards", "2D Working Drawings", "Electrical & Plumbing Schematics"]
  },
  {
    id: "serv-renovation",
    title: "Civil Alterations & Home Renovation",
    subtitle: "Breathing New Life into Older Apartments & Independent Houses",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Structural wall modification and open-kitchen conversion",
      "Complete bathroom waterproofing, tiling and premium sanitary fitting",
      "Re-flooring with large-format GVT vitrified tiles or wooden laminates",
      "Upgraded concealed wiring, plumbing lines, and switchboards"
    ],
    deliverables: ["Demolition & Debris Disposal", "Waterproofing & Tiling", "Plumbing & Sanitary Upgrades", "Repainting with Texture Coats"]
  }
];

export const STYLES_DATA: StyleOption[] = [
  {
    id: "style-contemp-luxe",
    name: "Contemporary Luxury",
    tagline: "Sleek brass accents, Italian marble & ambient shadow gaps",
    description: "The hallmark of Tasta's signature homes in Jalgaon. Focuses on rich textures, concealed architectural lighting, and bespoke woodwork that feels effortlessly grand.",
    image: heroImg,
    palette: [
      { name: "Champagne Warmth", hex: "#C6A87D" },
      { name: "Charcoal Slate", hex: "#1F242D" },
      { name: "Ivory Crema", hex: "#F5F2EB" },
      { name: "Deep Walnut", hex: "#4A3B32" }
    ],
    lightingTemp: "3000K Warm Architectural Glow",
    materials: ["Italian Marble", "Fluted PU Panels", "Brass Inlays", "Smoked Mirrors"]
  },
  {
    id: "style-japandi",
    name: "Japandi & Natural Minimalist",
    tagline: "Earthy serenity, light woods, and uncluttered breathing room",
    description: "Blends Scandinavian functionality with Japanese rustic minimalism. Embraces natural ash wood, limewash plaster finishes, and tactile linen fabrics.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    palette: [
      { name: "Raw Oat", hex: "#D6C7B2" },
      { name: "Blonde Oak", hex: "#C2A682" },
      { name: "Muted Olive", hex: "#6E7761" },
      { name: "Soft Clay", hex: "#E7DFD5" }
    ],
    lightingTemp: "2700K - 3200K Diffused Ambient",
    materials: ["Solid Ash Wood", "Rattan & Cane", "Textured Lime Plaster", "Matte Ceramic"]
  },
  {
    id: "style-modern-monochrome",
    name: "Modern Urban Monolithic",
    tagline: "Clean lines, quartz waterfall edges & handleless geometry",
    description: "Perfect for fast-paced urban lifestyles. Emphasizes clean surfaces, anti-fingerprint matte laminates, and functional concealed storage.",
    image: kitchenImg,
    palette: [
      { name: "Obsidian Black", hex: "#121418" },
      { name: "Graphite", hex: "#3A3F47" },
      { name: "Pure Quartz", hex: "#FAFAFA" },
      { name: "Brushed Nickel", hex: "#8A9099" }
    ],
    lightingTemp: "4000K Neutral Task & Linear Profiles",
    materials: ["Anti-Fingerprint Acrylic", "Sintered Stone", "Powder-coated Aluminum", "Frosted Glass"]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Dr. Nilesh Patil",
    location: "Ring Road, Jalgaon",
    rating: 5,
    date: "2 months ago",
    comment: "Tasta Interior transformed our 3BHK flat into a luxury haven. Their 3D visualization was 99% identical to the final finished house! The modular kitchen quality and woodwork finishing surpassed our expectations.",
    projectType: "Full 3BHK Turnkey Interior",
    verified: true
  },
  {
    id: "rev-2",
    author: "Rakesh & Sunita Sharma",
    location: "Sindhi Colony, Jalgaon",
    rating: 5,
    date: "4 months ago",
    comment: "Being located right in Sindhi Colony, we visited their studio and were immediately impressed by their material samples and transparency. Handover was completed in 42 days without delay. Highly recommended interior designers in Jalgaon.",
    projectType: "Modular Kitchen & Living Suite",
    verified: true
  },
  {
    id: "rev-3",
    author: "Anand Deshmukh",
    location: "New Joshi Colony, Jalgaon",
    rating: 4.5,
    date: "6 months ago",
    comment: "Excellent design sense and professional team. They managed the civil work, false ceiling, and bespoke bedroom furniture seamlessly while we were away. Very courteous and skilled carpenters.",
    projectType: "Complete Home Renovation",
    verified: true
  },
  {
    id: "rev-4",
    author: "Kavita Bhangale",
    location: "Prabhat Colony, Jalgaon",
    rating: 5,
    date: "8 months ago",
    comment: "Their attention to lighting and hidden storage is genius. Our living room feels double the size now with the fluted paneling and concealed doors. Tasta Interior is truly premium yet fair in pricing.",
    projectType: "2.5 BHK Apartment Interiors",
    verified: true
  }
];

export const FAQS_DATA = [
  {
    q: "How does Tasta Interior charge for residential projects?",
    a: "We provide itemized, transparent quotations based on actual square footage, hardware selections (e.g. Blum, Hafele, Hettich), and material specifications (Marine grade plywood vs. HDHMR). No hidden surprises or midway price hikes."
  },
  {
    q: "Do you offer on-site consultations in Jalgaon and nearby towns?",
    a: "Yes! Our design team offers complimentary on-site measurement and feasibility visits across Jalgaon, Sindhi Colony, New Joshi Colony, Ring Road, Bhusawal, and nearby regions in Khandesh."
  },
  {
    q: "How long does a full home interior project typically take?",
    a: "A typical 2BHK or 3BHK turnkey interior takes 35 to 45 business days from design sign-off to handover. Our factory pre-fabrication minimizes messy on-site cutting and speeds up final assembly."
  },
  {
    q: "What warranty do you provide on modular woodwork and hardware?",
    a: "We offer a 10-Year Warranty on our factory-pressed modular cabinets against termite and delamination, along with manufacturer lifetime warranties on German soft-close hinges and drawer channels."
  },
  {
    q: "Can I view 3D renders before committing to fabrication?",
    a: "Absolutely! We provide full 3D photorealistic render views and material moodboards. You can refine colors, laminate shades, and layouts until you are 100% satisfied before execution begins."
  }
];
