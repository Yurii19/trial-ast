import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CardComponent],
})
export class AppComponent {
  title = 'ast-triapp';
}
