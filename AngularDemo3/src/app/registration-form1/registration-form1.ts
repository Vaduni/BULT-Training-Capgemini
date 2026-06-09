import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public stock: number
  ) {}
}

@Component({
  selector: 'app-registration-form1',
  imports: [FormsModule, JsonPipe],
  templateUrl: './registration-form1.html',
  styleUrl: './registration-form1.css',
})
export class RegistrationForm1 {

  product: Product = new Product('', 0, '', 0);

  onSubmit(data: any) {

    console.log(data.value);

    this.product.name = data.value.name;
    this.product.price = data.value.price;
    this.product.description = data.value.description;
    this.product.stock = data.value.stock;
  }
}