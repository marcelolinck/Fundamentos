const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
//Neste caso ele irá dar um erro ao executar o código devido a 
//não conseguir localizar o this no contexto.
const falar = pessoa.falar
falar()
/*
O Bind é o metodo responsavel por amarrar um determinado dono
de um objeto assim que ele for chamado.
*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


/*
Podemos verificar que o this não foi alterado e sim somente alterado
para aquele contexto acima
*/ 
const falar2 = pessoa.falar
falar2()