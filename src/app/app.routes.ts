import { Routes } from '@angular/router';
import { BoardPage } from './board-page/board-page';
import { boardGuard } from './guards/board/board-guard';
import { TaskDetailsPage } from './task-details-page/task-details-page';
import { TaskCreatePage } from './task-create-page/task-create-page';
import { taskGuard } from './guards/task/task-guard';

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
        component: TaskCreatePage,
      },
      {
        path: 'tasks/:taskId',
        component: TaskDetailsPage,
        canActivate: [taskGuard],
      },
    //   {
    //     path: 'edit',
    //   },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];
