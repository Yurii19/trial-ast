import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { randomEndPoint, API_KEY } from 'src/app/core/varilables';
// import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../../components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, CardComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('u>>> HomeComponent ', this);
  }

  request() {
    this.http
      .get('http://localhost:3000')
      // .pipe(
      //   catchError((d) => {
      //     console.log('catchError >> ', d);
      //     return 'Proccessed';
      //   })
      // )
      .subscribe((d) => console.log('data is : ', d));
    // console.log('request ', new Date());
  }
  //cloud_sync
}
