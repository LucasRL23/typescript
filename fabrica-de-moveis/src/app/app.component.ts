import { Component } from '@angular/core';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PedidoFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fabrica-de-moveis';
}
