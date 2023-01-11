function teste1(num){
    
    if(num >7){
    //Sem as chaves para delimitar a sentença de código, será executado tudo como um bloco somente
    //Ideal é colocar as chaves
        console.log(num)
    }
    console.log('final') 
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7)
        ;   //Cuidado com o ponto e virgula no final do codigo, poi será 
            //interpretado como uma sentença   
    {
        console.log(num)
    }
}

teste2(5);
teste2(9);