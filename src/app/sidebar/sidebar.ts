import { Component, inject, model } from '@angular/core';
import { BoardService } from '../services/board.service';
import { ToggleSwitch } from '../toggle-switch/toggle-switch';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [ToggleSwitch, NgOptimizedImage, RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  public darkMode = model(false);
  protected readonly boardService = inject(BoardService);

  readonly boards = this.boardService.boards;
}
