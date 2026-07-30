"use client"

import { useState } from "react"
import { Plus, Search, Eye, MoreVertical, X, Calendar, ChevronDown } from "lucide-react"

export default function CreditNotesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col min-h-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Credit Notes</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage billing corrections and refund notes</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors w-fit"
          >
            <Plus size={16} />
            New Credit Note
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Credit Issued</div>
            <div className="text-2xl font-bold text-foreground">Kz 1,284,500</div>
          </div>
          <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Credit Notes</div>
            <div className="text-2xl font-bold text-foreground">09</div>
          </div>
          <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pending Application</div>
            <div className="text-2xl font-bold text-foreground">07</div>
          </div>
        </div>

        {/* Table Area */}
        <div className="bg-[#f4f5f7] rounded-xl p-6 flex-1">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Search credit note.."
              className="w-full pl-9 pr-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm border-transparent"
            />
          </div>

          <div className="bg-white rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full text-sm text-left min-w-[900px]">
              <thead className="text-xs text-muted-foreground uppercase border-b border-border bg-white">
                <tr>
                  <th className="px-6 py-4 font-medium">CREDIT NOTE</th>
                  <th className="px-6 py-4 font-medium">CUSTOMERS</th>
                  <th className="px-6 py-4 font-medium">DATE</th>
                  <th className="px-6 py-4 font-medium">AMOUNT</th>
                  <th className="px-6 py-4 font-medium">REASON</th>
                  <th className="px-6 py-4 font-medium">STATUS</th>
                  <th className="px-6 py-4 font-medium text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">CRN-2026-010</td>
                  <td className="px-6 py-4 font-medium text-foreground">Retail Group SA</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 22 Dec 2025</div></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢3,136</td>
                  <td className="px-6 py-4 text-muted-foreground">Billing Error</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#4e55e8] text-white">Applied</span></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">CRN-2026-011</td>
                  <td className="px-6 py-4 font-medium text-foreground">Angola Tech Lda</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 01 Jan 2026</div></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢2,016</td>
                  <td className="px-6 py-4 text-muted-foreground">Service Cancellation</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#f59e0b] text-white">Pending</span></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">CRN-2026-012</td>
                  <td className="px-6 py-4 font-medium text-foreground">Global Services SA</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 14 Feb 2026</div></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢8,960</td>
                  <td className="px-6 py-4 text-muted-foreground">Descount Adjustment</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#4e55e8] text-white">Applied</span></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">CRN-2026-013</td>
                  <td className="px-6 py-4 font-medium text-foreground">UrbanCart Co.</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 03 Mar 2026</div></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢1,680</td>
                  <td className="px-6 py-4 text-muted-foreground">Advance Receipt</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#4e55e8] text-white">Applied</span></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">CRN-2026-014</td>
                  <td className="px-6 py-4 font-medium text-foreground">Summit Financial Services</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 19 Apr 2026</div></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢1,265</td>
                  <td className="px-6 py-4 text-muted-foreground">Advance Receipt</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#f59e0b] text-white">Pending</span></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><Eye size={16} /></button>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">CRN-2026-015</td>
                  <td className="px-6 py-4 font-medium text-foreground">MediNova Health</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 27 May 2026</div></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢4,568</td>
                  <td className="px-6 py-4 text-muted-foreground">Advance Receipt</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#f59e0b] text-white">Pending</span></td>
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
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 pb-4 flex justify-between items-center border-b border-transparent">
              <h3 className="text-xl font-bold text-foreground">New Credit Note</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 pt-2 flex flex-col gap-5 overflow-y-auto">
              {/* Select Invoice */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Select Invoice</label>
                <div className="relative">
                  <select className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                    <option>INV-2026-010</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                </div>
              </div>

              {/* Select Products */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Select Products</label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <select className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                      <option>20Mbps/20Mbps internet Circuit</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors">
                    Add
                  </button>
                </div>
              </div>

              {/* Date and Number */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Credit Date</label>
                  <div className="relative">
                    <input type="text" value="21/04/2026" readOnly className="w-full bg-[#f4f5f7] rounded-lg pl-4 pr-10 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Credit Note Number</label>
                  <input type="text" value="5402146462" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
              </div>

              {/* Amount and Status */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Credit Amount</label>
                  <input type="text" value="¢3,136" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Status</label>
                  <div className="relative">
                    <select className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                      <option>Pending</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Reason</label>
                <input type="text" value="Billing error" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
              </div>

              {/* Note */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Note</label>
                <textarea 
                  readOnly 
                  className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground resize-none h-24"
                  value="Processed by Vendy validated program No. 0000000/s/AGT/2026 | Goods and services were made available to him."
                />
              </div>
            </div>
            
            <div className="p-6 pt-2 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-lg font-medium text-sm bg-[#e2e8f0] hover:bg-[#cbd5e1] text-slate-700 transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-lg font-medium text-sm bg-primary hover:bg-primary/90 text-white transition-colors">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
