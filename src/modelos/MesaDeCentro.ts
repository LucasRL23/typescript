import { Movel } from "./Movel";

export class MesaDeCentro extends Movel {
  combinaCom(outroItem: Movel): boolean {
    return this.estilo === outroItem.estilo;
  }
}
