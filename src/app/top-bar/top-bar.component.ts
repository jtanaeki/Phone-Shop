import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  checkoutCount;
  checkoutCart;
  update;
  message;
  item;
  total;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.scrollTopBar();

    this.checkoutCount = this.cartService.getCount();
    this.showCheckoutItems();
    this.checkoutCart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  scrollTopBar() {
    $(() => {
      var position = $(".checkout").offset();
      let $activeClasses = $(
        `.logo, .checkout-button, .fancy-button, .fancy-button i.material-icons,
        .checkoutDropdownList, app-top-bar, .container`
      );
      $(window).scroll(() => {
        if ($(window).scrollTop() > position.top) {
          $(".logo").attr("src", "assets/img/PhoneShop-logo-color.png");
          $activeClasses.addClass("active");
        } else {
          $(".logo").attr("src", "assets/img/PhoneShop-logo.png");
          $activeClasses.removeClass("active");
        };
      });
    });
  }

  showCheckoutItems() {
    $(() => {
      let $dropBtn = $("#dropdown");
      let $dropList = $(".checkoutDropdownList");
      let up = true;

      $($dropBtn).click(e => {
        $($dropBtn).css("transform", "rotate(0deg)");
        $($dropList).slideToggle(200);
        up = !up;
        if(up) {
          $($dropBtn).css("transform", "rotate(180deg)");
        }
        e.stopPropagation();
      });

      $("html").click(e => {
         if ($($dropList).has(e.target).length === 0) {
           $($dropBtn).css("transform", "rotate(180deg)");
           $($dropList).slideUp(200);
           up = true;
         }
       });
    });
  }

  onUpdate() {
    /* Input text box converts to string.
       Therefore, must convert back to integer. */
    this.cartService.count.cartCount =
      Number(this.cartService.count.xlCount) +
      Number(this.cartService.count.miniCount) +
      Number(this.cartService.count.standardCount);

    /* Prevents dropdown menu from closing */
    setTimeout(() => { this.update = !this.update; }, 0);

    this.message = "updated";
    setTimeout(() => { this.message = ""; }, 2000);

    this.cartService.getSubtotal();
  }

  onRemove(product) {
    /* Prevents dropdown menu from closing */
    setTimeout(() => {
      this.checkoutCart.items = this.checkoutCart.items.filter(
        item => item.name !== product.name
      );
    }, 0);

    this.cartService.cart.items = this.checkoutCart.items;

    if(product.name == 'Phone XL') {
      this.cartService.count.cartCount -= this.cartService.count.xlCount;
      this.cartService.count.xlCount = 0;
    }
    else if(product.name == 'Phone Mini') {
      this.cartService.count.cartCount -= this.cartService.count.miniCount;
      this.cartService.count.miniCount = 0;
    }
    else {
      this.cartService.count.cartCount -= this.cartService.count.standardCount;
      this.cartService.count.standardCount = 0;
    }

    this.item = product.name;
    this.message = "removed";
    setTimeout(() => { this.message = ""; }, 2000);

    this.cartService.getSubtotal();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
