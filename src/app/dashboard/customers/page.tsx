"use client"

import { useState } from "react"
import { Plus, Search, MoreVertical, X, ChevronDown } from "lucide-react"

export default function CustomersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col min-h-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Customers</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage your client directory</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors w-fit"
          >
            <Plus size={16} />
            Add Customer
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Customers</div>
            <div className="text-2xl font-bold text-foreground">2452</div>
          </div>
          <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Active This Month</div>
            <div className="text-2xl font-bold text-foreground">1632</div>
          </div>
          <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Avg. Order Value</div>
            <div className="text-2xl font-bold text-foreground">Kz 84,500</div>
          </div>
          <div className="bg-[#f4f5f7] rounded-xl p-5 border border-transparent">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Debt</div>
            <div className="text-2xl font-bold text-foreground">Kz 4.87M</div>
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
                  <th className="px-6 py-4 font-medium">CUSTOMERS</th>
                  <th className="px-6 py-4 font-medium">NIF</th>
                  <th className="px-6 py-4 font-medium">REVENUE</th>
                  <th className="px-6 py-4 font-medium">DEBT</th>
                  <th className="px-6 py-4 font-medium">STATUS</th>
                  <th className="px-6 py-4 font-medium text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Marcus Lee</div>
                    <div className="text-xs text-muted-foreground">marcus@email.com</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">1234567890</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢3,136</td>
                  <td className="px-6 py-4 text-muted-foreground">¢ 0</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#6366f1] text-white">VIP</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>
                
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Sofia Martinez</div>
                    <div className="text-xs text-muted-foreground">sofia@email.com</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">0987654321</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢2,016</td>
                  <td className="px-6 py-4 text-muted-foreground">¢ 89.5K</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#10b981] text-white">Active</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Aaron Patel</div>
                    <div className="text-xs text-muted-foreground">aaron@email.com</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">1122334455</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢8,960</td>
                  <td className="px-6 py-4 text-muted-foreground">¢ 0</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#10b981] text-white">Active</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Emma Johnson</div>
                    <div className="text-xs text-muted-foreground">emma@email.com</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">2233445566</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢1,680</td>
                  <td className="px-6 py-4 text-muted-foreground">¢ 24.3K</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#6366f1] text-white">VIP</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">David Kim</div>
                    <div className="text-xs text-muted-foreground">david@email.com</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">3344556677</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢1,265</td>
                  <td className="px-6 py-4 text-muted-foreground">¢ 13.2K</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#6366f1] text-white">VIP</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border"><MoreVertical size={16} /></button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">Zara Ahmed</div>
                    <div className="text-xs text-muted-foreground">zara@email.com</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">4455667788</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢4,568</td>
                  <td className="px-6 py-4 text-muted-foreground">¢ 0</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[10px] font-semibold bg-[#10b981] text-white">Active</span></td>
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
              <h3 className="text-xl font-bold text-foreground">Add New Customer</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 pt-2 flex flex-col gap-5 overflow-y-auto">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Company Name</label>
                <input 
                  type="text" 
                  value="ENGEVIA - Civil Construction and Public Works, Lda." 
                  readOnly 
                  className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" 
                />
              </div>

              {/* Contact Person & NIF */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Contact Person</label>
                  <input type="text" value="John Doe" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">NIF</label>
                  <input type="text" value="5402146462" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
              </div>

              {/* Email & Status */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Email</label>
                  <input type="email" value="marcus@email.com" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Status</label>
                  <div className="relative">
                    <select className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                      <option>VIP</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              {/* Street Address & District */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Street Address</label>
                  <input type="text" value="Estrada do Kikuxi, s/n" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">District</label>
                  <input type="text" value="Via Expresso" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
              </div>

              {/* City & State */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">City</label>
                  <input type="text" value="Viana" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">State</label>
                  <input type="text" value="Luanda" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
              </div>

              {/* Phone Number & Country */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Phone Number</label>
                  <input type="text" value="0000" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Country</label>
                  <div className="relative">
                    <select className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                      <option>Angola</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                  </div>
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
