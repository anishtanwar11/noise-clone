import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images: any[];

  constructor() { 
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

  ngOnInit(): void {
  }  
  
}
