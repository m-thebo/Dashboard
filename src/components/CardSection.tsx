const CardSection = () => (
  <section className="px-0 py-20">
    <div className="max-w-7xl mx-auto flex items-stretch gap-8">
      <div className="flex-1 flex flex-col justify-center">
        <HeroHeading />
      </div>
      <div className="flex-1 flex items-center justify-end" style={{ transform: 'translateX(-200px)' }}>
        <AIRecommendationCard />
      </div>
    </div>
    {/* Featured Firms Cards */}
    <div className="max-w-7xl mx-auto flex justify-center items-start gap-4 mt-12">
      {/* Card 1 */}
      <div className="relative rounded-2xl overflow-hidden flex">
        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[120px] font-extrabold text-white/10 select-none pointer-events-none z-0">01</span>
        <div
          className="relative text-white rounded-2xl shadow-2xl p-4 flex flex-col justify-between gap-4 z-10 border backdrop-blur-xl overflow-hidden"
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
            boxShadow: '0 8px 32px 0 rgba(198,192,200,0.18), 0 1.5px 8px 0 rgba(255,255,255,0.08)',
            gap: '16px',
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
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xl">
              <img src="/Trophy1.svg" alt="Trophy 1" className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Apex Trader Funding</div>
              <div className="text-xs text-white font-medium">Featured Top Firm</div>
            </div>
          </div>
          <p className="text-white text-xs leading-snug font-medium break-words max-w-full">
            Industry-leading profit splits with no time limits and excellent trader support.
          </p>
          {/* Horizontal line */}
          <div style={{ height: '0.1px', width: '100%', background: 'rgba(255,255,255,0.13)', margin: '0.2px 0 0 0' }} />
          <div className="flex justify-between text-center text-white font-bold text-xs mb-2">
            <div>
              <div>90%</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Profit Split</div>
            </div>
            <div>
              <div>$150K</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Max Size</div>
            </div>
            <div>
              <div>06%</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Drawdown</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-white text-black font-bold rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs">View Details</button>
            <button className="bg-white/10 border border-white/30 text-white font-bold rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs">Compare</button>
          </div>
        </div>
      </div>
      {/* Card 2 - Gold Highlight */}
      <div className="relative rounded-2xl overflow-hidden flex" style={{ transform: 'translate(1px, -14px)' }}>
        {/* Removed the background number 02 */}
        <div
          className="relative text-white rounded-2xl shadow-2xl p-4 flex flex-col justify-between gap-4 z-10 border backdrop-blur-xl overflow-hidden"
          style={{
            background: `
              linear-gradient(95deg,
                rgba(226,170,0,0) 0%,
                rgba(226,170,0,0.12) 10%,
                rgba(226,170,0,0.6) 80%,
                rgba(226,170,0,0.4) 90%,
                rgba(226,170,0,0.09) 100%
              ),
              linear-gradient(180deg, rgba(137,102,0,0.3) 0%, rgba(137,102,0,0.3) 100%)
            `,
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 8px 32px 0 rgba(226,170,0,0.18), 0 1.5px 8px 0 rgba(255,255,255,0.08)',
            gap: '16px',
            width: '370px',
            minHeight: '280px',
          }}
        >
          {/* Decorative SVG 01.svg */}
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
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xl">
              <img src="/Trophy2.svg" alt="Trophy 2" className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Apex Trader Funding</div>
              <div className="text-xs text-white font-medium">Featured Top Firm</div>
            </div>
          </div>
          <p className="text-white text-xs leading-snug font-medium break-words max-w-full">
            Industry-leading profit splits with no time limits and excellent trader support.
          </p>
          {/* Horizontal line */}
          <div style={{ height: '0.1px', width: '100%', background: 'rgba(255,255,255,0.13)', margin: '0.2px 0 0 0' }} />
          <div className="flex justify-between text-center text-white font-bold text-xs mb-2">
            <div>
              <div>90%</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Profit Split</div>
            </div>
            <div>
              <div>$150K</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Max Size</div>
            </div>
            <div>
              <div>06%</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Drawdown</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-white text-black font-bold rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs">View Details</button>
            <button className="bg-white/10 border border-white/30 text-white font-bold rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs">Compare</button>
          </div>
        </div>
      </div>
      {/* Card 3 - Brown Highlight */}
      <div className="relative rounded-2xl overflow-hidden flex">
        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[120px] font-extrabold text-white/10 select-none pointer-events-none z-0">03</span>
        <div
          className="relative text-white rounded-2xl shadow-2xl p-4 flex flex-col justify-between gap-4 z-10 border backdrop-blur-xl overflow-hidden"
          style={{
            background: `
              linear-gradient(95deg,
                rgba(150,92,42,0) 0%,
                rgba(150,92,42,0.12) 10%,
                rgba(150,92,42,0.6) 80%,
                rgba(150,92,42,0.4) 90%,
                rgba(150,92,42,0.09) 100%
              ),
              linear-gradient(180deg, rgba(93,62,43,0.3) 0%, rgba(93,62,43,0.3) 100%)
            `,
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 8px 32px 0 rgba(150,92,42,0.18), 0 1.5px 8px 0 rgba(255,255,255,0.08)',
            gap: '16px',
            width: '360px',
            minHeight: '260px',
          }}
        >
          {/* Decorative SVG 03.svg */}
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
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xl">
              <img src="/Trophy3.svg" alt="Trophy 3" className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Apex Trader Funding</div>
              <div className="text-xs text-white font-medium">Featured Top Firm</div>
            </div>
          </div>
          <p className="text-white text-xs leading-snug font-medium break-words max-w-full">
            Industry-leading profit splits with no time limits and excellent trader support.
          </p>
          {/* Horizontal line */}
          <div style={{ height: '0.1px', width: '100%', background: 'rgba(255,255,255,0.13)', margin: '0.2px 0 0 0' }} />
          <div className="flex justify-between text-center text-white font-bold text-xs mb-2">
            <div>
              <div>90%</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Profit Split</div>
            </div>
            <div>
              <div>$150K</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Max Size</div>
            </div>
            <div>
              <div>06%</div>
              <div className="text-xs text-white mt-1 font-semibold uppercase">Drawdown</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-white text-black font-bold rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs">View Details</button>
            <button className="bg-white/10 border border-white/30 text-white font-bold rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs">Compare</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CardSection;

// --- New Components ---
const HeroHeading = () => (
  <>
    <h1 className="text-2xl font-black leading-tight mb-4 text-left">
      Find Your Perfect Prop Trading Firm Today
    </h1>
    <p className="text-gray-300 text-base leading-relaxed max-w-xl font-medium text-left">
      Compare the world's leading proprietary trading firms. Discover the best profit splits, account sizes, and trading conditions tailored to your trading style.
    </p>
  </>
);

const AIRecommendationCard = () => (
  <div className="w-[350px] min-h-[140px]">
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
        width: '360px',
        minHeight: '140px',
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
        <h3 className="text-white text-[18px] font-bold">AI Recommendations</h3>
        <p className="text-white text-xs font-normal leading-snug">
          Our advanced AI analyzes your trading style, risk tolerance, and preferences to recommend the perfect prop firm matches. Get personalized suggestions based on your unique profile.
        </p>
        <button className="bg-white font-bold text-xs rounded-lg px-3 py-2 shadow-lg hover:bg-blue-50 transition-all duration-200 w-fit self-start" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className="bg-gradient-to-r from-[#017AFF] to-[#004AAC] bg-clip-text text-transparent">
            Get AI Recommendations
          </span>
        </button>
      </div>
    </div>
  </div>
); 