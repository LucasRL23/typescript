import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FabricaDeMoveis } from './services/fabrica-de-moveis.service';
import { ClienteService } from './services/cliente.service';
import { CommonModule } from '@angular/common';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PedidoFormComponent,
  ],
  providers: [FabricaDeMoveis, ClienteService],
})
export class AppModule {}
