import { Component, input } from '@angular/core';
import { Header } from '../header/header';

@Component({
  imports: [Header],
  selector: 'app-board-page',
  styleUrl: './board-page.scss',
  templateUrl: './board-page.html',
})
export class BoardPage {
  readonly boardId = input.required<string>();
}
