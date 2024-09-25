const animais1 = require("./animais.json");

const objAnimais = JSON.parse(JSON.stringify(animais1));

const tubarao = {
    id:10,
    nome:"Tubarao",
    tipo:"Peixe",
    habitat:"Oceano"
    
}
objAnimais.animais.push(tubarao);

objAnimais.animais[0].habitat = "kongo";

objAnimais.animais.splice(1,1);

const novoObjAni = JSON.stringify(objAnimais,null,2)

console.log(novoObjAni);
