import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subtask, Task } from '../../types';

@Component({
  imports: [FormsModule],
  selector: 'app-task-create',
  styleUrl: './task-create.scss',
  templateUrl: './task-create.html',
})
export class TaskCreate {
  protected availableId: number = 2;

  protected taskTitle = '';
  protected taskDescription = '';
  protected taskStatus: Task['status'] = 'todo';
  protected subtasks: Subtask[] = [
    {
      id: 1,
      title: '',
      completed: false,
    },
  ];
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
      id: 40,
      title: this.taskTitle,
      description: this.taskDescription,
      status: this.taskStatus,
      subtasks: subtasks,
    };

    console.log(this.task);
  }

  removeSubtask(id: number) {
    if (this.subtasks.length > 1) {
      this.subtasks = this.subtasks.filter((item) => item.id !== id);
    }
  }

  addNewSubtask() {
    if (this.subtasks.length < 5) {
      this.subtasks.push({
        id: this.availableId,
        title: '',
        completed: false,
      });
      this.availableId += 1;
    }
  }
}
