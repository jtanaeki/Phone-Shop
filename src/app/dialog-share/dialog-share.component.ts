import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Input } from '@angular/core';

export interface DialogData {
  product;
}

@Component({
  selector: 'app-dialog-share-comp',
  templateUrl: './dialog-share.component.html',
  styleUrls: ['./dialog-share.component.css']
})
export class DialogShareComponent {

  @Input() product;

  constructor(public dialog: MatDialog) {}

  onShare(): void {
    const dialogRef = this.dialog.open(DialogShare, {
      width: '450px',
      data: {product: this.product}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-dialog-share',
  templateUrl: './dialog-share.html',
})
export class DialogShare {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) {}

  onShareConfirm(): void {
    const dialogRef = this.dialog.open(DialogShareConfirm, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Product shared');
    });
  }

}

@Component({
  selector: 'app-dialog-share-confirm',
  templateUrl: './dialog-share-confirm.html',
})
export class DialogShareConfirm {

  constructor() {}

}
