//Array de uma posicao
const [a] = [10];
console.log(a);

//Irá imprimir os valores mas a partir do n5 irá apresentar como undefined ou com o valor nulo 0
const [n1, ,n3, , n5, n6 = 0] = [10,7,9,8];
console.log(n1, n3,n5, n6);

//Não há logica em fazer isso, mas pode se fazer essa desestruturação também.
const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota);

