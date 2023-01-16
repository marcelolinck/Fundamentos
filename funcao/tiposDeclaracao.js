/*
Com a function declaration, pode-se
chamar a função mesmo tendo declarado depois da solicitaão de
execução.
*/
console.log('Somando antes de declarar a função')
console.log(soma(3,4))
//function declaration
function soma(x,y){
    return x + y 
}
/*Agora se executar via function expression ou named function
expression, irá apresentar erro
na execução pois a funcao não foi definida, mas dai é só
executar a funcao depois */


//function expression
const sub = function(x, y){
    return x -y
}
console.log(sub(3,4))


//named function expression
const mult = function mult(x,y){
    return x * y
}
console.log(mult(5,6))