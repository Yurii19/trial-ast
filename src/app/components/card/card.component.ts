import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GiphyService } from 'src/app/services/giphy.service';
import { MatCardModule } from '@angular/material/card';

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
  ],
  animations: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(public giphyService: GiphyService) {}

  imgUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJYp_2xLxb-MQjJmwBEjkEJzrHwiPvTIXgQ&usqp=CAU';
  giphName: string = 'giphName';
  //loadUrl: string = '';
  loadUrl = '/assets/download.gif';
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  mouseAbove: boolean = false;

  handleHover(params: any) {
    console.log('Mouse enter > ', params);
    this.mouseAbove = !this.mouseAbove;
  }

  getData() {
    this.imgUrl = this.loadUrl;
    this.giphyService.getRandomGiph().subscribe((d: any) => {
      const url = d.data.images.original.url;
      // console.log(d, '-', url);
      this.imgUrl = url;
      this.giphName = d.data.title;
    });

    console.log('work');
  }
}
