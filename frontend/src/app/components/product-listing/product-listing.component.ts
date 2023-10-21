import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  category: any ='';
  products: Product[] = [];
  productList: any;

  constructor(private route:ActivatedRoute,
              private productService:ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      if(categoryName !== null) {
        this.category = categoryName;
        this.products = this.productService.getProductByCategory(this.category);
      } else {
        this.category = 'Collection Not Fount!';
      }
    })
    
  }

}
