import { Component, Injectable } from '@angular/core';
import { HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  strokeStyleColor;
  pb_active;
  update;
  items;
  xl;
  mini;
  standard;
  subtotal;
  tax;
  method;
  methodPrice;
  total;
  nameFormGroup;
  addressFormGroup;
  emailFormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.strokeStyleColor = "#1976d2";

    this.items = this.cartService.getItems();

    this.xl = this.cartService.count.xlCount;
    this.mini = this.cartService.count.miniCount;
    this.standard = this.cartService.count.standardCount;

    this.subtotal = this.cartService.getSubtotal();
    this.tax = this.subtotal * .07;
    this.method = this.cartService.getMethod();
    this.methodPrice = this.cartService.getMethodPrice();
    this.total = this.subtotal + this.tax + this.methodPrice;

    this.nameFormGroup = this.formBuilder.group({
      nameCtrl: ['', Validators.required]
    });
    this.addressFormGroup = this.formBuilder.group({
      addressCtrl: ['', Validators.required]
    });
    this.emailFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required]
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event){
    let pb = document.getElementById("progressBar");
    if (window.pageYOffset > 108) {
      this.strokeStyleColor = "white";
      this.pb_active = true;
    }
    else {
      this.strokeStyleColor = "#1976d2";
      this.pb_active = false;
    }
  }

  onUpdate() {
    this.update = !this.update;

    this.xl = this.cartService.count.xlCount;
    this.mini = this.cartService.count.miniCount;
    this.standard = this.cartService.count.standardCount;

    this.subtotal = this.cartService.getSubtotal();
    this.tax = this.subtotal * .07;
    this.method = this.cartService.getMethod();
    this.methodPrice = this.cartService.getMethodPrice();
    this.total = this.subtotal + this.tax + this.methodPrice;
  }

  onRemove(product) {
    this.items = this.items.filter(
      item => item.name !== product.name
    );
    this.cartService.cart.items = this.items;

    if(product.name == 'Phone XL') {
      this.cartService.count.xlCount = 0;
      this.cartService.count.cartCount -= this.xl;
    }
    else if(product.name == 'Phone Mini') {
      this.cartService.count.miniCount = 0;
      this.cartService.count.cartCount -= this.mini;
    }
    else {
      this.cartService.count.standardCount = 0;
      this.cartService.count.cartCount -= this.standard;
    }

    this.subtotal = this.cartService.getSubtotal();
    this.tax = this.subtotal * .07;
    this.method = this.cartService.getMethod();
    this.methodPrice = this.cartService.getMethodPrice();
    this.total = this.subtotal + this.tax + this.methodPrice;
  }

  onSubmit(nameData, addressData, emailData) {
    // Process checkout data here
    console.warn('Your order is ready for submission:',
      {
        name: nameData.nameCtrl,
        address: addressData.addressCtrl,
        email: emailData.emailCtrl
      });

    this.cartService.setConfItems(this.items);
    this.cartService.setXLCount(this.xl);
    this.cartService.setMiniCount(this.mini);
    this.cartService.setStandardCount(this.standard);
    this.cartService.setConfSubtotal(this.subtotal);
    this.cartService.setConfMethod(this.method);
    this.cartService.setConfMethodPrice(this.methodPrice);
    this.cartService.setCustomerName(nameData.nameCtrl);
    this.cartService.setCustomerAddress(addressData.addressCtrl);
    this.cartService.setCustomerEmail(emailData.emailCtrl);
  }

  cartReset() {
    this.cartService.clearCart();
    this.cartService.resetCount();
    this.nameFormGroup.reset();
    this.addressFormGroup.reset();
    this.emailFormGroup.reset();
    this.cartService.clearMethod();
    this.cartService.clearMethodPrice();
  }
}
