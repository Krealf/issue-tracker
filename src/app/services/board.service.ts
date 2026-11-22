import { Service, signal } from '@angular/core';
import { Board } from '../../types';

@Service()
export class BoardService {
  private readonly _boards = signal<Board[]>([
    {
      id: 'start-1',
      name: 'Platform Launch',
      columns: [
        {
          id: 'start-column-1',
          name: 'Todo',
        },
        {
          id: 'start-column-2',
          name: 'Doing',
        },
      ],
    },
    {
      id: 'start-2',
      name: 'Marketing Plan',
      columns: [
        {
          id: 'start-column-2',
          name: 'Fodo',
        },
        {
          id: 'start-column-2',
          name: 'Done',
        },
      ],
    },
    {
      id: 'start-3',
      name: 'Roadmap',
      columns: [
        {
          id: 'start-column-3',
          name: 'Waiting',
        },
        {
          id: 'start-column-3',
          name: 'Working',
        },
      ],
    },
  ]);
  private readonly boards = this._boards.asReadonly();


}
