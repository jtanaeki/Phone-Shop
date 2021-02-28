import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  method;

  constructor(
    private cartService: CartService,
    private cartComp: CartComponent
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.method = this.cartService.getMethod();
  }

  onChange(selected) {
    this.cartService.setMethod(selected.value);
    this.cartService.setMethodPrice(selected.value.price);
  }

  setShipPBValue() {
    this.cartService.progressBar.progressBarValue = 40;

    if (this.cartComp.pb_active == true) {
      this.cartService.progressBar.shipBGColor = "LimeGreen";
      this.cartService.progressBar.shipTextColor = "black";

      this.cartService.progressBar.nameBGColor = "white";
      this.cartService.progressBar.nameTextColor = "#1976d2";

      this.cartService.progressBar.addrBGColor = "#1976d2";
      this.cartService.progressBar.addrTextColor = "white";

      this.cartService.progressBar.emailBGColor = "#1976d2";
      this.cartService.progressBar.emailTextColor = "white";

      this.cartService.progressBar.compBGColor = "#1976d2";
      this.cartService.progressBar.compTextColor = "white";
    }
    else {
      this.cartService.progressBar.shipBGColor = "LimeGreen";
      this.cartService.progressBar.shipTextColor = "black";

      this.cartService.progressBar.nameBGColor = "#1976d2";
      this.cartService.progressBar.nameTextColor = "white";

      this.cartService.progressBar.addrBGColor = "white";
      this.cartService.progressBar.addrTextColor = "gray";

      this.cartService.progressBar.emailBGColor = "white";
      this.cartService.progressBar.emailTextColor = "gray";

      this.cartService.progressBar.compBGColor = "white";
      this.cartService.progressBar.compTextColor = "gray";
    }
  }
}
