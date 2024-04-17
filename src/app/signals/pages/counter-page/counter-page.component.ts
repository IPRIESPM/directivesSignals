import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counter = signal(10);
  squaredCounter = computed(() => this.counter() * this.counter());
  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
