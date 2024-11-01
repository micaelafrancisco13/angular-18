import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*
* Decorators in TypeScript are a form of meta-programming that allows you to attach custom metadata or
* alter the behavior of classes, methods, properties, or parameters.
* Decorators allow you to add, override, or extend the functionality of classes without modifying the
* actual code within them.
* */
@Component({
  // selector Determines how you’ll instantiate the component in HTML, like a custom tag or attribute.
  // <app-root></app-root>
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

  // templateUrl Points to an external HTML file that holds the component's view (structure), keeping
  // HTML separate from TypeScript for readability.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essentials';
}

// the exported AppComponent is imported to main.ts
// import { AppComponent } from './app/app.component';

/*
* The HTML markup defined in the templateUrl (or template, if you’re using an inline template) will be
* displayed wherever you use the component’s selector in your application.
* */
