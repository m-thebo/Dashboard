import CardSection from "../components/CardSection";
import SearchSection from "../components/SearchSection";
import TableSection from "../components/TableSection";

export default function App() {
  return (
    <div className="min-h-screen h-full text-white relative overflow-hidden px-12 pb-32" style={{ fontFamily: 'Intel, sans-serif' }}>
      <CardSection />
      <SearchSection />
      <TableSection />
    </div>
  );
}
