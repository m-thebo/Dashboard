import React from "react";

const features = [
  {
    icon: "/pie.png",
    title: "Comprehensive Data",
    desc: "Analyze ratings, funding, assets, and platforms for over 40 firms.",
  },
  {
    icon: "/chart.png",
    title: "Trusted Insights",
    desc: "Ratings based on thousands of user reviews and verified data.",
  },
  {
    icon: "/trophy.png",
    title: "Tailored for Traders",
    desc: "From beginners to pros, find firms that match your goals.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full py-12 md:py-16 px-2 md:px-0 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Blue gradient background as a separate container, centered and narrower */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[70%] h-full whychoose-gradient rounded-2xl pointer-events-none z-0" />
        <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-10 relative z-10">Why Choose PropFirmLabs?</h2>
        <div className="relative z-10 rounded-2xl py-10 px-2 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 shadow-lg bg-transparent whychoose-border overflow-hidden">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            {features.map((feature, i) => (
              <div key={feature.title} className="flex flex-col items-center text-center flex-1 min-w-[180px] max-w-xs mx-auto">
                <div className="w-14 h-14 flex items-center justify-center mb-4">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12 object-contain" />
                </div>
                <div className="text-white font-normal text-base md:text-lg mb-1">{feature.title}</div>
                <div className="text-white/80 text-xs md:text-sm leading-relaxed max-w-[220px]">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 