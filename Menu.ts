import readlinesync, { question } from "readline-sync";
import { colors } from "./src/util/Colors";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { Eletronico } from "./src/model/Eletronico";
import { Eletrodomestico } from "./src/model/Eletrodomestico";

export function main() {
  let opcao, tipo, nome, marca, preco, id;

  const tipoContas = ["Eletronico", "Eletrodomestico"];

  const produtos: ProdutoController = new ProdutoController();

  carregarBancoDeDados(produtos);

  while (true) {
    console.log(colors.bg.black, colors.fg.whitestrong);
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                    CASAS CARIOCA                    ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Produto                        ");
    console.log("            2 - Listar todos os Produtos             ");
    console.log("            3 - Listar Produto pelo ID               ");
    console.log("            4 - Listar Produto pelo Nome             ");
    console.log("            5 - Listar Produto pela Marca            ");
    console.log("            6 - Atualizar preço do Produto           ");
    console.log("            7 - Deletar Produto                      ");
    console.log("            8 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    // console.log("                                                     ");
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");
    console.log(colors.reset);
    console.log(colors.bg.black, colors.fg.white);

    if (opcao == 8) {
      console.log("\nCASAS CARIOCA - Aqui seu dinheiro tem valor!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Produto\n\n");

        console.log("Escolha um nome: ");
        nome = readlinesync.question("");

        console.log("Escolha uma marca: ");
        marca = readlinesync.question("");

        console.log("Escolha um preço: ");
        preco = readlinesync.questionFloat("");

        console.log("Escolha um tipo: ");
        tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

        if (tipo === 1) {
          console.log("Digite a especificação técnica: ");
          let especificacaoTecninca = question("");
          produtos.cadastrar(
            new Eletronico(
              produtos.gerarID(),
              tipo,
              nome,
              marca,
              preco,
              especificacaoTecninca
            )
          );
        } else {
          console.log("Digite as características: ");
          let caracteristicas = question("");

          produtos.cadastrar(
            new Eletrodomestico(
              produtos.gerarID(),
              tipo,
              nome,
              marca,
              preco,
              caracteristicas
            )
          );
        }

        keyPress();
        break;
      case 2:
        console.log("\n\nListar todos os Produtos\n\n");

        produtos.listarTodosProdutos();

        keyPress();
        break;
      case 3:
        console.log("\n\nListar Produto pelo ID\n\n");

        console.log("Digite o ID: ");
        id = readlinesync.questionInt("");

        produtos.procurarPorID(id);

        keyPress();
        break;
      case 4:
        console.log("\n\nProcurar por nome\n\n");

        console.log("Digite o nome do produto: ");
        nome = readlinesync.question("");

        produtos.procurarPorNome(nome);

        keyPress();
        break;
      case 5:
        console.log("\n\nProcurar por marca\n\n");

        console.log("Digite a marca do produto: ");
        marca = readlinesync.question("");

        produtos.procurarPorMarca(marca);

        keyPress();
        break;
      case 6:
        console.log("\n\nAtualizar Produto\n\n");

        console.log("Digite o ID: ");
        id = readlinesync.questionInt("");

        console.log("Digite o preço a ser atualizado: ");
        preco = readlinesync.questionFloat();

        produtos.atualizar(id, preco);
        keyPress();

        break;
      case 7:
        console.log("\n\nDeletar Produto\n\n");

        console.log("Digite o ID: ");
        id = readlinesync.questionInt("");

        produtos.deletar(id);

        keyPress();
        break;

      default:
        console.log("\nOpção Inválida!\n");
        keyPress();

        break;
    }
    console.log(colors.reset);
  }
}

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Roger Cruz");
  console.log("Generation Brasil - Performance Goal Check");
  console.log("github.com/RogerVCruz");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

const carregarBancoDeDados = (produto: ProdutoController) => {
  produto.cadastrar(
    new Eletrodomestico(
      produto.gerarID(),
      2,
      "Geladeira",
      "Brastemp",
      2500,
      "Capacidade: 380 litros, Inverter"
    )
  );
  produto.cadastrar(
    new Eletrodomestico(
      produto.gerarID(),
      2,
      "Geladeira",
      "Brastemp",
      2500,
      "Capacidade: 380 litros, Inverter"
    )
  );
  produto.cadastrar(
    new Eletrodomestico(
      produto.gerarID(),
      2,
      "Máquina de Lavar",
      "Electrolux",
      1500,
      "Capacidade: 10 kg, Função de secagem"
    )
  );
  produto.cadastrar(
    new Eletrodomestico(
      produto.gerarID(),
      2,
      "Forno Elétrico",
      "Consul",
      800,
      "Capacidade: 50 litros, Timer digital"
    )
  );
  produto.cadastrar(
    new Eletrodomestico(
      produto.gerarID(),
      2,
      "Aspirador de Pó",
      "Philips",
      300,
      "Potência: 1800W, Filtro HEPA"
    )
  );
  produto.cadastrar(
    new Eletrodomestico(
      produto.gerarID(),
      2,
      "Liquidificador",
      "Oster",
      200,
      "Potência: 750W, Jarra de vidro"
    )
  );

  produto.cadastrar(
    new Eletronico(
      produto.gerarID(),
      1,
      "Smartphone",
      "Samsung",
      2500,
      'Tela 6.5", 128GB de armazenamento'
    )
  );
  produto.cadastrar(
    new Eletronico(
      produto.gerarID(),
      1,
      "Notebook",
      "Dell",
      3500,
      "Processador Intel i7, 16GB RAM, SSD 512GB"
    )
  );
  produto.cadastrar(
    new Eletronico(
      produto.gerarID(),
      1,
      "Smart TV",
      "LG",
      3000,
      '55", 4K, HDR, Smart TV WebOS'
    )
  );
  produto.cadastrar(
    new Eletronico(
      produto.gerarID(),
      1,
      "Câmera Fotográfica",
      "Canon",
      1500,
      "Sensor APS-C, 24.1MP, Gravação Full HD"
    )
  );
  produto.cadastrar(
    new Eletronico(
      produto.gerarID(),
      1,
      "Fone de Ouvido Bluetooth",
      "Sony",
      300,
      "Cancelamento de ruído, 30h de autonomia"
    )
  );
};

main();
