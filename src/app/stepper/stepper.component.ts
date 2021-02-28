import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false}
    }]
})
export class StepperComponent {
  nameFormGroup;
  addressFormGroup;
  emailFormGroup;

  constructor(
    private cartComp: CartComponent,
    private cartService: CartService,
    private route: Router
  ) {
    this.nameFormGroup = this.cartComp.nameFormGroup;
    this.addressFormGroup = this.cartComp.addressFormGroup;
    this.emailFormGroup = this.cartComp.emailFormGroup;
  }

  setNamePBValue() {
    this.cartService.progressBar.progressBarValue = 60;

    if (this.cartComp.pb_active == true) {
      this.cartService.progressBar.shipBGColor = "LimeGreen";
      this.cartService.progressBar.shipTextColor = "black";

      this.cartService.progressBar.nameBGColor = "LimeGreen";
      this.cartService.progressBar.nameTextColor = "black";

      this.cartService.progressBar.addrBGColor = "white";
      this.cartService.progressBar.addrTextColor = "#1976d2";

      this.cartService.progressBar.emailBGColor = "#1976d2";
      this.cartService.progressBar.emailTextColor = "white";

      this.cartService.progressBar.compBGColor = "#1976d2";
      this.cartService.progressBar.compTextColor = "white";
    }
    else {
      this.cartService.progressBar.shipBGColor = "LimeGreen";
      this.cartService.progressBar.shipTextColor = "black";

      this.cartService.progressBar.nameBGColor = "LimeGreen";
      this.cartService.progressBar.nameTextColor = "black";

      this.cartService.progressBar.addrBGColor = "#1976d2";
      this.cartService.progressBar.addrTextColor = "white";

      this.cartService.progressBar.emailBGColor = "white";
      this.cartService.progressBar.emailTextColor = "gray";

      this.cartService.progressBar.compBGColor = "white";
      this.cartService.progressBar.compTextColor = "gray";
    }
  }

  setAddressPBValue() {
    this.cartService.progressBar.progressBarValue = 80;

    if (this.cartComp.pb_active == true) {
      this.cartService.progressBar.shipBGColor = "LimeGreen";
      this.cartService.progressBar.shipTextColor = "black";

      this.cartService.progressBar.nameBGColor = "LimeGreen";
      this.cartService.progressBar.nameTextColor = "black";

      this.cartService.progressBar.addrBGColor = "LimeGreen";
      this.cartService.progressBar.addrTextColor = "black";

      this.cartService.progressBar.emailBGColor = "white";
      this.cartService.progressBar.emailTextColor = "#1976d2";

      this.cartService.progressBar.compBGColor = "#1976d2";
      this.cartService.progressBar.compTextColor = "white";
    }
    else {
      this.cartService.progressBar.shipBGColor = "LimeGreen";
      this.cartService.progressBar.shipTextColor = "black";

      this.cartService.progressBar.nameBGColor = "LimeGreen";
      this.cartService.progressBar.nameTextColor = "black";

      this.cartService.progressBar.addrBGColor = "LimeGreen";
      this.cartService.progressBar.addrTextColor = "black";

      this.cartService.progressBar.emailBGColor = "#1976d2";
      this.cartService.progressBar.emailTextColor = "white";

      this.cartService.progressBar.compBGColor = "white";
      this.cartService.progressBar.compTextColor = "gray";
    }
  }

  setEmailPBValue() {
    this.cartService.progressBar.progressBarValue = 100;

    this.cartService.progressBar.shipBGColor = "LimeGreen";
    this.cartService.progressBar.shipTextColor = "black";

    this.cartService.progressBar.nameBGColor = "LimeGreen";
    this.cartService.progressBar.nameTextColor = "black";

    this.cartService.progressBar.addrBGColor = "LimeGreen";
    this.cartService.progressBar.addrTextColor = "black";

    this.cartService.progressBar.emailBGColor = "LimeGreen";
    this.cartService.progressBar.emailTextColor = "black";

    this.cartService.progressBar.compBGColor = "LimeGreen";
    this.cartService.progressBar.compTextColor = "black";
  }
}
