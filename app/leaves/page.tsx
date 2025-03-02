"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LeavesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة الإجازات</h1>
        <Button>
          <i className="fas fa-plus ml-2"></i>
          طلب إجازة جديدة
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">الإجازات المتبقية</h3>
          <p className="text-3xl font-bold">15</p>
          <p className="text-sm text-muted-foreground">يوم</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">الإجازات المستخدمة</h3>
          <p className="text-3xl font-bold">10</p>
          <p className="text-sm text-muted-foreground">يوم</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">طلبات قيد الانتظار</h3>
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm text-muted-foreground">طلب</p>
        </Card>
      </div>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">سجل الإجازات</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right pb-3">نوع الإجازة</th>
                <th className="text-right pb-3">تاريخ البداية</th>
                <th className="text-right pb-3">تاريخ النهاية</th>
                <th className="text-right pb-3">المدة</th>
                <th className="text-right pb-3">الحالة</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">سنوية</td>
                <td className="py-3">١ يونيو ٢٠٢٤</td>
                <td className="py-3">١٥ يونيو ٢٠٢٤</td>
                <td className="py-3">١٥ يوم</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    موافق عليها
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3">مرضية</td>
                <td className="py-3">١٠ مايو ٢٠٢٤</td>
                <td className="py-3">١٢ مايو ٢٠٢٤</td>
                <td className="py-3">٣ أيام</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    قيد المراجعة
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
