import { Produto } from "./Produto";

export class Eletronico extends Produto {
  private _especificacaoTecnica: string;

  constructor(
    id: number,
    tipo: number,
    nome: string,
    marca: string,
    preco: number,
    especificacaoTecnica: string
  ) {
    super(id, tipo, nome, marca, preco);
    this._especificacaoTecnica = especificacaoTecnica;
  }

  public get especificacaoTecnica(): string {
    return this._especificacaoTecnica;
  }

  public set especificacaoTecnica(value: string) {
    this._especificacaoTecnica = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(
      `Especificação técnica do produto: ${this._especificacaoTecnica}`
    );
  }
}
