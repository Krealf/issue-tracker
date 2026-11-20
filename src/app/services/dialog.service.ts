import { Service, signal } from '@angular/core';
import { Task } from '../../types';

export type DialogRequest =
  | {
      kind: 'createTask';
    }
  | {
      kind: 'detailsTask';
      taskId: Task['id'];
    };

@Service()
export class DialogService {
  private readonly _request = signal<DialogRequest | null>(null);
  readonly request = this._request.asReadonly();

  open(request: DialogRequest): void {
    this._request.set(request)
  }

  close(): void {
    this._request.set(null)
  }
}
