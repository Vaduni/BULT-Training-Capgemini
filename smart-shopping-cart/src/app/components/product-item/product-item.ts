import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/models';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  @Input({ required: true })
  product!: Product;

  @Output('productSelected')
  addToCartEvent = new EventEmitter<Product>();

  addToCart(){

    this.addToCartEvent.emit(this.product);
  }
}