import { products } from './../product-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-shop-page',
  templateUrl: './main-shop-page.component.html',
  styleUrls: ['./main-shop-page.component.scss']
})
export class MainShopPageComponent implements OnInit {
product = products;


  constructor() { }

  ngOnInit() {
  }



}
