import { Component, computed, inject, input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subtask, Task } from '../../types';
import { FormsModule } from '@angular/forms';
import { RoutePanel } from '../route-panel/route-panel';

@Component({
  imports: [FormsModule, RoutePanel],
  selector: 'app-task-details-page',
  styleUrl: './task-details-page.scss',
  templateUrl: './task-details-page.html',
})
export class TaskDetailsPage {
  private readonly taskService = inject(TaskService);
  protected readonly taskId = input.required<Task['id']>();
  protected readonly subtasks = computed(() => this.task()?.subtasks);
  protected readonly task = computed(() => this.taskService.getTask(this.taskId()));

  protected subtasksCount = computed(() => this.subtasks()?.length);
  protected completedSubtasksCount = computed(() =>
    this.subtasks()?.reduce((acc, currentValue) => (currentValue.completed ? acc + 1 : acc), 0),
  );

  toggleSubtask(subtaskId: Subtask['id']) {
    const task = this.task();

    if (!task) return;

    const newSubtasks = task.subtasks.map((subtask) => {
      if (subtask.id === subtaskId) {
        return {
          ...subtask,
          completed: !subtask.completed,
        };
      }
      return subtask;
    });

    this.taskService.update(task.id, { subtasks: newSubtasks });
  }
}
