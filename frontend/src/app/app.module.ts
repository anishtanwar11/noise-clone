import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchComponent } from './components/partials/search/search.component';
import { HeaderSearchBoxComponent } from './components/partials/header-search-box/header-search-box.component'
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListingComponent,
    ProductDetailComponent,
    SearchComponent,
    HeaderSearchBoxComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
