import { Movel } from "./Movel";

export class Cadeira extends Movel {
  combinaCom(outroItem: Movel): boolean {
    return this.estilo === outroItem.estilo;
  }
}
