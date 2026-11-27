import { Component, computed, inject, input } from '@angular/core';
import { Column, Task } from '../../types';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [TaskCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly queryParams = toSignal(this.route.queryParams);

  currentColumnId = computed(() => {
    return this.queryParams()?.['column'];
  });

  readonly columns = input<Column[]>([]);

  getColumnTasks(columnId: Column['id']): Task[] {
    const tasks = this.taskService.getColumnTasks(columnId);

    if (this.currentColumnId()) {
      return tasks.filter((task) => task.columnId === this.currentColumnId());
    }

    return tasks;
  }

  onOpenTask(id: Task['id']): void {
    this.router.navigate(['tasks', id], {
      relativeTo: this.route,
    });
  }
}
