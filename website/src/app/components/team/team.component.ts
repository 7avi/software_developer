import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  members = [
    { name: 'Tavi Szabo', role: 'Full-Stack Developer & Founder', initials: 'TS' },
    { name: 'Echipa DevCraft', role: 'Design & Mobile Specialists', initials: 'DC' },
  ];
}
