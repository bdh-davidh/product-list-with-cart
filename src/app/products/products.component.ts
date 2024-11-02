import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesertsService } from '../deserts.service';
import { ProductComponent } from "./product/product.component";
import { Desert } from '../desert.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  deserts: Desert[];

  constructor(desertsService: DesertsService) {
    this.deserts = desertsService.deserts;
  }
}
