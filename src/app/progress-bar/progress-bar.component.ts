import { Component } from '@angular/core';

import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  pb;

  constructor(
    private cartService: CartService,
    private cartComp: CartComponent
  ) {
    this.pb = this.cartService.getProgressBar();

    this.initColor();
  }

  initColor(){
    if (this.cartService.progressBar.progressBarValue == 20) {
      if (this.cartComp.pb_active == true) {
        this.cartService.progressBar.shipBGColor = "white";
        this.cartService.progressBar.shipTextColor = "#1976d2";

        this.cartService.progressBar.nameBGColor = "#1976d2";
        this.cartService.progressBar.nameTextColor = "white";

        this.cartService.progressBar.addrBGColor = "#1976d2";
        this.cartService.progressBar.addrTextColor = "white";

        this.cartService.progressBar.emailBGColor = "#1976d2";
        this.cartService.progressBar.emailTextColor = "white";

        this.cartService.progressBar.compBGColor = "#1976d2";
        this.cartService.progressBar.compTextColor = "white";
      }
      else {
        this.cartService.progressBar.shipBGColor = "#1976d2";
        this.cartService.progressBar.shipTextColor = "white";

        this.cartService.progressBar.nameBGColor = "white";
        this.cartService.progressBar.nameTextColor = "gray";

        this.cartService.progressBar.addrBGColor = "white";
        this.cartService.progressBar.addrTextColor = "gray";

        this.cartService.progressBar.emailBGColor = "white";
        this.cartService.progressBar.emailTextColor = "gray";

        this.cartService.progressBar.compBGColor = "white";
        this.cartService.progressBar.compTextColor = "gray";
      }
    }
  }
}
