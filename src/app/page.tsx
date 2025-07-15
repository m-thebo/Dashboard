import CardSection from "../components/CardSection";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import TableSection from "../components/TableSection";
import WhyChooseSection from "../components/WhyChooseSection";
import TopFirmsSection from "../components/TopFirmsTableSection";
import AIQuizCardSection from "@/components/AIQuizCardSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";


export default function App() {
  return (
<div className="min-h-screen h-full text-white relative overflow-hidden font-poppins">
      <HeroSection />
      <WhyChooseSection />
      <TopFirmsSection />
      <AIQuizCardSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <CardSection />
      <SearchSection />
      <TableSection /> */}
    </div>
  );
}
