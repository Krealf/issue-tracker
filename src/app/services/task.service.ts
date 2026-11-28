import { inject, Service, signal } from '@angular/core';
import { Column, Task } from '../../types';
import { TASK_CONFIG } from '../app.config';
import { SEED_TASKS } from '../data/seed';

@Service()
export class TaskService {
  private readonly config = inject(TASK_CONFIG);
  private readonly _tasks = signal<Task[]>(SEED_TASKS);
  public readonly tasks = this._tasks.asReadonly();

  public create(newTask: Task): void {
    if (this._tasks().length < this.config.maxTasks) {
      this._tasks.update((tasks) => [...tasks, newTask]);
    }
  }

  public update(taskId: Task['id'], updatedFields: Partial<Task>): void {
    this._tasks.update((tasksList) =>
      tasksList.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            ...updatedFields,
          };
        }
        return task;
      }),
    );
  }

  public remove(taskId: string): void {
    if (this._tasks().length > this.config.minTasks) {
      this._tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
    }
  }

  public getColumnTasks(columnId: Column['id']) {
    return this.tasks().filter((task) => task.columnId === columnId);
  }

  public getTask(taskId: Task['id']) {
    return this._tasks().find((task) => task.id === taskId);
  }
}
