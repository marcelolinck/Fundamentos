const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
//A partir do ES2015 pode se escrever dessa forma em que o atributo fica com o mesmo nome de uma variavel
const obj2 = {a,b,c}
console.log(obj1, obj2)

const nomeAttr = `nota`
const valorAttr = 7.87

const obj3 = {}

/*Como se fosse
obj3[nota] = 7.87
*/
obj3[nomeAttr] = valorAttr
console.log(obj3)

/**
 * Consigo criar também dessa forma
 */
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


const obj5 = {
    funcao1: function(){
        console.log(`Forma antiga de chamar uma funcao`)
    },

    //Forma reduzida de criar uma função
    funcao2(){
        console.log(`Nova Forma criar uma funcao`)
    }
}
console.log(obj5.funcao1(), obj5.funcao2())