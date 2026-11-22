import { Component, inject, input } from '@angular/core';
import { Column, Task } from '../../types';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../services/task.service';
import { DialogService } from '../services/dialog.service';

@Component({
  imports: [TaskCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly taskService = inject(TaskService);
  private readonly dialogService = inject(DialogService);
  readonly columns = input<Column[]>([]);

  protected getColumnTasks(columnId: Column['id']): Task[] {
    return this.taskService.getColumnTasks(columnId);
  }

  protected onOpenTask(id: Task['id']): void {
    this.dialogService.open({
      kind: 'detailsTask',
      taskId: id,
    });
  }
}
