"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid3X3, List } from "lucide-react";

const SearchSection = () => (
  <section className="px-0 py-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
      <div className="-mt-7">
        <h2 className="text-2xl font-semibold mb-2 text-left" >Find Prop Firms</h2>
        <p className="text-gray-300 text-sm font-medium leading-relaxed text-left"  style={{ opacity: 0.7 }}>
          Browse our detailed comparison table to find the best prop trading firm for your needs.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 z-10" />
          <Input
            placeholder="Search Firms" 
            className="pl-12 pr-4 py-5 w-80 text-white placeholder:text-gray-300 shadow-xl font-medium backdrop-blur-xl"
            style={{
              borderRadius: '10px',
              background: 'linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              WebkitBackdropFilter: 'blur(20px)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)',
            }}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="py-5 px-5 shadow-xl transition-all duration-300 text-white hover:text-gray-300"
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)',
            border: '1.5px solid rgba(255,255,255,0.25)',
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)',
          }}
        >
          <Filter className="w-5 h-5 hover:text-gray-100" />
        </Button>
        {/* Toggle Switch for Grid and List */}
        {(() => {
          const [active, setActive] = useState<'grid' | 'list'>('grid');
          return (
            <div
              className="relative flex rounded-[10px] backdrop-blur-xl p-1"
              style={{
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)',
                borderRadius: '10px',
                background: 'linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                WebkitBackdropFilter: 'blur(20px)',
                backdropFilter: 'blur(20px)',
                width: '100px',
                height: '48px',
              }}
            >
              {/* Sliding indicator */}
              <div
                className="absolute top-1 bottom-1 rounded-[8px] transition-all duration-300 ease-out"
                style={{
                  width: '46px',
                  background: 'linear-gradient(360deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.3) 100%)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.3), inset 0 1px 0 0 rgba(255,255,255,0.3)',
                  WebkitBackdropFilter: 'blur(20px)',
                  backdropFilter: 'blur(20px)',
                  transform: active === 'grid' ? 'translateX(0px)' : 'translateX(46px)',
                }}
              />
              
              {/* Grid button */}
              <button
                className="relative z-10 flex items-center justify-center w-12 h-full text-white transition-all duration-200 focus:outline-none"
                style={{
                  opacity: active === 'grid' ? 1 : 0.6,
                }}
                onClick={() => setActive('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              
              {/* List button */}
              <button
                className="relative z-10 flex items-center justify-center w-12 h-full text-white transition-all duration-200 focus:outline-none"
                style={{
                  opacity: active === 'list' ? 1 : 0.6,
                }}
                onClick={() => setActive('list')}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  </section>
);

export default SearchSection; 