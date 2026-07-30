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
  LogOut,
  X
} from "lucide-react"

interface SidebarProps {
  mobileOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ mobileOpen = false, onClose }: SidebarProps) {
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

  const isItemActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard"
    }
    return pathname.startsWith(href)
  }

  const renderNavSection = (items: typeof navItems) => (
    <nav className="space-y-1">
      {items.map((item) => {
        const isActive = isItemActive(item.href)
        return (
          <Link 
            key={item.href}
            href={item.href} 
            onClick={onClose}
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
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 h-full bg-white rounded-2xl hidden md:flex flex-col overflow-hidden shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">VENDY</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4">
          <div className="mb-6">
            <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Menu</p>
            {renderNavSection(navItems)}
          </div>

          <div className="mb-6">
            <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Management</p>
            {renderNavSection(managementItems)}
          </div>
        </div>

        <div className="p-4 border-t border-border space-y-1">
          <Link 
            href="/dashboard/settings" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-medium text-sm transition-colors ${
              isItemActive("/dashboard/settings")
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

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-border">
          <h1 className="text-2xl font-bold text-primary">VENDY</h1>
          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="mb-6">
            <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Menu</p>
            {renderNavSection(navItems)}
          </div>

          <div className="mb-6">
            <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Management</p>
            {renderNavSection(managementItems)}
          </div>
        </div>

        <div className="p-4 border-t border-border space-y-1">
          <Link 
            href="/dashboard/settings" 
            onClick={onClose}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-medium text-sm transition-colors ${
              isItemActive("/dashboard/settings")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Settings size={18} />
            Settings
          </Link>

          <button 
            onClick={() => {
              onClose?.()
              router.push("/")
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md font-medium text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}
