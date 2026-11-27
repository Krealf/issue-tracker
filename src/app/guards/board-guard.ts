import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { BoardService } from '../services/board.service';

export const boardGuard: CanActivateFn = (route) => {
  const boards = inject(BoardService).boards;
  const router = inject(Router);
  const boardIdFromUrl = route.paramMap.get('boardId')

  return boards().some((board) => board.id === boardIdFromUrl)
    ? true
    : router.createUrlTree(['boards/launch']);
};
