"use client"

import Link from "next/link"
import { Plus, Minus, MoreVertical, Calendar, ChevronDown } from "lucide-react"

export default function NewInvoicePage() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">New Invoice</h2>
        <p className="text-muted-foreground text-sm mt-1">Easily generate your invoices here.</p>
      </div>

      {/* Main Form Area */}
      <div className="bg-[#f4f5f7] rounded-xl p-6 flex-1 mb-6">
        {/* Products Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Products</h3>
          
          <div className="overflow-x-auto mb-4">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-[120px_1fr_120px_100px_120px_120px_60px] gap-4 mb-2 text-xs font-semibold text-muted-foreground px-2">
                <div>Quantity</div>
                <div>Product</div>
                <div>Code</div>
                <div className="text-center">Tax</div>
                <div className="text-right">Unit Price</div>
                <div className="text-right">Total</div>
                <div className="text-center">Action</div>
              </div>

              {/* Product Row 1 */}
              <div className="grid grid-cols-[120px_1fr_120px_100px_120px_120px_60px] gap-4 mb-3 items-center">
                <div className="flex bg-white rounded-lg border border-transparent overflow-hidden">
                  <button className="px-3 py-2 text-muted-foreground hover:bg-muted"><Minus size={14} /></button>
                  <input type="text" value="1,00" readOnly className="w-full text-center text-sm focus:outline-none" />
                  <button className="px-3 py-2 text-muted-foreground hover:bg-muted"><Plus size={14} /></button>
                </div>
                <div className="relative">
                  <select className="w-full bg-white rounded-lg px-3 py-2.5 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>20Mbps/20Mbps internet Circuit</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                </div>
                <div>
                  <input type="text" value="SVC-2026-011" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none" />
                </div>
                <div>
                  <input type="text" value="14%" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none text-center" />
                </div>
                <div>
                  <input type="text" value="1500.00" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none text-right" />
                </div>
                <div>
                  <input type="text" value="3,000,00" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none text-right font-medium" />
                </div>
                <div className="flex justify-center">
                  <button className="p-2.5 bg-white rounded-lg border border-transparent text-muted-foreground hover:bg-muted"><MoreVertical size={16} /></button>
                </div>
              </div>

              {/* Product Row 2 */}
              <div className="grid grid-cols-[120px_1fr_120px_100px_120px_120px_60px] gap-4 mb-3 items-center">
                <div className="flex bg-white rounded-lg border border-transparent overflow-hidden">
                  <button className="px-3 py-2 text-muted-foreground hover:bg-muted"><Minus size={14} /></button>
                  <input type="text" value="1,00" readOnly className="w-full text-center text-sm focus:outline-none" />
                  <button className="px-3 py-2 text-muted-foreground hover:bg-muted"><Plus size={14} /></button>
                </div>
                <div className="relative">
                  <select className="w-full bg-white rounded-lg px-3 py-2.5 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>20Mbps/20Mbps internet Circuit</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                </div>
                <div>
                  <input type="text" value="SVC-2026-011" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none" />
                </div>
                <div>
                  <input type="text" value="14%" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none text-center" />
                </div>
                <div>
                  <input type="text" value="1500.00" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none text-right" />
                </div>
                <div>
                  <input type="text" value="3,000,00" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none text-right font-medium" />
                </div>
                <div className="flex justify-center">
                  <button className="p-2.5 bg-white rounded-lg border border-transparent text-muted-foreground hover:bg-muted"><MoreVertical size={16} /></button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end border-b border-border/50 pb-6">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
              <Plus size={16} />
              Add Product
            </button>
          </div>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Customer</label>
              <div className="relative">
                <select className="w-full bg-white rounded-lg px-3 py-2.5 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>ENGEVIA - Civil Construction and Public Works, Lda.</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Invoice number</label>
              <input type="text" value="FT FT052654709BN/180" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">NIF</label>
              <input type="text" value="5402146462" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Date</label>
              <div className="relative">
                <input type="text" value="21/04/2026" readOnly className="w-full bg-white rounded-lg pl-3 pr-10 py-2.5 text-sm border border-transparent focus:outline-none" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Payment Condition</label>
              <div className="relative">
                <select className="w-full bg-white rounded-lg px-3 py-2.5 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Prompt Payment</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Payment Status</label>
              <div className="relative">
                <select className="w-full bg-white rounded-lg px-3 py-2.5 text-sm appearance-none border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Unpaid</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Expiration</label>
              <input type="text" value="02/05/26" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground font-medium">Trade Discount</label>
              <input type="text" value="3136" readOnly className="w-full bg-white rounded-lg px-3 py-2.5 text-sm border border-transparent focus:outline-none" />
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-white rounded-xl p-6 w-full max-w-sm">
              <h4 className="font-semibold text-foreground mb-4">Summary</h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-medium text-foreground">216,829,550,00 Kz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discount:</span>
                  <span className="font-medium text-foreground">00 Kz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Net Amout:</span>
                  <span className="font-medium text-foreground">216,829,550,00 Kz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax:</span>
                  <span className="font-medium text-foreground">550,00 Kz</span>
                </div>
              </div>
              <div className="flex justify-between pt-4 border-t border-border">
                <span className="font-semibold text-foreground">Total:</span>
                <span className="font-bold text-foreground">247,829,550,00 Kz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-4 mt-auto pt-2">
        <Link href="/dashboard/invoices" className="px-6 py-2.5 rounded-md font-medium text-sm border border-border hover:bg-muted transition-colors text-foreground">
          Cancel
        </Link>
        <button className="px-6 py-2.5 rounded-md font-medium text-sm bg-primary hover:bg-primary/90 text-white transition-colors">
          Create
        </button>
      </div>
    </div>
  )
}
