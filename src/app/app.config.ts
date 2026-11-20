import {
  ApplicationConfig,
  InjectionToken,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TaskConfig } from '../types';

export const TASK_CONFIG = new InjectionToken<TaskConfig>('TASK_CONFIG');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: TASK_CONFIG,
      useValue: {
        maxTasks: 10,
        minTasks: 1,
        maxSubtasks: 5,
      },
    },
  ],
};
