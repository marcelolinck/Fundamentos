const sequencia ={
    /**É uma convenção onde o underline representa que a variavel é privada
     * só que JavaScript náo consegue deixar a variavel escondida.
    */
    _valor: 1,  
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this.valor){
            this._valor = valor
        }
    }
}
/**
 * Inicialmente a variavel recebe o valor de 1 e como foi rodado duas vezes, ele irá incrementar os valores de acordo com a execução
 */
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)