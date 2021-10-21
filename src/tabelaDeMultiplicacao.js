function Tabuada(numero) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    // meuArray[0][1]
    let x = []; // <-----
    for (let counter1 = 0; counter1 <= numero; counter1++) {
        x[counter1] = [] ;
         for (let counter2 = 0; counter2 <= numero; counter2++){
            x[counter1][counter2] = counter1 * counter2; // <-----
         }
    }
    console.table(x)
}
console.log(Tabuada(10))