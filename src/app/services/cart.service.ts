import { Injectable } from '@angular/core';
import { Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = []

  constructor() { }

  add(p: Product ) {
    let found = false;
    for(let i = 0; i < this.cartItems.length; i++) {
      if(this.cartItems[i].name === p.name) {
        this.cartItems[i].amount = p.amount;
        found = true;
      }
    }
    if(!found) {
      this.cartItems.push(p);
    }
    return this.cartItems;
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getTotal() {
    let total = 0;
    this.cartItems.forEach(p => total += p.amount * p.price);
    return total.toFixed(2);
  }

  clearCart() {
    this.cartItems = []
  }

  remove(p:Product) {
    this.cartItems.splice(this.cartItems.indexOf(p), 1)
  }

}
