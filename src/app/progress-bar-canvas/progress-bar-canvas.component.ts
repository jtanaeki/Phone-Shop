import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';

import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-progress-bar-canvas',
  templateUrl: './progress-bar-canvas.component.html',
  styleUrls: ['./progress-bar-canvas.component.css']
})
export class ProgressBarCanvasComponent implements OnInit {
  @ViewChild('myCanvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  @Input() sbc;
  @Input() stc;
  @Input() nbc;
  @Input() ntc;
  @Input() abc;
  @Input() atc;
  @Input() ebc;
  @Input() etc;
  @Input() cbc;
  @Input() ctc;

  constructor(
    private cartService: CartService,
    private cartComp: CartComponent
  ) { }

  ngOnInit() {
    this.progressTracker();
  }

  setProgressBarClass() {
    $(() => {
      var position = $(".progressBar").offset();
      $(window).scroll(() => {
        if ($(window).scrollTop() > position.top - 72) {
          $(".progressBar").addClass("active");
          $(".order-summary").addClass("active");
        }
        else {
          $(".progressBar").removeClass("active");
          $(".order-summary").removeClass("active");
        };
      });
    });
  }

  progressTracker() {
    this.setProgressBarClass();

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.strokeStyle = this.cartComp.strokeStyleColor;
    this.ctx.lineWidth = 4;
    this.ctx.font = "bold 17px Roboto";

    //Shipping
    this.ctx.beginPath();
    this.ctx.moveTo(50, 19);
    this.ctx.lineTo(157, 19);
    this.ctx.lineTo(184, 47);
    this.ctx.lineTo(157, 74);
    this.ctx.arcTo(-298, 75, -291.74, 74, 28);
    this.ctx.fillStyle = this.sbc;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillStyle = this.stc;
    this.ctx.fillText("Shipping", 65, 50);

    //Name
    this.ctx.beginPath();
    this.ctx.moveTo(157, 19);
    this.ctx.lineTo(300, 19);
    this.ctx.lineTo(327, 47);
    this.ctx.lineTo(300, 74);
    this.ctx.lineTo(157, 74);
    this.ctx.lineTo(184, 47);
    this.ctx.lineTo(157, 19);
    this.ctx.fillStyle = this.nbc;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillStyle = this.ntc;
    this.ctx.fillText("Name", 219, 50);

    //Address
    this.ctx.beginPath();
    this.ctx.moveTo(300, 19);
    this.ctx.lineTo(455, 19);
    this.ctx.lineTo(482, 47);
    this.ctx.lineTo(455, 74);
    this.ctx.lineTo(300, 74);
    this.ctx.lineTo(327, 47);
    this.ctx.lineTo(300, 19);
    this.ctx.fillStyle = this.abc;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillStyle = this.atc;
    this.ctx.fillText("Address", 360, 50);

    //Email
    this.ctx.beginPath();
    this.ctx.moveTo(445, 19);
    this.ctx.lineTo(605, 19);
    this.ctx.lineTo(632, 47);
    this.ctx.lineTo(605, 74);
    this.ctx.lineTo(455, 74);
    this.ctx.lineTo(482, 47);
    this.ctx.lineTo(455, 19);
    this.ctx.fillStyle = this.ebc;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillStyle = this.etc;
    this.ctx.fillText("Email", 525, 50);

    //Complete
    this.ctx.beginPath();
    this.ctx.moveTo(590, 19);
    this.ctx.lineTo(730, 19);
    this.ctx.arcTo(755, 19, 755, 20, 25);
    this.ctx.arcTo(755, 75, 752, 75, 25);
    this.ctx.lineTo(605, 74);
    this.ctx.lineTo(632, 47);
    this.ctx.lineTo(605, 19);
    this.ctx.fillStyle = this.cbc;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillStyle = this.ctc;
    this.ctx.fillText("Complete!", 647, 50);
  }
}
