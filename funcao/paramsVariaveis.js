function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
//Como todos os valores sao numeros, os mesmos serão somados
console.log(soma(1.1, 2.2, 3.3))


//Neste caso irá somar os dois numeros e concatenar com a string
console.log(soma(1.1, 2.2, "Teste"))
//Irá concatenar todas as string e inclusive vai concatenar com o zero iniciado
console.log(soma('a', 'b', 'c'))
