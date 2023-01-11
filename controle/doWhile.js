function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opção = -1;

//A unica expressao de controle que o teste vai depois

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
    
} while (opcao != -1)

console.log('Até a próxima!')