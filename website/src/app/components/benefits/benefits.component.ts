import { Component } from '@angular/core';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: '★',
      title: 'Standarde înalte',
      description:
        'Atenție meticuloasă la detalii și angajament față de satisfacția clientului. Depășim așteptările la fiecare proiect.',
    },
    {
      icon: '◎',
      title: 'Focus pe client',
      description:
        'Fiecare soluție este adaptată nevoilor afacerii tale. Înțelegem publicul tău și livrăm produse care rezonează.',
    },
    {
      icon: '◈',
      title: 'Perspectivă distinctă',
      description:
        'Abordări inovatoare și soluții creative pentru probleme complexe. Gândim diferit pentru rezultate unice.',
    },
    {
      icon: '⚡',
      title: 'Tehnologie modernă',
      description:
        'Folosim cele mai noi tehnologii — Angular, React, Flutter, Node.js — pentru produse rapide și scalabile.',
    },
  ];
}
