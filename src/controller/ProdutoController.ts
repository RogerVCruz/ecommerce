import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produto> = new Array<Produto>();

  public numero: number = 0;

  procurarPorID(id: number): void {
    let buscaProduto = this.buscarNoArray(id);

    if (buscaProduto) {
      buscaProduto.visualizar();
    } else {
      console.log("\nProduto não foi encontrado!");
    }
  }

  listarTodosProdutos(): void {
    for (const produto of this.listaProdutos) {
      produto.visualizar();
    }
  }

  cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("Produto foi cadastrado com sucesso!");
  }

  atualizar(produto: Produto): void {
    let buscaProduto = this.buscarNoArray(produto.id);

    if (buscaProduto) {
      let index = this.listaProdutos.indexOf(buscaProduto);

      this.listaProdutos[index] = produto;
      console.log("Produto atualizada com sucesso!");
    } else {
      console.log("\nA Produto não foi encontrado!");
    }
  }

  deletar(numero: number): void {
    let buscaProduto = this.buscarNoArray(numero);

    if (buscaProduto) {
      let index = this.listaProdutos.indexOf(buscaProduto);

      this.listaProdutos.splice(index, 1);
      console.log("Produto excluído com sucesso!");
    } else {
      console.log("\nA Produto não foi encontrado!");
    }
  }

  procurarPorNome(nome: string): void {
    let buscaPorNome = this.listaProdutos.filter((c) => c.nome.includes(nome));

    if (buscaPorNome) {
      buscaPorNome.forEach((produto) => produto.visualizar());
    } else {
      console.log("Produto não encontrado!");
    }
  }
  procurarPorMarca(marca: string): void {
    let buscaPorMarca = this.listaProdutos.filter((c) =>
      c.marca.includes(marca)
    );

    if (buscaPorMarca) {
      buscaPorMarca.forEach((produto) => produto.visualizar());
    } else {
      console.log("Produto não encontrado!");
    }
  }

  public gerarID(): number {
    return ++this.numero;
  }

  public buscarNoArray(id: number): Produto | null {
    for (const produto of this.listaProdutos) {
      if (produto.id === id) return produto;
    }
    return null;
  }
}
