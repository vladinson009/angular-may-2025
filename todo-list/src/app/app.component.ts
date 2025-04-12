import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductListComponent,
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
