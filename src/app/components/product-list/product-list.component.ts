import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/core/types';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products!: IProduct[]

}
