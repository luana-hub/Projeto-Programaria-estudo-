document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("Nome").value != "" &&
    document.getElementById("Email").value != "" &&     document.getElementById("Telefone").value != ""){

      alert("Prontinho! você receberá novidades por Email.")
  }else{
      alert("Por favor, preencha os campos Nome e Email.")
  }
}
var nome = prompt ("Qual é o seu nome?")
alert(nome + ",bem vinde!")



