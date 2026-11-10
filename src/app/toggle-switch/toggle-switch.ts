import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-toggle-switch',
  styleUrl: './toggle-switch.scss',
  templateUrl: './toggle-switch.html',
})
export class ToggleSwitch {
  public checked = model(false);

  protected toggle(): void {
    this.checked.update((value) => !value);
  }
}
