import { Cliente } from "./clientes/Cliente";
import { FabricaDeMoveis } from "./fabrica/FabricaDeMoveis";
import { TipoMovel } from "./enums/TipoMovel";
import { Estilo } from "./enums/Estilo";
import { Material } from "./enums/Material";
import { Sofa } from "./modelos/Sofa";
import { Cadeira } from "./modelos/Cadeira";
import { MesaDeCentro } from "./modelos/MesaDeCentro";

const cliente1 = new Cliente(
  "Carlos Mendes",
  "carlos.mendes@email.com",
  "Rua dos Pinheiros, 456",
  "11 98888-7777"
);

const cliente2 = new Cliente(
  "Ana Souza",
  "ana.souza@email.com",
  "Avenida Central, 789",
  "11 97777-6666"
);

const fabrica = new FabricaDeMoveis();

const pedido1: Sofa = cliente1.fazerPedido(
  TipoMovel.Sofa,
  Estilo.Moderno,
  "cinza",
  Material.Veludo,
  2,
  fabrica
);

const pedido2: Sofa = cliente1.fazerPedido(
  TipoMovel.Sofa,
  Estilo.Moderno,
  "cinza",
  Material.Veludo,
  2,
  fabrica
);

const pedido3: MesaDeCentro = cliente1.fazerPedido(
  TipoMovel.MesaDeCentro,
  Estilo.Moderno,
  "marrom",
  Material.Madeira,
  3,
  fabrica
);

const pedido4: Cadeira = cliente2.fazerPedido(
  TipoMovel.Cadeira,
  Estilo.ArtDeco,
  "bege",
  Material.Plastico,
  2,
  fabrica
);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function verificarEscolha() {
  rl.question("Pedido nao combina quer prosseguir? digite 1 para sim e 2 para nao: ", (escolha: string) => {
    if (escolha === '1') {
      console.log("Ok pedido feito");
    } else if (escolha === '2') {
      console.log("Ok pedido cancelado");
    } else {
      console.log("Entrada inválida. Digite 1 ou 2.");
    }

    rl.close();
  });
}
console.log(pedido1.combinaCom(pedido2));
if (pedido1.combinaCom(pedido2)) {
  console.log("pedido combina");
} else {
  verificarEscolha();
}

if (pedido1.combinaCom(pedido4)) {
  console.log("pedido combina");
} else {
  verificarEscolha();
}

