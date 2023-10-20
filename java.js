var area = document.getElementById('area')


function entrar() {
  var nome = prompt("Digite seu nome");

  if(nome === '' || nome === null ){
    alert("Ops algo de errado aconteceu")
     area.innerHTML = "Clique no botão para acessar...."
  }else{
    area.innerHTML = "Bem vindo " + nome + " ";

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Sair da conta"
    botaoSair.onclick = sair;
        area.appendChild(botaoSair);
  }
}



function sair(){
    alert("Ate mais !")
    area.innerHTML = "Voce saiu !"
}


function mediaAluno(nota, nota2) {
    var media = (nota + nota2) / 2

    if (media >= 7) {
        console.log("Aluno aprovado com a media: "+  media)
    } else if(media < 7){
        console.log("Aluno reprovado com a média: " + media)
    }
}


function aluno(nome ,curso) {
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;
    console.log(mensagem);
}