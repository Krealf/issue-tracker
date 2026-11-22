import { Component, inject, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { TaskCreate } from './task-create/task-create';
import { TaskDetails } from './task-details/task-details';
import { ModalDialog } from './modal-dialog/modal-dialog';
import { RouterOutlet } from '@angular/router';
import { Board } from '../types';
import { BoardService } from './services/board.service';

@Component({
  imports: [Sidebar, TaskCreate, TaskDetails, ModalDialog, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '[attr.data-theme]': 'darkMode() ? "dark" : "light"',
  },
})
export class App {
  protected readonly boardService = inject(BoardService);

  protected darkMode = signal<boolean>(false);
  protected activeDialog = '';
  protected currentBoardName = '';

  protected setActiveDialog(typeDialog: string) {
    this.activeDialog = typeDialog;
  }

  onBoardNameReceived(boardName: Board['name']) {
    this.currentBoardName = boardName;
  }
}
