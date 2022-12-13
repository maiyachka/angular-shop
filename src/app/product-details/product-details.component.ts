import { products } from './../product-list';
import { MainShopPageComponent } from './../main-shop-page/main-shop-page.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products;
  sum;
  products1;
  products3;
  pro = products;
  lastShowed;

  constructor(private route: ActivatedRoute,
               private cartService: CartService
               ) { }


  ngOnInit() {
    this.lastShowed = this.cartService.lastShowed;

    this.route.paramMap
      .subscribe((parametri) => {
        console.log(parametri)
        const teg = parametri['params'].prod;
        const color = parametri['params'].col;
        const description = parametri['params'].des;
        if(teg === "all") {
          this.products = products;
          return
        }

        this.products = products.filter((product) => {
          if (product.teg == teg || product.color == color || product.description == description) {
            return true;
          } else {
            return false;
          }
        })
      }
    );
  }
  selectCard(prod) {
    this.cartService.selectedCard = prod;
    this.cartService.lastShowed.unshift(prod);
    if(this.cartService.lastShowed.length > 4){
      this.cartService.lastShowed.pop();
    }

  }


}
