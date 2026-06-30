import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  submitted = signal(false);

  form = {
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  };

  onSubmit(): void {
    if (!this.form.consent) return;
    this.submitted.set(true);
  }
}
