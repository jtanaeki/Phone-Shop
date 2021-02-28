import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent {
  @Input() item;
  checkout;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor(private cartService: CartService) {
    this.checkout = this.cartService.getCount();
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
