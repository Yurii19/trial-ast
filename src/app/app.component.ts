import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CardComponent, HomeComponent, RouterModule ],
})
export class AppComponent {
  title = 'ast-triapp';
}
