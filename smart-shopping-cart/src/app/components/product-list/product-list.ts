import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/models';

import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  @Output('productSelected')
  addProduct = new EventEmitter<Product>();

  handleAdd(product: Product){

    console.log('ProductListComponent Event');

    this.addProduct.emit(product);
  }
}