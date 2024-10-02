import { FabricaDeMoveis } from "../fabrica/FabricaDeMoveis";
import { Movel } from "../modelos/Movel";
import { TipoMovel } from "../enums/TipoMovel";
import { Estilo } from "../enums/Estilo";
import { Material } from "../enums/Material";

export class Cliente {
  nome: string;
  email: string;
  endereco: string;
  telefone: string;

  constructor(nome: string, email: string, endereco: string, telefone: string) {
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
    this.telefone = telefone;
  }

  fazerPedido(
    tipoMovel: TipoMovel,
    estilo: Estilo,
    cor: string,
    material: Material,
    tamanho: number,
    fabrica: FabricaDeMoveis
  ): Movel {
    let movel: Movel;

    switch (tipoMovel) {
      case TipoMovel.Sofa:
        movel = fabrica.criarSofa(estilo, cor, material, tamanho);
        break;
      case TipoMovel.Cadeira:
        movel = fabrica.criarCadeira(estilo, cor, material, tamanho);
        break;
      case TipoMovel.MesaDeCentro:
        movel = fabrica.criarMesaDeCentro(estilo, cor, material, tamanho);
        break;
      default:
        throw new Error("Movel invalido");
    }

    console.log(
      `Pedido realizado por ${this.nome}!\nDescirção do pedido: ${movel.obterDescricao()}\nO pedido será entregue no endereço ${this.endereco}\n`
    );
    return movel;
  }
}
