"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCurrency, formatDate } from "@/lib/localization"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"

interface Employee {
  id: string;
  name: string;
  department: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  employeeId: string;
}

export default function PayrollPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalSalary, setTotalSalary] = useState(0);
  const [averageSalary, setAverageSalary] = useState(0);
  const [totalAllowances, setTotalAllowances] = useState(0);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const querySnapshot = await getDocs(collection(db, "employees"));
        const employeesData: Employee[] = [];
        let salaryTotal = 0;
        let allowancesTotal = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data() as Employee;
          employeesData.push({ ...data, id: doc.id });
          salaryTotal += data.basicSalary;
          allowancesTotal += data.allowances;
        });

        setEmployees(employeesData);
        setTotalSalary(salaryTotal);
        setAverageSalary(salaryTotal / employeesData.length || 0);
        setTotalAllowances(allowancesTotal);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployees();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">إجمالي الرواتب</h3>
          <p className="text-3xl font-bold">{formatCurrency(totalSalary)}</p>
          <p className="text-sm text-muted-foreground">هذا الشهر</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">متوسط الراتب</h3>
          <p className="text-3xl font-bold">{formatCurrency(averageSalary)}</p>
          <p className="text-sm text-muted-foreground">لكل موظف</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">إجمالي البدلات</h3>
          <p className="text-3xl font-bold">{formatCurrency(totalAllowances)}</p>
          <p className="text-sm text-muted-foreground">هذا الشهر</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-4">جاري التحميل...</div>
          ) : (
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
                {employees.map((employee) => {
                  const netSalary = employee.basicSalary + employee.allowances - employee.deductions;
                  return (
                    <tr key={employee.id} className="border-b">
                      <td className="py-3">{employee.employeeId}</td>
                      <td className="py-3">{employee.name}</td>
                      <td className="py-3">{employee.department}</td>
                      <td className="py-3">{formatCurrency(employee.basicSalary)}</td>
                      <td className="py-3">{formatCurrency(employee.allowances)}</td>
                      <td className="py-3">{formatCurrency(employee.deductions)}</td>
                      <td className="py-3">{formatCurrency(netSalary)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  )
}
