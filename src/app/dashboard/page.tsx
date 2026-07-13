"use client"

import { Plus, Wallet, FileText, Users, Package, MoreHorizontal } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 pb-12">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Welcome back, Meque</h2>
          <p className="text-muted-foreground text-sm mt-1">Here's what's happening with Mercearia Kalunga today.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors w-fit">
          <Plus size={16} />
          New Invoice
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-border/50">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Revenue</span>
            <div className="p-1.5 bg-muted rounded-md text-muted-foreground">
              <Wallet size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold mb-1">Kz 1,284,500</div>
          <div className="text-xs text-emerald-500 font-medium flex items-center gap-1">
            ↗ +18.2% <span className="text-muted-foreground">vs yesterday</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-border/50">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outstanding Invoices</span>
            <div className="p-1.5 bg-muted rounded-md text-muted-foreground">
              <FileText size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold mb-1">Kz 320.00</div>
          <div className="text-xs text-amber-500 font-medium">
            Unpaid
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-border/50">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Customers</span>
            <div className="p-1.5 bg-muted rounded-md text-muted-foreground">
              <Users size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold mb-1">142</div>
          <div className="text-xs text-amber-500 font-medium flex items-center gap-1">
            ↙ -8 <span className="text-muted-foreground">this month</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-border/50">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active Items</span>
            <div className="p-1.5 bg-muted rounded-md text-muted-foreground">
              <Package size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold mb-1">84</div>
          <div className="text-xs text-emerald-500 font-medium flex items-center gap-1">
            ↗ +3 <span className="text-muted-foreground">vs yesterday</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-border/50">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-foreground">Revenue (last 7 days)</h3>
              <p className="text-xs text-muted-foreground">Kz 5,980,400 collected</p>
            </div>
            <div className="flex items-center text-xs border border-border rounded-md overflow-hidden bg-white shadow-sm">
              <button className="px-3 py-1 bg-black text-white font-medium">7d</button>
              <button className="px-3 py-1 hover:bg-muted text-muted-foreground font-medium">30d</button>
              <button className="px-3 py-1 hover:bg-muted text-muted-foreground font-medium">90d</button>
              <button className="px-3 py-1 hover:bg-muted text-muted-foreground font-medium border-l border-border">ly</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-2 pb-6 relative">
             {/* Fake Y Axis */}
             <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] text-muted-foreground">
                <span>1200k</span>
                <span>900k</span>
                <span>600k</span>
                <span>300k</span>
                <span>0k</span>
             </div>
             
             {/* Bars placeholder - replacing with actual recharts later if needed, but this is simple enough for css */}
             <div className="w-full flex justify-between items-end h-full pl-10 border-b border-border/50 pb-2">
               {/* Mon */}
               <div className="w-[10%] flex flex-col items-center gap-2">
                 <div className="w-full bg-blue-200 rounded-t-sm h-[30%]"></div>
                 <span className="text-[10px] text-muted-foreground">Mon</span>
               </div>
               {/* Tue */}
               <div className="w-[10%] flex flex-col items-center gap-2">
                 <div className="w-full bg-blue-200 rounded-t-sm h-[50%]"></div>
                 <span className="text-[10px] text-muted-foreground">Tue</span>
               </div>
               {/* Wed */}
               <div className="w-[10%] flex flex-col items-center gap-2">
                 <div className="w-full bg-blue-200 rounded-t-sm h-[45%]"></div>
                 <span className="text-[10px] text-muted-foreground">Wed</span>
               </div>
               {/* Thu */}
               <div className="w-[10%] flex flex-col items-center gap-2">
                 <div className="w-full bg-primary rounded-t-sm h-[80%] shadow-lg shadow-primary/20"></div>
                 <span className="text-[10px] text-muted-foreground">Thu</span>
               </div>
               {/* Fri */}
               <div className="w-[10%] flex flex-col items-center gap-2">
                 <div className="w-full bg-blue-200 rounded-t-sm h-[55%]"></div>
                 <span className="text-[10px] text-muted-foreground">Fri</span>
               </div>
               {/* Sat */}
               <div className="w-[10%] flex flex-col items-center gap-2">
                 <div className="w-full bg-blue-200 rounded-t-sm h-[48%]"></div>
                 <span className="text-[10px] text-muted-foreground">Sat</span>
               </div>
               {/* Sun */}
               <div className="w-[10%] flex flex-col items-center gap-2">
                 <div className="w-full bg-blue-200 rounded-t-sm h-[75%]"></div>
                 <span className="text-[10px] text-muted-foreground">Sun</span>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
          <h3 className="font-semibold text-foreground mb-1">Sales by channel</h3>
          <p className="text-xs text-muted-foreground mb-6">Distribution this month</p>
          
          <div className="flex justify-center items-center mb-8 relative h-40">
             {/* Using a simple CSS donut chart placeholder for now */}
             <div className="w-32 h-32 rounded-full border-[16px] border-primary border-t-emerald-500 border-l-amber-500 border-r-purple-500 transform rotate-45"></div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-muted-foreground font-medium">Retail</span>
              </div>
              <span className="font-semibold text-foreground">48%</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-muted-foreground font-medium">Wholesale</span>
              </div>
              <span className="font-semibold text-foreground">28%</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-muted-foreground font-medium">Online</span>
              </div>
              <span className="font-semibold text-foreground">14%</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-muted-foreground font-medium">Services</span>
              </div>
              <span className="font-semibold text-foreground">10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden flex flex-col">
          <div className="p-6 flex justify-between items-center border-b border-border/50">
            <h3 className="font-semibold text-foreground">Recent Invoices</h3>
            <button className="text-xs text-primary font-medium hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/30">
                <tr>
                  <th className="px-6 py-4 font-medium">INVOICE</th>
                  <th className="px-6 py-4 font-medium">CUSTOMERS</th>
                  <th className="px-6 py-4 font-medium">DATE</th>
                  <th className="px-6 py-4 font-medium">UNIT</th>
                  <th className="px-6 py-4 font-medium">TOTAL</th>
                  <th className="px-6 py-4 font-medium">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-010</td>
                  <td className="px-6 py-4 font-medium text-foreground">Omar Al-Farsi</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 22 Dec 2025</div></td>
                  <td className="px-6 py-4 text-muted-foreground">02</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢3,136</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Paid</span></td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-011</td>
                  <td className="px-6 py-4 font-medium text-foreground">Lila Chen</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 01 Jan 2026</div></td>
                  <td className="px-6 py-4 text-muted-foreground">10</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢2,016</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-amber-100 text-amber-700"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Unpaid</span></td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-012</td>
                  <td className="px-6 py-4 font-medium text-foreground">Rajesh Kumar</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 14 Feb 2026</div></td>
                  <td className="px-6 py-4 text-muted-foreground">16</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢8,960</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Paid</span></td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-muted-foreground">INV-2026-013</td>
                  <td className="px-6 py-4 font-medium text-foreground">Sofia Martinez</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs"><div className="flex items-center gap-1.5">📅 03 Mar 2026</div></td>
                  <td className="px-6 py-4 text-muted-foreground">08</td>
                  <td className="px-6 py-4 font-medium text-foreground">¢1,680</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Paid</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
            <h3 className="font-semibold text-foreground mb-1">Cash flow</h3>
            <p className="text-xs text-muted-foreground mb-6">In vs Out this month</p>
            
            <div className="h-32 flex items-end justify-between px-2 pb-6 border-b border-border/50">
              <div className="flex gap-1 items-end h-full">
                <div className="w-6 bg-emerald-500 rounded-t-sm h-[40%]"></div>
                <div className="w-6 bg-amber-500 rounded-t-sm h-[30%]"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-6 bg-emerald-500 rounded-t-sm h-[60%]"></div>
                <div className="w-6 bg-amber-500 rounded-t-sm h-[45%]"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-6 bg-emerald-500 rounded-t-sm h-[75%]"></div>
                <div className="w-6 bg-amber-500 rounded-t-sm h-[50%]"></div>
              </div>
              <div className="flex gap-1 items-end h-full">
                <div className="w-6 bg-emerald-500 rounded-t-sm h-[90%]"></div>
                <div className="w-6 bg-amber-500 rounded-t-sm h-[60%]"></div>
              </div>
            </div>
            
            <div className="flex justify-between px-6 text-[10px] text-muted-foreground mt-2 font-medium">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
            </div>

            <div className="flex justify-center items-center gap-4 text-[10px] text-muted-foreground mt-4 font-medium">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-emerald-500"></span>In</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-amber-500"></span>Out</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-semibold text-foreground">Total inventory health</h3>
              <div className="text-muted-foreground"><Package size={16} /></div>
            </div>
            
            <div className="text-3xl font-bold mb-6">1,842</div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">In stock</span>
                  <span className="font-semibold">1620</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Low stock</span>
                  <span className="font-semibold">178</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Out of stock</span>
                  <span className="font-semibold">44</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
