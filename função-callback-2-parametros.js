const arrayss = [2,5,3,4,87,9,3,4,6,7];

function executaOperacaoEmArray (array , funcaocallback){
    return array.map(funcaocallback);
}

function triplo(num){
    return num * 3;
}

console.log(executaOperacaoEmArray(arrayss, triplo))