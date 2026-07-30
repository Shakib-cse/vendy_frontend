import Link from "next/link"
import { Plus, Search, Eye, MoreVertical } from "lucide-react"

export default function InvoicesPage() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Invoices</h2>
          <p className="text-muted-foreground text-sm mt-1">Manage and track all your invoices</p>
        </div>
        <Link href="/dashboard/invoices/new" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors w-fit">
          <Plus size={16} />
          New Invoice
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">All Invoices</div>
          <div className="text-2xl font-bold text-foreground">1546</div>
        </div>
        <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Paid</div>
          <div className="text-2xl font-bold text-foreground">1215</div>
        </div>
        <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pending</div>
          <div className="text-2xl font-bold text-foreground">142</div>
        </div>
        <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Overdue</div>
          <div className="text-2xl font-bold text-foreground">84</div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 bg-[#f4f5f7] p-2 rounded-xl border border-transparent">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            type="text"
            placeholder="Search invoice or client..."
            className="w-full pl-9 pr-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm border-transparent"
          />
        </div>
        <div className="flex items-center gap-1">
          <button className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-lg">All</button>
          <button className="px-4 py-1.5 hover:bg-white text-muted-foreground text-sm font-medium rounded-lg transition-colors">Paid</button>
          <button className="px-4 py-1.5 hover:bg-white text-muted-foreground text-sm font-medium rounded-lg transition-colors">Pending</button>
          <button className="px-4 py-1.5 hover:bg-white text-muted-foreground text-sm font-medium rounded-lg transition-colors">Overdue</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase border-b border-border">
            <tr>
              <th className="px-6 py-4 font-medium">INVOICE</th>
              <th className="px-6 py-4 font-medium">CUSTOMERS</th>
              <th className="px-6 py-4 font-medium">DATE</th>
              <th className="px-6 py-4 font-medium">TOTAL</th>
              <th className="px-6 py-4 font-medium">STATUS</th>
              <th className="px-6 py-4 font-medium text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            <tr className="hover:bg-muted/30">
              <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-010</td>
              <td className="px-6 py-4 font-medium text-foreground">Omar Al-Farsi</td>
              <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 22 Dec 2025</div></td>
              <td className="px-6 py-4 font-medium text-foreground">3,136 Kz</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Paid</span></td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-muted/30">
              <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-011</td>
              <td className="px-6 py-4 font-medium text-foreground">Lila Chen</td>
              <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 01 Jan 2026</div></td>
              <td className="px-6 py-4 font-medium text-foreground">2,016 Kz</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-amber-100 text-amber-700"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Unpaid</span></td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-muted/30">
              <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-012</td>
              <td className="px-6 py-4 font-medium text-foreground">Rajesh Kumar</td>
              <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 14 Feb 2026</div></td>
              <td className="px-6 py-4 font-medium text-foreground">8,960 Kz</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Paid</span></td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-muted/30">
              <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-013</td>
              <td className="px-6 py-4 font-medium text-foreground">Sofia Martinez</td>
              <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 03 Mar 2026</div></td>
              <td className="px-6 py-4 font-medium text-foreground">1,680 Kz</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Paid</span></td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-muted/30">
              <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-014</td>
              <td className="px-6 py-4 font-medium text-foreground">Isabella Rossi</td>
              <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 19 Apr 2026</div></td>
              <td className="px-6 py-4 font-medium text-foreground">1,265 Kz</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-amber-100 text-amber-700"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Unpaid</span></td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-muted/30">
              <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-015</td>
              <td className="px-6 py-4 font-medium text-foreground">Kofi Boateng</td>
              <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 27 May 2026</div></td>
              <td className="px-6 py-4 font-medium text-foreground">4,568 Kz</td>
              <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-amber-100 text-amber-700"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Unpaid</span></td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
