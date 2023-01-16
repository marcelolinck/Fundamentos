function getPreco(imposto = 0, moeda = 'R$'){
    return  `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    //inserindo o get preco aqui, a constante 
    //busca a função e seus parametros
    getPreco,
}

//Para nao dar erro, colocaremos o valor em cima do escopo global

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.17, '$'))
/**
 * No caso do apply, os parametros passados devem ser colocados 
 * dentro de um array conforme abaixo
*/
console.log(getPreco.apply(carro, [0.17, '$']))

console.log(getPreco.apply(globalThis, [0.17, '$']))