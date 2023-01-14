let dobro = function(a){
    return 2 * a
}
//A mesma coisa mas com arrowFunction
dobro = (a) =>{
    return 2 * a
}
//Como função reduzida de uma linha somente
dobro = a => 2 * a //O Return fica implicito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

//refatorando a função sem parametros
const ola2 = ()=> 'olá2'

//refatorando a função com somente um parametro pode se deixar dessa forma
const ola3 = _ =>'olá3'
console.log(ola(), ola2(), ola3())