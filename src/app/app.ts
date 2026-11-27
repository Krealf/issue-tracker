import { Component, inject, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { BoardService } from './services/board.service';

@Component({
  imports: [Sidebar, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '[attr.data-theme]': 'isDarkMode() ? "dark" : "light"',
  },
})
export class App {
  protected readonly boardService = inject(BoardService);

  protected isDarkMode = signal<boolean>(false);
}
