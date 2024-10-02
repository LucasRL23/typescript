import { Estilo } from "../enums/Estilo";
import { Material } from "../enums/Material";

export abstract class Movel {
  estilo: Estilo;
  cor: string;
  material: Material;
  tamanho: number;

  constructor(
    estilo: Estilo,
    cor: string,
    material: Material,
    tamanho: number
  ) {
    this.estilo = estilo;
    this.cor = cor;
    this.material = material;
    this.tamanho = tamanho;
  }

  abstract combinaCom(outroItem: Movel): boolean;

  obterDescricao(): string {
    return `${this.constructor.name} ${this.estilo} de cor ${this.cor}, feito de ${this.material}, tamanho ${this.tamanho}.`;
  }
}
