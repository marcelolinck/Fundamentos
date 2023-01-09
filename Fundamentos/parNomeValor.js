
//Par nome/valor
const saudacao = 'opa';
//Como estão em contextos mais restritos, ele irá trabalhar com o valor dentro

function exec(){

    const saudacao = 'Falaaa';
    return saudacao;
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome : 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro:'Rua Muito Legal',
        numero: 1234,
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);