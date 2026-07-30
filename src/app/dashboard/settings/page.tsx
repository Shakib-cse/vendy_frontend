"use client"

import { useState } from "react"
import { Wrench, FileText, Users, Calendar, CloudUpload, Save, ChevronDown, Plus, MoreVertical, X } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Users & Roles")
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">Configure your platform and billing preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 flex-1">
        {/* Left Sidebar Navigation */}
        <div className="w-full md:w-64 flex flex-col gap-2 shrink-0">
          <button 
            onClick={() => setActiveTab("General")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors text-left w-full ${activeTab === "General" ? "bg-blue-50 text-primary" : "text-muted-foreground hover:bg-muted"}`}
          >
            <Wrench size={18} />
            General
          </button>
          <button 
            onClick={() => setActiveTab("Invoice")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors text-left w-full ${activeTab === "Invoice" ? "bg-blue-50 text-primary" : "text-muted-foreground hover:bg-muted"}`}
          >
            <FileText size={18} />
            Invoice
          </button>
          <button 
            onClick={() => setActiveTab("Users & Roles")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors text-left w-full ${activeTab === "Users & Roles" ? "bg-blue-50 text-primary" : "text-muted-foreground hover:bg-muted"}`}
          >
            <Users size={18} />
            Users & Roles
          </button>
          <button 
            onClick={() => setActiveTab("Subscription")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors text-left w-full ${activeTab === "Subscription" ? "bg-blue-50 text-primary" : "text-muted-foreground hover:bg-muted"}`}
          >
            <Calendar size={18} />
            Subscription
          </button>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 bg-[#f4f5f7] rounded-xl p-6 md:p-8 flex flex-col">
          
          {activeTab === "General" && (
            <>
              <h3 className="text-xl font-bold text-foreground mb-6">Company Information</h3>
              
              <div className="flex flex-col gap-6 flex-1">
                {/* Top Section: Logo & Basic Info */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo Upload */}
                  <div className="w-full md:w-1/3 flex flex-col space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Company Logo</label>
                    <div className="flex-1 border-2 border-dashed border-gray-300 rounded-xl bg-white flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors min-h-[140px]">
                      <CloudUpload className="text-muted-foreground mb-2" size={24} />
                      <p className="text-[11px] text-muted-foreground">Click or drag images here</p>
                      <p className="text-[11px] text-muted-foreground">(PNG, JPEG)</p>
                    </div>
                  </div>
                  
                  {/* Basic Info Grid */}
                  <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[13px] text-muted-foreground font-medium">Company Name</label>
                      <input type="text" value="CNNECTIS - DATA ANGOLA, LDA" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[13px] text-muted-foreground font-medium">Email</label>
                      <input type="email" value="tmichael20@gmail.com" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                    </div>
                    <div className="space-y-2 mt-2">
                      <label className="text-[13px] text-muted-foreground font-medium">Phone</label>
                      <input type="text" value="+244 222 000 000" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                    </div>
                    <div className="space-y-2 mt-2">
                      <label className="text-[13px] text-muted-foreground font-medium">Taxpayer No (NIF)</label>
                      <input type="text" value="5417369705" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Street Address & District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Street Address</label>
                    <input type="text" value="Estrada do Kikuxi, s/n" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">District</label>
                    <input type="text" value="Via Expresso" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                </div>

                {/* City & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">City</label>
                    <input type="text" value="Viana" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">State</label>
                    <input type="text" value="Luanda" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                </div>

                {/* ZIP Code & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">ZIP Code</label>
                    <input type="text" value="0000" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Country</label>
                    <div className="relative">
                      <select className="w-full bg-white rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                        <option>Angola</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                {/* Website & Share Capital */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Website</label>
                    <input type="text" value="www.vendy.com" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Share Capital</label>
                    <input type="text" value="100,000.00 AKZ" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm transition-colors">
                    <Save size={16} />
                    Save Changes
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === "Invoice" && (
            <>
              <h3 className="text-xl font-bold text-foreground mb-6">Invoice</h3>
              
              <div className="flex flex-col gap-6 flex-1">
                {/* Prefix & Starting Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Invoice Prefix</label>
                    <input type="text" value="INV" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Starting Number</label>
                    <input type="text" value="001" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                </div>

                {/* Payment Condition & Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Default Payment Condition</label>
                    <div className="relative">
                      <select className="w-full bg-white rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                        <option>15 Days</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Default Payment Status</label>
                    <div className="relative">
                      <select className="w-full bg-white rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                        <option>Unpaid</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                {/* Currency & Language */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Default Currency</label>
                    <div className="relative">
                      <select className="w-full bg-white rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                        <option>AQA - Kwanza Angolano</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Default Language</label>
                    <div className="relative">
                      <select className="w-full bg-white rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                        <option>English</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                {/* IVA Rate & Note */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Default IVA Rate</label>
                    <input type="text" value="14%" readOnly className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-muted-foreground font-medium">Default Note</label>
                    <textarea 
                      readOnly 
                      className="w-full bg-white rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground resize-none h-24"
                      value="Processed by Vendy validated program No. 0000000/s/AGT/2026 | Goods and services were made available to him."
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm transition-colors">
                    <Save size={16} />
                    Save Changes
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === "Users & Roles" && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className="text-xl font-bold text-foreground">Team Members</h3>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors w-fit"
                >
                  <Plus size={16} />
                  Invite User
                </button>
              </div>
              
              <div className="bg-white rounded-xl overflow-x-auto shadow-sm border border-border">
                <table className="w-full text-sm text-left min-w-[700px]">
                  <thead className="text-xs text-muted-foreground uppercase border-b border-border bg-white">
                    <tr>
                      <th className="px-6 py-4 font-medium">USER</th>
                      <th className="px-6 py-4 font-medium">EMAIL</th>
                      <th className="px-6 py-4 font-medium">ROLE</th>
                      <th className="px-6 py-4 font-medium">STATUS</th>
                      <th className="px-6 py-4 font-medium text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium shrink-0">M</div>
                          <span className="font-medium text-foreground text-[13px]">Marcus Lee</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-[13px]">marcus@email.com</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-blue-100 text-blue-600">Admin</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-gray-200 text-gray-700">Inactive</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border bg-white shadow-sm"><MoreVertical size={16} /></button>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium shrink-0">S</div>
                          <span className="font-medium text-foreground text-[13px]">Sofia Martinez</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-[13px]">sofia@email.com</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-blue-100 text-blue-600">Manager</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-[#10b981] text-white">Active</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border bg-white shadow-sm"><MoreVertical size={16} /></button>
                      </td>
                    </tr>

                    <tr className="hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium shrink-0">D</div>
                          <span className="font-medium text-foreground text-[13px]">David Kim</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-[13px]">aaron@email.com</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-blue-100 text-blue-600">Accountant</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[11px] font-medium bg-[#10b981] text-white">Active</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors border border-border bg-white shadow-sm"><MoreVertical size={16} /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "Subscription" && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground">Subscription</h3>
                <button className="bg-[#0052ff] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-xs transition-colors w-fit shadow-sm">
                  Upgrade Plan
                </button>
              </div>
              <div className="border-t border-border mt-2"></div>
            </>
          )}

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 pb-4 flex justify-between items-center border-b border-transparent">
              <h3 className="text-xl font-bold text-foreground">Invite Team Members</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 pt-2 flex flex-col gap-5 overflow-y-auto">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  value="Marcus Lee" 
                  readOnly 
                  className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" 
                />
              </div>

              {/* Email & Access Type */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Email</label>
                  <input type="email" value="marcus@email.com" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] text-muted-foreground">Access Type</label>
                  <div className="relative">
                    <select className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                      <option>Admin</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[13px] text-muted-foreground">Password</label>
                <input type="password" value="marcusB789k" readOnly className="w-full bg-[#f4f5f7] rounded-lg px-4 py-3 text-sm border border-transparent focus:outline-none text-foreground" />
              </div>
            </div>
            
            <div className="p-6 pt-2 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-lg font-medium text-sm bg-[#e2e8f0] hover:bg-[#cbd5e1] text-slate-700 transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-lg font-medium text-sm bg-primary hover:bg-primary/90 text-white transition-colors">
                Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
