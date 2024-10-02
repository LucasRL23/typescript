import { Movel } from "./Movel";

export class Sofa extends Movel {
  combinaCom(outroItem: Movel): boolean {
    return this.estilo === outroItem.estilo;
  }
}
