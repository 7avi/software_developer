import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = signal(false);
  servicesOpen = signal(false);
  scrolled = signal(false);

  navLinks = [
    { label: 'Acasă', href: '#home' },
    { label: 'Despre noi', href: '#about' },
    { label: 'Servicii', href: '#services', hasDropdown: true },
    { label: 'Portofoliu', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  serviceLinks = [
    { label: 'Web Development', href: '#services' },
    { label: 'Aplicații Mobile', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Consultanță IT', href: '#services' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleServices(): void {
    this.servicesOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.servicesOpen.set(false);
  }
}
