"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Users, 
  Package, 
  Settings,
  LogOut
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Invoices", href: "/dashboard/invoices", icon: FileText },
    { name: "Credit Notes", href: "/dashboard/credit-notes", icon: CreditCard },
  ]

  const managementItems = [
    { name: "Customers", href: "/dashboard/customers", icon: Users },
    { name: "Items/Products", href: "/dashboard/products", icon: Package },
  ]

  return (
    <aside className="w-64 h-full bg-white rounded-2xl hidden md:flex flex-col overflow-hidden shadow-sm">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">VENDY</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4">
        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Menu</p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-medium text-sm transition-colors ${
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Management</p>
          <nav className="space-y-1">
            {managementItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-medium text-sm transition-colors ${
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-border space-y-1">
        <Link 
          href="/dashboard/settings" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-medium text-sm transition-colors ${
            pathname === "/dashboard/settings"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          <Settings size={18} />
          Settings
        </Link>

        <button 
          onClick={() => router.push("/")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md font-medium text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  )
}
