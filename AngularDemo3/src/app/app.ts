import { Component } from '@angular/core';
import { RegistrationForm1 } from './registration-form1/registration-form1';
import { EmployeeForm } from './employee-form/employee-form';
import { DynamicForm } from './dynamic-form/dynamic-form';
import { SignalsDemo } from './signals-demo/signals-demo';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [
    RegistrationForm1,
    EmployeeForm,
    DynamicForm,
    SignalsDemo,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
