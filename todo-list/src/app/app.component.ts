import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { CounterComponent } from './counter/counter.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductCardComponent,
    CounterComponent,
    MyComponentComponent,
    ContactFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My First App';
}
