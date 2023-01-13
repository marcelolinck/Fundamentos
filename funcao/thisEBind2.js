function pessoa(){
    this.idade = 0

    /*
    Ou pode se utilizar o self para isto recebendo o this*/
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }
    , 1000)
    /*
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }
//  Com o bind aqui, o javaScript irá fazer com que 
//  o contexto aplicado com 'this' seja em cima desta 
//  função.
        
    .bind(this)
    , 1000)*/
}

new pessoa