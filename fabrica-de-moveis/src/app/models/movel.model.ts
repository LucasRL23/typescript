import { Estilo } from '../enums/estilo.enum';
import { Material } from '../enums/material.enum';

export abstract class Movel {
  constructor(
    public estilo: Estilo,
    public cor: string,
    public material: Material,
    public tamanho: number
  ) {}

  abstract combinaCom(outroItem: Movel): boolean;

  protected combinacaoBasica(outroItem: Movel): boolean {
    // Verifica se o estilo é o mesmo
    if (this.estilo !== outroItem.estilo) {
      return false;
    }

    // Verifica se as cores são compatíveis
    if (!this.coresSaoCompativeis(this.cor, outroItem.cor)) {
      return false;
    }

    // Verifica se os materiais são compatíveis
    if (!this.materiaisSaoCompativeis(this.material, outroItem.material)) {
      return false;
    }

    return true;
  }

  private coresSaoCompativeis(cor1: string, cor2: string): boolean {
    // Implementação simplificada. Pode ser expandida com uma lógica mais complexa de combinação de cores.
    const coresCompativeis: { [key: string]: string[] } = {
      'branco': ['preto', 'bege', 'marrom', 'cinza'],
      'preto': ['branco', 'cinza', 'vermelho'],
      'bege': ['marrom', 'verde', 'azul'],
      'marrom': ['bege', 'verde', 'azul'],
      'cinza': ['branco', 'preto', 'azul'],
      'vermelho': ['preto', 'bege'],
      'verde': ['bege', 'marrom'],
      'azul': ['bege', 'marrom', 'cinza']
    };

    return cor1 === cor2 || (coresCompativeis[cor1]?.includes(cor2) || coresCompativeis[cor2]?.includes(cor1));
  }

  private materiaisSaoCompativeis(material1: Material, material2: Material): boolean {
    // Implementação simplificada. Pode ser expandida com uma lógica mais complexa de combinação de materiais.
    const materiaisCompativeis = {
      [Material.Madeira]: [Material.Madeira, Material.Veludo],
      [Material.Aco]: [Material.Aco, Material.Vidro],
      [Material.Plastico]: [Material.Plastico],
      [Material.Veludo]: [Material.Madeira, Material.Veludo],
      [Material.Vidro]: [Material.Aco, Material.Vidro]
    };

    return material1 === material2 || (materiaisCompativeis[material1]?.includes(material2) || materiaisCompativeis[material2]?.includes(material1));
  }

  obterDescricao(): string {
    return `${this.constructor.name} ${this.estilo} de cor ${this.cor}, feito de ${this.material}, tamanho ${this.tamanho}.`;
  }
}

