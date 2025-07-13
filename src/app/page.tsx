import CardSection from "../components/CardSection";
import SearchSection from "../components/SearchSection";
import TableSection from "../components/TableSection";

export default function App() {
  return (
<div className="min-h-screen h-full text-white relative overflow-hidden px-4 md:px-6 lg:px-12 xl:px-[100px] py-[30px] md:py-[40px] lg:py-[60px] pb-16 md:pb-24 lg:pb-32 font-poppins">
      <CardSection />
      <SearchSection />
      <TableSection />
    </div>
  );
}
