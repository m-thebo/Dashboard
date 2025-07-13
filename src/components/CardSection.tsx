import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const CardSection = () => (
  <section className="px-4 py-10 sm:py-14 md:py-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start md:-mt-21">
        <HeroHeading />
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-end md:translate-x-[-10px] md:translate-y-[-25px] w-full">
        <AIRecommendationCard />
      </div>
    </div>
    {/* Featured Firms Cards */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-6 mt-8 md:mt-12 w-full">
      <FeaturedCard1 />
      <FeaturedCard2 />
      <FeaturedCard3 />
    </div>
  </section>
)

export default CardSection

const HeroHeading = () => (
  <>
    <h1 className="text-2xl sm:text-3xl font-semibold leading-tight mb-4 text-center md:text-left">
      Find Your Perfect Prop Trading Firm Today
    </h1>
    <p className="text-gray-300 text-base leading-relaxed max-w-xl font-medium text-center md:text-left opacity-70">
      Compare the world's leading proprietary trading firms. Discover the best profit splits, account sizes, and trading
      conditions tailored to your trading style.
    </p>
  </>
)

const AIRecommendationCard = () => (
  <div className="w-full max-w-[390px] min-h-[220px]">
    <Card
      className="relative rounded-[14px] shadow-2xl overflow-hidden border w-full min-h-[220px]"
      style={{
        background: "linear-gradient(135deg, #017AFF 0%, #004AAC 100%)",
        border: "1.2px solid #004AAC",
        boxShadow: `
          inset 0 1.2px 5px 0 #004AAC33,
          inset 0 1px 3px 0 #017AFF44,
          inset 0 -1.2px 5px 0 #004AAC22,
          0 1.2px 5px 0 #004AAC33,
          0 2px 8px 0 #017AFF22,
          0 4px 16px 0 #004AAC22,
          0 8px 32px 0 #017AFF11
        `,
      }}
    >
      {/* SVG background */}
      <img
        src="/arrow.svg"
        alt="Background Shape"
        className="absolute right-[-140px] bottom-[-40px] w-[400px] h-[300px] opacity-100 z-[1] pointer-events-none"
      />
      {/* Card content */}
      <CardContent className="relative z-10 flex flex-col gap-4 p-4 sm:p-6 font-inter">
        <h3 className="text-white text-[20px] sm:text-[22px] font-semibold text-center sm:text-left">
          AI Recommendations
        </h3>
        <p className="text-white text-sm leading-relaxed break-words max-w-full text-center sm:text-left opacity-70">
          Our advanced AI analyzes your trading style, risk tolerance, and preferences to recommend the perfect prop
          firm matches. Get personalized suggestions based on your unique profile.
        </p>
        <div className="flex-1 flex items-end justify-center sm:justify-start">
          <Button
            className="bg-white font-bold text-sm rounded-lg px-4 py-2.5 shadow-lg hover:bg-blue-50 transition-all duration-200 w-fit font-inter"
          >
            <span className="bg-gradient-to-r from-[#017AFF] to-[#004AAC] bg-clip-text text-transparent">
              Get AI Recommendations
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
)

// Featured Card Components
const FeaturedCard1 = () => (
  <div className="w-full md:w-[320px] flex-1">
    <Card
      className="relative rounded-2xl shadow-2xl overflow-hidden border h-full flex flex-col w-full"
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
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 4px 16px 0 rgba(198,192,200,0.15), 0 1.5px 6px 0 rgba(198,192,200,0.10)",
      }}
    >
      {/* Number 02 in background */}
      <img
        src="/02.svg"
        alt="02 Decorative"
        className="absolute right-0 top-[-20px] w-[180px] h-[180px] opacity-100 rotate-[-0.9deg] z-[1] pointer-events-none"
      />
      {/* Card content */}
      <CardContent className="relative z-10 flex flex-col gap-4 p-4 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xl">
            <img src="/Trophy1.svg" alt="Trophy 1" className="w-8 h-8" />
          </div>
          <div>
            <div className="text-base text-white">Apex Trader Funding</div>
            <div className="text-xs text-white opacity-70">
              Featured Top Firm
            </div>
          </div>
        </div>
        <p className="text-white text-xs leading-snug break-words max-w-full opacity-70">
          Industry-leading profit splits with no time limits and excellent trader support.
        </p>
        {/* Horizontal line */}
        <div className="h-[0.1px] w-full bg-white/13 mt-[0.2px]" />
        <div className="flex justify-between text-center text-white text-xs mb-2">
          <div>
            <div className="text-sm">90%</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Profit Split
            </div>
          </div>
          <div>
            <div className="text-sm">$150K</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Max Size
            </div>
          </div>
          <div>
            <div className="text-sm">06%</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Drawdown
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Button className="bg-white text-black rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs font-medium">
            View Details
          </Button>
          <Button className="bg-white/10 border border-white/30 text-white rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs font-medium">
            Compare
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
)

const FeaturedCard2 = () => (
  <div className="w-full md:w-[320px] flex-1 md:-mt-2">
    <Card
      className="relative rounded-2xl shadow-2xl overflow-hidden border h-full flex flex-col w-full"
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
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 4px 16px 0 rgba(226,170,0,0.15), 0 1.5px 6px 0 rgba(226,170,0,0.10)",
      }}
    >
      {/* Number 01 in background */}
      <img
        src="/01.svg"
        alt="01 Decorative"
        className="absolute right-0 top-[-12px] w-[180px] h-[180px] opacity-100 rotate-[-0.9deg] z-[1] pointer-events-none"
      />
      {/* Card content */}
      <CardContent className="relative z-10 flex flex-col gap-4 p-4 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xl">
            <img src="/Trophy2.svg" alt="Trophy 2" className="w-10 h-10" />
          </div>
          <div>
            <div className="text-base text-white">Apex Trader Funding</div>
            <div className="text-xs text-white opacity-70">
              Featured Top Firm
            </div>
          </div>
        </div>
        <p className="text-white text-xs leading-snug break-words max-w-full opacity-70">
          Industry-leading profit splits with no time limits and excellent trader support.
        </p>
        {/* Horizontal line */}
        <div className="h-[0.1px] w-full bg-white/13 mt-2" />
        <div className="flex justify-between text-center text-white text-xs mb-2 mt-2">
          <div>
            <div className="text-sm">90%</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Profit Split
            </div>
          </div>
          <div>
            <div className="text-sm">$150K</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Max Size
            </div>
          </div>
          <div>
            <div className="text-sm">06%</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Drawdown
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Button className="bg-white text-black rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs font-medium">
            View Details
          </Button>
          <Button className="bg-white/10 border border-white/30 text-white rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs font-medium">
            Compare
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
)

const FeaturedCard3 = () => (
  <div className="w-full md:w-[320px] flex-1">
    <Card
      className="relative rounded-2xl shadow-2xl overflow-hidden border h-full flex flex-col w-full"
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
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 4px 16px 0 rgba(150,92,42,0.15), 0 1.5px 6px 0 rgba(150,92,42,0.10)",
      }}
    >
      {/* Number 03 in background */}
      <img
        src="/03.svg"
        alt="03 Decorative"
        className="absolute right-0 top-[-20px] w-[180px] h-[180px] opacity-100 rotate-[-0.9deg] z-[1] pointer-events-none"
      />
      {/* Card content */}
      <CardContent className="relative z-10 flex flex-col gap-4 p-4 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xl">
            <img src="/Trophy3.svg" alt="Trophy 3" className="w-8 h-8" />
          </div>
          <div>
            <div className="text-base text-white">Apex Trader Funding</div>
            <div className="text-xs text-white opacity-70">
              Featured Top Firm
            </div>
          </div>
        </div>
        <p className="text-white text-xs leading-snug break-words max-w-full opacity-70">
          Industry-leading profit splits with no time limits and excellent trader support.
        </p>
        {/* Horizontal line */}
        <div className="h-[0.1px] w-full bg-white/13 mt-[0.2px]" />
        <div className="flex justify-between text-center text-white text-xs mb-2">
          <div>
            <div className="text-sm">90%</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Profit Split
            </div>
          </div>
          <div>
            <div className="text-sm">$150K</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Max Size
            </div>
          </div>
          <div>
            <div className="text-sm">06%</div>
            <div className="text-xs text-white mt-1 uppercase opacity-70">
              Drawdown
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Button className="bg-white text-black rounded-lg px-2 py-1 flex-1 shadow hover:bg-gray-100 transition text-xs font-medium">
            View Details
          </Button>
          <Button className="bg-white/10 border border-white/30 text-white rounded-lg px-2 py-1 flex-1 shadow hover:bg-white/20 transition text-xs font-medium">
            Compare
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
)
