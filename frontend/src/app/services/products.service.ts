import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Products';
import { categories, sample_products } from 'src/data';
import { Category } from '../shared/models/Categories';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  // FOR PRODUCT CATEGORY
  getCategory(): Category[] {
    return categories;
  }

  // FOR GETTING ALL PRODUCT
  getAll(): Product[] {
    return sample_products;
  }

  // FOR PRODUCT LIST
  getProductByCategory(categoryName: string) {
    const category = this.getCategory().find(cat => cat.name === categoryName);
    if(category){
      return this.getAll().filter(product => product.category === category.name);
    }
    return[];
  }

  // FOR PRODUCT DETAILS
  getProductById(id: number) {
    return this.getAll().find(product => product.id === id);
  }
}

