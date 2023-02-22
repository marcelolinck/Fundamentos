/**
 * Somente para exemplificar que este objeto é uma coleção de chave e valor
 */
const pessoa = {
    nome: `Rebeca`,
    idade: 2,
    peso: 13
}

//Neste caso ira pegar todas as chaves da variavel acima
console.log(Object.keys(pessoa))
//Aqui irá listar todos os valores do objeto
console.log(Object.values(pessoa))
//Irá listar todos os arrays que contenham dentro da variavel com a chave e valor
console.log(Object.entries(pessoa))

//Usando um foreach com template string
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log(`########`)
//Usando um operador destructuring setando uma chave e valor para isto
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Permite inserir uma nova chave mas com propriedades exclusivas desta chave
Object.defineProperty(pessoa, 'dataNascimento',{
    //No momento que for indicado para listar o Object.keys, ele irá ou não ser listado?
    enumerable: true,
    //Essa propriedade poderá ser modificada? Ele vai funcionar tipo o frease pois irá congelar a varialve e não o objeto inteiro
    writable: false,
    value: '14/02/2023'

})

pessoa.dataNascimento = '01/01/2023'
console.log(pessoa.dataNascimento) 

console.log(Object.keys(pessoa))

//A partir do ES2015
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//Aqui irá concatenar os objetos colocados dentro da variavel, 
//mas também irá considerar somente o ultimo valor indicado.
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
//Nao irá mudar devido a ter sido dado um freeze acima.
obj.c = 1234
console.log(obj)