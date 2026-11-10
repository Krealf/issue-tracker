import { Component, model } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ToggleSwitch } from '../toggle-switch/toggle-switch';

@Component({
  imports: [NgOptimizedImage, ToggleSwitch],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  public darkMode = model(false);
}
