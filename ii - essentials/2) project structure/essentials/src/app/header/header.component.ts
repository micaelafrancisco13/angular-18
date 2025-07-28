import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // if set to false, this component becomes a module-based component
  // template: `
  //   <div class="card">
  //     <p>Something</p>
  //   </div>
  // `,
  // styles:
  //   [`
  //   .card {
  //     border: 1px solid gray;
  //     padding: 20px;
  //   }
  // `]
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
