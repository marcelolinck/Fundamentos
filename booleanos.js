let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;
// Nessa situcacao o valor isAtivo é considerado como boolean. Como começou com 1 e negando esse valor com a exclamação
console.log(!isAtivo);
// Ele irá indicar o valor false. Agora se colocar !! duas exclamaçoes ele irá retornar como true
console.log(!!isAtivo);

console.log("Eventos verdadeiros");

console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!(isAtivo = Infinity));

console.log("Eventos falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar...");
//Operador OU
console.log(!!' '|| null || 0 || ' ');
console.log(!!(' '|| null || 0 || ' '));

//Se tiver valor ele informa o valor, caso contrário apresenta o resultado default
let nome = '';
console.log(nome ||'Desconhecido');


nome = 'Marcelo';
console.log(nome ||'Desconhecido');




