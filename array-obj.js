const pessoas = [
    {nome:"Maik",
     idade: 27,
     cidade: "Santa Rosa do Sul",},
    {nome:"pingo",
     idade: 7,
     cidade:"sombrio"},
    {nome:"debi",
     idade: 3,
     cidade:"Santa Rosa do Sul"}
]

pessoas.push({
    nome:"dog",
    idade: 8,
    cidade:"todas"
})

function mostrarListaPessoas(pessoas){
    for(let i = 0 ; i < pessoas.length; i++){
        console.log(pessoas[i]);
    }
    // console.log(pessoas[0]);
    // console.log(pessoas[1]);
    // console.log(pessoas[2]);
    }

    mostrarListaPessoas(pessoas)

function filtrarPorCidade(pessoas,cidade){
    return pessoas.filter(pessoa => cidade === pessoa.cidade)

}

console.log(filtrarPorCidade(pessoas,"Santa Rosa do Sul"));


