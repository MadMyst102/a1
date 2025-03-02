"use client"

import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default function EmployeesPage() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة الموظفين</h1>
        <Button>
          <i className="fas fa-plus ml-2"></i>
          إضافة موظف جديد
        </Button>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right pb-3">الرقم الوظيفي</th>
                <th className="text-right pb-3">الاسم</th>
                <th className="text-right pb-3">القسم</th>
                <th className="text-right pb-3">تاريخ التعيين</th>
                <th className="text-right pb-3">الراتب الأساسي</th>
                <th className="text-right pb-3">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3">1001</td>
                <td className="py-3">أحمد محمد</td>
                <td className="py-3">تقنية المعلومات</td>
                <td className="py-3">١ يناير ٢٠٢٤</td>
                <td className="py-3 ltr">SAR 5,000</td>
                <td className="py-3">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                      <i className="fas fa-edit"></i>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                      <i className="fas fa-trash text-destructive"></i>
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3">1002</td>
                <td className="py-3">سارة أحمد</td>
                <td className="py-3">الموارد البشرية</td>
                <td className="py-3">١٥ فبراير ٢٠٢٤</td>
                <td className="py-3 ltr">SAR 4,500</td>
                <td className="py-3">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                      <i className="fas fa-edit"></i>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                      <i className="fas fa-trash text-destructive"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  )
}
