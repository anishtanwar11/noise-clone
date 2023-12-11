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

  category: any ='';
  products: Product[] = [];
  productList: any;
  Category: Category[] = [];
  product: any ='';

  filterTogel = false;
  ShowFIlterBox = false;

  constructor(private route:ActivatedRoute,
              private productService:ProductsService,
              activatedRoute:ActivatedRoute) {
                activatedRoute.params.subscribe((params) => {
                  if(params.searchTerm){
                  this.product= this.productService.getProductBySearctTerm(params.searchTerm);
                  }
                })
               }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      if(categoryName !== null) {
        this.category = categoryName;
        this.products = this.productService.getProductByCategory(this.category);
      } else {
        this.category = 'Collection Not Fount!';
      }
    });

    
    this.Category = this.productService.getCategory();

    this.checkScreenSize();
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
