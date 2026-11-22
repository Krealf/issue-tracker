import { Component, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { TaskCreate } from './task-create/task-create';
import { TaskDetails } from './task-details/task-details';
import { ModalDialog } from './modal-dialog/modal-dialog';
import { RouterOutlet } from '@angular/router';

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
  protected darkMode = signal<boolean>(false);
  protected activeDialog = '';

  protected setActiveDialog(typeDialog: string) {
    this.activeDialog = typeDialog;
  }
}
