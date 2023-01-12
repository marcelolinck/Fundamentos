//Função em JS é First-Class Object (Citizens)
//Higher-order function

//Criar de forma literal
function fun1(){ }

//Armazenar em uma variavel
const fun2 = function(){ }

//Armazenar em um array

const array = [
/* Posicao 0*/ function(a,b){return a + b}, 
/* Posicao 1*/ function(a,b){return a - b}, 
/* Posicao 2*/ fun1, 
/* Posicao 3*/ fun2 ]
/*
Como a função é um array, e setamos a posição 0 do array
o mesmo irá puxar a função
*/
console.log(array[1](2,3))

//Armazenar em um atributo de objetoo

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passar função como param
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

//Uma função pode retornar / conter uma função

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
//Ou dessa forma
const cincoMais = soma(2,3)
cincoMais(10)