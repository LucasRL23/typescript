import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { TipoMovel } from '../../enums/tipo-movel.enum';
import { Estilo } from '../../enums/estilo.enum';
import { Material } from '../../enums/material.enum';
import { Movel } from '../../models/movel.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedido-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent {
  nome: string = '';
  email: string = '';
  endereco: string = '';
  telefone: string = '';
  tipoMovel: TipoMovel = TipoMovel.Sofa;
  estilo: Estilo = Estilo.Moderno;
  cor: string = '';
  material: Material = Material.Madeira;
  tamanho: number = 1;

  tiposMoveis = Object.values(TipoMovel);
  estilos = Object.values(Estilo);
  materiais = Object.values(Material);

  resultadoPedido: string = '';
  combinacoes: { movel: Movel, combina: boolean }[] = [];

  constructor(private clienteService: ClienteService) {}

  fazerPedido() {
    const resultado = this.clienteService.fazerPedido(
      this.nome,
      this.email,
      this.endereco,
      this.telefone,
      this.tipoMovel,
      this.estilo,
      this.cor,
      this.material,
      this.tamanho
    );

    this.resultadoPedido = `Pedido realizado com sucesso!\n${resultado.movel.obterDescricao()}`;
    this.combinacoes = resultado.combinacoes;
  }
}

