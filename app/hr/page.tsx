"use client"

import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default function HRPage() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة الموارد البشرية</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">إجمالي الموظفين</h3>
          <p className="text-3xl font-bold">150</p>
          <p className="text-sm text-muted-foreground">موظف</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">الموظفين الجدد</h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">هذا الشهر</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">طلبات التوظيف</h3>
          <p className="text-3xl font-bold">25</p>
          <p className="text-sm text-muted-foreground">قيد المراجعة</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">آخر التحديثات</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fas fa-user-plus text-primary"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">تم تعيين موظف جديد</h4>
              <p className="text-sm text-muted-foreground">سارة أحمد - قسم الموارد البشرية</p>
            </div>
            <p className="text-sm text-muted-foreground">منذ يومين</p>
          </div>

          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fas fa-file-alt text-primary"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">تحديث سياسة الإجازات</h4>
              <p className="text-sm text-muted-foreground">تم تحديث سياسة الإجازات السنوية</p>
            </div>
            <p className="text-sm text-muted-foreground">منذ 3 أيام</p>
          </div>

          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fas fa-briefcase text-primary"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">فتح باب التوظيف</h4>
              <p className="text-sm text-muted-foreground">تم فتح باب التوظيف لقسم تقنية المعلومات</p>
            </div>
            <p className="text-sm text-muted-foreground">منذ أسبوع</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Button variant="outline">
            عرض كل التحديثات
            <i className="fas fa-chevron-left mr-2"></i>
          </Button>
        </div>
      </Card>
    </section>
  )
}
