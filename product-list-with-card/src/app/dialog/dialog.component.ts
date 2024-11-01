import { Component, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DesertsService } from '../deserts.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Output() dialogIsOpen = new EventEmitter<boolean>();
  desertsService;

  constructor(desertsService: DesertsService) {
    this.desertsService = desertsService;
  }

  removeAll() {
    this.dialogIsOpen.emit(false);
  }
}
