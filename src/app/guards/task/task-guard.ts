import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

export const taskGuard: CanActivateFn = (route) => {
  const tasks = inject(TaskService).tasks;
  const router = inject(Router);
  const taskIdFromUrl = route.paramMap.get('taskId');

  return tasks().some((task) => task.id === taskIdFromUrl) ? true : router.createUrlTree(['/404']);
};
