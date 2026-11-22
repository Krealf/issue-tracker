import { Component, computed, input, output } from '@angular/core';
import { Task } from '../../types';

@Component({
  imports: [],
  selector: 'app-task-card',
  styleUrl: './task-card.scss',
  templateUrl: './task-card.html',
})
export class TaskCard {
  readonly task = input.required<Task>();
  readonly completedSubtasks = computed(() => {
    return this.task().subtasks.reduce((acc, current) => (current.completed ? acc + 1 : acc), 0);
  });
  readonly openRequested = output<Task['id']>();

  protected openCard(): void {
    this.openRequested.emit(this.task().id);
  }
}
