const fabricantes = ["Mercedes","Audi","Ford"]

function imprimir(nome, indice){
    console.log (`${indice +1}. ${nome}`)
}


fabricantes.forEach(imprimir)


/*Irá imprimir o primeiro parametro do array fabricantes */
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
/*Com ArrowFunction */
fabricantes.forEach(fabricante => console.log(fabricante))