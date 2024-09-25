const contaBancaria ={
    titular:"Maik Vuolo",
    saldo:10000,
    depositar: function (valorDepositado){
        return this.saldo +=valorDepositado;},
    sacar: function (valorASacar){
        if(valorASacar <= this.saldo){
            return this.saldo -= valorASacar;
        }else{
            return "Saldo insuficiente";}
    }
    
}

contaBancaria.depositar(2000)
contaBancaria.sacar(11000)
// console.log(contaBancaria);

const cliente = {
    nome: "Maik Vuolo",
    conta: contaBancaria
};
// console.log(cliente.conta)
 function mostrarSaldo(opa){
    return  `O cliente ${opa.nome} tem um saldo de ${opa.conta.saldo}`
 }


 console.log(mostrarSaldo(cliente));
