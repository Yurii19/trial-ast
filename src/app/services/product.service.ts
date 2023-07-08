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
      name: 'Washing powder washing powder for home',
      cathegory: 'chemistry',
      pictures: [
        'https://content.rozetka.com.ua/goods/images/big/298414535.jpg',
      ],
      description: 'Пральний порошок для ручного прання. Пральний порошок для ручного прання. Пральний порошок для ручного прання',
      price: '50',
    },
    {
      id: 1,
      name: 'Washing powder',
      cathegory: 'chemistry',
      pictures: [
        'https://content.rozetka.com.ua/goods/images/big/298414588.jpg',
      ],
      description: 'Пральний порошок для ручного прання',
      price: '40',
    },
    {
      id: 2,
      name: 'Socks',
      cathegory: 'clothe',
      pictures: [
        'https://images.prom.ua/3041908233_w640_h640_zhitomirskie-hlopkovye-noski.jpg',
      ],
      description: 'Шкарпетки для щоденного носіння',
      price: '30',
    },
  ];
}
