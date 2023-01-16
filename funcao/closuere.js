//Closure é o escopo criado quando uma função é declarada
//Este escopo permite a função acessar e manupular variaveis externas a função


//Contexto léxico em ação!

const x = 'Global';

function fora(){
    /*
        Neste conexto irá receber o valor da variavel mais 
        próxima do contexto da função. Por isso o valor Global 
        foi substituido pelo
        valor Local. 
    */
   const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())