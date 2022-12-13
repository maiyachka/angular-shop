import { products } from './../product-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-random-product',
  templateUrl: './random-product.component.html',
  styleUrls: ['./random-product.component.scss']
})
export class RandomProductComponent implements OnInit {

  listProduct = [...products];
  listRandom=[];
  i = 0;
  constructor() { }

  ngOnInit() {
    while(this.i<6) {
      this.i++;
      const randIndex = Math.floor(Math.random() * (this.listProduct.length - 1) + 0);
      this.listRandom.push(this.listProduct[randIndex]);
      this.listProduct.splice(randIndex,1);
      console.log(this.listRandom)
  }
  }


}
