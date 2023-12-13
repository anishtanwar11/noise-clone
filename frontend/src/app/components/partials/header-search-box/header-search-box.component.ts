// header-search-box.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-header-search-box',
  templateUrl: './header-search-box.component.html',
  styleUrls: ['./header-search-box.component.css']
})
export class HeaderSearchBoxComponent implements OnInit {
  allProductData: any;
  enteredSearchValue: string = '';

  filteredProducts: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.allProductData = this.productService.getAll();
    this.filteredProducts = this.allProductData; // Initialize with all products
  }

  filterProducts() {
    // Implement filtering logic here
    // For example, filter based on product name containing the entered search text
    this.filteredProducts = this.allProductData.filter((product: { name: string; }) =>
      product.name.toLowerCase().includes(this.enteredSearchValue.toLowerCase())
    );
  }
}
