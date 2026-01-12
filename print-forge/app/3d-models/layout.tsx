import Link from "next/link"
import type { ReactNode } from "react"
import CategoriesNavbar from "../components/CategoriesNavbar"




export default function ModelsLayout({ children }: { children: ReactNode }) {
 
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoriesNavbar />
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}