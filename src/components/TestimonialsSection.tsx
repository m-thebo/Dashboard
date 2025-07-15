import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    logo: "/URFX.png",
    quote: "Passed my challenge on the first try thanks to their side-by-side comparison.",
    name: "Denis Slavska",
    location: "Toronto, Canada",
    cardClass: "hero-sidecard-bg",
  },
  {
    logo: "/FundedTradingPlus.png",
    quote: "Clean layout, useful filters, and accurate stats helped me pick the right firm fast.",
    name: "Jahan Melad",
    location: "New York, USA",
    cardClass: "ftmo-card-bg",
  },
  {
    logo: "/FTMO.png",
    quote: "Platform showed real reviews and helped me choose one that pays on time.",
    name: "Jim Halpert",
    location: "Abu Dhabi, United Arab Emirates",
    cardClass: "hero-sidecard-bg",
  },
];

const TestimonialsSection = () => (
  <section className="w-full py-16 px-2 relative flex justify-center items-center">
    <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative">
      {/* Blue gradient background container */}
      <div className="testimonials-blue-gradient absolute top-1/2 left-1/2 w-[900px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] opacity-80 z-0 pointer-events-none" />
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-10 z-10">What Traders Say About Us</h2>
      <div className="flex w-full md:flex-row flex-row gap-6 md:gap-6 md:justify-center items-stretch z-10 overflow-x-auto md:overflow-visible hide-scrollbar px-1 md:px-0">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className={`relative rounded-2xl shadow-2xl overflow-hidden border-0 min-w-[260px] max-w-[85vw] w-[85vw] md:flex-1 md:min-w-[220px] md:max-w-[300px] min-h-[260px] md:min-h-[340px] ${t.cardClass}`}
          >
            <CardContent className="flex flex-col gap-4 p-7 h-full justify-between">
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center mb-2">
                  <img src={t.logo} alt="Logo" className="w-12 h-12 object-contain" />
                </div>
                <span className="text-white text-3xl leading-none mb-2">“</span>
                <p className="text-white text-base font-normal leading-relaxed mb-4">{t.quote}</p>
              </div>
              <div className="mt-auto flex flex-row items-center gap-3">
                <div className="w-[2px] h-8 bg-white/20 rounded-full" />
                <div className="flex flex-col">
                  <div className="text-white font-normal text-sm">{t.name}</div>
                  <div className="text-white/70 text-xs">{t.location}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 