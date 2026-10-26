import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {}
