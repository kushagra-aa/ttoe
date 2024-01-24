import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
      {{value}}
  `,
  styles: ``
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
