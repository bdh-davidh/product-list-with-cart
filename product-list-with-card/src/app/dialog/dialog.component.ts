import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;

  desertsService;

  constructor(desertsService: DesertsService) {
    this.desertsService = desertsService;
  }

  removeAll() {
    this.dialogIsOpen.emit(false);
    this.desertsService.resetAll();
    this.dialog.nativeElement.close();
  }

  ngOnInit() {
    this.dialog.nativeElement.showModal();
  }
}
