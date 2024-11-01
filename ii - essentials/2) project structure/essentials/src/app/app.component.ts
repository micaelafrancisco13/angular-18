import { RouterOutlet } from '@angular/router';
import {Component} from '@angular/core';
import {HeaderComponent} from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // register the HeaderComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essentials';
}
