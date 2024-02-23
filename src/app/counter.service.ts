import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // Change from private to public if you want to access them directly in the template
  public count = signal<number>(0);
  public doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
    console.log('Count incremented to:', this.count());
  }

  decrement() {
    if (this.count() > 0) {
      this.count.set(this.count() - 1);
      console.log('Count decremented to:', this.count());
    }
  }
  
}
