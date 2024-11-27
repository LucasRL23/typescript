import { Movel } from './movel.model';
import { MesaDeCentro } from './mesa-de-centro.model';

export class Cadeira extends Movel {
  combinaCom(outroItem: Movel): boolean {
    if (!this.combinacaoBasica(outroItem)) {
      return false;
    }

    // Regras específicas para cadeira
    if (outroItem instanceof Cadeira) {
      return this.tamanho === outroItem.tamanho; // Cadeiras devem ter o mesmo tamanho
    }

    if (outroItem instanceof MesaDeCentro) {
      return this.tamanho <= outroItem.tamanho; // Cadeira deve ser menor ou igual à mesa
    }

    return true;
  }
  override combinacaoBasica(outroItem:Movel):boolean{
    return this.estilo === outroItem.estilo;
  }
}

