const pessoa ={
    nome: "Maik Vuolo",
    notas:[6,5,10,9,4,6],
    calcularMediaNotas: function calcularMedia(){
       const somando = this.notas.reduce(function(acc,valorAtual){
         const soma = acc + valorAtual;
         return soma; 
       },0)
       return somando / this.notas.length;
    },
    classificarDesempenho: function(){
        const media = this.calcularMediaNotas()
        if(media >= 9){
            return"desempenho excelente";
        }
        if(media >= 7.6 && media <= 8.9){
            return "Bom Desempenho";
        }
        if(media >=6 && media <= 7.5 ){
            return "Desempenho regular";
        }
        if(media < 6 ){
            return "Desempenho insuficiente";
        }
    }

    
}
// pessoa.calcularMediaNotas(pessoa.notas);
console.log(pessoa.calcularMediaNotas());
console.log(pessoa.classificarDesempenho());
