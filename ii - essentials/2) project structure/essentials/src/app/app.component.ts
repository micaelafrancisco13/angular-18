import { RouterOutlet } from '@angular/router';
import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {SampleOneComponent} from './sample-one/sample-one.component';
import {SampleTwoComponent} from './sample-two/sample-two.component';
import {SampleThreeComponent} from './sample-three/sample-three.component';
import {SampleFourComponent} from './sample-four/sample-four.component';
import {ParentCounterComponent} from './parent-counter/parent-counter.component';
import {ChildCounterComponent} from './child-counter/child-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, SampleOneComponent, SampleTwoComponent, SampleThreeComponent, SampleFourComponent, ParentCounterComponent, ChildCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essentials';
}
