const escola = "Cod3r";
//Nesse caso irá retornar o valor da posicao/indice 4
console.log(escola.charAt(4))
//Neste caso não irá retornar o valor, mas tbm não irá apresentar erro.
console.log(escola.charAt(5))
//Dessa forma irá apresentar o valor em ASCII
console.log(escola.charCodeAt(3))

//NEste caso irá retornar a posicao em que o valor indicado('3') está na string
console.log(escola.indexOf('3'));

//Irá considerar a string a partir do indice 1
console.log(escola.substring(1));

//Aqui vai do indice 0 até o indice 3 mas não irá incluir o indice 3
console.log(escola.substring(0, 3));

//Para concatenar valores 
console.log('Escola '.concat(escola).concat("!"));

//Neste caso é para substituir caracteres com o replace onde toda a vez que achar o caractere irá substituir por outro
console.log(escola.replace(3, 'e'));

//A funcão faz com  que uma string separadas por qualquer separador sejam transformadas em um array
console.log('Ana,Maria,Pedro'.split(','));
