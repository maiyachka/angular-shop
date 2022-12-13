import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-showed-last',
  templateUrl: './showed-last.component.html',
  styleUrls: ['./showed-last.component.scss']
})
export class ShowedLastComponent implements OnInit {
@Input() lastShowed;

@Output() selection = new EventEmitter<any>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  selectCard(prod) {
    this.selection.next(prod);
  }
}
