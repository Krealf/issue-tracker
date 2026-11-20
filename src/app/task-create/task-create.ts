import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../types';
import { TaskService } from '../services/task.service';
import { TASK_CONFIG } from '../app.config';

@Component({
  imports: [FormsModule],
  selector: 'app-task-create',
  styleUrl: './task-create.scss',
  templateUrl: './task-create.html',
})
export class TaskCreate {
  private readonly taskService = inject(TaskService);

  private readonly config = inject(TASK_CONFIG)

  protected taskTitle = '';
  protected taskDescription = '';
  protected taskStatus: Task['status'] = 'todo';
  protected subtasks: Task['subtasks'] = []
  protected task: Task | null = null;

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

    this.task = {
      id: crypto.randomUUID(),
      title: this.taskTitle,
      description: this.taskDescription,
      status: this.taskStatus,
      subtasks: subtasks,
    };

    this.taskService.create(this.task);
  }

  removeSubtask(id: string) {
    this.subtasks = this.subtasks.filter((item) => item.id !== id);
  }

  addNewSubtask() {
    if (this.subtasks.length < this.config.maxSubtasks) {
      this.subtasks.push({
        id: crypto.randomUUID(),
        title: '',
        completed: false,
      });
    }
  }
}
