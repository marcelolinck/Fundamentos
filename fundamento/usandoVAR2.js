var  numero = 1;

{
    var numero = 2;
    console.log('dentro = ', numero); 
}
//Ira sobrescrever o valor de 1 para 2 mesmo estando dentro do bloco
console.log('fora = ', numero);