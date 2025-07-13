"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Grid3X3, List } from "lucide-react"

const SearchSection = () => {
  const [view, setView] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // sm breakpoint - mobile
        setView("list")
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // md breakpoint - tablets
        setView("list")
      } else {
        // lg and above - desktop
        setView("grid")
      }
    }

    // Set initial view based on screen size
    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="px-4 py-4 md:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Small screens - original layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 md:mb-8 gap-4 md:gap-6 lg:gap-0 md:hidden">
          <div className="-mt-4 text-center lg:text-left w-full lg:w-auto">
            <h2 className="text-xl font-semibold mb-2">Find Prop Firms</h2>
            <p className="text-gray-300 text-sm font-medium leading-relaxed opacity-70 max-w-md mx-auto lg:mx-0">
              Browse our detailed comparison table to find the best prop trading firm for your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <div className="w-full sm:w-full max-w-md">
                <div className="relative flex-1 h-11">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 z-10" />
                  <Input
                    placeholder="Search Firms"
                    className="pl-10 pr-4 text-white placeholder:text-gray-300 shadow-xl font-medium backdrop-blur-xl w-full h-11 rounded-[10px] opacity-70 text-sm"
                    style={{
                      background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                      border: "1.5px solid rgba(255,255,255,0.25)",
                      WebkitBackdropFilter: "blur(20px)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 w-full items-stretch">
                <Button
                  variant="outline"
                  size="icon"
                  className="shadow-xl transition-all duration-300 text-white hover:text-gray-300 w-11 min-w-0 h-11 bg-transparent rounded-[10px]"
                  style={{
                    background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    WebkitBackdropFilter: "blur(20px)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                  }}
                >
                  <Filter className="w-4 h-4 hover:text-gray-100" />
                </Button>

                <div
                  className="relative flex rounded-[10px] backdrop-blur-xl p-1 flex-1 sm:w-[100px] h-11"
                  style={{
                    width: "100px",
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                    background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    WebkitBackdropFilter: "blur(20px)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div
                    className="absolute top-1 bottom-1 left-1 transition-all duration-300 ease-out rounded-[8px]"
                    style={{
                      width: "calc(50% - 4px)",
                      background: "linear-gradient(360deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.3) 100%)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.3), inset 0 1px 0 0 rgba(255,255,255,0.3)",
                      WebkitBackdropFilter: "blur(20px)",
                      backdropFilter: "blur(20px)",
                      transform: view === "grid" ? "translateX(0%)" : "translateX(100%)",
                    }}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative z-10 w-1/2 h-full text-white transition-all duration-200 hover:bg-transparent p-0 border-0"
                    style={{ opacity: view === "grid" ? 1 : 0.6 }}
                    onClick={() => setView("grid")}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative z-10 w-1/2 h-full text-white transition-all duration-200 hover:bg-transparent p-0 border-0"
                    style={{ opacity: view === "list" ? 1 : 0.6 }}
                    onClick={() => setView("list")}
                    aria-label="List view"
                  >
                    <List className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medium and large screens - new layout */}
        <div className="hidden md:block">
          {/* Heading Section - separate row for medium screens */}
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between mb-4 md:mb-6 lg:mb-8 gap-4 md:gap-6 lg:gap-0">
            <div className="-mt-2 md:-mt-4 lg:-mt-7 text-center md:text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Find Prop Firms</h2>
              <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed opacity-70 max-w-md mx-auto lg:mx-0">
                Browse our detailed comparison table to find the best prop trading firm for your needs.
              </p>
            </div>

            {/* Search Controls - centered for medium screens, right-aligned for large screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3 sm:gap-4 w-full lg:w-auto max-w-2xl md:max-w-none lg:max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto items-center justify-center lg:justify-end">
                <div className="w-full sm:w-full md:w-72 lg:w-80 max-w-md">
                  <div className="relative flex-1 h-11 md:h-12">
                    <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 md:w-5 md:h-5 z-10" />
                    <Input
                      placeholder="Search Firms"
                      className="pl-10 md:pl-12 pr-4 text-white placeholder:text-gray-300 shadow-xl font-medium backdrop-blur-xl w-full h-11 md:h-12 rounded-[10px] opacity-70 text-sm md:text-base"
                      style={{
                        background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                        border: "1.5px solid rgba(255,255,255,0.25)",
                        WebkitBackdropFilter: "blur(20px)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="shadow-xl transition-all duration-300 text-white hover:text-gray-300 w-11 md:w-12 min-w-0 h-11 md:h-12 bg-transparent rounded-[10px]"
                    style={{
                      background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                      border: "1.5px solid rgba(255,255,255,0.25)",
                      WebkitBackdropFilter: "blur(20px)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                    }}
                  >
                    <Filter className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-100" />
                  </Button>

                  <div
                    className="relative flex rounded-[10px] backdrop-blur-xl p-1 h-11 md:h-12"
                    style={{
                      width: "85px",
                      minWidth: "85px",
                      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)",
                      background: "linear-gradient(360deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)",
                      border: "1.5px solid rgba(255,255,255,0.25)",
                      WebkitBackdropFilter: "blur(20px)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <div
                      className="absolute top-1 bottom-1 left-1 transition-all duration-300 ease-out rounded-[8px]"
                      style={{
                        width: "calc(50% - 4px)",
                        background: "linear-gradient(360deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.3) 100%)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.3), inset 0 1px 0 0 rgba(255,255,255,0.3)",
                        WebkitBackdropFilter: "blur(20px)",
                        backdropFilter: "blur(20px)",
                        transform: view === "grid" ? "translateX(0%)" : "translateX(100%)",
                      }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative z-10 w-1/2 h-full text-white transition-all duration-200 hover:bg-transparent p-0 border-0"
                      style={{ opacity: view === "grid" ? 1 : 0.6 }}
                      onClick={() => setView("grid")}
                      aria-label="Grid view"
                    >
                      <Grid3X3 className="w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative z-10 w-1/2 h-full text-white transition-all duration-200 hover:bg-transparent p-0 border-0"
                      style={{ opacity: view === "list" ? 1 : 0.6 }}
                      onClick={() => setView("list")}
                      aria-label="List view"
                    >
                      <List className="w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
