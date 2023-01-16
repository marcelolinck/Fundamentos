//Factory function
//Esta função sempre retornará um objeto
//Pois ela tem a função de criar um novo objeto
//na chamada da função
function criarPessoa(){
    return {
        nome: 'Marcelo',
        sobrenome: 'Alves'
    }
}

console.log(criarPessoa())