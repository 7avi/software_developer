import { Component } from '@angular/core';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: Service[] = [
    {
      number: '01',
      title: 'Web Development',
      description:
        'Site-uri corporative, landing pages, e-commerce și platforme web complexe. Tehnologii moderne, performanță maximă și design responsive.',
      icon: '🌐',
    },
    {
      number: '02',
      title: 'Aplicații Mobile',
      description:
        'Aplicații native și cross-platform pentru iOS și Android. De la MVP la produs complet, cu UX impecabil și integrări API.',
      icon: '📱',
    },
    {
      number: '03',
      title: 'UI/UX Design',
      description:
        'Interfețe intuitive și design modern care convertesc. Prototipuri, wireframes și sisteme de design coerente pentru brandul tău.',
      icon: '🎨',
    },
    {
      number: '04',
      title: 'Consultanță & Mentenanță',
      description:
        'Audit tehnic, optimizare performanță, migrare cloud și suport continuu. Suntem partenerul tău pe termen lung.',
      icon: '⚙️',
    },
  ];
}
