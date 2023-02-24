import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
 order: string[];

  constructor(private pcart: CartService) {
    this.order=[];
  }
  
  ngOnInit(): void {
    this.order = history.state;
  }

  clear() {
    this.pcart.clearCart();
  }
}
