import { Component, computed, inject, input } from '@angular/core';
import { Header } from '../header/header';
import { BoardService } from '../services/board.service';
import { Dashboard } from '../dashboard/dashboard';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [Header, Dashboard, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-board-page',
  styleUrl: './board-page.scss',
  templateUrl: './board-page.html',
})
export class BoardPage {
  private readonly boardService = inject(BoardService);
  private readonly boards = this.boardService.boards;
  readonly boardId = input.required<string>();

  protected board = computed(() => {
    return this.boards().find((board) => board.id === this.boardId());
  });
  protected columns = computed(() => {
    return this.boards().find((board) => board.id === this.boardId())?.columns ?? [];
  });
}
