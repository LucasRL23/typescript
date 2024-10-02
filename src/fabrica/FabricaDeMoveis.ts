import { Sofa } from "../modelos/Sofa";
import { Cadeira } from "../modelos/Cadeira";
import { MesaDeCentro } from "../modelos/MesaDeCentro";
import { Estilo } from "../enums/Estilo";
import { Material } from "../enums/Material";

export class FabricaDeMoveis {
  criarSofa(
    estilo: Estilo,
    cor: string,
    material: Material,
    tamanho: number
  ): Sofa {
    return new Sofa(estilo, cor, material, tamanho);
  }

  criarCadeira(
    estilo: Estilo,
    cor: string,
    material: Material,
    tamanho: number
  ): Cadeira {
    return new Cadeira(estilo, cor, material, tamanho);
  }

  criarMesaDeCentro(
    estilo: Estilo,
    cor: string,
    material: Material,
    tamanho: number
  ): MesaDeCentro {
    return new MesaDeCentro(estilo, cor, material, tamanho);
  }
}
