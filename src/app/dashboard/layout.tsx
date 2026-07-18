import { ReactNode } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-[#f4f5f7] text-foreground overflow-hidden font-sans p-4 gap-4">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 gap-4">
        <Header />
        <main className="flex-1 overflow-auto pb-4">
          {children}
        </main>
      </div>
    </div>
  )
}
