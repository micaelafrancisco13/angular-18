import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // Define a signal to hold the count value
  private _count = signal<number>(0);

  // Expose the signal as a getter
  get count(): Signal<number> {
    return this._count;
  }

  // Method to increment the count
  increment(): void {
    this._count.set(this._count() + 1); // `this._count()` reads the current value
  }

  // Method to decrement the count
  decrement(): void {
    this._count.set(this._count() - 1);
  }

  // Method to reset the count
  reset(): void {
    this._count.set(0);
  }
}
