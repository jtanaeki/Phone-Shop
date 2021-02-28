import { Component } from '@angular/core';
import { Input } from '@angular/core';
import * as $ from 'jquery';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() product;
  prod;

  constructor(private cartService: CartService) {
    this.prod = this.cartService.getProduct();

    if(this.prod.name == 'Phone XL'){
      this.xlCarousel3D();
    }
    else if(this.prod.name == 'Phone Mini'){
      this.miniCarousel3D();
    }
    else {
      this.standardCarousel3D();
    }
  }

  xlCarousel3D() {
    $(() => {
      let translate = "translateZ(250px)";
      let $carousel = $(".carousel-items");
      let currDeg  = 0;

      $(".all").css({"transform": "rotateY(0deg)" + translate});
      $(".black").css({"transform": "rotateY(72deg)" + translate});
      $(".green").css({"transform": "rotateY(144deg)" + translate});
      $(".orange").css({"transform": "rotateY(216deg)" + translate});
      $(".white").css({"transform": "rotateY(288deg)" + translate});

      $(".carousel-next").click({ d: "n" }, rotatation);
      $(".carousel-prev").click({ d: "p" }, rotatation);

      function rotatation(e) {
        if(e.data.d == "n"){
          currDeg = currDeg - 72;
        }
        if(e.data.d == "p"){
          currDeg = currDeg + 72;
        }
        $carousel.css("transform", "rotateY(" + currDeg + "deg)");
      }
    });
  }

  miniCarousel3D() {
    $(() => {
      let translate = "translateZ(200px)";
      let $carousel = $(".carousel-items");
      let currDeg  = 0;

      $(".all").css({"transform": "rotateY(0deg)" + translate});
      $(".black").css({"transform": "rotateY(90deg)" + translate});
      $(".blue").css({"transform": "rotateY(180deg)" + translate});
      $(".red").css({"transform": "rotateY(270deg)" + translate});

      $(".carousel-next").click({ d: "n" }, rotatation);
      $(".carousel-prev").click({ d: "p" }, rotatation);

      function rotatation(e) {
        if(e.data.d == "n"){
          currDeg = currDeg - 90;
        }
        if(e.data.d == "p"){
          currDeg = currDeg + 90;
        }
        $carousel.css("transform", "rotateY(" + currDeg + "deg)");
      }
    });
  }

  standardCarousel3D() {
    $(() => {
      let translate = "translateZ(350px)";
      let $carousel = $(".carousel-items");
      let currDeg  = 0;

      $(".all").css({"transform": "rotateY(0deg)" + translate});
      $(".black").css({"transform": "rotateY(51.4deg)" + translate});
      $(".blue").css({"transform": "rotateY(102.8deg)" + translate});
      $(".gray").css({"transform": "rotateY(154.2deg)" + translate});
      $(".green").css({"transform": "rotateY(205.6deg)" + translate});
      $(".orange").css({"transform": "rotateY(257deg)" + translate});
      $(".red").css({"transform": "rotateY(308.4deg)" + translate});

      $(".carousel-next").click({ d: "n" }, rotatation);
      $(".carousel-prev").click({ d: "p" }, rotatation);

      function rotatation(e) {
        if(e.data.d == "n"){
          currDeg = currDeg - 51.4;
        }
        if(e.data.d == "p"){
          currDeg = currDeg + 51.4;
        }
        $carousel.css("transform", "rotateY(" + currDeg + "deg)");
      }
    });
  }
}
