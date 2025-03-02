"use client"

import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold">لوحة التحكم</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">الموظفين</h2>
          <p className="mb-4 text-3xl font-bold">150</p>
          <Link href="/employees" className="w-full">
            <Button variant="outline" className="w-full">
              <i className="fas fa-users ml-2"></i>
              إدارة الموظفين
            </Button>
          </Link>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">الرواتب</h2>
          <p className="mb-4 text-3xl font-bold ltr">SAR 450,000</p>
          <Link href="/payroll" className="w-full">
            <Button variant="outline" className="w-full">
              <i className="fas fa-money-bill-wave ml-2"></i>
              إدارة الرواتب
            </Button>
          </Link>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">الإجازات</h2>
          <p className="mb-4 text-3xl font-bold">25</p>
          <Link href="/leaves" className="w-full">
            <Button variant="outline" className="w-full">
              <i className="fas fa-calendar-alt ml-2"></i>
              إدارة الإجازات
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  )
}
