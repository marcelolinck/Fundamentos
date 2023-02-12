const pessoa = {nome: 'Joao' }
pessoa.nome = 'Pedro'
pessoa.nome = 'Adao'
//Neste caso irá funcionar devido a nao alteracao da constante, mas o dado dentro do objeto poderá ser alterado
console.log(pessoa)

//Neste caso estamos tentando alterar a constante direto e nao o objeto e por esse motivo náo irá funcionar.
//nome é um atributo
//Ana é um valor
//pessoa = {nome: 'Ana'}

//Uma vez que o objeto está congelado, o mesmo noa poderia ser alterado
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = `Rua ABC`
delete pessoa.nome
//Nao vai gerar erro mas tbm nao irá alterar mesmo se deletando
console.log(pessoa.nome)
console.log(pessoa)
//Dessa forma a variavel nao será mudada com o const na frente
//Agora com o Freeze criando o objeto também náo será mudada e nem poderá ser inserido nada
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
//Da mesma forma que acima, se coloocado o freeze, o objeto nao podera ser alterado
console.log(pessoaConstante)
