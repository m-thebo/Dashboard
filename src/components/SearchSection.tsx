import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid3X3, List } from "lucide-react";

const SearchSection = () => (
  <section className="px-0 py-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
      <div className="-mt-7">
        <h2 className="text-2xl font-black mb-2 text-left">Find Prop Firms</h2>
        <p className="text-gray-300 text-sm font-medium leading-relaxed text-left">
          Browse our detailed comparison table to find the best prop trading firm for your needs.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 z-10" />
          <Input
            placeholder="Search Firms"
            className="pl-12 pr-4 py-4 w-80 text-gray-900 placeholder:text-gray-400 shadow-xl font-medium backdrop-blur-xl"
            style={{
              borderRadius: '10px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              WebkitBackdropFilter: 'blur(16px)',
              backdropFilter: 'blur(16px)',
            }}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="p-4 shadow-xl transition-all duration-300 text-white"
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            WebkitBackdropFilter: 'blur(16px)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <Filter className="w-5 h-5" />
        </Button>
        {/* Toggle group for Grid and List */}
        <div
          className="flex rounded-[10px] backdrop-blur-xl"
          style={{
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            WebkitBackdropFilter: 'blur(16px)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <Button
            variant="outline"
            size="icon"
            className="p-4 text-white rounded-l-[18px] rounded-r-none border-none bg-transparent focus:bg-white/10 focus:shadow-none"
            style={{
              borderRight: '1.5px solid rgba(255,255,255,0.08)',
            }}
          >
            <Grid3X3 className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="p-4 text-white rounded-r-[18px] rounded-l-none border-none bg-transparent focus:bg-white/10 focus:shadow-none"
          >
            <List className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default SearchSection; 