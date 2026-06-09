import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {

  cities: string[] = [
    'bangalore',
    'chennai',
    'Delhi',
    'Mumbai',
    'Hyderabad',
    'pune',
    'Kolkata',
    'Ahmedabad',
    'SURAT',
    'Jaipur'
  ];

  // JSON Pipe
  Employee = {
    id: 101,
    name: 'John Doe',
    age: 30,
    department: 'IT',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };

  // Date Pipe
  currentDate: Date = new Date();

  // Decimal Pipe
  price: number = 1234.5678;

  // Percent Pipe
  discount: number = 0.25;

  // Currency Pipe
  salary: number = 50000;

  // Slice Pipe
  message: string = 'Hello, welcome to Angular Pipes!';

  // Helper Method
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }
}