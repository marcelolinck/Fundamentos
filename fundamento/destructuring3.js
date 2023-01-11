function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min)+ min;
    return Math.floor(valor);
}
//Dessa forma irá pegar os valores indicados abaixo
const obj = {max: 50, min: 10}
console.log(rand(obj));
console.log(rand)

//NEste exemplo irá pegar o valor que está setado somente no minimo
//E como default pegará o valor de 1000 como maximo
console.log(rand({min: 955}))

//Com um objeto vazio irá pegar os valores default
console.log(rand({}))
//Se passar a função vazia, irá dar erro, pois não tem o objeto setado
console.log(rand())