import { ReactNode } from "react"
import { Footer } from "./footer"
import { Navigation } from "./navigation"

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
