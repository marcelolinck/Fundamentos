//Funcao sem retorno

function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
//nesse caso vai retornar indefinido
imprimirSoma(2)

//Vai considerar somente os dois primeiros numeros
imprimirSoma(2,10,4,2,12,15)


//Funcao irá retornar um valor
//Definodo o valor padrao 0
function soma(a, b=0){
    return a + b;
}

console.log(soma(2,4))
console.log(soma(2))

console.log(soma())

