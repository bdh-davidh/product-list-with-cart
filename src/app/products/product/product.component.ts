import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { ButtonComponent } from "./button/button.component";
import { Desert } from '../../desert.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Desert;

  get imagePath() {
    return 'assets/images/' + this.product.image.desktop;
  }
}
