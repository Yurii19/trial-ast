import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  template: ` <div><h3>shop works!</h3></div> `,
  styles: [
    `
      h3 {
        color: blue;
      }
    `,
  ],
})
export class ShopComponent {}
