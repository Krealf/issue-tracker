import { Routes } from '@angular/router';
import { BoardPage } from './board-page/board-page';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'boards/launch'
  },
  // {
  //   path: 'boards/new',
  // },
  {
    path: 'boards/:boardId',
    component: BoardPage,
    // children: [
    //   {
    //     path: 'tasks/new',
    //   },
    //   {
    //     path: 'tasks/:taskId',
    //   },
    //   {
    //     path: 'edit',
    //   },
    // ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
