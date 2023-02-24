import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private carService: CartService) { }
  
   ngOnInit(): void {
     this.productService.getProducts().subscribe(data => {
      for( let i = 0 ; i < data.length; i++) {
        data[i].amount = 1;
      }
      this.products = data;
     });
    }

    add(p: Product) {
      this.carService.add(p);
    }

}
