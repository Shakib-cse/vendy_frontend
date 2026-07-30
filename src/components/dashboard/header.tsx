import { Search, Bell, Menu } from "lucide-react"

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-20 bg-white rounded-2xl flex items-center justify-between px-4 md:px-8 shrink-0 shadow-sm gap-2">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted shrink-0"
          aria-label="Open sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 sm:pr-12 py-2.5 bg-muted/50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>F
            </kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 ml-2 sm:ml-4">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted shrink-0">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0 overflow-hidden">
            <span className="truncate">C</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-foreground">Consultores Lda</span>
            <span className="text-xs text-muted-foreground">tmichael20@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}

