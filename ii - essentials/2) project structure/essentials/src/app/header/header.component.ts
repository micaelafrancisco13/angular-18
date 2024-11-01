import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // if set to false, this component becomes a module-based component
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
