const pessoa ={
    nome:"Maik Vuolo",
    idade: 27,
    casado:false,
    profissao: "agricultor",
    endereco:[{
        rua:"estrada geral vila bitencourt",
        cidade: "Santa rosa do sul",
        estado: "SC"
    },{
        rua:"vorta",
        cidade: "sombrio",
        estado: "SC"
    }]
}
for(let chave in pessoa){
    if(chave === "endereco"){
        pessoa.endereco = pessoa.endereco[1]
    }
    console.log(pessoa[chave])
}



const envio = {
    destinatario: pessoa.nome,
    ...pessoa.endereco[1]
}

console.log(pessoa.endereco);


// console.log(pessoa);