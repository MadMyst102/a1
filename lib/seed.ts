import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface Employee {
  name: string;
  department: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  employeeId: string;
}

const sampleEmployees: Employee[] = [
  {
    name: "أحمد محمد",
    department: "تقنية المعلومات",
    basicSalary: 8000,
    allowances: 1500,
    deductions: 200,
    employeeId: "1001"
  },
  {
    name: "سارة أحمد",
    department: "الموارد البشرية",
    basicSalary: 7500,
    allowances: 1200,
    deductions: 150,
    employeeId: "1002"
  },
  {
    name: "محمد علي",
    department: "المالية",
    basicSalary: 9000,
    allowances: 2000,
    deductions: 300,
    employeeId: "1003"
  },
  {
    name: "فاطمة حسن",
    department: "التسويق",
    basicSalary: 7000,
    allowances: 1000,
    deductions: 100,
    employeeId: "1004"
  },
  {
    name: "عمر خالد",
    department: "المبيعات",
    basicSalary: 6500,
    allowances: 1300,
    deductions: 180,
    employeeId: "1005"
  }
];

export async function seedEmployees() {
  try {
    const employeesRef = collection(db, "employees");
    
    for (const employee of sampleEmployees) {
      await addDoc(employeesRef, employee);
    }
    
    console.log("Sample employees data seeded successfully!");
  } catch (error) {
    console.error("Error seeding employees data:", error);
    throw error;
  }
}
