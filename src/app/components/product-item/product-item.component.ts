import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product: Product;
  count: number[] =[];
  @Output() added: EventEmitter<Product> =new EventEmitter();

  constructor(private cartService: CartService) {
    this.product = {
        id: 0,
        name: '',
        price: 0,
        url: '',
        description: '',
        amount: 1,
    }
    this.count = [1,2,3,4,5,6,7,8,9,10]
  }

  ngOnInit(): void {
  }

  addToCart() {
    //this.added.emit(this.product);
    this.cartService.add(this.product)
    alert("product added to cart")
  }

  onChange(num: any) {
   this.product.amount = num;
  }
}
