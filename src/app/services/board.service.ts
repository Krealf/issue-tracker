import { Service, signal } from '@angular/core';
import { Board } from '../../types';
import { SEED_BOARDS } from '../data/seed';

@Service()
export class BoardService {
  private readonly _boards = signal<Board[]>(SEED_BOARDS);
  public readonly boards = this._boards.asReadonly();

  private readonly _activeBoardName = signal<Board['name']>('Platform Launch');
  public readonly activeBoardName = this._activeBoardName.asReadonly();

  setActiveBoardName(boardName: Board['name']) {
    this._activeBoardName.set(boardName);
  }
}
