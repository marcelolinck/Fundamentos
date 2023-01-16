function Carro(velocidadeMaxima = 200, delta = 5){
    
    //Atributo privado para que fique disponivel somente
    //dentro da função
    let velocidadeAtual = 0;

    //Agora se precisa deixar a função publica(para acesso externo)
    //Pode se utiluzar o this em frente ao metodo
    this.acelerar =  function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }
        else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

//Pode se chamar a funcao mesmo sem os parenteses
const uno = new Carro;
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//Aqui foi com parenteses mas tbm com os parametros setados
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)