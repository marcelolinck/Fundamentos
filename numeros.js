const peso1 = 1.0;

const peso2 = Number('2.0');


console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));


const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

//funcao tofixed serve para mostrar no maxino X quantidade de casas decimanis a arredondando o valor. Neste caso é o valor de 2 numero após o ponto. Ele retorna o valor mas nõa modifica 
//o valor;
console.log(media.toFixed(2));

//Neste caso transforma o valor da String para a base 2 ou seja, base binária.
console.log(media.toString(2));

console.log(typeof media);


