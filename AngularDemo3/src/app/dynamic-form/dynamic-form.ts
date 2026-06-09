import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm {

  profiles: string[] = [
    'Developer',
    'Designer',
    'Manager',
    'Tester'
  ];

  profileFormGroups: FormGroup[] = [];

  profileForm = new FormGroup({

    username: new FormControl('', Validators.required),

    age: new FormControl('', [
      Validators.required,
      Validators.min(18)
    ]),

    city: new FormControl('', Validators.required),

    profile: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.profileFormGroups.push(this.profileForm);
  }

  addProfile() {

    const newProfile = new FormGroup({

      username: new FormControl('', Validators.required),

      age: new FormControl('', [
        Validators.required,
        Validators.min(18)
      ]),

      city: new FormControl('', Validators.required),

      profile: new FormControl('', Validators.required)

    });

    this.profileFormGroups.push(newProfile);
  }

  removeProfile(index: number) {

    if (this.profileFormGroups.length > 1) {
      this.profileFormGroups.splice(index, 1);
    }
    else {
      alert('At least one profile must exist');
    }
  }

  submitProfiles() {

    console.log(
      this.profileFormGroups.map(
        form => form.value
      )
    );

    alert('Profiles Submitted Successfully');
  }
}