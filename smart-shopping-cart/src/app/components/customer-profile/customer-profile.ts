import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Customer } from '../../models/models';

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-profile.html',
  styleUrl: './customer-profile.css'
})
export class CustomerProfileComponent {

  defaultProfileImage =
    'https://cdn-icons-png.flaticon.com/512/6997/6997662.png';

  showEmailAsText = false;

  isEditMode = false;

  isProfileComplete = true;

  originalCustomer!: Customer;

  categories = [
    'Electronics',
    'Accessories',
    'Audio',
    'Computers'
  ];

  customer: Customer = {
    id: 1,
    firstName: 'Vaduni',
    lastName: 'Niranjan',
    email: 'vaduni@gmail.com',
    phone: '9999999999',
    address: 'India',
    membershipLevel: 'Gold',
    loyaltyPoints: 100,
    totalOrders: 11,
    joinDate: new Date(),
    profileImageUrl: '',
    isActive: true,
    subscribeNewsletter: true,
    preferredCategory: 'Accessories'
  };

  isFormValid(){

    return (
      this.customer.firstName.length > 2 &&
      this.customer.lastName.length > 2 &&
      this.customer.email.includes('@')
    );
  }

  getMembershipColor(){

    switch(this.customer.membershipLevel){

      case 'Premium':
        return 'gold';

      case 'Gold':
        return 'orange';

      case 'Silver':
        return 'silver';

      default:
        return '#185875';
    }
  }

  toggleEditMode(){

    this.originalCustomer =
      structuredClone(this.customer);

    this.isEditMode = true;
  }

  saveProfile(){

    this.isEditMode = false;

    alert('Profile Saved');
  }

  cancelEdit(){

    this.customer =
      structuredClone(this.originalCustomer);

    this.isEditMode = false;
  }

  onPhotoUpload(event: Event){

    const input =
      event.target as HTMLInputElement;

    if(input.files?.length){

      const file = input.files[0];

      this.customer.profileImageUrl =
        URL.createObjectURL(file);
    }
  }

  validateField(event: Event){

    const input =
      event.target as HTMLInputElement;

    if(!input.value){
      alert('Field cannot be empty');
    }
  }

  updateNewsletterPreference(event: Event){

    console.log(
      'Newsletter Preference Updated'
    );
  }
}