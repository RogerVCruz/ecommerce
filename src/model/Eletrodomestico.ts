import { Produto } from "./Produto";

export class Eletrodomestico extends Produto {
  private _caracteristicas: string;

  constructor(
    id: number,
    tipo: number,
    nome: string,
    marca: string,
    preco: number,
    caracteristicas: string
  ) {
    super(id, tipo, nome, marca, preco);
    this._caracteristicas = caracteristicas;
  }

  public get caracteristicas(): string {
    return this._caracteristicas;
  }

  public set caracteristicas(value: string) {
    this._caracteristicas = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Características do produto: ${this._caracteristicas}`);
  }
}
