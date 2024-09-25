const anoAtual = new Date("2024-08-23T10:59:30").getFullYear();

const object = {
    título:"Maik",
    autor:"Eu mesmo",
    anoDePublicação:1996,
    genero:"Comédia"
}
object.idadePublicacao =  anoAtual - object.anoDePublicação ;
console.log(object.idadePublicacao);

const mostrarDetalhe = object
console.log(mostrarDetalhe);

console.log(mostrarDetalhe["genero"]);
