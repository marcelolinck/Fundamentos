const pessoa = {nome: 'Joao' }
pessoa.nome = 'Pedro'
//Neste caso irá funcionar devido a nao alteracao da constante, mas o dado dentro do objeto poderá ser alterado
console.log(pessoa)

//Neste caso estamos tentando alterar a constante direto e nao o objeto e por esse motivo náo irá funcionar.
//pessoa = {nome: 'Ana'}

//Uma vez que o objeto está congelado, o mesmo noa poderia ser alterado
Object.freeze(pessoa)

pessoa.nome = 'Maria'
//Nao vai gerar erro mas tbm nao irá alterar mesmo se deletando
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
//Da mesma forma que acima, se coloocado o freeze, o objeto nao podera ser alterado
console.log(pessoaConstante)
