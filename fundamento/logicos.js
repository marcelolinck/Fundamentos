function compras(trabalho1, trabalho2){

    //Operador de comparacao OU
    const comprarSorvete = trabalho1 || trabalho2
    //Operador de comparacao E
    const comprarTv50 = trabalho1 && trabalho2
    //bitwise xor - ou exclusivo
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) 
    const comprarTv32 = trabalho1 != trabalho2 //Dessa forma tbm trabalha com ou exclusivo
    const manterSaudavel = !comprarSorvete; //Operador Unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));