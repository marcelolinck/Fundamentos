const nome = 'Rebeca';

const concatecao ='Olá ' + nome + '!';
//aqui utilizando a crase para montar o template string em uma forma elegante de código
const template = `
    Olá
    ${nome}!`;

console.log(concatecao, template);

//Irá executar somente a operação que está dentro das chaves
console.log(`1 + 1 = ${ 1 + 1}`);

//somente uma funcão para deixar os caracteres todos em caixa alta
const up = texto => texto.toUpperCase();


// Chamando a função em caixa alta com o template String
console.log(`Ei...${up('cuidado')}!`);