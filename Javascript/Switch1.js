function escolherBebida(opcao) {
    // Declaração da variável valor
    let valor;
    let bebida;

    // Estrutura switch para avaliar a opção escolhida
    switch(opcao) {
        case 1:
            bebida = "Café";
            valor = 3.50;
            break;
        case 2:
            bebida = "Leite";
            valor = 2.00;
            break;
        case 3:
            bebida = "Chá";
            valor = 1.50;
            break;
        default:
            console.log("Opção inválida. Por favor, escolha entre Café, Leite ou Chá.");
            return;
    }

    // Exibe a mensagem personalizada com o nome da bebida e o valor formatado
    console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
}

// Exemplo de chamadas da função com diferentes opções
escolherBebida(1); // Café
escolherBebida(2); // Leite
escolherBebida(3); // Chá
escolherBebida(4); // Opção inválida
