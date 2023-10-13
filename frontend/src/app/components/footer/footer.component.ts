import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/shared/models/Categories';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  categories: Category[] = [];

  constructor(private route:ActivatedRoute,
              private productService:ProductsService) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategory();
  }

}
