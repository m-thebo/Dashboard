import CardSection from "../components/CardSection";
import SearchSection from "../components/SearchSection";
import TableSection from "../components/TableSection";

export default function App() {
  return (
    <div className="min-h-screen h-full text-white relative overflow-hidden px-[100px] py-[60px] pb-32" style={{ fontFamily: 'Poppins' }}>
      <CardSection />
      <SearchSection />
      <TableSection />
    </div>
  );
}
