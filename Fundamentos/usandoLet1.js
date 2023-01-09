//var numero = 1;
let numero = 1;
{
    //Como uma variavel é var e outra é let, primeiro vai considerar o valor de dentro do bloco e depois o de fora
    //Se ambas forem let, irá ficar com a mesma regra
    let numero = 2;
    console.log('Dentro = ', numero);
}

console.log('Fora = ', numero);