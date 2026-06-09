import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  templateUrl: './product-catalog.html'
})
export class ProductCatalogComponent
implements OnInit {

  category = '';

  search = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {

        this.category =
          params['category'];

        this.search =
          params['search'];

        console.log(
          'Category:',
          this.category
        );

        console.log(
          'Search:',
          this.search
        );
      }
    );
  }
}