import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Dashboard } from './dashboard/dashboard';
import { TaskCreate } from './task-create/task-create';
import { TaskDetails } from './task-details/task-details';
import { ModalDialog } from './modal-dialog/modal-dialog';

@Component({
  imports: [Header, Sidebar, Dashboard, TaskCreate, TaskDetails, ModalDialog],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '[attr.data-theme]': 'darkMode() ? "dark" : "light"'
  }
})
export class App {
  protected darkMode = signal<boolean>(false);
  protected activeDialog = '';

  protected setActiveDialog(typeDialog: string) {
    this.activeDialog = typeDialog;
  }
}
