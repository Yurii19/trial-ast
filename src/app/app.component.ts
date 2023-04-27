import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './layouts/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CardComponent,HeaderComponent, HomeComponent, RouterModule ],
})
export class AppComponent {
  title = 'ast-triapp';
}
