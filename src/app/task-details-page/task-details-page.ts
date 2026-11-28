import { Component, DestroyRef, inject, input } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { TaskDetailsDialog } from '../task-details-dialog/task-details-dialog';
import { Task } from '../../types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-task-details-page',
  template: '',
})
export class TaskDetailsPage {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(Dialog);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected readonly taskId = input.required<Task['id']>();

  ngOnInit() {
    const dialogRef = this.dialog.open(TaskDetailsDialog, {
      panelClass: 'app-dialog-panel',
      backdropClass: 'app-dialog-backdrop',
      ariaLabelledBy: 'task-details-title',
      data: {
        taskId: this.taskId(),
      },
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
