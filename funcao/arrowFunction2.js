//this com arrowFunction irá fixar de forma que o mesmo 
//não mude de forma nenhuma

class Pessoa {
  constructor() {
    this.idade = 0;
    setInterval(() => {
      this.idade++;
      console.log(this.idade);
    }, 1000);
  }
}

new Pessoa();
