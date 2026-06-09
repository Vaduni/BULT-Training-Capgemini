import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart';
import { Product, CheckoutData } from './models/models';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ShoppingCartComponent,CustomerProfileComponent, RouterOutlet, NavbarComponent],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  totalRevenue = 0;
  totalItemsSold = 0;

  warningMessage = '';

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      stock: 5,
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Phone',
      price: 699.99,
      stock: 10,
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199.99,
      stock: 7,
      category: 'Accessories'
    }
  ];

  handleCheckout(data: CheckoutData) {

    this.totalRevenue += data.total;

    data.items.forEach(item => {
      this.totalItemsSold += item.quantity;
    });

    alert('Checkout Successful!');
  }

  handleWarning(message: string) {
    this.warningMessage = message;
  }
}