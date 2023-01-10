function tratarErroELancar(erro){
    //Dessa forma pode se lançar uma mensagem de erro
    //throw new Error('...')

    //Dessa forma pode se informar um código de erro
    //throw 10
    
    //Pode passar um bollean como mensagem
    //throw true

    //throw 'Mensagem indicando o erro';

    //Lancando um objeto
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date,
    }
}

function imprimirNomeMaiusculo(obj){
    //Normalmente utilizado onde pode possivel erro para o usuário e 
    //nos possibilitando tratar esse erro de uma forma elegante.
    try {
        console.log(obj.name.toUpperCase() + '!!!')
        
    } catch (e) {
        tratarErroELancar(e)
    }
    //Este bloco será executado sempre que finalizar o código, dando certo ou não
    finally{
        console.log('Finalizado o evento');
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeMaiusculo(obj)