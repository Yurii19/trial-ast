import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { randomEndPoint, API_KEY } from 'src/app/varilables';
// import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imgUrl: string =
    'https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('u>>> HomeComponent ', this);
  }
//cloud_sync

  getData() {
    //?api_key=${API_KEY}
    // const api = searchEndPoint;
    this.http
      .get(randomEndPoint + '?api_key=' + API_KEY)
      .subscribe((d: any) => {
        const url = d.data.images.original.url;
        console.log(d, '-', url);
        this.imgUrl = url;
      });

    console.log('work');
  }
}
