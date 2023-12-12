import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/shared/models/Categories';
import { Product } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  category: string ='';
  products: Product[] = [];
  Category: Category[] = [];

  filterTogel = false;
  ShowFIlterBox = false;

  constructor(private route:ActivatedRoute,
              private productService:ProductsService) {
                this.route.params.subscribe((params) => {
                  const categoryName = params['categoryName'];
                  if (params['searchTerm']) {
                    this.products = this.productService.getProductBySearctTerm(params['searchTerm']);
                  } else if (categoryName !== null) {
                    this.category = categoryName;
                    this.products = this.productService.getProductByCategory(this.category);
                  } else {
                    this.category = 'Collection Not Found!';
                  }
                });
            
                this.Category = this.productService.getCategory();
                this.checkScreenSize();
               }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.filterTogel = window.innerWidth > 970;
  }

  filterToggleButton() {
    this.ShowFIlterBox = !this.ShowFIlterBox;
  }

}
