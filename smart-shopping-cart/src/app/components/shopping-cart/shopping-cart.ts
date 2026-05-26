import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Product,
  CartItem,
  CheckoutData
} from '../../models/models';

import { ProductListComponent } from '../product-list/product-list';

import { CartSummaryComponent } from '../cart-summary/cart-summary';

import { DiscountPanelComponent } from '../discount-panel/discount-panel';

import { ProductFilterComponent } from '../product-filter/product-filter';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    CartSummaryComponent,
    DiscountPanelComponent,
    ProductFilterComponent
  ],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCartComponent {

  @Input()
  productCatalog: Product[] = [];

  @Output()
  checkoutCompleted =
    new EventEmitter<CheckoutData>();

  @Output()
  cartWarning =
    new EventEmitter<string>();

  cartItems: CartItem[] = [];

  filteredProducts: Product[] = [];

  discountPercent = 0;

  discountCode = '';

  ngOnInit(){

    this.filteredProducts =
      [...this.productCatalog];
  }

  applyFilters(filters: any){

    this.filteredProducts =
      this.productCatalog.filter(product => {

        const matchesSearch =
          product.name
          .toLowerCase()
          .includes(
            filters.searchTerm.toLowerCase()
          );

        const matchesCategory =
          !filters.category ||
          product.category === filters.category;

        const matchesPrice =
          product.price >= filters.minPrice &&
          product.price <= filters.maxPrice;

        const matchesStock =
          !filters.inStockOnly ||
          product.stock > 0;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesPrice &&
          matchesStock
        );
      });

    if(
      filters.sortOrder ===
      'Price Low to High'
    ){

      this.filteredProducts.sort(
        (a,b) => a.price - b.price
      );
    }

    if(
      filters.sortOrder ===
      'Price High to Low'
    ){

      this.filteredProducts.sort(
        (a,b) => b.price - a.price
      );
    }

    if(
      filters.sortOrder ===
      'Name A-Z'
    ){

      this.filteredProducts.sort(
        (a,b) =>
          a.name.localeCompare(b.name)
      );
    }
  }

  addToCart(product: Product){

    console.log(
      'ShoppingCartComponent Event'
    );

    if(product.stock <= 0) return;

    const existing =
      this.cartItems.find(
        item =>
          item.product.id === product.id
      );

    if(existing){

      existing.quantity++;
    }
    else{

      this.cartItems.push({
        product,
        quantity: 1
      });
    }

    product.stock--;
  }

  removeItem(productId: number){

    const item =
      this.cartItems.find(
        item =>
          item.product.id === productId
      );

    if(!item) return;

    item.product.stock++;

    if(item.quantity > 1){

      item.quantity--;
    }
    else{

      this.cartItems =
        this.cartItems.filter(
          item =>
            item.product.id !== productId
        );
    }
  }

  getSubtotal(): number{

    return this.cartItems.reduce(
      (sum, item) =>
        sum +
        item.product.price *
        item.quantity,
      0
    );
  }

  applyDiscount(percent: number){

    this.discountPercent = percent;
  }

  totalAfterDiscount(): number{

    const subtotal =
      this.getSubtotal();

    return subtotal -
      (
        subtotal *
        this.discountPercent / 100
      );
  }

  checkout(){

    if(this.cartItems.length === 0){

      alert('Cart Empty');

      return;
    }

    const subtotal =
      this.getSubtotal();

    if(subtotal < 10){

      alert(
        'Minimum amount should be RS.10'
      );

      return;
    }

    const discount =
      subtotal *
      (
        this.discountPercent / 100
      );

    const total =
      subtotal - discount;

    const checkoutData:
      CheckoutData = {

      items: this.cartItems,

      subtotal,

      discount,

      total,

      timestamp: new Date()
    };

    this.checkoutCompleted.emit(
      checkoutData
    );

    this.cartItems = [];

    this.discountPercent = 0;

    this.discountCode = '';
  }
}