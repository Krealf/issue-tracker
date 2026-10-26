import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-task-create',
  styleUrl: './task-create.scss',
  templateUrl: './task-create.html',
})
export class TaskCreate {
  protected taskTitle = "";

  createTask() {
    this.taskTitle = this.taskTitle.trim();
    if (!this.taskTitle) {
      return;
    }

  }
}
