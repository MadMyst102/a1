"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TimePage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة الوقت</h1>
        <div className="space-x-4 space-x-reverse">
          <Button>
            <i className="fas fa-sign-in-alt ml-2"></i>
            تسجيل الدخول
          </Button>
          <Button variant="outline">
            <i className="fas fa-sign-out-alt ml-2"></i>
            تسجيل الخروج
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">ساعات العمل اليوم</h3>
          <p className="text-3xl font-bold">7.5</p>
          <p className="text-sm text-muted-foreground">ساعة</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">ساعات العمل الأسبوعية</h3>
          <p className="text-3xl font-bold">38</p>
          <p className="text-sm text-muted-foreground">ساعة</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">الوقت الإضافي</h3>
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm text-muted-foreground">ساعة</p>
        </Card>
      </div>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">سجل الحضور والانصراف</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right pb-3">التاريخ</th>
                <th className="text-right pb-3">وقت الدخول</th>
                <th className="text-right pb-3">وقت الخروج</th>
                <th className="text-right pb-3">إجمالي الساعات</th>
                <th className="text-right pb-3">الحالة</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">٢٥ يونيو ٢٠٢٤</td>
                <td className="py-3">٨:٠٠ ص</td>
                <td className="py-3">٤:٠٠ م</td>
                <td className="py-3">٨ ساعات</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    حاضر
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3">٢٤ يونيو ٢٠٢٤</td>
                <td className="py-3">٨:١٥ ص</td>
                <td className="py-3">٤:٣٠ م</td>
                <td className="py-3">٨.٢٥ ساعات</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    متأخر
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
