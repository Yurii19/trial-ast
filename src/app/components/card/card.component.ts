import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { IProduct } from 'src/app/core/types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule,
    RouterModule,
  ],
  animations: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: IProduct = {
    id: 0,
    name: 'Product name',
    cathegory: 'cathergory',
    pictures: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJYp_2xLxb-MQjJmwBEjkEJzrHwiPvTIXgQ&usqp=CAU',
    ],
    description: 'Producst description',
    price: '0 uah',
  };
  @Input() index!: Number;
  constructor() {}

  mouseAbove: boolean = false;

  handleHover(params: any) {
    this.mouseAbove = !this.mouseAbove;
  }
}
