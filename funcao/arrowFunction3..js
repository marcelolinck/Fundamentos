let comparaComThis = function(param){
    console.log(this ===param)
}
//Neste contexto ambos sao iguals
//Pois o this está em um contexto global
//Se for rodar no navegador, ele estará apontando oara o Window
comparaComThis(global)


//Criando um objeto e comparando ele com o this nesse escopo ele 
//var dar false

//Sem o bind ele apontar para o global
const obj= {}
//Fornando o this para trabalhar com escopoda função
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


//Como indicado com o arrowFunction fica no escopo da funcao não
//comparando com o global e por isso deu false
let comparaComThisArrow = param => console.log(this===param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


//NEste caso mesmo usando o bind, o arrowFunction irá 
//continuar com o this dentro do contexto da funcção
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

//Continua sempre com o this no contexto da função.
comparaComThisArrow(module.exports)