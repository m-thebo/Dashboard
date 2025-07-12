"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const firms = [
  {
    name: "URFX",
    logo: "/URFX.png",
    logoType: "image",
    rating: 2.5,
    profitSplit: "88%",
    accountSize: "$75K",
    maxDrawdown: "4%",
    price: "$87",
  },
  {
    name: "Quant Tekel",
    logo: "/Quant Tekel.png",
    logoType: "image",
    rating: 3.8,
    profitSplit: "76%",
    accountSize: "$150K",
    maxDrawdown: "9%",
    price: "$432",
  },
  {
    name: "Funded Trading Plus",
    logo: "/FundedTradingPlus.png",
    logoType: "image",
    rating: 5.1,
    profitSplit: "82%",
    accountSize: "$250K",
    maxDrawdown: "5%",
    price: "$129",
  },
  {
    name: "Seacrest Funded",
    logo: "/Seacrest.png",
    logoType: "image",
    rating: 1.9,
    profitSplit: "91%",
    accountSize: "$300K",
    maxDrawdown: "10%",
    price: "$478",
  },
  {
    name: "City Traders Imperium",
    logo: "/CityTraders.png",
    logoType: "image",
    rating: 4.0,
    profitSplit: "79%",
    accountSize: "$225K",
    maxDrawdown: "7%",
    price: "$215",
  },
  {
    name: "Audacity Capital",
    logo: "/Audacity.png",
    logoType: "image",
    rating: 3.3,
    profitSplit: "85%",
    accountSize: "$100K",
    maxDrawdown: "11%",
    price: "$350",
  },
  {
    name: "Lark Funding",
    logo: "/LarkFunding.png",
    logoType: "image",
    rating: 2.1,
    profitSplit: "94%",
    accountSize: "$50K",
    maxDrawdown: "8%",
    price: "$63",
  },
  {
    name: "The 5ers",
    logo: "/The5ers.png",
    logoType: "image",
    rating: 4.9,
    profitSplit: "77%",
    accountSize: "$175K",
    maxDrawdown: "3%",
    price: "$295",
  },
]

export type Firm = {
  name: string
  logo: string
  logoType: string
  rating: number
  profitSplit: string
  accountSize: string
  maxDrawdown: string
  price: string
}

export const columns: ColumnDef<Firm>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-slate-400 font-medium text-xs p-0 h-auto hover:bg-transparent"
        >
          FIRM <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const firm = row.original
      return (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img 
              src={firm.logo} 
              alt={`${firm.name} logo`}
              className="w-7 h-7 object-contain"
            />
          </div>
          <span className="text-white opacity-90">{firm.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-slate-400 font-medium text-sm p-0 h-auto hover:bg-transparent"
        >
          RATING <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const rating = row.getValue("rating") as number
      return (
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-lg opacity-90" />
          <span className="text-white opacity-90">{rating}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "profitSplit",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-slate-400 font-medium text-sm p-0 h-auto hover:bg-transparent"
        >
          PROFIT SPLIT <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const profitSplit = row.getValue("profitSplit") as string
      return <span className="text-white opacity-90">{profitSplit}</span>
    },
  },
  {
    accessorKey: "accountSize",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-slate-400 font-medium text-sm p-0 h-auto hover:bg-transparent"
        >
          ACCOUNT SIZE <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const accountSize = row.getValue("accountSize") as string
      return <span className="text-white opacity-90">{accountSize}</span>
    },
  },
  {
    accessorKey: "maxDrawdown",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-slate-400 font-medium text-sm p-0 h-auto hover:bg-transparent"
        >
          MAX DRAWDOWN <ArrowUpDown className="ml-1 h-3 w-3" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const maxDrawdown = row.getValue("maxDrawdown") as string
      return <span className="text-white opacity-90">{maxDrawdown}</span>
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-slate-400 font-medium text-sm p-0 h-auto hover:bg-transparent"
        >
          PRICE <ArrowUpDown className="ml-1 h-3 w-3" />
            </Button>
      )
    },
    cell: ({ row }) => {
      const price = row.getValue("price") as string
      return <span className="text-white opacity-90">{price}</span>
    },
  },
]

export default function TableSection() {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data: firms,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="max-w-7xl w-full mx-auto -mt-8 -mb-0.1 relative rounded-3xl overflow-hidden border border-white/20 ">
      {/* Blue gradient background (outside table, inside container) */}
      <div
        className="absolute top-[10%] left-[40%] w-[1693.2px] h-[462.05px] -translate-x-[30%] -translate-y-[30%] rotate-[-26.49deg] rounded-3xl opacity-30 blur-[30px] pointer-events-none z-0 bg-gradient-to-r from-black via-transparent to-black before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#017AFF] before:to-[#004AAC] before:opacity-80"
      />
      <Table
        className="relative rounded-3xl w-full h-full overflow-hidden z-10 bg-transparent shadow-[0_4px_16px_0_rgba(0,0,0,0.10),0_1px_4px_0_rgba(255,255,255,0.04)] backdrop-blur-[16px]"
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b border-slate-700">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="px-4 py-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                className={`hover:bg-slate-800/50 transition-colors${index !== table.getRowModel().rows.length - 1 ? ' border-b border-slate-800' : ''}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-4 px-4">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
