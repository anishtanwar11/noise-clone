import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/partials/search/search.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'collections/:categoryName',component:ProductListingComponent},
  {path:'collections/:categoryName,product/:productId',component:ProductDetailComponent},
  {path:'product/:productId',component:ProductDetailComponent},
<<<<<<< HEAD
  {path:'search/:searchTerm',component:SearchComponent}
=======
  {path:'collections/search/:searchTerm',component:ProductListingComponent}
>>>>>>> 7aed939c6d46de7d07aeb09f43aead3da154b55e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
