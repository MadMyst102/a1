"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ReportsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">نظام التقارير</h1>
        <div className="space-x-4 space-x-reverse">
          <Button variant="outline">
            <i className="fas fa-file-excel ml-2"></i>
            تصدير إلى Excel
          </Button>
          <Button variant="outline">
            <i className="fas fa-file-pdf ml-2"></i>
            تصدير إلى PDF
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">التقرير الشهري</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>إجمالي الرواتب:</span>
              <span className="font-bold ltr">SAR 450,000</span>
            </div>
            <div className="flex justify-between">
              <span>إجمالي الحوافز:</span>
              <span className="font-bold ltr">SAR 45,000</span>
            </div>
            <div className="flex justify-between">
              <span>إجمالي الخصومات:</span>
              <span className="font-bold ltr">SAR 15,000</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">التقرير السنوي</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>إجمالي الرواتب:</span>
              <span className="font-bold ltr">SAR 5,400,000</span>
            </div>
            <div className="flex justify-between">
              <span>متوسط عدد الموظفين:</span>
              <span className="font-bold">145</span>
            </div>
            <div className="flex justify-between">
              <span>إجمالي السلف:</span>
              <span className="font-bold ltr">SAR 180,000</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
