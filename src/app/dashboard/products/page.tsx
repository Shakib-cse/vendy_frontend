"use client"

import { useState } from "react"
import { Plus, Search, MoreVertical, X, ChevronDown } from "lucide-react"

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col min-h-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Items & Products</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage your product and service catalog</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors w-fit"
          >
            <Plus size={16} />
            New Item
          </button>
        </div>

        {/* Main Area */}
        <div className="bg-[#f4f5f7] rounded-xl p-6 flex-1">
          
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search items.."
                className="w-full pl-9 pr-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              <button className="px-4 py-2 rounded-md font-medium text-[13px] bg-primary text-white">All</button>
              <button className="px-4 py-2 rounded-md font-medium text-[13px] bg-white text-muted-foreground hover:bg-gray-50 transition-colors">Services</button>
              <button className="px-4 py-2 rounded-md font-medium text-[13px] bg-white text-muted-foreground hover:bg-gray-50 transition-colors">Hardware</button>
              <button className="px-4 py-2 rounded-md font-medium text-[13px] bg-white text-muted-foreground hover:bg-gray-50 transition-colors">Software</button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-x-auto shadow-sm">
            <table className="w-full text-sm text-left min-w-[900px]">
              <thead className="text-xs text-muted-foreground uppercase border-b border-border bg-white">
                <tr>
                  <th className="px-6 py-4 font-medium">CODE</th>
                  <th className="px-6 py-4 font-medium">NAME</th>
                  <th className="px-6 py-4 font-medium">TYPE</th>
                  <th className="px-6 py-4 font-medium">UNIT PRICE</th>
                  <th className="px-6 py-4 font-medium">TAX</th>
                  <th className="px-6 py-4 font-medium">STOCK</th>
                  <th className="px-6 py-4 font-medium text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground text-xs">SVC-2026-011</td>
                  <td className="px-6 py-4 font-medium text-foreground">Mobile App Development</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#6366f1] text-white w-20">Services</span></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢25,000,00</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-[#f59e0b] text-white">14%</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#10b981] w-[95%]"></div>
                      </div>
                      <span className="text-xs font-bold text-foreground">1900</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>
                
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground text-xs">SVC-2026-012</td>
                  <td className="px-6 py-4 font-medium text-foreground">IT Strategy Consulting</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#6366f1] text-white w-20">Services</span></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢80,000,00</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-[#f59e0b] text-white">14%</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#f59e0b] w-[40%]"></div>
                      </div>
                      <span className="text-xs font-bold text-foreground">178</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground text-xs">SVC-2026-013</td>
                  <td className="px-6 py-4 font-medium text-foreground">Software Subscription<br/><span className="text-muted-foreground text-xs font-normal">(Monthly)</span></td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#f59e0b] text-white w-20">Software</span></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢150,000,00</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-gray-200 text-gray-700">0%</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[10%]"></div>
                      </div>
                      <span className="text-xs font-bold text-foreground">04</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground text-xs">SVC-2026-014</td>
                  <td className="px-6 py-4 font-medium text-foreground">Laptop HP EliteBook 840</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#10b981] text-white w-20">Hardware</span></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢650,000,00</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-[#f59e0b] text-white">14%</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#10b981] w-[95%]"></div>
                      </div>
                      <span className="text-xs font-bold text-foreground">1900</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground text-xs">SVC-2026-015</td>
                  <td className="px-6 py-4 font-medium text-foreground">Managed Network Services</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#6366f1] text-white w-20">Services</span></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢180,000,00</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-[#f59e0b] text-white">14%</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#10b981] w-[95%]"></div>
                      </div>
                      <span className="text-xs font-bold text-foreground">1900</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground text-xs">SVC-2026-016</td>
                  <td className="px-6 py-4 font-medium text-foreground">Technical Support Agreement</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#6366f1] text-white w-20">Services</span></td>
                  <td className="px-6 py-4 font-medium text-foreground">¢45,000,00</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-gray-200 text-gray-700">0%</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[10%]"></div>
                      </div>
                      <span className="text-xs font-bold text-foreground">04</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
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
              <h3 className="text-xl font-bold text-foreground">Add Product</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 pt-2 flex flex-col gap-5 overflow-y-auto">
              {/* Product Name */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Product Name</label>
                <input 
                  type="text" 
                  value="ENGEVIA - Civil Construction and Public Works, Lda." 
                  readOnly 
                  className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" 
                />
              </div>

              {/* Type & Unit Price */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Type</label>
                  <div className="relative">
                    <select className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                      <option>Software</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Unit price</label>
                  <input type="text" value="¢650,000,00" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
              </div>

              {/* Tax & Stock */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Tax</label>
                  <input type="text" value="14%" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Stock</label>
                  <input type="text" value="2000" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-2 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-lg font-medium text-sm bg-[#e2e8f0] hover:bg-[#cbd5e1] text-slate-700 transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-lg font-medium text-sm bg-primary hover:bg-primary/90 text-white transition-colors">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
