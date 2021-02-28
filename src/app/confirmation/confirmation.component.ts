import { Component } from '@angular/core';
import * as $ from 'jquery';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  name;
  address;
  email;
  randNum;
  date;
  laterDate;
  days;
  method;
  methodPrice;
  items;
  xl;
  mini;
  standard;
  subtotal;
  tax;
  total;

  constructor(private cartService: CartService) {
    this.scrollToContact();

    this.name = this.cartService.getCustomerName();
    this.address = this.cartService.getCustomerAddress();
    this.email = this.cartService.getCustomerEmail();

    this.randNum = Math.floor(Math.random() * (100000000000 - 10000000000)) + 10000000000;

    this.method = this.cartService.getConfMethod();
    this.methodPrice = this.cartService.getConfMethodPrice();

    if(this.method.type == 'Overnight') {
      this.days = 1;
    }
    else if(this.method.type == '2-Day') {
      this.days = 2;
    }
    else {
      this.days = 7;
    }

    this.date = new Date().toDateString();
    this.laterDate = this.addDays(new Date(), this.days).toDateString();

    this.items = this.cartService.getConfItems();

    this.xl = this.cartService.getXLCount();
    this.mini = this.cartService.getMiniCount();
    this.standard = this.cartService.getStandardCount();

    this.subtotal = this.cartService.getConfSubtotal();
    this.tax = this.subtotal * .07;
    this.total = this.subtotal + this.tax + this.methodPrice;
  }

  scrollToContact() {
    $(function() {
      $("a[href^='#']").click(function(e) {
        e.preventDefault();

        let hrefVal = $(this).attr("href");
        let position = $(hrefVal).offset().top;
        $("html, body").animate({scrollTop: position}, 1000);
      });
    });
  }

  addDays(date, days) {
    const newDate = new Date(Number(date))
    newDate.setDate(date.getDate() + days)
    return newDate
  }

}
