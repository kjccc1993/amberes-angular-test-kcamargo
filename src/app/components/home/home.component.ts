import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
  table = Array(9)
    .fill(1)
    .map((e, i) => ({
      type: 'ENVIO DE FONDOS',
      amount: '5.058.00',
      status:
        i % 2 == 0 ? 'PENDIENTE' : i % 3 == 0 ? 'RECHAZADA' : 'CONFIRMADA',
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
      class: i % 2 == 0 ? 'warning' : i % 3 == 0 ? 'danger' : 'success',
    }));
}
