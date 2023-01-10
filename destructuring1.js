//Novo recurso do ES 2015
const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

//Neste caso ele está desestruturando os dados dentro do objeto
//pessoa os atributos nome e idade;

const {nome, idade} = pessoa;
console.log(nome, idade);

//Dessa forma é atribuido um novo nome ao atributo extraido
const {nome: n, idade: i} = pessoa;
//Aqui é chamado o atributo mas através de seu novo rótulo
console.log(n, i);

//Dessa forma podemos setar um valor default para que não quebre a 
//aplicação em caso de erro no segundo objeto
const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);


//Aqui poderemos extrair os atributos dentro de outro atributo
const {endereco:{logradouro, numero, cep}} = pessoa;
//Como não existeo cep, irá retornar undefined
console.log(logradouro, numero, cep);
//Neste caso irá dar erro direto pois o objeto não existe
const {conta: {ag, num}} = pessoa;
console.log(ag,num)