import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IProduct } from 'src/app/core/types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$!: Observable<IProduct>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log('product details component');
    this.product$ = this.route.paramMap.pipe(
      map((params) => this.productService.products[Number(params.get('index'))])
    );
  }
}
