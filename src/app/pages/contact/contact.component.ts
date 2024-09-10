import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <h2>Contact Us</h2>
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <label for="name">Name:</label>
      <input id="name" type="text" formControlName="name" required />
      <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
        Name is required.
      </div>

      <label for="email">Email:</label>
      <input id="email" type="email" formControlName="email" required />
      <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
        Please enter a valid email.
      </div>

      <label for="message">Message:</label>
      <textarea id="message" formControlName="message" required></textarea>
      <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
        Message is required.
      </div>

      <button type="submit" [disabled]="contactForm.invalid">Send</button>
    </form>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message sent');
    }
  }
}
