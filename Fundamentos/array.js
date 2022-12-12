
//Criando um array com quatro posicoes, iniciando em 0 e terminando em 3
const valores = [7.7, 8.9, 6.3, 9.2];

//Exibindo os valores do array na posição 0 e na posição 3
console.log(valores[0], valores[3]);

//Neste momento irá apresentar como indefinido, pois não há essa posição 4 no array
console.log(valores[4]);

//Neste momento estamos adicionando um elememto no arrau na posicao 8, mas irá indicar que entre posições está vazia.
valores[8] = 10;
console.log(valores);

//Neste caso irá indicar o tamanho do array
console.log(valores.length);

//Adiciona valores no array atual com o PUSH
valores.push({id:3}, false, null, 'teste');
console.log(valores);

//Com a função pop, pode se tirar o ultimo valor do array conforme abaixo
console.log(valores.pop());

//Outra forma de excluir um elemento é via delete
delete valores[0];
console.log(valores);

//Em javascript um array é tratado como objeto.
console.log(typeof valores)