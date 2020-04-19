import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="h-100">
      <app-coins-carrousel></app-coins-carrousel>
      <app-toasts aria-live="polite" aria-atomic="true"></app-toasts>
      <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {}
