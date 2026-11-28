import { Component, DestroyRef, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskCreateDialog } from '../task-create-dialog/task-create-dialog';

@Component({
  imports: [],
  selector: 'app-task-create-page',
  template: '',
})
export class TaskCreatePage {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(Dialog);

  constructor() {
    console.log('Создан компонент TaskCreatePage');
    const dialogRef = this.dialog.open(TaskCreateDialog)

    dialogRef.closed.subscribe(result => {
      console.log(result)
    })

    this.destroyRef.onDestroy(() => {
      console.log('Уничтожение компонента TaskCreatePage');
      dialogRef.close();
    });
  }
}
