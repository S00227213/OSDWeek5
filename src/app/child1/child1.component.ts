import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  standalone: true
})
export class Child1Component {
  // Make the counterService public 
  constructor(public counterService: CounterService) {}
}
