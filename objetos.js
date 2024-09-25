const pessoa = {
    nome: 'Tiago',
    sobrenome: 'Miranda',
    idade: 30,
    cpf: 11155566600,
    cidade: 'Niterói'
}

pessoa.bairro = 'Charitas';
pessoa.endereco = 'avenida Quintino Bocaiuva';
pessoa.complemento = 'casa'
pessoa.cpf = pessoa.cpf.toString()
console.log (`O nome desta pessoa é ${pessoa.nome}. O sobrenome é ${pessoa ['sobrenome']}, e os três primeiros digitos do cpf desta pessoa é ${pessoa.cpf.substring(0, 3)}`);

pessoa.trabalha = true;
pessoa.hob = 'jogar video-game';

delete pessoa.hob

pessoa.profissao = 'Sushiman';

console.log (pessoa);