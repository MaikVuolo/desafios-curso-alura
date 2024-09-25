const carro = {
    marca:"fiat",
    modelo:"uno",
    ano:2020,
    cor:"branco"
}
carro.kmRodados = 23000
carro.proprietario = "João silva"
for(let prop in carro){
    console.log(`A propriedade ${prop} tem o valor: ${carro[prop]}`);
}

