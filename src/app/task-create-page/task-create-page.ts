import { Component, DestroyRef, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskCreateDialog } from '../task-create-dialog/task-create-dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-create-page',
  template: '',
})
export class TaskCreatePage {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(Dialog);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    const dialogRef = this.dialog.open(TaskCreateDialog, {
      panelClass: 'app-dialog-panel',
      backdropClass: 'app-dialog-backdrop',
      ariaLabelledBy: 'task-create-title',
    });

    dialogRef.closed.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.router.navigate(['../..'], {
        relativeTo: this.route,
      });
    });

    this.destroyRef.onDestroy(() => {
      dialogRef.close();
    });
  }
}
