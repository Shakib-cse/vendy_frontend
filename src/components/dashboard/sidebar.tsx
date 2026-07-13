import Link from "next/link"
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Users, 
  Package, 
  Settings 
} from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white border-r border-border hidden md:flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">VENDY</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4">
        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Menu</p>
          <nav className="space-y-1">
            <Link 
              href="/dashboard" 
              className="flex items-center gap-3 px-3 py-2.5 bg-primary text-primary-foreground rounded-md font-medium text-sm transition-colors"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            <Link 
              href="/dashboard/invoices" 
              className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-muted rounded-md font-medium text-sm transition-colors"
            >
              <FileText size={18} />
              Invoices
            </Link>
            <Link 
              href="/dashboard/credit-notes" 
              className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-muted rounded-md font-medium text-sm transition-colors"
            >
              <CreditCard size={18} />
              Credit Notes
            </Link>
          </nav>
        </div>

        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider px-2">Management</p>
          <nav className="space-y-1">
            <Link 
              href="/dashboard/customers" 
              className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-muted rounded-md font-medium text-sm transition-colors"
            >
              <Users size={18} />
              Customers
            </Link>
            <Link 
              href="/dashboard/products" 
              className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-muted rounded-md font-medium text-sm transition-colors"
            >
              <Package size={18} />
              Items/Products
            </Link>
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-border">
        <Link 
          href="/dashboard/settings" 
          className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:bg-muted rounded-md font-medium text-sm transition-colors"
        >
          <Settings size={18} />
          Settings
        </Link>
      </div>
    </aside>
  )
}
