import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div>
      <h3>shop works!</h3>
      <app-card></app-card>
    </div>
  `,
  styles: [
    `
      h3 {
        color: blue;
      }
    `,
  ],
})
export class ShopComponent {}
