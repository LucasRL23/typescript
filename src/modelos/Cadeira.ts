import { Movel } from "./Movel";

export class Cadeira extends Movel {
  combinaCom(outroItem: Movel): boolean {
    if (this.estilo !== outroItem.estilo) {
      console.log(`O estilo da cadeira não combina. Deseja fazer o pedido mesmo assim?`);
      return false;
    }
    return true;
  }
}