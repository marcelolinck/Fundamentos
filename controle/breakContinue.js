const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (x in nums) {
  if (x == 5) {

//Utiizando o break, a repetição irá ser interrompida

    break;
  }
  console.log(`${x} = ${nums[x]}`);
}



for (y in nums) {
  if (y == 5) {
//Neste caso ele pulará o indice 5 e vai continuar a partir do 
//indice 6
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
}
/*
Colocando rótulo para que o break funcione com mais de
estrutura de repeticao dentro da outra.

Neste caso a recomendação é utilizar pequenos metodos para 
que não se utilize este tipo de código
*/
externo:
for (a in nums) {
    for (b in nums) {
        
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
console.log('Fim!')

