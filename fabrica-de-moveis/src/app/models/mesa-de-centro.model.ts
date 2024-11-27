import { Movel } from './movel.model';
import { Sofa } from './sofa.model';

export class MesaDeCentro extends Movel {
  combinaCom(outroItem: Movel): boolean {
    if (!this.combinacaoBasica(outroItem)) {
      return false;
    }

    // Regras específicas para mesa de centro
    if (outroItem instanceof Sofa) {
      return this.tamanho <= outroItem.tamanho; // Mesa deve ser menor ou igual ao sofá
    }

    return true;
  }
  override combinacaoBasica(outroItem:Movel):boolean{
    return this.estilo === outroItem.estilo;
  }
}

