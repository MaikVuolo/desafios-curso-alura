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
Object.defineProperty(carro,"placa",{
    value:"MIT0985",
    enumerable:false
})
for(let prop in carro){
    console.log(prop)
}

console.log(carro.placa)
