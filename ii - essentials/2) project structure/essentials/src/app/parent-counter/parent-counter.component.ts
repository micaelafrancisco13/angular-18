import {Component, inject} from '@angular/core';
import {CounterService} from '../../service/CounterService';

@Component({
  selector: 'app-parent-counter',
  standalone: true,
  imports: [],
  templateUrl: './parent-counter.component.html',
  styleUrl: './parent-counter.component.css'
})
export class ParentCounterComponent {
  public counterService = inject(CounterService);
}
