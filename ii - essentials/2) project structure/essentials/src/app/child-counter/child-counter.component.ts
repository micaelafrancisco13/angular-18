import {Component, inject} from '@angular/core';
import {CounterService} from '../../service/CounterService';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-child-counter',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.css'
})
export class ChildCounterComponent {
  public counterService = inject(CounterService);
}
