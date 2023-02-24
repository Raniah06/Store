import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
 current: Product;
 count: number[] = [];
 

  constructor(private cartService: CartService) {
    this.current = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1,
    }
    this.count = [1,2,3,4,5,6,7,8,9,10]; 
  }

  ngOnInit(): void{
    this.current = history.state;
  }
  onChange(num: any) {
    this.current.amount = num;
  }

  addToCart() {
    this.cartService.add(this.current)
    alert(" product added to cart")
  }
}
