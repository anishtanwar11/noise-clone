import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/partials/search/search.component';
import { HeaderSearchBoxComponent } from './components/partials/header-search-box/header-search-box.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'collections/:categoryName',component:ProductListingComponent},
  {path:'collections/:categoryName,product/:productId',component:ProductDetailComponent},
  {path:'product/:productId',component:ProductDetailComponent},
  {path:'search/:searchTerm',component:ProductListingComponent},
  {path:'Search/:searchProduct',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
