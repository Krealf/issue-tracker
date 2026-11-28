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
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly taskService = inject(TaskService);
  private readonly queryParams = toSignal(this.route.queryParams);
  private readonly selectedColumnId = computed(() => this.queryParams()?.['column']);
  public readonly columns = input<Column[]>([]);

  getVisibleColumnTasks(columnId: Column['id']): Task[] {
    const tasks = this.taskService.getColumnTasks(columnId);

    if (this.selectedColumnId()) {
      return tasks.filter((task) => task.columnId === this.selectedColumnId());
    }

    return tasks;
  }

  onOpenTask(id: Task['id']): void {
    this.router.navigate(['tasks', id], {
      relativeTo: this.route,
    });
  }
}
