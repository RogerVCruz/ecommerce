export abstract class Produto {
  private _id: number;
  private _tipo: number;
  private _nome: string;
  private _marca: string;
  private _preco: number;

  constructor(
    id: number,
    tipo: number,
    nome: string,
    marca: string,
    preco: number
  ) {
    this._id = id;
    this._tipo = tipo;
    this._nome = nome;
    this._marca = marca;
    this._preco = preco;
  }

  public get id(): number {
    return this._id;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public get nome(): string {
    return this._nome;
  }

  public get marca(): string {
    return this._marca;
  }

  public get preco(): number {
    return this._preco;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Eletrônicos";
        break;
      case 2:
        tipo = "Eletrodomésticos";
        break;
    }

    console.log("******************************************");
    console.log("Informações do Produto");
    console.log("******************************************");
    console.log(`ID do Produto: ${this._id}`);
    console.log(`Nome do Produto: ${this._nome}`);
    console.log(`Tipo do Porduto: ${this._tipo}`);
    console.log(`Marca do produto: ${this._marca}`);
    console.log(`Preço do Porduto: R$ ${this._preco.toFixed(2)}`);
  }
}
