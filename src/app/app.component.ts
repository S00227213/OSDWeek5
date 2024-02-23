import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [Child1Component, Child2Component] 
})
export class AppComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
