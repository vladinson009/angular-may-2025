import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Name', this.name);
    console.log('Email', this.email);
    console.log('Message', this.message);

    this.isSubmitted = true;

    this.name = '';
    this.email = '';
    this.message = '';
  }
}
