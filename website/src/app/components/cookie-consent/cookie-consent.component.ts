import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  imports: [],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss',
})
export class CookieConsentComponent implements OnInit {
  visible = signal(false);

  ngOnInit(): void {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      this.visible.set(true);
    }
  }

  accept(): void {
    localStorage.setItem('cookie-consent', 'accepted');
    this.visible.set(false);
  }

  reject(): void {
    localStorage.setItem('cookie-consent', 'rejected');
    this.visible.set(false);
  }
}
