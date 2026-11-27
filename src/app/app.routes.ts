import { Routes } from '@angular/router';
import { BoardPage } from './board-page/board-page';
import { boardGuard } from './guards/board-guard';
import { TaskCreate } from './task-create/task-create';
import { TaskDetails } from './task-details/task-details';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'boards/launch',
  },
  // {
  //   path: 'boards/new',
  // },
  {
    path: 'boards/:boardId',
    component: BoardPage,
    canActivate: [boardGuard],
    children: [
      {
        path: 'tasks/new',
        component: TaskCreate,
      },
      {
        path: 'tasks/:taskId',
        component: TaskDetails,
      },
    //   {
    //     path: 'edit',
    //   },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
];
