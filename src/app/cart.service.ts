import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = {
    items: [],
    confItems: []
  };
  count = {
    xlCount: 0,
    miniCount: 0,
    standardCount: 0,
    confXLCount: 0,
    confMiniCount: 0,
    confStandardCount: 0,
    cartCount: 0
  };
  buy = {
    product: {},
    quantity: 0
  };
  total = {
    subtotal: 0,
    confSubtotal: 0
  };
  progressBar = {
    progressBarValue: 20,
    shipBGColor: "",
    shipTextColor: "",
    nameBGColor: "",
    nameTextColor: "",
    addrBGColor: "",
    addrTextColor: "",
    emailBGColor: "",
    emailTextColor: "",
    compBGColor: "",
    compTextColor: ""
  };
  method = {
    shipMethod: {},
    confShipMethod: {},
    shipMethodPrice: 0,
    confShipMethodPrice: 0
  };
  customer = {
    customerName: "",
    customerAddress: "",
    customerEmail: ""
  };

  constructor(private http: HttpClient) {}

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    this.cart.items.push(product);
  }

  getItems() {
    return this.cart.items;
  }

  setConfItems(items) {
    this.cart.confItems = items;
  }

  getConfItems() {
    return this.cart.confItems;
  }

  clearCart() {
    this.cart.items = [];
    return this.cart.items;
  }

  getCount() {
    return this.count;
  }

  setXLCount(xl) {
    this.count.confXLCount = xl;
  }

  getXLCount() {
    return this.count.confXLCount;
  }

  setMiniCount(mini) {
    this.count.confMiniCount = mini;
  }

  getMiniCount() {
    return this.count.confMiniCount;
  }

  setStandardCount(stand) {
    this.count.confStandardCount = stand;
  }

  getStandardCount() {
    return this.count.confStandardCount;
  }

  resetCount() {
    this.count.xlCount = 0;
    this.count.miniCount = 0;
    this.count.standardCount = 0;
    this.count.cartCount = 0;
  }

  setProduct(prod) {
    this.buy.product = prod;
  }

  getProduct() {
    return this.buy.product;
  }

  setQty(qty) {
    this.buy.quantity = qty;
  }

  getQty() {
    return this.buy.quantity;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getTotal() {
    return this.total;
  }

  getSubtotal() {
    this.total.subtotal = 0;
    for(let item of this.cart.items) {
      if(item.name == 'Phone XL') {
        this.total.subtotal += (item.price * this.count.xlCount);
      }
      else if(item.name == 'Phone Mini') {
        this.total.subtotal += (item.price * this.count.miniCount);
      }
      else {
        this.total.subtotal += (item.price * this.count.standardCount);
      }
    }
    return this.total.subtotal;
  }

  setConfSubtotal(subtotal) {
    this.total.confSubtotal = subtotal;
  }

  getConfSubtotal() {
    return this.total.confSubtotal;
  }

  getProgressBar() {
    return this.progressBar;
  }

  setMethod(method) {
    this.method.shipMethod = method;
  }

  getMethod() {
    return this.method.shipMethod;
  }

  setConfMethod(method) {
    this.method.confShipMethod = method;
  }

  getConfMethod() {
    return this.method.confShipMethod;
  }

  clearMethod() {
    this.method.shipMethod = {};
    return this.method.shipMethod;
  }

  setMethodPrice(price) {
    this.method.shipMethodPrice = price;
  }

  getMethodPrice() {
    return this.method.shipMethodPrice;
  }

  setConfMethodPrice(price) {
    this.method.confShipMethodPrice = price;
  }

  getConfMethodPrice() {
    return this.method.confShipMethodPrice;
  }

  clearMethodPrice() {
    this.method.shipMethodPrice = 0;
    return this.method.shipMethodPrice;
  }

  setCustomerName(custData) {
    this.customer.customerName = custData;
  }

  getCustomerName() {
    return this.customer.customerName;
  }

  setCustomerAddress(custData) {
    this.customer.customerAddress = custData;
  }

  getCustomerAddress() {
    return this.customer.customerAddress;
  }

  setCustomerEmail(custData) {
    this.customer.customerEmail = custData;
  }

  getCustomerEmail() {
    return this.customer.customerEmail;
  }
}
