//Para arredondar valores para cima é dessa forma
console.log(Math.ceil(6.1));
//Para arredondar valores para baixo é dessa forma
console.log(Math.floor(10.5))

const obj1 = {}
//Dessa forma é instanciado a notação ponto que é mais enxuta
obj1.nome = 'Bola'
//Dessa forma pode ser feito também, mas não é tão clean de se ver.
obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome;
    //Pode se criar funções dentro de funcoes e executa-las chamando abaixo
    this.exec = function(){
        console.log('Exec...');
    } 
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
//Chamando a função exec através do objeto 3
obj3.exec();
