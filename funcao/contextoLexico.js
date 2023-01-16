const valor = 'Global';

function minhaFuncao(){

    //Se não declarar, dai vai pegar do escopo global
    const valor = 'Local na Funcao'
    console.log(valor)
}

function exec(){
    /*Aqui nao vai substituir o valor devido a função ter sido carregada
    já com os valores de dentro dela. */
    const valor = 'Local'
    minhaFuncao()
}

exec()