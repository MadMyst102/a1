import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { cn } from "../lib/utils"
import { Sidebar } from "../components/Sidebar"

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "نظام إدارة الرواتب والموارد البشرية",
  description: "نظام متكامل لإدارة الرواتب والموارد البشرية",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        cairo.className
      )}>
        <div className="relative min-h-screen">
          <header className="fixed top-0 left-0 right-64 h-16 bg-card border-b z-30 flex items-center px-6">
            <h1 className="text-xl font-bold">
              نظام إدارة الرواتب والموارد البشرية
            </h1>
          </header>
          <Sidebar />
          <main className="pt-16 pr-64 min-h-screen">
            <div className="container mx-auto p-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
