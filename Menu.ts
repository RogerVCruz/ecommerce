import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";

export function main() {
  let opcao;

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
    console.log("            4 - Atualizar Produto                    ");
    console.log("            5 - Deletar Produto                      ");
    console.log("            6 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 6) {
      console.log("\nCASAS CARIOCA - Aqui seu dinheiro tem valor!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Produto\n\n");

        keyPress();
        break;

      case 2:
        console.log("\n\nListar todos os Produtos\n\n");

        keyPress();
        break;
      case 3:
        console.log("\n\nListar Produto pelo ID\n\n");

        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar Produto\n\n");

        keyPress();

        break;
      case 5:
        console.log("\n\nDeletar Produto\n\n");

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

/* Função com os dados da pessoa desenvolvedora */

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

main();
