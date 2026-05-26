import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discount-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './discount-panel.html',
  styleUrl: './discount-panel.css'
})
export class DiscountPanelComponent {

  @Input() cartTotal = 0;

  @Input() discountCode = '';

  @Output()
  discountCodeChange = new EventEmitter<string>();

  @Output()
  discountApplied = new EventEmitter<number>();

  firstTimeUser = true;

  applyDiscount(){

    let percentage = 0;

    if(this.discountCode === 'SAVE10'){
      percentage = 10;
    }

    else if(
      this.discountCode === 'SAVE20'
      && this.cartTotal > 100
    ){
      percentage = 20;
    }

    else if(
      this.discountCode === 'FIRST25'
      && this.firstTimeUser
    ){
      percentage = 25;
      this.firstTimeUser = false;
    }

    else{
      alert('Invalid Discount Code');
      return;
    }

    this.discountApplied.emit(percentage);
  }
}