import { Component, computed, inject, input } from '@angular/core';
import { Column, Task } from '../../types';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../services/task.service';
import { DialogService } from '../services/dialog.service';
import { BoardService } from '../services/board.service';

@Component({
  imports: [TaskCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly boardService = inject(BoardService);
  private readonly taskService = inject(TaskService);
  private readonly dialogService = inject(DialogService);
  private readonly boards = this.boardService.boards;

  readonly boardId = input.required<string>();
  protected board = computed(() => {
    return this.boards().find((board) => board.id === this.boardId());
  });
  protected columns = computed(() => {
    return this.boards().find((board) => board.id === this.boardId())?.columns ?? [];
  });

  protected getColumnTasks(columnId: Column['id']): Task[] {
    return this.taskService.getColumnTasks(columnId);
  }

  protected onOpenTask(id: Task['id']): void {
    this.dialogService.open({
      kind: 'detailsTask',
      taskId: id,
    });
  }
}
