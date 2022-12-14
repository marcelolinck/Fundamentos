{
  {
    {
      {
        //Uma variavel em var ela terá a visibilidade fora do bloco tbm
        var sera = "Será???";
        console.log(sera);
      }
    }
  }
}
console.log(sera);

/*
Quando se cria uma variavel fora de uma funcao, ela ficará disponivel para acesso de qualquer lugar da Window.
Windows* se refere a um componente global na aplicacao
*/ 

function teste(){
    var local = 123
    console.log(local)
}

teste()
//Neste caso náo irá funcionar devido a 
//console.log(local)

/*
se cria uma variavel var global ou somente dentro de um escopo de função
*/


