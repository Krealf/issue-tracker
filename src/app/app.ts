import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Dashboard } from './dashboard/dashboard';
import { TaskCreate } from './task-create/task-create';
import { TaskDetails } from './task-details/task-details';

@Component({
  imports: [Header, Sidebar, Dashboard, TaskCreate, TaskDetails],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected activeDialog = '';

  setActiveDialog(typeDialog: string) {
    this.activeDialog = typeDialog;
  }
}
