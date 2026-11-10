import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-modal-dialog',
  styleUrl: './modal-dialog.scss',
  templateUrl: './modal-dialog.html',
})
export class ModalDialog {
  private readonly dialogElement = viewChild.required<ElementRef<HTMLDialogElement>>('taskDialog');

  public open(): void {
    this.dialogElement().nativeElement.showModal();
  }
}
