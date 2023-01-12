let contador = 1
while(contador <= 10){
    console.log(`Contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10 ; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//Sempre utilizaremos o let para criar o indice, pois o i deve ser utilizado somente dentro do loop e não
//fora dele. Lembrando que o indice de um array sempre começa no zero
for (let i = 0; i < notas.length; i++) {
    console.log(`${i + 1}) nota = ${notas[i]}`);
    
}