import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Products';
import { categories, sample_home_products, sample_products } from 'src/data';
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

  //FOR GETTING HOME PRODUCTS
  getAllHomeProducts(): Product[] {
    return sample_home_products;
  }

  // FOR PRODUCT LIST
  getProductByCategory(categoryName: string) {
    const category = this.getCategory().find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
    if(category){
      return this.getAll().filter(product => product.category.toLowerCase() === category.name.toLowerCase());
    }
    return[];
  }

  // FOR PRODUCT DETAILS
  getProductById(id: number) {
    console.log(sample_products.find(product => product.id === id));
    return sample_products.find(product => product.id === id);
  }

  //FOR HOME PRODUCTS DETAILS
  
  getHomeProductsById(id: number) {
    return this.getAllHomeProducts().find(product => product.id === id);
  }


  getProductBySearctTerm(searchTerm:string) {
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}

