import { Component, computed, effect, signal } from '@angular/core';
import { Subtask, Task } from '../../types';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-task-details',
  styleUrl: './task-details.scss',
  templateUrl: './task-details.html',
})
export class TaskDetails {
  protected subtasks = signal<Subtask[]>([
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
  ]);

  protected totalSubtasks = computed(() => this.subtasks().length);
  protected totalCompletedSubtasks = computed(() =>
    this.subtasks().reduce((acc, currentValue) => (currentValue.completed ? acc + 1 : acc), 0),
  );

  protected editSubtaskStatus(id: number) {
    this.subtasks.update((subtasks) =>
      subtasks.map((subtask) => {
        if (subtask.id === id) {
          return {
            ...subtask,
            completed: !subtask.completed,
          };
        }
        return subtask;
      }),
    );
  }

  protected task: Omit<Task, 'subtasks'> = {
    id: 1,
    title: 'Build UI for onboarding flow',
    description:
      'Create the screens that guide new users through their first steps in the application.',
    status: 'todo',
  };

  constructor() {
    effect(() => console.log(`Task progress: ${this.totalCompletedSubtasks()} / ${this.totalSubtasks()} completed`));
  }
}
