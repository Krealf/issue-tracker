import { Component } from '@angular/core';
import { Subtask, Task } from '../../types';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-task-details',
  styleUrl: './task-details.scss',
  templateUrl: './task-details.html',
})
export class TaskDetails {
  protected task: Task = {
    id: 1,
    title: 'Build UI for onboarding flow',
    description:
      'Create the screens that guide new users through their first steps in the application.',
    status: 'todo',
    subtasks: [
      {
        id: 1,
        title: 'Build the welcome screen',
        completed: true,
      },
      {
        id: 2,
        title: 'Build the account setup screen',
        completed: false,
      },
      {
        id: 3,
        title: 'Check the layout on mobile',
        completed: false,
      },
    ],
  };

  calculateDoneSubtasks(subtasks: Subtask[]): number {
    return subtasks.reduce((acc, current) => (current.completed ? acc + 1 : acc), 0);
  }
}
