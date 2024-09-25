const nomesTurmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'];
  
const nomesTurmaB = ['Carlos Oliveira','Ana Souza','Lucas Fernandes'];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunoProcurado = "Maria Saos";

const found = todasAsTurmas.find((nome) => nome === alunoProcurado)
    if (found){
        console.log(alunoProcurado);
        }else{
            console.log("aluno nao encontrado");
        }

