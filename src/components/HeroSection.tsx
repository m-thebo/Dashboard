import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const firms = [
  {
    logo: "/E8Markets.png",
    name: "E8 Markets",
    rating: 4.4,
    reviews: 1340,
    desc:
      "E8 Markets operates as an evaluation company, providing access solely to demo accounts in a simulated trading environment.",
    cardClass: "bg-[#23243a]/80 border-none",
    badgeClass: "bg-[#23243a]",
    size: "small",
  },
  {
    logo: "/FTMO.png",
    name: "FTMO",
    rating: 4.4,
    reviews: 1340,
    desc:
      "Trusted modern prop trading firm. Looking for serious traders. Start trading with up to $200,000 on a demo FTMO Account.",
    cardClass: "bg-gradient-to-br from-[#017AFF] to-[#004AAC] border-none shadow-xl",
    badgeClass: "bg-[#004AAC]",
    size: "large",
  },
  {
    logo: "/URFX.png",
    name: "URFX",
    rating: 4.4,
    reviews: 1340,
    desc:
      "URFX is a next-generation prop firm designed for serious traders. We provide access to top-tier funding, real-time analytics.",
    cardClass: "bg-[#23243a]/80 border-none",
    badgeClass: "bg-[#23243a]",
    size: "small",
  },
];

function HeroHeading() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full text-center mb-8">
      <h1 className="md:text-6xl text-3xl font-semibold leading-tight mb-4 text-white drop-shadow-lg">
        Find Your Perfect Prop<br className="hidden md:block" /> Trading Firm Today
      </h1>
      <p className="text-base md:text-sm text-white/80 mb-4 w-full max-w-2xl">
        Discover top proprietary trading firms with our expert comparisons and insights. Compare ratings, funding, assets, and platforms to make informed trading decisions.
      </p>
      <Button className="ftmo-card-bg text-white font-normal text-base rounded-lg px-5 py-5 md:mb-32 shadow-lg border border-[#004AAC] hover:scale-102 active:scale-98 hover:shadow-2xl transition-all duration-200 cursor-pointer hover:brightness-110">
        Compare Firms Now
      </Button>
    </div>
  );
}

function HeroFirmCardLeft({ firm }: { firm: (typeof firms)[0] }) {
  return (
    <Card className={"min-w-[320px] max-w-[98vw] w-[98vw] min-h-[60px] md:min-w-0 md:w-full md:min-h-[160px] flex-[0.9_1_0%] hero-sidecard-bg shadow-2xl flex flex-col items-start transition-all duration-300 backdrop-blur-sm"}>
      <CardContent className="flex flex-col gap-2 md:gap-3 py-3 md:py-5 px-3 md:px-5 h-full w-full justify-between">
        <div className="flex items-center w-full justify-between mb-2">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src={firm.logo} alt={firm.name} className="w-12 h-12 object-contain" />
          </div>
          <Badge className="hero-badge-bg text-white text-sm px-3 py-1.5 rounded-full gap-1 ml-2 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            {firm.rating} <span className="ml-1 text-xs text-white/70">({firm.reviews})</span>
          </Badge>
        </div>
        <span className="text-white font-normal text-base leading-tight truncate mb-1">{firm.name}</span>
        <p className="text-white/80 text-xs md:text-xs leading-relaxed">{firm.desc}</p>
      </CardContent>
    </Card>
  );
}

function HeroFirmCardMiddle({ firm }: { firm: (typeof firms)[0] }) {
  return (
    <Card className={"min-w-[320px] max-w-[98vw] w-[98vw] min-h-[60px] md:min-w-0 md:w-full md:min-h-[160px] flex-[1_1_0%] ftmo-card-bg shadow-2xl flex flex-col items-start transition-all duration-300 backdrop-blur-sm"}>
      <CardContent className="flex flex-col gap-2 md:gap-4 py-3 md:py-5 px-3 md:px-5 h-full w-full justify-between">
        <div className="flex items-center w-full justify-between mb-2">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src={firm.logo} alt={firm.name} className="w-12 h-12 object-contain" />
          </div>
          <Badge className="hero-badge-bg text-white text-base px-3 py-1.5 rounded-full gap-1 ml-2 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            {firm.rating} <span className="ml-1 text-xs text-white/70">({firm.reviews})</span>
          </Badge>
        </div>
        <span className="text-white font-normal text-base leading-tight truncate mb-1">{firm.name}</span>
        <p className="text-white/80 text-xs md:text-sm leading-relaxed">{firm.desc}</p>
      </CardContent>
    </Card>
  );
}

function HeroFirmCardRight({ firm }: { firm: (typeof firms)[0] }) {
  return (
    <Card className={"min-w-[320px] max-w-[98vw] w-[98vw] min-h-[60px] md:min-w-0 md:w-full md:min-h-[160px] flex-[0.9_1_0%] hero-sidecard-bg shadow-2xl flex flex-col items-start transition-all duration-300 backdrop-blur-sm"}>
      <CardContent className="flex flex-col gap-2 md:gap-3 py-3 md:py-5 px-3 md:px-5 h-full w-full justify-between">
        <div className="flex items-center w-full justify-between mb-2">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src={firm.logo} alt={firm.name} className="w-12 h-12 object-contain" />
          </div>
          <Badge className="hero-badge-bg text-white text-sm px-3 py-1.5 rounded-full gap-1 ml-2 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            {firm.rating} <span className="ml-1 text-xs text-white/70">({firm.reviews})</span>
          </Badge>
        </div>
        <span className="text-white font-normal text-base leading-tight truncate mb-1">{firm.name}</span>
        <p className="text-white/80 text-xs md:text-xs leading-relaxed">{firm.desc}</p>
      </CardContent>
    </Card>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 lg:px-12 xl:px-[100px]">
      {/* Background image covering the whole section */}
      <img
        src="/background.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-110 z-0 pointer-events-none select-none opacity-100"
        aria-hidden="true"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 hero-top-glow bg-black/60 z-0" aria-hidden="true" />
      <HeroHeading /> 
      <div className="relative z-10 w-full max-w-7xl mt-2">
        <div className="flex flex-row md:flex-row gap-4 md:gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible px-1 md:px-0 hide-scrollbar md:justify-center items-center py-3 md:py-0">
          <HeroFirmCardLeft firm={firms[0]} />
          <HeroFirmCardMiddle firm={firms[1]} />
          <HeroFirmCardRight firm={firms[2]} />
        </div>
      </div>
    </section>
  );
}
  