import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0; // current count
  incrementAmount: number = 1; // Te amount to increment
  isNegative: boolean = false;

  increment(): void {
    this.count += this.incrementAmount
    this.isNegative= this.count  < 0
  }
  decrement(): void {
    this.count -= this.incrementAmount
    this.isNegative= this.count  < 0
  }
  

}
