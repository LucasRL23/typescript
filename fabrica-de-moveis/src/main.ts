import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FabricaDeMoveis } from './app/services/fabrica-de-moveis.service';
import { ClienteService } from './app/services/cliente.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    FabricaDeMoveis,
    ClienteService
  ]
}).catch(err => console.error(err));
