import { Star } from "lucide-react"

const firms = [
  {
    name: "URFX",
    logo: "N",
    logoColor: "bg-white text-black",
    rating: 2.5,
    profitSplit: "88%",
    accountSize: "$75K",
    maxDrawdown: "4%",
    price: "$87",
  },
  {
    name: "Quant Tekel",
    logo: "QT",
    logoColor: "bg-teal-500 text-white",
    rating: 3.8,
    profitSplit: "76%",
    accountSize: "$150K",
    maxDrawdown: "9%",
    price: "$432",
  },
  {
    name: "Funded Trading Plus",
    logo: "🏛️",
    logoColor: "bg-white text-black",
    rating: 5.1,
    profitSplit: "82%",
    accountSize: "$250K",
    maxDrawdown: "5%",
    price: "$129",
  },
  {
    name: "Seacrest Funded",
    logo: "$",
    logoColor: "bg-slate-700 text-white border border-slate-600",
    rating: 1.9,
    profitSplit: "91%",
    accountSize: "$300K",
    maxDrawdown: "10%",
    price: "$478",
  },
  {
    name: "City Traders Imperium",
    logo: "📈",
    logoColor: "bg-slate-700 text-white border border-slate-600",
    rating: 4.0,
    profitSplit: "79%",
    accountSize: "$225K",
    maxDrawdown: "7%",
    price: "$215",
  },
  {
    name: "Audacity Capital",
    logo: "🎯",
    logoColor: "bg-slate-700 text-white border border-slate-600",
    rating: 3.3,
    profitSplit: "85%",
    accountSize: "$100K",
    maxDrawdown: "11%",
    price: "$350",
  },
  {
    name: "Lark Funding",
    logo: "💎",
    logoColor: "bg-slate-700 text-yellow-400 border border-slate-600",
    rating: 2.1,
    profitSplit: "94%",
    accountSize: "$50K",
    maxDrawdown: "8%",
    price: "$63",
  },
  {
    name: "The 5ers",
    logo: "5",
    logoColor: "bg-blue-600 text-white",
    rating: 4.9,
    profitSplit: "77%",
    accountSize: "$175K",
    maxDrawdown: "3%",
    price: "$295",
  },
]

export default function TableSection() {
  return (
    <div
      className="relative p-2 rounded-lg max-w-full w-full mx-auto -mt-8 -mb-0.1 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1.5px solid rgba(255,255,255,0.2)',
        boxShadow: '0 4px 16px 0 rgba(0,0,0,0.10), 0 1px 4px 0 rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        opacity: 0.9,
      }}
    >
      {/* Blue glass effect background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1693.2px',
          height: '462.05px',
          transform: 'translate(-50%, -50%) rotate(-30deg)',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.25,
          background: `
            linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 40%, #017AFF 70%, #004AAC 100%),
            //linear-gradient(90deg, #017AFF 0%, #004AAC 100%)
          `,
          filter: 'blur(30px)',
        }}
      />
      <div className="overflow-x-auto relative z-10">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left px-1 py-1 text-slate-400 font-medium text-xs">FIRM ↕</th>
              <th className="text-left px-4 py-4 text-slate-400 font-medium text-sm">RATING ↕</th>
              <th className="text-left px-4 py-4 text-slate-400 font-medium text-sm">PROFIT SPLIT ↕</th>
              <th className="text-left px-4 py-4 text-slate-400 font-medium text-sm">ACCOUNT SIZE ↕</th>
              <th className="text-left px-4 py-4 text-slate-400 font-medium text-sm">MAX DRAWDOWN ↕</th>
              <th className="text-left px-4 py-4 text-slate-400 font-medium text-sm">PRICE ↕</th>
            </tr>
          </thead>
          <tbody>
            {firms.map((firm, index) => (
              <tr
                key={index}
                className={`hover:bg-slate-800/50 transition-colors${index !== firms.length - 1 ? ' border-b border-slate-800' : ''}`}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${firm.logoColor}`}
                    >
                      {firm.logo}
                    </div>
                    <span className="text-white font-medium">{firm.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    <span className="text-white font-medium">{firm.rating}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-white font-medium">{firm.profitSplit}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-white font-medium">{firm.accountSize}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-white font-medium">{firm.maxDrawdown}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-white font-medium">{firm.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
