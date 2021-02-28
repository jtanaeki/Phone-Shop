import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Input } from '@angular/core';

export interface DialogData {
  product;
}

@Component({
  selector: 'app-dialog-notify-comp',
  templateUrl: './dialog-notify.component.html',
  styleUrls: ['./dialog-notify.component.css']
})
export class DialogNotifyComponent {

    @Input() product;

    constructor(public dialog: MatDialog) {}

    onNotify(): void {
      const dialogRef = this.dialog.open(DialogNotify, {
        width: '450px',
        data: {product: this.product}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

}

@Component({
  selector: 'app-dialog-notify',
  templateUrl: './dialog-notify.html',
})
export class DialogNotify {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) {}

  onNotifyConfirm(): void {
    const dialogRef = this.dialog.open(DialogNotifyConfirm, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Will be notified');
    });
  }

}

@Component({
  selector: 'app-dialog-notify-confirm',
  templateUrl: './dialog-notify-confirm.html',
})
export class DialogNotifyConfirm {

  constructor() {}

}
