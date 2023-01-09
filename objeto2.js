//Neste caso irá iniciar como uma função.
console.log(typeof Object);

//Neste caso ele está sendo iniciado como objeto e por
//Este motivo aparecerá como object com ou sem os parenteses
console.log(typeof new Object());

const Cliente = function(){};
console.log(typeof Cliente);

//Irá chamar como um objeto
console.log(typeof new Cliente);

//Aqui iniciaremos como classe mas o JavaScript trata isto como
//uma função
class Produto{};
console.log(typeof Produto);

//Criando o objeto da mesma forma que o cliente.
console.log(typeof new Produto())