import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Subtask } from '../../types';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

export interface TaskDetailsData {
  taskId: string;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-task-details-dialog',
  styleUrl: './task-details-dialog.scss',
  templateUrl: './task-details-dialog.html',
})
export class TaskDetailsDialog {
  private readonly taskService = inject(TaskService);
  private readonly data = inject<TaskDetailsData>(DIALOG_DATA);
  private readonly dialogRef = inject(DialogRef);

  protected readonly taskId = this.data.taskId;
  protected readonly subtasks = computed(() => this.task()?.subtasks ?? []);
  protected readonly task = computed(() => this.taskService.getTask(this.taskId));

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

  close() {
    this.dialogRef.close()
  }
}
