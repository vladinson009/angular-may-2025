import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import { CounterComponent } from './counter/counter.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My First App';
}
