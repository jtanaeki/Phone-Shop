import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item;
  @Input() update;
  cart;
  @Output() remove = new EventEmitter();

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCount();
  }

  upQty(product) {
    if(product.name == 'Phone XL'){
      this.cartService.count.xlCount++;
    }
    else if(product.name == 'Phone Mini'){
      this.cartService.count.miniCount++;
    }
    else {
      this.cartService.count.standardCount++;
    }
    this.cartService.count.cartCount++;
  }

  downQty(product) {
    if(product.name == 'Phone XL'){
      this.cartService.count.xlCount--;
    }
    else if(product.name == 'Phone Mini'){
      this.cartService.count.miniCount--;
    }
    else {
      this.cartService.count.standardCount--;
    }
    this.cartService.count.cartCount--;
  }
}
