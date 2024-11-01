import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DesertsService } from '../deserts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  desertsService;

  constructor(desertsService: DesertsService) {
    this.desertsService = desertsService;
  }

  handleRemove(event: any) {
    this.desertsService.resetQuantity(event.target.closest(".cart-item"))
  }
}
