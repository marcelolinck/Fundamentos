
//Estratégia 1 para gerar valor padrão
console.log('Dessa forma dá pau')
function soma1(a,b,c){
    a = a || 1,
    b = b || 1,
    c = c || 1

    return a + b + c
}

//No caso do valor zero, ele irá entender como falso e vai 
//assumir o valor 1 e por isso vai somar 3
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//estrategia 2, 3, 4

console.log('Pode se usar, mas não é de novos recursos')
function soma2(a, b, c){
    //Primeira estratégia
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    //Estratégia mais adequada para se usar
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2( 0, 0, 1))

//Usando o valor padrao do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}
console.log('Nova versão do ES')
console.log(soma3(), soma3(3), soma3(1,2,3), soma3( 0, 0, 0))