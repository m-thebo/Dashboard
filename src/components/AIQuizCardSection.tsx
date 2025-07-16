import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AIQuizCardSection = () => (
  <section className="w-full flex justify-center items-center py-12 px-4 lg:px-0 relative">
    <div className="w-full max-w-3xl relative flex justify-center items-center">
      {/* Blue gradient background container */}
      <div className="card-blue-gradient absolute top-1/2 left-1/2 w-[600px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] blur-xl opacity-80 z-0 pointer-events-none" />
      <Card className="relative ai-card-bg rounded-[18px] shadow-2xl overflow-hidden border w-full min-h-[290px] flex flex-col items-center justify-center z-10">
        <img
          src="/arrow.svg"
          alt="Background Shape"
          className="absolute right-[-90px] top-[-20px] w-[400px] h-[350px] opacity-100 z-[1] pointer-events-none"
        />
        <CardContent className="relative z-10 flex flex-col items-center justify-center gap-4 py-10 px-6 text-center">
          <img src="/Vector 2.svg" alt="Logo" className="w-12 h-12 mx-auto mb-3" />
          <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-2">Find Your Ideal Firm in 3 Minutes</h2>
          <p className="text-white/90 text-base mb-4">Answer a few questions to get personalized prop firm recommendations.</p>
          <Button className="bg-white font-semibold text-sm rounded-lg px-5 py-2.5 shadow-lg hover:bg-blue-50 transition-all duration-200 w-fit mx-auto">
            <span className="bg-gradient-to-r from-[#017AFF] to-[#004AAC] bg-clip-text text-transparent">
              Take the Quiz Now
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default AIQuizCardSection; 