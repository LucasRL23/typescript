import { Injectable } from '@angular/core';
import { FabricaDeMoveis } from './fabrica-de-moveis.service';
import { Movel } from '../models/movel.model';
import { TipoMovel } from '../enums/tipo-movel.enum';
import { Estilo } from '../enums/estilo.enum';
import { Material } from '../enums/material.enum';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private moveisPedidos: Movel[] = [];

  constructor(private fabricaDeMoveis: FabricaDeMoveis) {}

  fazerPedido(
    nome: string,
    email: string,
    endereco: string,
    telefone: string,
    tipoMovel: TipoMovel,
    estilo: Estilo,
    cor: string,
    material: Material,
    tamanho: number
  ): { movel: Movel, combinacoes: { movel: Movel, combina: boolean }[] } {
    let movel: Movel;

    switch (tipoMovel) {
      case TipoMovel.Sofa:
        movel = this.fabricaDeMoveis.criarSofa(estilo, cor, material, tamanho);
        break;
      case TipoMovel.Cadeira:
        movel = this.fabricaDeMoveis.criarCadeira(estilo, cor, material, tamanho);
        break;
      case TipoMovel.MesaDeCentro:
        movel = this.fabricaDeMoveis.criarMesaDeCentro(estilo, cor, material, tamanho);
        break;
      default:
        throw new Error("Tipo de móvel desconhecido");
    }

    const combinacoes = this.verificarCombinacoes(movel);

    this.moveisPedidos.push(movel);

    console.log(
      `Pedido realizado por ${nome}!\nDescrição do pedido: ${movel.obterDescricao()}\nO pedido será entregue no endereço ${endereco}\n`
    );

    return { movel, combinacoes };
  }

  private verificarCombinacoes(novoMovel: Movel): { movel: Movel, combina: boolean }[] {
    return this.moveisPedidos.map(movelExistente => ({
      movel: movelExistente,
      combina: novoMovel.combinaCom(movelExistente) && movelExistente.combinaCom(novoMovel)
    }));
  }
}

