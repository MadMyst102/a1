"use client"

import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function PayrollPage() {
  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">عرض كشف الرواتب</h1>
        <div className="space-x-4 space-x-reverse">
          <Button variant="outline">
            <i className="fas fa-file-excel ml-2"></i>
            تصدير إلى Excel
          </Button>
          <Button variant="outline">
            <i className="fas fa-print ml-2"></i>
            طباعة الكشف
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">إجمالي الرواتب</h3>
          <p className="text-3xl font-bold ltr">SAR 450,000</p>
          <p className="text-sm text-muted-foreground">هذا الشهر</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">متوسط الراتب</h3>
          <p className="text-3xl font-bold ltr">SAR 3,000</p>
          <p className="text-sm text-muted-foreground">لكل موظف</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">إجمالي البدلات</h3>
          <p className="text-3xl font-bold ltr">SAR 45,000</p>
          <p className="text-sm text-muted-foreground">هذا الشهر</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right pb-3">الرقم الوظيفي</th>
                <th className="text-right pb-3">الاسم</th>
                <th className="text-right pb-3">القسم</th>
                <th className="text-right pb-3">الراتب الأساسي</th>
                <th className="text-right pb-3">البدلات</th>
                <th className="text-right pb-3">الخصومات</th>
                <th className="text-right pb-3">الصافي</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">1001</td>
                <td className="py-3">أحمد محمد</td>
                <td className="py-3">تقنية المعلومات</td>
                <td className="py-3 ltr">SAR 5,000</td>
                <td className="py-3 ltr">SAR 1,000</td>
                <td className="py-3 ltr">SAR 200</td>
                <td className="py-3 ltr">SAR 5,800</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">1002</td>
                <td className="py-3">سارة أحمد</td>
                <td className="py-3">الموارد البشرية</td>
                <td className="py-3 ltr">SAR 4,500</td>
                <td className="py-3 ltr">SAR 900</td>
                <td className="py-3 ltr">SAR 150</td>
                <td className="py-3 ltr">SAR 5,250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  )
}
