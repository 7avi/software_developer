import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();

  serviceLinks = [
    { label: 'Web Development', href: '#services' },
    { label: 'Aplicații Mobile', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Consultanță IT', href: '#services' },
  ];
}
