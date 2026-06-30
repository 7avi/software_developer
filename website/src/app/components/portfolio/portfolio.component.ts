import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    { name: 'E-Commerce Platform', category: 'Web Development', color: '#8b5cf6' },
    { name: 'Fitness App', category: 'Mobile App', color: '#6366f1' },
    { name: 'Corporate Website', category: 'Web Design', color: '#3b82f6' },
    { name: 'Dashboard Analytics', category: 'Web App', color: '#a78bfa' },
    { name: 'Delivery App', category: 'Mobile App', color: '#7c3aed' },
    { name: 'Landing Page SaaS', category: 'Web Development', color: '#4f46e5' },
  ];
}
