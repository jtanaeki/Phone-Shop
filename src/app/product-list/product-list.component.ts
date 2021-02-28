import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  myControl = new FormControl();
  options: string[] = ['Phone XL', 'Phone Mini', 'Phone Standard'];
  filteredProducts: Observable<string[]>;

  products = products;

  prod;

  ngOnInit() {
    this.filteredProducts = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  addSpaceUnderSearch() {
    $(() => {
      $( ".product-form" ).css( "margin-bottom", "140px" );
    });
  }

  removeSpaceUnderSearch() {
    $(() => {
      $( ".product-form" ).css( "margin-bottom", "0px" );
    });
  }

  getProduct(item) {
    this.prod = item;
  }

  share(name) {
    window.alert('The \'' + name + '\' has been shared!');
  }

  onNotify(name) {
    window.alert('You will be notified when \'' + name + '\' goes on sale.');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
