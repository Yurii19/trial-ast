import { Injectable } from '@angular/core';
import { IProduct } from '../core/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: IProduct[] = [
    {
      id: 0,
      name: 'Washing powder',
      cathergory: 'chemistry',
      pictures: [
        'https://content.rozetka.com.ua/goods/images/big/298414535.jpg',
      ],
      description: 'Пральний порошок для ручного прання',
      price: '50',
    },
    {
      id: 1,
      name: 'Washing powder',
      cathergory: 'chemistry',
      pictures: [
        'https://content.rozetka.com.ua/goods/images/big/298414588.jpg',
      ],
      description: 'Пральний порошок для ручного прання',
      price: '40',
    },
    {
      id: 2,
      name: 'Socks',
      cathergory: 'clothe',
      pictures: [
        'https://content.rozetka.com.ua/goods/images/big/298414535.jpg',
      ],
      description: 'Шкарпетки для щоденного носіння',
      price: '30',
    },
  ];
}
