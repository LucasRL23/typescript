import { Injectable } from '@angular/core';
import { Sofa } from '../models/sofa.model';
import { Cadeira } from '../models/cadeira.model';
import { MesaDeCentro } from '../models/mesa-de-centro.model';
import { Estilo } from '../enums/estilo.enum';
import { Material } from '../enums/material.enum';

@Injectable({
  providedIn: 'root'
})
export class FabricaDeMoveis {
  criarSofa(estilo: Estilo, cor: string, material: Material, tamanho: number): Sofa {
    return new Sofa(estilo, cor, material, tamanho);
  }

  criarCadeira(estilo: Estilo, cor: string, material: Material, tamanho: number): Cadeira {
    return new Cadeira(estilo, cor, material, tamanho);
  }

  criarMesaDeCentro(estilo: Estilo, cor: string, material: Material, tamanho: number): MesaDeCentro {
    return new MesaDeCentro(estilo, cor, material, tamanho);
  }
}

