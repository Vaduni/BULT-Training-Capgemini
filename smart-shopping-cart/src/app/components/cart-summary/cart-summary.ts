import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItem } from '../../models/models';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummaryComponent {

  @Input({ alias: 'cartData' })
  cartItems: CartItem[] = [];

  @Output()
  removeItemEvent = new EventEmitter<number>();

  @Output()
  warningEvent = new EventEmitter<string>();

  getSubtotal(): number{

    const subtotal = this.cartItems.reduce(
      (sum, item) =>
        sum + item.product.price * item.quantity,
      0
    );

    if(subtotal > 500){
      this.warningEvent.emit(
        'Warning: Cart total exceeds $500'
      );
    }

    return subtotal;
  }
}