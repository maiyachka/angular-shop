
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductInterface } from '../product-interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
lastShowed;
product;
kol=1;
konus=1;
suc=false;



  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.product = this.cartService.selectedCard;
    this.lastShowed = this.cartService.lastShowed;
  }

  changeSelection(prod) {
    this.product = prod
  }

   addToCart(product: ProductInterface) {
    product.kol = this.kol;
     product.konus = this.konus;
     this.cartService.addToCart({...product});
     this.suc= true;
    // window.alert('Товар добавлен');
  }

}
