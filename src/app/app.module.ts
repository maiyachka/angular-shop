import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainShopPageComponent } from './main-shop-page/main-shop-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderMenuComponent } from './menus/header-menu/header-menu.component';
import { SideMenuComponent } from './menus/side-menu/side-menu.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ShowedLastComponent } from './showed-last/showed-last.component';
import { BuyInfoComponent } from './buy-info/buy-info.component';
import { RandomProductComponent } from './random-product/random-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainShopPageComponent,
    ProductDetailsComponent,
    CartComponent,
    HeaderMenuComponent,
    SideMenuComponent,
    ProductCardComponent,
    ShowedLastComponent,
    BuyInfoComponent,
    RandomProductComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      // { path: '', component: MainShopPageComponent },
      { path: '',
        redirectTo: "products/all", pathMatch: "prefix" },
      { path: 'products/:prod', component: ProductDetailsComponent },
      { path: 'color/:col', component: ProductDetailsComponent },
      { path: 'description/:des', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'card-info',component: ProductCardComponent},
      { path: 'buy',component: BuyInfoComponent}
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
