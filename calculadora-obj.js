const calculadora ={
    soma: function(valor1,valor2){let valor = valor1 +valor2
                                    return `A soma de ${valor1} e ${valor2} é : ${valor}` } ,
    subtracao: function(valor1,valor2) {return valor1 - valor2},
    multiplicacao: function(valor1,valor2){return valor1 * valor2},
    divisao: function(valor1,valor2){
            if (valor1 && valor2 !== 0){
                return valor1/valor2;
            }else{return `não existe divisão por "0"`};},
    calcularMedia: function(arr){
        let somatoria = arr.reduce((acc,valoratual) => acc + valoratual ,0)
        return somatoria / arr.length;

}}

const array = [1,2,3,4,5,56,67,7,8,8];

console.log(calculadora.calcularMedia(array));


// console.log(calculadora.divisao(10,0));
// console.log(calculadora.multiplicacao(10,5));
// console.log(calculadora.subtracao(10,5));
// console.log(calculadora.soma(10,5));

