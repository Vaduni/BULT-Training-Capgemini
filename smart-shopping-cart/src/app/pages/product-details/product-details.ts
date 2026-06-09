import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.html'
})
export class ProductDetailsComponent
implements OnInit {

  productId = 0;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.productId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    console.log(
      'Route Param Product ID:',
      this.productId
    );
  }
}