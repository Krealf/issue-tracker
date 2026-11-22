import { Service, signal } from '@angular/core';
import { Board } from '../../types';
import { SEED_BOARDS } from '../data/seed';

@Service()
export class BoardService {
  private readonly _boards = signal<Board[]>(SEED_BOARDS);
  readonly boards = this._boards.asReadonly();
}
