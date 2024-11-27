import { Movel } from './movel.model';

export class Sofa extends Movel {
  combinaCom(outroItem: Movel): boolean {
    if (!this.combinacaoBasica(outroItem)) {
      return false;
    }

    // Regras específicas para sofá
    if (outroItem instanceof Sofa) {
      return false; // Não combina dois sofás
    }

    return true;
  }
}

