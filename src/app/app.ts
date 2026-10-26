import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Dashboard } from './dashboard/dashboard';
import { TaskCreate } from './task-create/task-create';

@Component({
  imports: [RouterOutlet, Header, Sidebar, Dashboard, TaskCreate],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('issue-tracker');

  protected activeDialog = '';

  setActiveDialog(typeDialog: string) {
    this.activeDialog = typeDialog;
  }
}
