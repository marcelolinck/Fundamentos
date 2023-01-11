function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

soBoaNoticia(9.0);
soBoaNoticia(5.0);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade..." + valor);
  }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?')

//ArrayVazio
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,2]);
//Um objeto vazio
seForVerdadeEuFalo({})
