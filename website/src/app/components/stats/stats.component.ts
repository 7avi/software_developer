import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  stats = [
    { value: '5+', label: 'Ani de experiență' },
    { value: '30+', label: 'Proiecte livrate' },
    { value: '100%', label: 'Clienți mulțumiți' },
    { value: '24/7', label: 'Suport dedicat' },
  ];
}
