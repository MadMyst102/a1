"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PrintPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">طباعة كشوف الرواتب</h1>
        <Button>
          <i className="fas fa-print ml-2"></i>
          طباعة الكشف
        </Button>
      </div>
      
      <Card className="p-6">
        <div className="space-y-6">
          <div className="text-center border-b pb-4">
            <h2 className="text-2xl font-bold mb-2">كشف راتب شهر يونيو 2024</h2>
            <p className="text-muted-foreground">رقم الكشف: 2024-06-001</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">بيانات الموظف</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>الاسم: أحمد محمد</p>
                <p>الرقم الوظيفي: 1001</p>
                <p>القسم: تقنية المعلومات</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">تفاصيل الراتب</h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>الراتب الأساسي:</span>
                  <span className="ltr">SAR 5,000</span>
                </div>
                <div className="flex justify-between">
                  <span>البدلات:</span>
                  <span className="ltr">SAR 1,000</span>
                </div>
                <div className="flex justify-between">
                  <span>الحوافز:</span>
                  <span className="ltr">SAR 500</span>
                </div>
                <div className="flex justify-between">
                  <span>الخصومات:</span>
                  <span className="ltr">SAR -200</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>صافي الراتب:</span>
                  <span className="ltr">SAR 6,300</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4 text-sm text-muted-foreground">
            <p>تم إصدار هذا الكشف بتاريخ: 30 يونيو 2024</p>
            <p>ملاحظة: هذا الكشف صالح للاستخدام الداخلي فقط</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
