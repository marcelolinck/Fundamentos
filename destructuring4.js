function rand([min = 0, max = 1000]){
   //Se esta condição for verdade, com o destructuring irá trocar os valores de lugar
    if(min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min;
    //Arredondamento do valor para baixo
    return Math.floor(valor);
}
//Aqui não precisa indicar o nome do atributo, basta passar o valor.
console.log(rand([50,40]))
//Irá considerar que estamos passando o primeiro valor, no caso valor minimo
console.log(rand([992]))
//Está considerando o minimo como zero(0)
console.log(rand([,10]))
//Está considerando os valores default como está setado na função entre 0 e 1000
console.log(rand([]))

//Aqui vai dar erro pq é um objeto nulo
//console.log(rand())