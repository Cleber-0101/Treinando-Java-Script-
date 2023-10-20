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