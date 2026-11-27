import { Component, inject, input } from '@angular/core';
import { Column, Task } from '../../types';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [TaskCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);
  private route = inject(ActivatedRoute);
  readonly columns = input<Column[]>([]);

  getColumnTasks(columnId: Column['id']): Task[] {
    return this.taskService.getColumnTasks(columnId);
  }

  onOpenTask(id: Task['id']): void {
    this.router.navigate(['tasks', id], { relativeTo: this.route });
  }
}
