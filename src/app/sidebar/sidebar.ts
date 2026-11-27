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
  protected readonly boardService = inject(BoardService);
  protected readonly boards = this.boardService.boards;
  public isDarkMode = model(false);
}
