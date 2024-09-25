const carroNovo = {
    marca:"hyundai",
    modelo:"hb20",
    ano:2020,
    cor:"cinza"
}

const carro = {
    marca:"fiat",
    modelo:"uno",
    ano:2020,
    cor:"branco",
    ligado:false,
    ligar:function(){
        if(!this.ligado){
           this.ligado = true
           return console.log("O carro está ligado")
        }else{
            return console.log("o carro ja está ligado");}},
    desligar:function(){
        if (this.ligado) {
            this.ligado = false;
            return console.log( "o carro está desligado");
        }else{
            return console.log("o carro ja esta desligado");}},
    obterDetalhes:function(){
       const estado = this.ligado? "ligado" : "desligado";
       return `Marca : ${this.marca}\nModelo:${this.modelo}\nAno:${this.ano}\ncor:${this.cor}\nestado:${estado}`
    }
}

const carroComNovosDetalhes = {...carro,...carroNovo}

console.log(carroComNovosDetalhes)

carroComNovosDetalhes.ano = 2005

console.log(carroComNovosDetalhes)