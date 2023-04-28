import { Injectable } from '@angular/core';
import { IProduct } from '../core/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  
}

const products: IProduct[] = [
  {
    name: 'Washing powder',
    cathergory: 'chemistry',
    pictures: ['https://content.rozetka.com.ua/goods/images/big/298414535.jpg'],
    description: 'Пральний порошок для ручного прання',
    price: '50',
  },
  {
    name: 'Washing powder',
    cathergory: 'chemistry',
    pictures: ['https://content.rozetka.com.ua/goods/images/big/298414588.jpg'],
    description: 'Пральний порошок для ручного прання',
    price: '40',
  },
  {
    name: 'Socks',
    cathergory: 'clothe',
    pictures: ['https://content.rozetka.com.ua/goods/images/big/298414535.jpg'],
    description: 'Шкарпетки для щоденного носіння',
    price: '30',
  },
];
