const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (const i in notas) {
    console.log(i+') ', notas[i])
}

//Pegando os atributos de um objeto.

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64, 
}
//Percorre todos os atributos de um objeto.
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}