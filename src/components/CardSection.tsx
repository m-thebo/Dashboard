const CardSection = () => (
  <section className="px-0 py-20">
    <div className="max-w-7xl mx-auto flex items-stretch gap-8">
      <div className="flex-1 flex flex-col justify-center -mt-21">
        <HeroHeading />
      </div>
      <div className="flex-1 flex items-center justify-end" style={{ transform: 'translate(-10px, -25px)' }}>
        <AIRecommendationCard />
      </div>
    </div>
    {/* Featured Firms Cards */}
    <div className="max-w-7xl mx-auto flex justify-between items-start gap-6 mt-12">
      <FeaturedCard1 />
      <FeaturedCard2 />
      <FeaturedCard3 />
    </div>
  </section>
);

export default CardSection;


const HeroHeading = () => (
  <>
    <h1 className="text-3xl font-semibold leading-tight mb-4 text-left">
      Find Your Perfect Prop Trading Firm Today
    </h1>
    <p className="text-gray-300 text-base leading-relaxed max-w-xl font-medium text-left" style={{ opacity: 0.7 }}>
      Compare the world's leading proprietary trading firms. Discover the best profit splits, account sizes, and trading conditions tailored to your trading style.
    </p>
  </>
);

const AIRecommendationCard = () => (
  <div className="w-[380px] min-h-[180px]">
    <div
      className="relative rounded-[14px] shadow-2xl overflow-hidden border"
      style={{
        background: 'linear-gradient(135deg, #017AFF 0%, #004AAC 100%)',
        border: '1.2px solid #004AAC',
        boxShadow: `
          inset 0 1.2px 5px 0 #004AAC33,
          inset 0 1px 3px 0 #017AFF44,
          inset 0 -1.2px 5px 0 #004AAC22,
          0 1.2px 5px 0 #004AAC33,
          0 2px 8px 0 #017AFF22,
          0 4px 16px 0 #004AAC22,
          0 8px 32px 0 #017AFF11
        `,
        width: '390px',
        minHeight: '180px',
      }}
    >
      {/* SVG background */}
      <img
        src="/arrow.svg"
        alt="Background Shape"
        style={{
          position: 'absolute',
          right: -140,
          bottom: '-65px',
          width: '400px',
          height: '300px',
          opacity: 1,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Card content */}
      <div className="relative z-10 flex flex-col gap-3 p-5" style={{ fontFamily: 'Inter, sans-serif' }}>
        <h3 className="text-white text-[20px] font-semibold">AI Recommendations</h3>
        <p className="text-white text-sm leading-snug break-words max-w-full"  style={{ opacity: 0.7 }}>
          Our advanced AI analyzes your trading style, risk tolerance, and preferences to recommend the perfect prop firm matches. Get personalized suggestions based on your unique profile.
        </p>
        <button className="bg-white font-bold text-sm rounded-lg px-4 py-2.5 shadow-lg hover:bg-blue-50 transition-all duration-200 w-fit self-start" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className="bg-gradient-to-r from-[#017AFF] to-[#004AAC] bg-clip-text text-transparent">
            Get AI Recommendations
          </span>
        </button>
      </div>
    </div>
  </div>
);

// Featured Card Components 
const FeaturedCard1 = () => (
  <div className="w-[360px] min-h-[260px]">
    <div
      className="relative rounded-2xl shadow-2xl overflow-hidden border"
      style={{
        background: `
          linear-gradient(95deg,
            rgba(198,192,200,0) 0%,
            rgba(198,192,200,0.12) 10%,
            rgba(198,192,200,0.5) 80%,
            rgba(198,192,200,0.4) 90%,
            rgba(198,192,200,0.09) 100%
          ),
          linear-gradient(180deg, rgba(93,91,92,0.3) 0%, rgba(93,91,92,0.3) 100%)
        `,
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(18px)',
        boxShadow: '0 20px 80px 0 rgba(198,192,200,0.4), 0 8px 32px 0 rgba(198,192,200,0.2), 0 4px 16px 0 rgba(255,255,255,0.15)',
        width: '360px',
        minHeight: '260px',
      }}
    >
      {/* Number 02 in background */}
      <img
        src="/02.svg"
        alt="02 Decorative"
        style={{
          position: 'absolute',
          right: 0,
          top: '-20px',
          width: '180px',
          height: '180px',
          opacity: 1,
          transform: 'rotate(-0.9deg)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Card content */}
      <div className="relative z-10 flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xl">
            <img src="/Trophy1.svg" alt="Trophy 1" className="w-8 h-8" />
          </div>
          <div>
            <div className="text-base text-white">Apex Trader Funding</div>
            <div className="text-xs text-white"  style={{ opacity: 0.7 }}>Featured Top Firm</div>
          </div>
        </div>
        <p className="text-white text-xs leading-snug break-words max-w-full"  style={{ opacity: 0.7 }}>
          Industry-leading profit splits with no time limits and excellent trader support.
        </p>
        {/* Horizontal line */}
        <div style={{ height: '0.1px', width: '100%', background: 'rgba(255,255,255,0.13)', margin: '0.2px 0 0 0' }} />
        <div className="flex justify-between text-center text-white text-xs mb-2">
          <div>
            <div className="text-sm">90%</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Profit Split</div>
          </div>
          <div>
            <div className="text-sm">$150K</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Max Size</div>
          </div>
          <div>
            <div className="text-sm">06%</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Drawdown</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs font-medium">View Details</button>
          <button className="bg-white/10 border border-white/30 text-white rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs font-medium">Compare</button>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedCard2 = () => (
  <div className="w-[420px] min-h-[280px]" style={{ transform: 'translate(0px, -12px)' }}>
    <div
      className="relative rounded-2xl shadow-2xl overflow-hidden border"
      style={{
        background: `
          linear-gradient(95deg,
            rgba(226,170,0,0) 0%,
            rgba(226,170,0,0.12) 10%,
            rgba(226,170,0,0.7) 80%,
            rgba(226,170,0,0.4) 90%,
            rgba(226,170,0,0.09) 100%
          ),
          linear-gradient(180deg, rgba(137,102,0,0.3) 0%, rgba(137,102,0,0.3) 100%)
        `,
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(18px)',
        boxShadow: '0 20px 80px 0 rgba(226,170,0,0.4), 0 8px 32px 0 rgba(226,170,0,0.2), 0 4px 16px 0 rgba(255,255,255,0.15)',
        width: '420px',
        minHeight: '280px',
      }}
    >
      {/* Number 01 in background */}
      <img
        src="/01.svg"
        alt="01 Decorative"
        style={{
          position: 'absolute',
          right: 0,
          top: '-12px',
          width: '180px',
          height: '180px',
          opacity: 1,
          transform: 'rotate(-0.9deg)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Card content */}
      <div className="relative z-10 flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xl">
            <img src="/Trophy2.svg" alt="Trophy 2" className="w-10 h-10" />
          </div>
          <div>
            <div className="text-base text-white">Apex Trader Funding</div>
            <div className="text-xs text-white"  style={{ opacity: 0.7 }}>Featured Top Firm</div>
          </div>
        </div>
        <p className="text-white text-xs leading-snug break-words max-w-full"  style={{ opacity: 0.7 }}>
          Industry-leading profit splits with no time limits and excellent trader support.
        </p>
        {/* Horizontal line */}
        <div style={{ height: '0.1px', width: '100%', background: 'rgba(255,255,255,0.13)', margin: '8px 0 0 0' }} />
        <div className="flex justify-between text-center text-white text-xs mb-2 mt-2">
          <div>
            <div className="text-sm">90%</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Profit Split</div>
          </div>
          <div>
            <div className="text-sm">$150K</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Max Size</div>
          </div>
          <div>
            <div className="text-sm">06%</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Drawdown</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs font-medium">View Details</button>
          <button className="bg-white/10 border border-white/30 text-white rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs font-medium">Compare</button>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedCard3 = () => (
  <div className="w-[360px] min-h-[260px]">
    <div
      className="relative rounded-2xl shadow-2xl overflow-hidden border"
      style={{
        background: `
          linear-gradient(95deg,
            rgba(150,92,42,0) 0%,
            rgba(150,92,42,0.12) 10%,
            rgba(150,92,42,0.7) 80%,
            rgba(150,92,42,0.5) 90%,
            rgba(150,92,42,0.09) 100%
          ),
          linear-gradient(180deg, rgba(93,62,43,0.3) 0%, rgba(93,62,43,0.3) 100%)
        `,
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(18px)',
        boxShadow: '0 20px 80px 0 rgba(150,92,42,0.4), 0 8px 32px 0 rgba(150,92,42,0.2), 0 4px 16px 0 rgba(255,255,255,0.15)',
        width: '360px',
        minHeight: '260px',
      }}
    >
      {/* Number 03 in background */}
      <img
        src="/03.svg"
        alt="03 Decorative"
        style={{
          position: 'absolute',
          right: 0,
          top: '-20px',
          width: '180px',
          height: '180px',
          opacity: 1,
          transform: 'rotate(-0.9deg)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Card content */}
      <div className="relative z-10 flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xl">
            <img src="/Trophy3.svg" alt="Trophy 3" className="w-8 h-8" />
          </div>
          <div>
            <div className="text-base text-white">Apex Trader Funding</div>
            <div className="text-xs text-white"  style={{ opacity: 0.7 }}>Featured Top Firm</div>
          </div>
        </div>
        <p className="text-white text-xs leading-snug break-words max-w-full"  style={{ opacity: 0.7 }}>
          Industry-leading profit splits with no time limits and excellent trader support.
        </p>
        {/* Horizontal line */}
        <div style={{ height: '0.1px', width: '100%', background: 'rgba(255,255,255,0.13)', margin: '0.2px 0 0 0' }} />
        <div className="flex justify-between text-center text-white text-xs mb-2">
          <div>
            <div className="text-sm">90%</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Profit Split</div>
          </div>
          <div>
            <div className="text-sm">$150K</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Max Size</div>
          </div>
          <div>
            <div className="text-sm">06%</div>
            <div className="text-xs text-white mt-1 uppercase"  style={{ opacity: 0.7 }}>Drawdown</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs font-medium">View Details</button>
          <button className="bg-white/10 border border-white/30 text-white rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs font-medium">Compare</button>
        </div>
      </div>
    </div>
  </div>
); 