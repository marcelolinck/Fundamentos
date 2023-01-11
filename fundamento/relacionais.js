//Somente compara o valor
console.log('01)', '1'== 1)
//Compara o valor e também o tipo
console.log('02)', '1'=== 1)
//Compara somente o valor
console.log('03)', '3'!= 3)
//Compara valor e tipo
console.log('04)', '3'!== 3)


console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0);
const d2 = new Date(0);
//Irá apresentar como false pois não pega o valor exato da data em ambos os casos
//Comparando tipo ou nao
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
//Aqui vai apresentar como true pois pega até os milisegundos juntos.
console.log('11)', d1.getTime() == d2.getTime())
//extritamente igual
console.log('12)', d1.getTime() === d2.getTime())

console.log('13)', undefined == null)
console.log('13)', undefined === null)