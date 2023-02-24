import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Product[] = [];
  total: string = "";
  count: number[] = [];
  name: string = '';
  address: string = '';
  ccNum: string = '';
  order: string[];

  constructor(private cartService: CartService) {
    this.count = [0,1,2,3,4,5,6,7,8,9,10];
    this.order = ['','']
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  onSubmit(): void {
    this.order = [this.name, this.total];
  }
  onChange(num: any, p: Product) {
    if(num == 0) {
      this.removeItem(p);
      this.total = this.cartService.getTotal()
    } else {
    p.amount = num;
      this.total = this.cartService.getTotal()
      this.order[1] = this.total
    }
  }

  removeItem(p: Product) {
    this.cartService.remove(p);
  }
}
