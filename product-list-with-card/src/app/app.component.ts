import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, CartComponent, DialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  dialogIsOpen: boolean = true;

  openDialog(value: any) {
    this.dialogIsOpen = value;
  }
}
