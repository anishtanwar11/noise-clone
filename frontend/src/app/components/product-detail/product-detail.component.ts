import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route:ActivatedRoute,
              private productService:ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      const isHomeProduct = this.route.snapshot.data['productId'];
      if(productId){
        const id = parseInt(productId, 10);
        this.product = this.productService.getProductById(id);
      } else if(isHomeProduct){
        const id = parseInt(isHomeProduct, 10);
          this.product = this.productService.getHomeProductsById(id);
      }
    });
  }

  productPrice() {
    return this.product.dicPrice - (this.product.dicPrice * this.product.discount / 100);
  }
}
