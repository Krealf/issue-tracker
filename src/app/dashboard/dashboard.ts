import { Component, inject } from '@angular/core';
import { Task } from '../../types';
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

  protected readonly tasks = this.taskService.tasks;
  protected readonly todoTaskCount = this.taskService.todoTaskCount;

  protected getTasksByStatus(status: Task['status']): Task[] {
    return this.tasks().filter((task) => task.status === status);
  }

  protected onOpenTask(id: Task['id']): void {
    this.dialogService.open({
      kind: 'detailsTask',
      taskId: id,
    });
  }

  protected onChangeStatus(id: Task['id'], newStatus: Task['status']): void {
    this.taskService.changeStatus(id, newStatus);
  }
}
