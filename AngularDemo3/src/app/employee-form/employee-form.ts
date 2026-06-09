import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {

  cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose'
  ];


  employeeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    department: new FormControl('', [
      Validators.required
    ]),

    city: new FormControl('', [
      Validators.required
    ]),

    gender: new FormControl('', [
      Validators.required
    ])
  });

  submitForm() {
    console.log(this.employeeForm.value);
  }


  employeeForm2 = new FormGroup({
    name: new FormControl('John Doe'),
    email: new FormControl('john@gmail.com'),

    address: new FormGroup({
      street: new FormControl('123 Main St'),
      city: new FormControl('New York'),
      state: new FormControl('NY'),
      zip: new FormControl('10001')
    })
  });

  submitForm2() {
    console.log(this.employeeForm2.value);
  }

  // Custom Validator

  nameStartsWithJ(
    control: AbstractControl
  ): ValidationErrors | null {

    const value = control.value;

    if (!value) {
      return null;
    }

    return value.startsWith('J')
      ? null
      : { nameStartsWithJ: true };
  }

  private formBuilder = new FormBuilder();

  employeeForm3 = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.nameStartsWithJ.bind(this)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    department: [
      '',
      Validators.required
    ],

    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  submitForm3() {
    console.log(this.employeeForm3.value);
  }
}