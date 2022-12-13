import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-buy-info',
  templateUrl: './buy-info.component.html',
  styleUrls: ['./buy-info.component.scss']
})
export class BuyInfoComponent implements OnInit {
  lastShowed;


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.lastShowed = this.cartService.lastShowed;
  }

}
