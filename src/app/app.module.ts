import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DialogShareComponent, DialogShare, DialogShareConfirm } from './dialog-share/dialog-share.component';
import { DialogNotifyComponent, DialogNotify, DialogNotifyConfirm } from './dialog-notify/dialog-notify.component';
import { DialogPurchaseComponent, DialogPurchase, DialogPurchaseConfirm } from './dialog-purchase/dialog-purchase.component';
import { DialogBuyComponent, DialogBuy, DialogBuyConfirm } from './dialog-buy/dialog-buy.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarCanvasComponent } from './progress-bar-canvas/progress-bar-canvas.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'confirmation', component: ConfirmationComponent },
    ])
  ],
  entryComponents: [
    DialogShare,
    DialogShareConfirm,
    DialogNotify,
    DialogNotifyConfirm,
    DialogPurchase,
    DialogPurchaseConfirm,
    DialogBuy,
    DialogBuyConfirm
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    CartItemComponent,
    ShippingComponent,
    ConfirmationComponent,
    DialogShareComponent,
    DialogShare,
    DialogShareConfirm,
    DialogNotifyComponent,
    DialogNotify,
    DialogNotifyConfirm,
    DialogPurchaseComponent,
    DialogPurchase,
    DialogPurchaseConfirm,
    DialogBuyComponent,
    DialogBuy,
    DialogBuyConfirm,
    CheckoutItemComponent,
    CarouselComponent,
    ProgressBarComponent,
    ProgressBarCanvasComponent,
    StepperComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
