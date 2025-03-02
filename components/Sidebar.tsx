"use client"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    href: "/employees",
    title: "إدخال بيانات الموظفين",
    icon: "fas fa-user-plus"
  },
  {
    href: "/hr",
    title: "إدارة الموارد البشرية",
    icon: "fas fa-users-cog"
  },
  {
    href: "/payroll",
    title: "عرض كشف الرواتب",
    icon: "fas fa-money-check-alt"
  },
  {
    href: "/loans",
    title: "إدارة السلف",
    icon: "fas fa-hand-holding-usd"
  },
  {
    href: "/reports",
    title: "نظام التقارير",
    icon: "fas fa-chart-bar"
  },
  {
    href: "/print",
    title: "طباعة كشوف الرواتب",
    icon: "fas fa-print"
  },
  {
    href: "/leaves",
    title: "إدارة الإجازات",
    icon: "fas fa-calendar-alt"
  },
  {
    href: "/time",
    title: "إدارة الوقت",
    icon: "fas fa-clock"
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "fixed top-0 right-0 z-40 h-screen bg-card border-l transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-16 items-center justify-between px-3 border-b">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold">
            القائمة الرئيسية
          </h2>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "h-8 w-8 p-0",
            isCollapsed && "mr-auto"
          )}
        >
          <i className={cn(
            "fas",
            isCollapsed ? "fa-chevron-left" : "fa-chevron-right"
          )} />
        </Button>
      </div>
      
      <nav className="space-y-1 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
              pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              isCollapsed && "justify-center px-2"
            )}
          >
            <i className={cn(item.icon, "text-base")} />
            {!isCollapsed && (
              <span>{item.title}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}
