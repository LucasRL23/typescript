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

const pedido2: Cadeira = cliente2.fazerPedido(
  TipoMovel.Cadeira,
  Estilo.Vitoriano,
  "branco",
  Material.Aco,
  4,
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

console.log(pedido1.combinaCom(pedido2));
console.log(pedido1.combinaCom(pedido4));

