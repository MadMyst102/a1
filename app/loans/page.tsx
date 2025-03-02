"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LoansPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة السلف</h1>
        <Button>
          <i className="fas fa-plus ml-2"></i>
          إضافة سلفة جديدة
        </Button>
      </div>
      
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-semibold">إجمالي السلف المستحقة</h3>
              <p className="text-2xl font-bold mt-1 ltr">SAR 25,000</p>
            </div>
            <div>
              <h3 className="font-semibold">عدد السلف النشطة</h3>
              <p className="text-2xl font-bold mt-1">15</p>
            </div>
            <div>
              <h3 className="font-semibold">السلف المسددة</h3>
              <p className="text-2xl font-bold mt-1">8</p>
            </div>
          </div>
          
          <div className="text-lg">
            قريباً - جدول تفاصيل السلف
          </div>
        </div>
      </Card>
    </div>
  )
}
