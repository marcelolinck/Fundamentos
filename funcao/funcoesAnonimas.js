const soma = function(x,y){
    return x + y;
}

const imprimirResultado = function(a, b , operacao = soma){
    console.log(operacao(a, b))
}

//Dessa forma está pegando a função default conforme setado acima.
imprimirResultado(3,4)

//Neste caso está passando o valor de soma como parametro
imprimirResultado(3,5, soma)

/*Aqui está sendo passada a função no qual deve ser feita a operação */
imprimirResultado(7, 5, function(x, y) {
    return x - y
})

/*Passando como Arrow Function*/
imprimirResultado(3, 4, (x, y)=> x*y)

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar();

/*Ou via funcao anonima reduzida */
const pessoas = {
    pensar(){
        console.log('Pensando')
    }
}
pessoas.pensar()

