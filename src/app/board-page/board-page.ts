import { Component, computed, inject, input } from '@angular/core';
import { Header } from '../header/header';
import { BoardService } from '../services/board.service';
import { Dashboard } from '../dashboard/dashboard';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Header, Dashboard, RouterOutlet],
  selector: 'app-board-page',
  styleUrl: './board-page.scss',
  templateUrl: './board-page.html',
})
export class BoardPage {
  private readonly boardService = inject(BoardService);

  readonly boardId = input.required<string>();

  protected board = computed(() => {
    return this.boardService.boards().find((board) => board.id === this.boardId());
  });
}
