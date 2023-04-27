import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { randomEndPoint, API_KEY } from 'src/app/core/varilables';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private http: HttpClient) {}

  getRandomGiph() {
    return this.http.get(randomEndPoint + '?api_key=' + API_KEY);
  }
}
