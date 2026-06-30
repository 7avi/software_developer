import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote:
        'Am apelat la serviciile lor pentru a-mi construi un site. Profesioniști, servicii ireproșabile, deschiși și răbdători pentru orice detaliu.',
      author: 'Andrei S.',
      company: 'Startup Tech',
      initials: 'AS',
    },
    {
      quote:
        'Profesionalism desăvârșit! Website-ul creat pentru afacerea noastră este modern, rapid și ușor de utilizat. Recomand cu încredere!',
      author: 'Maria P.',
      company: 'Retail Plus',
      initials: 'MP',
    },
    {
      quote:
        'Aplicația mobile livrată a depășit așteptările. Comunicare excelentă pe tot parcursul proiectului. Mulțumim pentru implicare!',
      author: 'Ion D.',
      company: 'Logistics Pro',
      initials: 'ID',
    },
  ];
}
