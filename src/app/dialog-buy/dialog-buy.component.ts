import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';

export interface DialogData {
  product;
  quantity;
}

@Component({
  selector: 'app-dialog-buy-comp',
  templateUrl: './dialog-buy.component.html',
  styleUrls: ['./dialog-buy.component.css']
})
export class DialogBuyComponent {

  @Input() product;
  @Input() quantity;

  constructor(
    public dialog: MatDialog,
    private cartService: CartService
  ) {}

  onBuy(): void {
    const dialogRef = this.dialog.open(DialogBuy, {
      width: '450px',
      data: {product: this.product, quantity: this.quantity}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.cartService.setProduct(this.product);
    this.cartService.setQty(this.quantity);
  }

}

@Component({
  selector: 'app-dialog-buy',
  templateUrl: './dialog-buy.html',
})
export class DialogBuy {

  prod;
  qty;
  items;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private cartService: CartService
  ) {}

  onBuyConfirm(): void {
    const dialogRef = this.dialog.open(DialogBuyConfirm, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Product added to cart');
    });

    this.prod = this.cartService.getProduct();
    this.qty = this.cartService.getQty();
    this.items = this.cartService.getItems();
    this.buy(this.prod);
  }

  buy(prod) {
    switch(prod.name) {
      case 'Phone XL':
        for(let item of this.items) {
          if(item.name == prod.name) {
            this.cartService.count.xlCount += this.qty;
            this.cartService.count.cartCount += this.qty;
            this.cartService.total.subtotal += (prod.price * this.qty);
          }
        }
        if(this.cartService.count.xlCount == 0) {
          this.cartService.addToCart(prod);
          this.cartService.count.xlCount += this.qty;
          this.cartService.count.cartCount += this.qty;
          this.cartService.total.subtotal += (prod.price * this.qty);
        }
        break;

      case 'Phone Mini':
        for(let item of this.items) {
          if(item.name == prod.name) {
            this.cartService.count.miniCount += this.qty;
            this.cartService.count.cartCount += this.qty;
            this.cartService.total.subtotal += (prod.price * this.qty);
          }
        }
        if(this.cartService.count.miniCount == 0) {
          this.cartService.addToCart(prod);
          this.cartService.count.miniCount += this.qty;
          this.cartService.count.cartCount += this.qty;
          this.cartService.total.subtotal += (prod.price * this.qty);
        }
        break;

      case 'Phone Standard':
        for(let item of this.items) {
          if(item.name == prod.name) {
            this.cartService.count.standardCount += this.qty;
            this.cartService.count.cartCount += this.qty;
            this.cartService.total.subtotal += (prod.price * this.qty);
          }
        }
        if(this.cartService.count.standardCount == 0) {
          this.cartService.addToCart(prod);
          this.cartService.count.standardCount += this.qty;
          this.cartService.count.cartCount += this.qty;
          this.cartService.total.subtotal += (prod.price * this.qty);
        }
        break;
    }
  }

}

@Component({
  selector: 'app-dialog-buy-confirm',
  templateUrl: './dialog-buy-confirm.html',
})
export class DialogBuyConfirm {

  constructor(private route: Router) {}

  onRoute() {
    this.route.navigate(['/']);
  }

}
