const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function novoObj (obj){
    return JSON.parse(JSON.stringify(obj));
}

const novoNovo = novoObj(pessoaOriginal);

novoNovo.nome = "Josefina";

console.log(novoNovo);
console.log(pessoaOriginal);

