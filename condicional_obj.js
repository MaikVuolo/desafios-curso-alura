const livro = {
    titulo:"Olá Maik",
    autor:"Maik",
    anoDePublicacao:1996,
    genero:"Comédia",
    idadePublicacao:25
    }
    livro.avaliacao = 5
let avaliacao = null
  
livro.genero = "aventura"

delete livro.avaliacao;
if(livro.avaliacao === null){
    livro.avaliacao = 10 ;
    }else {
        livro.mensagem = "o livro ja possui avaliação";
    }
    console.log(livro);


console.log(livro);

    