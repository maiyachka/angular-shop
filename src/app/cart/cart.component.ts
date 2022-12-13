import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  sum;
  z=0;
  y=0;


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.summa();
  }

  getSum(item) {
    this.z = (item.price * item.kol)+(item.konus*2)

  return this.z;
}

summa() {
  this.y = 0;
  this.items.forEach((item) => {
    this.y += (item.price * item.kol)+(item.konus*2)
  })
}

deleteCard(product) {
  this.items = this.items.filter(item=>item.kod!==product.kod)

  this.cartService.deleteItem(product);
  this.summa()
}
addQuantity(item){
  item.kol=item.kol +1;
  this.summa()
}
removeQuantity(item){
  if(item.kol>=2){
  item.kol=item.kol - 1;
  this.summa()
}
}
addKonus(item){
  item.konus=item.konus +1;
  this.summa()
}
removeKonus(item){
  if(item.konus>=2){
  item.konus=item.konus - 1;
  this.summa()
}
}
}
