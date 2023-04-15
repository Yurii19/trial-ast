import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CardComponent, HomeComponent],
})
export class AppComponent {
  title = 'ast-triapp';
}
