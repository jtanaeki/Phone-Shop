import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

export interface DialogData {
  product;
}

@Component({
  selector: 'app-dialog-purchase-comp',
  templateUrl: './dialog-purchase.component.html',
  styleUrls: ['./dialog-purchase.component.css']
})
export class DialogPurchaseComponent {

  constructor(public dialog: MatDialog) {}

  onPurchase(): void {
    const dialogRef = this.dialog.open(DialogPurchase, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
 selector: 'app-dialog-purchase',
 templateUrl: './dialog-purchase.html',
})
export class DialogPurchase {

 constructor(
   @Inject(MAT_DIALOG_DATA) public data: DialogData,
   public dialog: MatDialog,
   private cartComp: CartComponent
  ) {}

 onPurchaseConfirm(): void {
   const dialogRef = this.dialog.open(DialogPurchaseConfirm, {
     width: '450px',
   });

   dialogRef.afterClosed().subscribe(result => {
     console.log('Order submitted');
   });

   this.cartComp.cartReset();
 }

}

@Component({
 selector: 'app-dialog-purchase-confirm',
 templateUrl: './dialog-purchase-confirm.html',
})
export class DialogPurchaseConfirm {

  custName;

  constructor(
    private route: Router,
    private cartService: CartService
  ) {
    this.custName = this.cartService.getCustomerName();
  }

  onRoute() {
    this.route.navigate(['/confirmation']);
  }

}
