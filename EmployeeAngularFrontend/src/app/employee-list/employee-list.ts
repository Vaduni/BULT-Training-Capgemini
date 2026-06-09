import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../Employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit
{
  employees: Employee[] = [];
 
  errorMessage: string = '';
 
  constructor(private employeeService: EmployeeService) { }
 
  ngOnInit(): void {
    this.loadEmployees();
  }
 
  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      {
        next: (data) => {
          this.employees = data;
          this.errorMessage = '';
          console.log('Employees loaded successfully:', this.employees);
        },
        error: (err) => {
          console.error('Error fetching employees:', err);
          this.errorMessage = 'Failed to load employees. Please try again later.';
        }
      }
     
    );
  }
 
  viewEmployee(id:number | undefined): void {
  if (id !== undefined)
  {
  console.log('View employee with ID:', id);
  }
  }
 
  editEmployee(id:number | undefined): void {
    if (id !== undefined) {
      console.log('Edit employee with ID:', id);
    }
  }
 
  deleteEmployee(id:number | undefined): void {
    if (id !== undefined) {
      console.log('Delete employee with ID:', id);
    }
  }
 
}
 