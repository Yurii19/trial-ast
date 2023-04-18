import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  animations: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(public giphyService: GiphyService) {}

  imgUrl: string =
    'https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg';
  giphName: string = 'giphName';
  //loadUrl: string = '';
  loadUrl = '/assets/download.gif';

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
