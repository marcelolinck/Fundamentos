class Pessoa{
    constructor(nome){
        //recebendo o valor passado
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

/*
Dessa forma como factory ele sempre irá pegar o valor do 
contexto da funcao. Pois tem ciencia do contexto que foi 
criado
*/
const criarPessoa = nome =>{
    return{
        falar: () =>console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Maria')
p2.falar()