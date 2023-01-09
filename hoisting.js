//Este conceito é devido ao icamento da variavel com valor atribuido
//Com isso mesmo ela sendo setada após ser colocado um valor, a mesma irá
//no primeiro momento ser indicada como undefined e depois irá funcioonar certinho
//Isto somente com var
console.log('a = ', a);
var a = 2; 
console.log('a = ', a);

//Com let já dá erro de execucao

console.log('b = ', b);
let b = 2; 
console.log('b = ', b);