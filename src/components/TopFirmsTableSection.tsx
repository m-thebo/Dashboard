'use client';

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

const firms = [
  {
    name: "URFX",
    logo: "/URFX.png",
    rating: 2.5,
    country: "US",
    years: 1,
    assets: ["Crypto", "Energy", "FX", "Metals"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$1.2M",
  },
  {
    name: "Quant Tekel",
    logo: "/Quant Tekel.png",
    rating: 3.8,
    country: "AU",
    years: 2,
    assets: ["Crypto", "Energy", "FX", "Metals", "Other Commodities"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$750K",
  },
  {
    name: "Funded Trading Plus",
    logo: "/FundedTradingPlus.png",
    rating: 5.1,
    country: "CA",
    years: 4,
    assets: ["Crypto", "Energy", "FX", "Metals"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$1.5M",
    highlight: true,
  },
  {
    name: "Seacrest Funded",
    logo: "/Seacrest.png",
    rating: 1.9,
    country: "DE",
    years: 8,
    assets: ["Crypto", "Energy", "FX", "Other Commodities"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$300K",
  },
  {
    name: "City Traders Imperium",
    logo: "/CityTraders.png",
    rating: 4.0,
    country: "CN",
    years: 3,
    assets: ["Crypto", "Energy", "FX", "Metals", "Other Commodities"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$900K",
  },
  {
    name: "Audacity Capital",
    logo: "/Audacity.png",
    rating: 3.3,
    country: "JP",
    years: 2,
    assets: ["Crypto", "Energy", "FX", "Metals"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$600K",
  },
  {
    name: "Lark Funding",
    logo: "/LarkFunding.png",
    rating: 2.1,
    country: "AE",
    years: 1,
    assets: ["Crypto", "Energy", "FX", "Metals"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$840K",
  },
  {
    name: "The 5ers",
    logo: "/The5ers.png",
    rating: 4.9,
    country: "IL",
    years: 5,
    assets: ["Crypto", "Energy", "FX", "Metals", "Other Commodities"],
    platforms: ["/image 3.png", "/image 4.png", "/image 5.png"],
    maxAllocation: "$1M",
  },
];

const maxYears = Math.max(...firms.map(f => f.years));

export type Firm = typeof firms[number];

const columns: ColumnDef<Firm>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent hover:text-white text-shadow-white-sm"
      >
        FIRM <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const firm = row.original;
      return (
        <div className="flex items-center gap-3">
          <img src={firm.logo} alt={firm.name} className="w-8 h-8 rounded-lg object-contain" />
          <span className="text-white font-medium text-sm">{firm.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent hover:text-white text-shadow-white-sm"
      >
        RATING <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const firm = row.original;
      return (
        <span className="flex items-center gap-1 text-white font-medium text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
          {row.getValue("rating")}
          <span className="text-xs text-white/60 ml-1">(1000)</span>
        </span>
      );
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent hover:text-white text-shadow-white-sm"
      >
        COUNTRY <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const country = row.getValue("country") as string;
      // Map country codes to flag image filenames
      const countryFlagMap: Record<string, string> = {
        US: 'flag_us-4x3.png',
        AU: 'flag_au-4x3.png',
        CA: 'flag_ca-4x3.png',
        DE: 'flag_de-4x3.png',
        CN: 'flag_cn-4x3.png',
        JP: 'flag_jp-4x3.png',
        AE: 'flag_ae-4x3.png',
        IL: 'flag_il-4x3.png',
      };
      const flagSrc = countryFlagMap[country] ? `/${countryFlagMap[country]}` : undefined;
      return (
        <span className="flex items-center gap-2 text-white/90 text-xs font-medium">
          {flagSrc && (
            <img
              src={flagSrc}
              alt={country}
              className="w-5 h-5 object-contain min-w-[20px]"
            />
          )}
          {country}
        </span>
      );
    },
  },
  {
    accessorKey: "years",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent hover:text-white text-shadow-white-sm"
      >
        YEARS <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    // cell is handled inline in the TableRow render for hover effect
    cell: undefined,
  },
  {
    accessorKey: "assets",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent hover:text-white text-shadow-white-sm"
      >
        ASSETS <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1 min-w-[120px]">
        {(row.getValue("assets") as string[]).map((asset: string) => (
          <Badge key={asset} className="bg-white/10 text-white text-xs font-medium px-2 py-0.5 rounded-full border border-white/10">
            {asset}
          </Badge>
        ))}
      </div>
    ),
    sortingFn: (rowA, rowB, columnId) => {
      // Sort by number of assets
      return (rowA.getValue(columnId) as string[]).length - (rowB.getValue(columnId) as string[]).length;
    },
  },
  {
    accessorKey: "platforms",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent hover:text-white text-shadow-white-sm"
      >
        PLATFORMS <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex gap-2 min-w-[90px]">
        {(row.getValue("platforms") as string[]).map((platform: string, idx: number) => (
          <img key={idx} src={platform} alt="platform" className="w-7 h-7 object-contain" />
        ))}
      </div>
    ),
    sortingFn: (rowA, rowB, columnId) => {
      // Sort by number of platforms
      return (rowA.getValue(columnId) as string[]).length - (rowB.getValue(columnId) as string[]).length;
    },
  },
  {
    accessorKey: "maxAllocation",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent hover:text-white text-shadow-white-sm"
      >
        MAX ALLOCATION <ArrowUpDown className="ml-1 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-white font-semibold text-sm">{row.getValue("maxAllocation") as string}</span>
    ),
    sortingFn: (rowA, rowB, columnId) => {
      // Remove $ and commas, then compare as numbers
      const parse = (val: string) => Number(val.replace(/[^\d.]/g, ""));
      return parse(rowA.getValue(columnId) as string) - parse(rowB.getValue(columnId) as string);
    },
  },
];

export default function TopFirmsTableSection() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [hoveredRow, setHoveredRow] = React.useState<string | null>(null);

  const table = useReactTable({
    data: firms,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
  });

  return (
    <section className="w-full py-12 md:py-16 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">Compare Top Prop Trading Firms</h2>
        <p className="text-white/80 text-center mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Browse our detailed comparison table to find the best prop trading firm for your needs. Sort by rating, funding, location, assets, or platforms.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6 w-full">
          {/* Search bar always on top */}
          <div className="flex w-full max-w-md items-center gap-2 mb-2 md:mb-0">
            <div className="flex items-center flex-1 search-glass-bg rounded-[10px] px-3 h-11">
              <Search className="w-5 h-5 text-white mr-2" />
              <Input className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus-visible:ring-0 px-0" placeholder="Search Firms" />
            </div>
          </div>
          {/* Responsive button row: filter + compare firms */}
          <div className="flex w-full md:w-auto flex-row gap-2 md:gap-3">
            <Button
              variant="outline"
              className="flex items-center justify-center h-11 w-11 min-w-0 p-0 rounded-[10px] search-glass-bg text-white md:order-none order-1 hover:bg-white/10 hover:border-white/20 hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
              aria-label="Filter"
            >
              <Filter className="w-5 h-5 text-white" />
            </Button>
            <Button className="ftmo-card-bg text-white font-normal text-base rounded-lg px-5 py-5 shadow-lg border border-[#004AAC] flex-1 md:flex-none flex items-center gap-2 md:order-none order-2 min-w-[0] md:min-w-[unset] hover:scale-102 active:scale-98 hover:shadow-2xl transition-all duration-200 cursor-pointer hover:brightness-110">
              <SlidersHorizontal className="w-5 h-5 text-white" />
              Compare Firms
            </Button>
          </div>
        </div>
        <div className="relative rounded-2xl table-bg-glass min-h-[500px] overflow-hidden">
          {/* Blue gradient overlay */}
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[350px] -translate-x-1/2 -translate-y-1/2 rotate-[-26.49deg] z-0 pointer-events-none opacity-40 table-blue-gradient" />
          <Table className="relative z-10 overflow-hidden rounded-2xl">
            <TableHeader>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id} className="border-b border-slate-700 hover:bg-white/5 transition-colors">
                  {headerGroup.headers.map(header => (
                    <TableHead key={header.id} className="px-4 py-4">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, i) => (
                  <TableRow
                    key={row.id}
                    className={`transition-colors border-b border-slate-800${hoveredRow === row.id ? ' table-row-highlight' : ''}`}
                    onMouseEnter={() => setHoveredRow(row.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    {row.getVisibleCells().map(cell => {
                      // For the YEARS column, swap the Progress indicator class on hover
                      if (cell.column.id === 'years') {
                        return (
                          <TableCell key={cell.id} className="py-4 px-4">
                            <div className="flex flex-col gap-1 min-w-[90px]">
                              <span className="text-white/90 text-xs font-medium">{row.getValue("years") as number}</span>
                              <Progress
                                value={Math.round(((row.getValue("years") as number) / maxYears) * 100)}
                                className="h-1.5 bg-white/10"
                                indicatorClassName={hoveredRow === row.id ? "loading-fill-hover" : "loading-fill"}
                              />
                            </div>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={cell.id} className="py-4 px-4">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center mt-8">
          <Button className="ftmo-card-bg text-white font-normal text-base rounded-lg px-5 py-5 shadow-lg border border-[#004AAC] flex items-center gap-2 hover:scale-102 active:scale-98 hover:shadow-2xl transition-all duration-200 cursor-pointer hover:brightness-110">
            View full comparison
          </Button>
        </div>
      </div>
    </section>
  );
} 