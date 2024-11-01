import { Component, Input } from '@angular/core';
import { DesertsService } from '../../deserts.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() product: any;
  desertService;

  constructor(desertService: DesertsService) {
    this.desertService = desertService;
  }

  inCart() {
    return this.product.quantity >= 1;
  }

  // CHECK is this mutating state?
  increment() {
    this.product.quantity += 1;
  }

  decrement() {
    if (this.product.quantity <= 0) return;
    this.product.quantity -= 1;
  }
}
