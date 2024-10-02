import { Movel } from "./Movel";

export class Sofa extends Movel {
  combinaCom(outroItem: Movel): boolean {
    if (this.estilo !== outroItem.estilo) {
      console.log(`O estilo do sofa não combina. Deseja fazer o pedido mesmo assim?`);
      return false;
    }
    return true;
  }
}
