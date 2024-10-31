import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: any;

  get imagePath() {
    return 'assets/images/' + this.product.image.desktop;
  }
}
