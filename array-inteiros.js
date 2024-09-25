const numeros = [1,2,3,4,5,6,7,8,9,10];

function somando (arr){
    let soma = arr.reduce((acc,valor) => acc + valor,0)
    return soma;
}

console.log(somando(numeros));


