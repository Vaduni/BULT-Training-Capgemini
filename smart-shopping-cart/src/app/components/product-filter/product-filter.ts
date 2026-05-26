import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/models';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css'
})
export class ProductFilterComponent {

  @Input() products: Product[] = [];

  @Output()
  filterChanged = new EventEmitter<any>();

  totalProducts = 0;

  searchTerm = '';

  activeCategory = '';

  searchPlaceholder = 'Search Products';

  resetButtonText = 'Reset Filters';

  categoryIconPath = 'https://cdn-icons-png.flaticon.com/512/263/263142.png';

  isFilterActive = false;

  isPanelExpanded = true;

  hasResults = true;

  isLoading = false;

  minPrice = 0;

  maxPrice = 1000;

  selectedSortOrder = '';

  showInStockOnly = false;

  categories = [
    'All',
    'Electronics',
    'Accessories',
    'Audio'
  ];

  sortOptions = [
    'Price Low to High',
    'Price High to Low',
    'Name A-Z'
  ];

  ngOnInit(){
    this.totalProducts = this.products.length;
  }

  emitFilters(){

    this.filterChanged.emit({
      searchTerm: this.searchTerm,
      category: this.activeCategory,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sortOrder: this.selectedSortOrder,
      inStockOnly: this.showInStockOnly
    });

    this.isFilterActive = true;
  }

  onSearchChange(event: Event){
    this.emitFilters();
  }

  selectCategory(category: string){

    this.activeCategory =
      category === 'All' ? '' : category;

    this.emitFilters();
  }

  clearAllFilters(){

    this.searchTerm = '';
    this.activeCategory = '';
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.selectedSortOrder = '';
    this.showInStockOnly = false;

    this.isFilterActive = false;

    this.emitFilters();
  }

  onPriceRangeChange(event: Event){
    this.emitFilters();
  }

  togglePanel(){
    this.isPanelExpanded = !this.isPanelExpanded;
  }

  onSortChange(event: Event){
    this.emitFilters();
  }

  getCategoryColor(category: string){

    switch(category){

      case 'Electronics':
        return '#dbeafe';

      case 'Accessories':
        return '#dcfce7';

      case 'Audio':
        return '#fef3c7';

      default:
        return '#ffffff';
    }
  }
}