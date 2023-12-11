import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/shared/models/Categories';
import { Product } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showNavigationArrows = false;
	showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images: any[];
 categories : Category[]=[];

  homeProducts: Product[]=[];

  constructor(private productService:ProductsService) { 


    this.images =[
      {
        name: 'ColorFit Mighty',
        title: 'Live big and bold',
        subTitle: '1.96" display | Advanced calling',
        img: '/assets/img/slide-1.jpg',
        price: '$ 1799',
        discPrice: '$ 6999'
      },
      {
        name: 'Buds X Prime',
        title: 'Earbuds | 120-hour playtime',
        subTitle: 'Special launch price',
        img: '/assets/img/slide-2.png',
        price: '$ 1399',
        discPrice: '$ 8999'
      },
      {
        name: 'NoiseFit Halo Plus',
        title: 'Arrive in style',
        subTitle: 'Stainless Steel finish | 1.64" AMOLED display',
        img: '/assets/img/slide-3.png',
        price: '$ 1399',
        discPrice: '$ 4499'
      }
    ];
  }

  // FOR PRODUCT CATEGORIES
  

  ngOnInit(): void {
    this.categories = this.productService.getCategory();
    this.homeProducts = this.productService.getAllHomeProducts();
  }

}
