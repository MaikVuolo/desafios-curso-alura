const pessoa = {
    nome: "Maik",
    idade: 27,
    solteiro: true,
    hobbies: []
}

pessoa.hobbies.push("moto","hs","cabal","animais");
pessoa.endereco = {
    rua: "estrada geral",
    cidade:"Santa Rosa do Sul",
    estado:"SC"
}


function exibirObj (obj){
    let hob = []
    hob.push(obj.hobbies);
    return (`
        O nome é: ${obj.nome}
        A idade é: ${obj.idade}
        Solteiro? ${obj.solteiro}
        Hobbies: ${hob}
        Endereço: Rua:${obj.endereco.rua}
                  cidade:${obj.endereco.cidade}
                  Estado: ${obj.endereco.estado}`)
    }
    

console.log(exibirObj(pessoa));


