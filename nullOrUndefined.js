const a = {name: 'teste'};
console.log(a);

const b = a;

console.log(b);

b.name = 'Aham';


//Como ambos estão usando o mesmo enderecamento na memoria, ao alterar o B, o A tbm será alterado
//Isto  é chamado por atribuição por referencia
console.log(a);
console.log(b);

/*
Como foi utilizado um valor primitivo, o javaScript efetua uma copia do valor de C para D, neste caso
ao alterar o valor de D náo irá alterar o valor de C
*/
let c = 3;
let d = c;
//Dessa forma será incrementado o valor de D
d++
console.log(d);
console.log(c);


let valor; //Variavel náo inicializada

console.log(valor);

valor = null; //ausencia de valor. Sempre será utilizado o null para zerar um valor de variavel.
console.log(valor);
console.log(valor,toString()); //Informará um erro pois o valor é nulo

const produto = {}
console.log(produto.preco) //Nao há uma propriedade de preco dentro de produto, mas sim um produto vazio
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //Evite utilizar o undefined.  Somente deixar para a linguagem essa opçao dai utilizaremos somente o null.

console.log(!!produto.preco);//Neste ponto irá converter para um valor boolean true or false

//delete produto.preco
console.log(produto);

produto.preco = null; //Irá colocar o valor sem preco.
console.log(!!produto.preco);

console.log(produto);