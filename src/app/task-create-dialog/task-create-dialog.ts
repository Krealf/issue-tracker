import { Component, DestroyRef, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TASK_CONFIG } from '../app.config';
import { Task } from '../../types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutePanel } from '../route-panel/route-panel';

@Component({
  imports: [ReactiveFormsModule, RoutePanel, FormsModule],
  selector: 'app-task-create-dialog',
  styleUrl: './task-create-dialog.scss',
  templateUrl: './task-create-dialog.html',
})
export class TaskCreateDialog {
  private readonly destroyRef = inject(DestroyRef);
  private readonly taskService = inject(TaskService);
  private readonly taskConfig = inject(TASK_CONFIG);

  protected taskTitle = '';
  protected taskDescription = '';
  protected subtasks: Task['subtasks'] = [];

  createTask() {
    this.taskTitle = this.taskTitle.trim();
    if (!this.taskTitle) {
      return;
    }
    this.taskDescription = this.taskDescription.trim();
    const subtasks = this.subtasks
      .map((item) => ({
        ...item,
        title: item.title.trim(),
      }))
      .filter((item) => !!item.title);

    const task = {
      id: crypto.randomUUID(),
      title: this.taskTitle,
      description: this.taskDescription,
      subtasks: subtasks,
      columnId: 'launch-todo',
      boardId: 'launch',
    };

    this.taskService.create(task);
    console.log(task, this.taskService.tasks());
  }

  removeSubtask(id: string) {
    this.subtasks = this.subtasks.filter((item) => item.id !== id);
  }

  addSubtask() {
    if (this.subtasks.length < this.taskConfig.maxSubtasks) {
      this.subtasks.push({
        id: crypto.randomUUID(),
        title: '',
        completed: false,
      });
    }
  }

  constructor() {
    console.log('Создан компонент TaskCreateDialog');

    this.destroyRef.onDestroy(() => {
      console.log('Уничтожение компонента TaskCreateDialog');
    });
  }
}
