//Um objeto sempre terá uma chave e valor dentro dele

const prod1 ={};

//definindo atributos 

//chave             valor
prod1.nome = 'Celuar Ultra Mega';

prod1.preco = '4998.90';
//Evitar atributos com espaço mas mesmo assim pode usar dessa forma.
prod1['Desconto Legal'] = 0.40;

console.log(prod1);

//criando a relacao de chave e valor diretamente no objeto conforme abaixo

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,

}

console.log(prod2);

//Muito importante destacar que objeto não é json, json é somente um formato textual de dados
