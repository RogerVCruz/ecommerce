import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  // Métodos do CRUD
  procurarPorID(id: number): void;
  listarTodosProdutos(): void;
  cadastrar(produto: Produto): void;
  atualizar(id: number, preco: number): void;
  deletar(numero: number): void;
  procurarPorNome(nome: string): void;
  procurarPorMarca(marca: string): void;
}
