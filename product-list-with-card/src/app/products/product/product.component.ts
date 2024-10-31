import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { ButtonComponent } from "../../product/button/button.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: any;

  get imagePath() {
    return 'assets/images/' + this.product.image.desktop;
  }
}
