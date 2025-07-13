"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Grid3X3, List } from "lucide-react"

const SearchSection = () => {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <section className="px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6 md:gap-0">
        <div className="-mt-7 text-center md:text-left w-full md:w-auto">
          <h2 className="text-2xl font-semibold mb-2">Find Prop Firms</h2>
          <p className="text-gray-300 text-sm font-medium leading-relaxed" style={{ opacity: 0.7 }}>
            Browse our detailed comparison table to find the best prop trading firm for your needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="w-full sm:w-80 md:w-96 lg:w-[300px]">
              <div className="relative flex-1 h-12">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 z-10" />
                <Input
                  placeholder="Search Firms"
                  className="pl-12 pr-4 text-white placeholder:text-gray-300 shadow-xl font-medium backdrop-blur-xl w-full h-12"
                  style={{
                    borderRadius: "10px",
                    background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    WebkitBackdropFilter: "blur(20px)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-3 w-full sm:w-auto items-stretch">
              <Button
                variant="outline"
                size="icon"
                className="shadow-xl transition-all duration-300 text-white hover:text-gray-300 w-12 min-w-0 h-12 bg-transparent"
                style={{
                  borderRadius: "10px",
                  background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  WebkitBackdropFilter: "blur(20px)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                }}
              >
                <Filter className="w-5 h-5 hover:text-gray-100" />
              </Button>

              {/* Custom Toggle Switch with Sliding Indicator */}
              <div
                className="relative flex rounded-[10px] backdrop-blur-xl p-1 flex-1 sm:w-[100px]"
                style={{
                  width: "100px",
                  height: "48px",
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                  borderRadius: "10px",
                  background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  WebkitBackdropFilter: "blur(20px)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Sliding indicator */}
                <div
                  className="absolute top-1 bottom-1 left-1 transition-all duration-300 ease-out rounded-[8px]"
                  style={{
                    width: "calc(50% - 4px)", // 4px for padding (1 on each side)
                    background: "linear-gradient(360deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.3) 100%)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.3), inset 0 1px 0 0 rgba(255,255,255,0.3)",
                    WebkitBackdropFilter: "blur(20px)",
                    backdropFilter: "blur(20px)",
                    transform: view === "grid" ? "translateX(0%)" : "translateX(100%)",
                  }}
                />
                {/* Grid button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative z-10 w-1/2 h-full text-white transition-all duration-200 hover:bg-transparent p-0 border-0"
                  style={{
                    opacity: view === "grid" ? 1 : 0.6,
                  }}
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                {/* List button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative z-10 w-1/2 h-full text-white transition-all duration-200 hover:bg-transparent p-0 border-0"
                  style={{
                    opacity: view === "list" ? 1 : 0.6,
                  }}
                  onClick={() => setView("list")}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
