let num1 = 1
let num2 = 2
//acrescenta o valor de 1 unidade
num1++
console.log(num1)
//diminui o valor de 1 unidade e dessa forma tem prioridade pois o -- está antes da variavel
--num1
console.log(num1)
//Vai dar verdadeiro pois incrementou o num1 antes da comparacao e decrementou depois da comparacao 
console.log(++num1 === num2--)
//Depois das alterações, esta expressão vai dar falso
console.log(num1 === num2)