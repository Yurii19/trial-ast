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
  

  constructor() {}
  ngOnInit(): void {
    console.log('u>>> HomeComponent ', this);
  }
  //cloud_sync

  
}
