import { Component, DestroyRef, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskDetailsDialog } from '../task-details-dialog/task-details-dialog';

@Component({
  imports: [],
  selector: 'app-task-details-page',
  template: '',
})
export class TaskDetailsPage {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(Dialog);

  constructor() {
    console.log('Создан компонент TaskDetailsPage');
    const dialogRef = this.dialog.open(TaskDetailsDialog);

    this.destroyRef.onDestroy(() => {
      dialogRef.close()
      console.log('Уничтожение компонента TaskDetailsPage');
    });
  }
}
