import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumativaWiComponent } from './Components/sumativa-wi/sumativa-wi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SumativaWiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'galeriacomponentes';
}
