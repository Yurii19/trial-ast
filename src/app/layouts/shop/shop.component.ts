import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div>
      <h3>shop works!</h3>
      <app-product-list></app-product-list>
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
export class ShopComponent {
  
}
