//Cadeia de prototipos(prototype chain)
Object.prototype.attr0 = '0'

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'C'}

//Como ele encontrou o atribulo mais proximo do filho, náo irá procurar nas cadeias mais acima.
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro={
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo:'F40',
    velMax: 324 //shadowing - conceito de uma variavel sobrepor a outra
}

const volvo ={
    modelo: 'V40',
    status(){
        //Neste ponto ele irá pegar a unformaçao da classe acima dele e 
        //não irá efetuar a sobreposicao de informacoes
        return `${this.modelo}:  ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)


volvo.aceleraMais(100)
console.log(volvo.status())


ferrari.aceleraMais(300)
console.log(ferrari.status())

volvo.aceleraMais(300)
console.log(volvo.status())