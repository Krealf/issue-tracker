import { Component } from '@angular/core';
import { TaskCreate } from '../task-create/task-create';
import { Dashboard } from '../dashboard/dashboard';
import { TaskService } from '../services/task.service';

@Component({
  imports: [TaskCreate, Dashboard],
  selector: 'app-demo-board',
  styleUrl: './demo-board.scss',
  templateUrl: './demo-board.html',
  providers: [TaskService]
})
export class DemoBoard {}
