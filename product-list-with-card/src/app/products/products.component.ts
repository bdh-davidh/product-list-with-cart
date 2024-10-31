import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from "../../../public/assets/data.json"
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() deserts = Products;

  ngOnInit() {
    console.log(Products);
  }
}
