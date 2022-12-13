import { products } from './product-list';
import { Injectable } from '@angular/core';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedCard
  items: ProductInterface[] = [];
  lastShowed=[];


  constructor() { }

  addToCart(product: ProductInterface) {
    const findingEl = this.items.find(item=>item.id==product.id);

    if(findingEl){
      findingEl.kol += product.kol;
      findingEl.konus += product.konus;

    } else {
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
}
  deleteItem(product){
    return this.items = this.items.filter(item=>item.kod!==product.kod)
  }

}
